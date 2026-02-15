import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  let messages = List.empty<(Text, ContactForm)>();

  type ContactForm = {
    fullName : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactForm {
    public func compareByEmail(form1 : (Text, ContactForm), form2 : (Text, ContactForm)) : Order.Order {
      Text.compare(form1.1.email, form2.1.email);
    };
    public func compareByTimestamp(form1 : (Text, ContactForm), form2 : (Text, ContactForm)) : Order.Order {
      Int.compare(form1.1.timestamp, form2.1.timestamp);
    };
  };

  public shared ({ caller }) func submitContact(fullName : Text, email : Text, message : Text) : async () {
    if (fullName.size() == 0 or email.size() == 0) {
      Runtime.trap("Full name and email are required");
    };

    let contact = {
      fullName;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add((email, contact));
  };

  public query ({ caller }) func getAllMessagesByTimestamp() : async [(Text, ContactForm)] {
    messages.toArray().sort(ContactForm.compareByTimestamp);
  };

  public query ({ caller }) func getAllMessagesByEmail() : async [(Text, ContactForm)] {
    messages.toArray().sort(ContactForm.compareByEmail);
  };
};

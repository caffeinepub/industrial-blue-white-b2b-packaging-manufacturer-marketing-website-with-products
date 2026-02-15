import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    fullName: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllMessagesByEmail(): Promise<Array<[string, ContactForm]>>;
    getAllMessagesByTimestamp(): Promise<Array<[string, ContactForm]>>;
    submitContact(fullName: string, email: string, message: string): Promise<void>;
}

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      // Incorporate phone into message since backend only accepts fullName, email, message
      const fullMessage = `Phone: ${data.phone}\n\n${data.message}`;
      
      await actor.submitContact(data.fullName, data.email, fullMessage);
    },
    onSuccess: () => {
      // Invalidate messages query to refetch if needed
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}

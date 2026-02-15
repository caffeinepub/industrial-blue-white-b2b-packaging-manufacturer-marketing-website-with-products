import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactForm } from '../backend';

export function useGetAllMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, ContactForm]>>({
    queryKey: ['messages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMessagesByTimestamp();
    },
    enabled: !!actor && !isFetching,
  });
}

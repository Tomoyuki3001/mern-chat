import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  //I have to set "conversation ld" here as well

  const conversationId = useMemo(() => {
    if (!params?.conversationld) {
      return "";
    }

    return params.conversationld as string;
  }, [params?.conversationld]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
};

export default useConversation;

import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { useMessageContext } from "../../MessageContext/MessageContext";
import MessageComponent from "../MessageComponent/MessageComponent";

interface MessageListProps {

}

const MessageList: FunctionComponent<MessageListProps> = () => {

    const { messages } = useMessageContext()

    return <Box data-testid="List">{
        messages.map((message) => <MessageComponent key={+message.timestamp} message={message} />)
    }</Box>;
}

export default MessageList;
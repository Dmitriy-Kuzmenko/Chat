import { FunctionComponent, useState } from "react";
import { RECEIVER_NAME } from "../../constants";
import { useMessageContext } from "../../MessageContext/MessageContext";
import { MainContainer } from "../MessageComponent/MessageComponent.style";
import MessageTypeList from "../MessageType/MessageType";
import TimeLinePoint from "../TimeLinePoint/TimeLinePoint";
import { BottomContainer, InputContainer, StyledTextField, SubmitButton } from "./MessageInput.style";

interface MessageInputProps {

}

const MessageInput: FunctionComponent<MessageInputProps> = () => {

    const { selectedType, addMessage } = useMessageContext()
    const [message, setMessage] = useState<string>('')

    const createMessage = () => {
        addMessage({
            text: message,
            timestamp: new Date(),
            type: selectedType
        })
        setMessage('')
    }

    return (
        <MainContainer>
            <TimeLinePoint />
            <InputContainer>
                <StyledTextField
                    value={message}
                    multiline
                    maxRows={3}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Add a note about ${RECEIVER_NAME}`}
                />
                <BottomContainer>
                    <MessageTypeList />
                    <SubmitButton onClick={createMessage}>Submit</SubmitButton>
                </BottomContainer>
            </InputContainer>
        </MainContainer>

    )
}

export default MessageInput;
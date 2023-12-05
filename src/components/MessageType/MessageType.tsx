import { FunctionComponent } from "react";
import { Container } from "./MessageType.style";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import Person2Icon from '@mui/icons-material/Person2';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { StyledIconButton } from "../MessageInput/MessageInput.style";
import { useMessageContext } from "../../MessageContext/MessageContext";
import { MessageType } from "../../interface/MessageInterface";
export const Icons = {
    Message: ChatBubbleIcon,
    Phone: PhoneIcon,
    Coffee: LocalCafeIcon,
    Beer: SportsBarIcon,
    "Meeting Note": Person2Icon,
}
interface MessageTypeProps {

}

const MessageTypeList: FunctionComponent<MessageTypeProps> = () => {

    const { selectedType, selectType } = useMessageContext();

    return <Container data-testid={'icon-button-list'}>
        {
            Object.entries(Icons).map(([key, Component]: any) =>
                <StyledIconButton
                    key={key}
                    data-testid={key}
                    style={{
                        color: selectedType === key ? "#fff" : "#03d0db",
                        backgroundColor: selectedType === key ? "#03d0db" : "#fff"
                    }}
                    onClick={() => selectType(key as MessageType)}>
                    <Component />
                </StyledIconButton>

            )
        }
    </Container>;
}

export default MessageTypeList;
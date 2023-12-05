import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { MessageTemplates, MY_NAME, RECEIVER_NAME } from "../../constants";
import { Message } from "../../interface/MessageInterface";
import { StyledIconButton } from "../MessageInput/MessageInput.style";
import TimeLinePoint from "../TimeLinePoint/TimeLinePoint";
import { Container, MainContainer, StyledSpan, Title } from "./MessageComponent.style";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMessageContext } from "../../MessageContext/MessageContext";
interface MessageProps {
    message: Message
}


const MessageComponent: FunctionComponent<MessageProps> = ({ message }) => {
    const { deleteMessage } = useMessageContext()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return <MainContainer>
        <TimeLinePoint date={message.timestamp} type={message.type} />

        <Container>
            <Box >
                <Title>
                    <StyledSpan>{`${MY_NAME}`}</StyledSpan>
                    {`${MessageTemplates[message.type]}`}
                    <StyledSpan> {RECEIVER_NAME}</StyledSpan>
                </Title>
                <Typography variant="body2" color={'grey'}>
                    {message.text}
                </Typography>
            </Box>

            <StyledIconButton onClick={handleClick} data-testid="option-menu">
                <ExpandMoreIcon />
            </StyledIconButton>
            <Menu
                data-testid="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <MenuItem onClick={() => deleteMessage(message.timestamp)} data-testid="delete-option-menu">
                    {'Delete'}
                </MenuItem>
            </Menu>
        </Container>
    </MainContainer>


}

export default MessageComponent;
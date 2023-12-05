import { createContext, ReactNode, useContext, useState } from 'react';
import { Message, MessageContextState, MessageType } from '../interface/MessageInterface';


export const MessageContext = createContext<MessageContextState | undefined>(undefined);
interface MessageContextProps {
    children: ReactNode;
}

export const MessageProvider: React.FC<MessageContextProps> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedType, setSelectedType] = useState<MessageType>("Message")

    const addMessage = (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };
    const selectType = (type: MessageType) => {
        setSelectedType(type);
    };
    const deleteMessage = (date: Date) => {
        setMessages((prevMessages) => prevMessages.filter(mes => +mes.timestamp !== +date));
    }

    return (
        <MessageContext.Provider value={{ messages, addMessage, selectedType, selectType, deleteMessage }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageContext = () => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useMessageContext must be used within a MessageProvider');
    }
    return context;
};
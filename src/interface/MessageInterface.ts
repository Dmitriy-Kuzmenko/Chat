export interface Message {
    timestamp: Date;
    text: string;
    type: MessageType
}
export interface MessageContextState {
    messages: Message[];
    addMessage: (message: Message) => void;
    selectedType: MessageType,
    selectType: (type: MessageType) => void;
    deleteMessage: (date: Date) => void
}
export const MessageTypes = ['Message', "Phone", "Coffee", "Beer", "Meeting Note"] as const;
export type MessageType = typeof MessageTypes[number]
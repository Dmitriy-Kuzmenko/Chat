/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MessageInput from './components/MessageInput/MessageInput';
import { MessageProvider } from './MessageContext/MessageContext';
import { RECEIVER_NAME } from './constants';
import App from './App';

test('renders Submit Button and ButtonIcons', () => {
    render(
        <MessageProvider>
            <MessageInput />
        </MessageProvider>
    );
    const linkElement = screen.getByText(/Submit/i);
    const iconButtons = screen.getByTestId('icon-button-list')

    // eslint-disable-next-line testing-library/no-node-access
    expect(iconButtons?.childElementCount).toBe(5)
    expect(linkElement).toBeInTheDocument();
});

test('added message to context', () => {
    render(
        <MessageProvider>
            <App />
        </MessageProvider>
    );

    const inputElement = screen.getByPlaceholderText(`Add a note about ${RECEIVER_NAME}`);
    fireEvent.change(inputElement, { target: { value: 'Hello Man' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const list = screen.getByTestId("List");
    const messageTitle = screen.getByText("added a note to");
    const message = screen.getByText("Hello Man");

    expect(list?.childElementCount).toBe(1)
    expect(messageTitle).toBeInTheDocument()
    expect(message).toBeInTheDocument()
});

test('coffe type of message', () => {
    render(
        <MessageProvider>
            <App />
        </MessageProvider>
    );

    const inputElement = screen.getByPlaceholderText(`Add a note about ${RECEIVER_NAME}`);
    fireEvent.change(inputElement, { target: { value: 'Hello Man' } });

    const coffeButton = screen.getByTestId('Coffee');
    fireEvent.click(coffeButton);

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const list = screen.getByTestId("List");
    const messageTitle = screen.getByText("had a coffe with");
    const message = screen.getByText("Hello Man");

    expect(list?.childElementCount).toBe(1)
    expect(messageTitle).toBeInTheDocument()
    expect(message).toBeInTheDocument()
});

test('delete a message', () => {
    render(
        <MessageProvider>
            <App />
        </MessageProvider>
    );

    const inputElement = screen.getByPlaceholderText(`Add a note about ${RECEIVER_NAME}`);
    fireEvent.change(inputElement, { target: { value: 'Hello Man' } });

    const coffeButton = screen.getByTestId('Coffee');
    fireEvent.click(coffeButton);

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const list = screen.getByTestId("List");
    const messageTitle = screen.getByText("had a coffe with");
    const message = screen.getByText("Hello Man");

    expect(list?.childElementCount).toBe(1)
    expect(messageTitle).toBeInTheDocument()
    expect(message).toBeInTheDocument()

    const optionButton = screen.getByTestId('option-menu');
    fireEvent.click(optionButton);

    const deleteButton = screen.getByTestId('delete-option-menu');
    fireEvent.click(deleteButton);


    expect(list?.childElementCount).toBe(0)
    expect(messageTitle).not.toBeInTheDocument()
    expect(message).not.toBeInTheDocument()

});

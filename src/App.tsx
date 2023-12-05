import { Container } from '@mui/material';
import MessageInput from './components/MessageInput/MessageInput';
import MessageList from './components/MessageList/MessageList';
import { MessageProvider } from './MessageContext/MessageContext';

function App() {
  return (
    <MessageProvider>
      <Container component="main" maxWidth="md" sx={{ marginTop: 10 }}>
        <MessageInput />
        <MessageList />
      </Container>
    </MessageProvider>

  );
}

export default App;

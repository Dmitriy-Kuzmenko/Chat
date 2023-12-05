import { Button, IconButton, styled, TextField } from "@mui/material";
import Box from "@mui/system/Box/Box";

export const InputContainer = styled(Box)({
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'

})
export const Container = styled(Box)({
    display: 'flex',
})
export const BottomContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '16px'
})
export const SubmitButton = styled(Button)({
    display: 'flex',
    backgroundColor: "#68dec2",
    color: '#fff'
})
export const StyledTextField = styled(TextField)({
    width: "100%",
    background: '#fff',
    borderRadius: 8,
})
export const StyledIconButton = styled(IconButton)({
    backgroundColor: "#fff",
    maxHeight: 40,
    color: 'grey',
    "&:hover": {
        backgroundColor: "#68dec2",
    }
})


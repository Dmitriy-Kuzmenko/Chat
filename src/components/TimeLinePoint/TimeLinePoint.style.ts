import { Box, styled } from "@mui/material";

export const Container = styled(Box)({
    display: 'flex',
    width: 50,
    position: 'relative',
    justifyContent: 'flex-end',
    "&::after": {
        position: 'absolute',
        zIndex: '-1',
        content: "''",
        backgroundColor: '#c8c8c8',
        width: 1,
        height: '100%',
        right: 16
    }
})

export const StyledIcon = styled(Box)({
    color: '#c8c8c8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #c8c8c8',
    borderRadius: '50%',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 20
})

export const DateText = styled(Box)({
    position: 'absolute',
    top: 25,
    right: 35,
    color: "#c8c8c8"
})
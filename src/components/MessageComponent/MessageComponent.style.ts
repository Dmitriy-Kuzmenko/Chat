import { Box, styled } from "@mui/material";

export const Container = styled(Box)({
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginTop: 16,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 4,
    width: '100%'
})
export const MainContainer = styled(Box)({
    display: 'flex',
    gap: 20,
})

export const StyledSpan = styled("span")({
    color: '#03d0db',
    fontWeight: 'bold'
})

export const Title = styled(Box)({
    display: 'flex',
    gap: 4
})


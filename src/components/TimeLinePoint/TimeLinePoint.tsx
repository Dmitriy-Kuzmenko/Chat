import { FunctionComponent } from "react";
import { MessageType } from "../../interface/MessageInterface";
import { Icons } from "../MessageType/MessageType";
import { Container, DateText, StyledIcon } from "./TimeLinePoint.style";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
interface TimeLinePointProps {
    date?: Date,
    type?: MessageType
}

const TimeLinePoint: FunctionComponent<TimeLinePointProps> = ({ date, type }) => {

    const Component: (OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }) | null = type ? Icons[type] : null

    return (<Container>
        {date &&
            <DateText>
                {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </DateText>}
        <StyledIcon>
            {
                Component ? <Component fontSize="small" /> : <FormatListBulletedIcon fontSize="small" />
            }
        </StyledIcon >
    </Container>)
}

export default TimeLinePoint;
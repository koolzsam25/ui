import styled, {css, style} from '@xstyled/styled-components';
import { Card, Button, Image,Stack } from "react-bootstrap";

export const ExamStackPanel=styled(Stack)`
    margin-top :20px;
`;

export const StartExamCard = styled(Card)`
    border-radius: 25px;
    height:270px;
    width: 350px;
    border-color: teal;
    border-width:3px;
`;

export const CardText = styled(Card.Title)`
    color: teal;
    padding-left:10px;
    padding-top:10px;
    padding-right:10px;
`;
export const ExamLoginImage = styled(Image)`
    width:60px;
    height:60px;
`;
export const ExamsFooter = styled(Card.Footer)`
    background-color: white
`;
export const ThisisMeButton = styled(Button)`
    background-color: teal;
    width: 150px;
    margin-left: 15px
`;
export const OuterDiv = styled.div`
    margin-bottom: 20px;
`;
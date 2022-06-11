import styled, {css, style} from '@xstyled/styled-components';
import { Card, Button, Image,Stack } from "react-bootstrap";

export const ExamStackPanel=styled(Stack)`
    margin-top :20px;
`;

export const StartExamCard = styled(Card)`
    border-radius: 25px;
    // height:520px;
    width: 350px;
    border-color: teal;
    border-width:3px;
    padding: 50px 0;
    margin: auto 0;
    overflow: hidden;
    min-height: 100px;
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

export const ExamInformation = styled.div`
    margin-top: 30px;
    border: 1px solid  ${props => props.theme.light};
    background-color:  ${props => props.theme.light};
`;
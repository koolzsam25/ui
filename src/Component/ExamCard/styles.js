import styled, {css, style} from '@xstyled/styled-components';
import { Card, Button, Modal, Image,Stack } from "react-bootstrap";

export const CloseButton = styled(Button)`
    background-color: teal;
    margin:5px;
`;

export const ResultTitle = styled(Modal.Title)`
    color: teal;
`;

export const ExamTitle = styled(Card.Title)`
  ${({ ispastexam, theme: { primary, secondary } }) =>
  css({
      backgroundColor: ispastexam == 'true' ?  secondary : primary,
  })}
    border-radius: 5px; 
    height:35px;
    font-weight: bold; 
    padding-top: 5px;
    color: white;
`;

export const ExamsFooter = styled(Card.Footer)`
    background-color: white
`;

export const ExamsCard = styled(Card)`
    width: 18rem;
    border-radius: 5px;
    margin: 5px
`;

export const ResultButton = styled(Button)`
    background-color: ${props => props.theme.secondary};
    width: 100px;
    margin: 5px
`;

export const ThisisMeButton = styled(Button)`
    background-color: teal;
    width: 150px;
    margin-left: 15px
`;
export const ProceedButton = styled(Button)`
    background-color: ${props => props.theme.primary};
    width: 100px;
    margin: 5px
`;

export const CardText = styled(Card.Title)`
    color: teal;
    padding-left:10px;
    padding-top:10px;
    padding-right:10px;
`;

export const StartExamCard = styled(Card)`
    border-radius: 25px;
    height:270px;
    border-color: teal;
    border-width:3px;
`;
export const ExamLoginImage = styled(Image)`
    width:60px;
    height:60px;
    margin-left:70px;
`;
export const ExamStackPanel=styled(Stack)`
    margin-left:25px;
    margin-top :25px;
`;
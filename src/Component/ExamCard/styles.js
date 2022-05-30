import styled, {css, style} from '@xstyled/styled-components';
import { Card, Button, Modal, Image,Stack } from "react-bootstrap";

const CustomButton = styled(Button)`
    &:hover {
        background-color: ${props => props.theme.active};
        border-color: ${props => props.theme.active};
    }
    &:focus {
        background-color: ${props => props.theme.active};
        border-color: ${props => props.theme.active};
        box-shadow: 0 0 0 0.25rem rgb(147 166 184 / 50%);
    }

`;

export const CloseButton = styled(CustomButton)`
    background-color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
    margin:5px;
`;

export const ResultTitle = styled(Modal.Title)`
    color: ${props => props.theme.primary};
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
    color: ${props => props.theme.font};
`;

export const ExamsFooter = styled(Card.Footer)`
    background-color: ${props => props.theme.font};
    border-top: 2px solid rgba(0,0,0,.125);
    padding-bottom: 0px;
`;

export const ExamsCard = styled(Card)`
    width: 18rem;
    border-radius: 5px;
    margin: 10px;
    border: none;
`;

export const ExamsBody = styled(Card.Body)`
    border: 2px solid rgba(0,0,0,.125);
`;

export const ResultButton = styled(CustomButton)`
    background-color: ${props => props.theme.secondary};
    border-color: ${props => props.theme.secondary};
    width: 100px;
    margin: 5px
`;


export const ProceedButton = styled(Button)`
    background-color: ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
    width: 100px;
    margin: 5px
`;

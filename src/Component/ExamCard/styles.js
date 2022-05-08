import styled, {css} from '@xstyled/styled-components';
import { Card, Button, Modal } from "react-bootstrap";

export const CloseButton = styled(Button)`
    background-color: teal;
    margin:5px;
`;

export const ResultTitle = styled(Modal.Title)`
    color: teal;
`;

export const ExamTitle = styled(Card.Title)`
  ${({ ispastexam }) =>
  css({
      backgroundColor: ispastexam ? 'teal' : 'forestgreen',
  })}
    borderRadius: 5px; 
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
    borderRadius: 5px;
    margin: 5px
`;

export const ResultButton = styled(Button)`
    background-color: teal;
    width: 100px;
    margin: 5px
`;

export const ProceedButton = styled(Button)`
    background-color: forestgreen;
    width: 100px;
    margin: 5px
`;
import styled, {css} from '@xstyled/styled-components';
import { Card, Button, Modal } from "react-bootstrap";

export const DownloadCertificate = styled(Button)`
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

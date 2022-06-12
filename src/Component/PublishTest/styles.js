
import styled, {css, style} from '@xstyled/styled-components';
import { Card, Button, Modal, Image,Stack } from "react-bootstrap";

export const CommonButton = styled(Button)`
    &:hover {
        background-color: ${props => props.theme.secondary};
        border-color: ${props => props.theme.secondary};
    }
    background-color: ${props => props.theme.primary};
    
    margin-left: 15px
`;

export const OuterDiv = styled.div`
    margin-bottom: 20px;
`;
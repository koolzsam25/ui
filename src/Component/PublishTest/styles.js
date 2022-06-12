
import styled, {css, style} from '@xstyled/styled-components';
import { Card, Button, Modal, Image,Stack } from "react-bootstrap";

export const CommonButton = styled(Button)`
    &:hover {
        background-color: ${props => props.theme.secondary};
        border-color: ${props => props.theme.secondary};
    }
    &:focus {
        background-color: ${props => props.theme.active};
        border-color: ${props => props.theme.active};
        box-shadow: 0 0 0 0.25rem rgb(147 166 184 / 50%);
    }
    background-color: ${props => props.theme.primary};
    
    margin-left: 15px
`;

export const OuterDiv = styled.div`
    margin-bottom: 20px;
`;
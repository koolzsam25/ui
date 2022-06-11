import styled, { css, style } from '@xstyled/styled-components';
import { Card, Button, Modal, Image, Stack } from "react-bootstrap";

export const Page = styled.div`
    ${({ isCurrentPage, theme: { primary, secondary } }) =>
        css({
            backgroundColor: isCurrentPage ? secondary : null,
        })}

    &:hover {
        background-color: ${props => props.theme.secondary};
        border-color: ${props => props.theme.secondary};
    }

`;
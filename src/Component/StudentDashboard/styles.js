import styled, {css, breakpoints} from '@xstyled/styled-components';
import { Card, Button, Modal } from "react-bootstrap";

export const ExamWraper = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${breakpoints({
        xs: css`
            margin-left: 50px;
        `,
        sm: css`
            margin-left: 50px;
        `,
        md: css`
            margin-left: 50px;
        `,
        lg: css`
            margin-left: 50px;
        `,

    })}
`;

import styled from '@xstyled/styled-components';
import { Button } from "react-bootstrap";
export const ExamWraper = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 500px) {
        justify-content: center;

      }
`;

export const FilterWraper = styled.div`
    display: flex;
    margin: 10px
`;

export const FilterButton = styled(Button)`
    margin: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.info};
`;
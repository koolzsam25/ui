import styled, {css, style} from '@xstyled/styled-components';
export const QuestionContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px; 
    margin-top: 10px;
    margin-bottom: 10px; 
    padding-left: 5px;
`;
export const OptionInput= styled.input`
    margin-right: 20px;
`;
export const QuestionCloseButtonContainer = styled.div`
    display: flex;
    right: 0.5rem;
    justify-content: flex-end;
    margin-top: -20px;
`;
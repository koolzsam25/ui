import styled, { css, style } from '@xstyled/styled-components';

export const QuestionHeader = styled.p`

`;

export const QuestionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

`;

export const AnswerContainer = styled.div`
    display: table;
    margin: 0 auto;
    width: 100%;
    margin-top: 1%;
    border: 0px solid grey;
    text-align: center;

`;

export const AnswerHeader = styled.div`
    border: 1px solid rgb(234, 235, 247);
    margin-top: 5px;
    height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    display: table;
    float: left;
    background-color: #F7F7F7;
    cursor: pointer;
    width: calc(100% - 10px);

`;

export const Answer = styled.p`
    ${({ isChecked, theme: { primary, secondary } }) =>
        css({
            backgroundColor: isChecked ? secondary : null,
            fontWeight: isChecked ? 600 : null,
    })}

    &:hover {
        background-color: ${props => props.theme.secondary};
        border-color: ${props => props.theme.secondary};
    }
    padding-top: 10px;
    text-align: center;
    font-size: 1em;
    color: #2A2A2A;
    padding-bottom: 1rem;
    margin-bottom: 0;

`;

export const QuestionNumber = styled.div`
    // margin: 0 2rem;
`;
export const QuestionsWrapper = styled.div`
    text-align: left;
`;

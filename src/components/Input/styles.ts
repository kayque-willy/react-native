import styled from 'styled-components/native';

export const Container = styled.TextInput`
    width: 100%;
    padding : 0 16px;
    height: 40px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.TEXT}; 
`;

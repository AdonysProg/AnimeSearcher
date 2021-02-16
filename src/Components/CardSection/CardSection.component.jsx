import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: relative;
`;

export const SectionTitle = styled.a`
  font-size: 1.2rem;
  font-weight: 700;
  color: #adc0d2;
  padding: 10px;
`;
export const ViewAll = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  color: #748999;
  font-size: 12px;
`;

export const CardContainer = styled.div`
  display: flex;

  & > div {
    margin-right: 20px;
  }
`;

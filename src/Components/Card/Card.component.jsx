import styled from 'styled-components';

export const CardImage = styled.img`
  height: 265px;
  width: 185px;
  border-radius: 5px;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  &:hover {
    p {
      color: ${({ textColor }) => (textColor ? `${textColor}` : '#000')};
    }
  }
  width: 210px;
`;

export const CardScore = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin: 5px;
  background-color: ${({ color }) => (color ? `${color}` : '#0B1622')};
  padding: 4px;
  width: 18px;
  border-radius: 10px;
  top: 0;
  right: 0;
  position: absolute;
`;

export const CardToolTipTitle = styled.span`
  font-size: 14px;
  margin-right: 12px;
`;
export const CardType = styled.p``;
export const CardDate = styled.p``;
export const CardTag = styled.p``;
export const CardEpisodes = styled.p``;
export const CardToolTipeContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  font-size: 12px;
`;

export const CardName = styled.p`
  color: #8ba0b2;
`;

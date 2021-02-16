import styled from 'styled-components';

export const Container = styled.div`
  margin: 70px 400px;
`;
export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
`;

export const ContainerHeader = styled.h2`
  color: #fff;
  text-align: center;
`;
export const HeaderParagraph = styled.h3`
  color: #acd5f2;
  text-align: center;
`;

export const FeaturesTitle = styled.h3`
  color: #fff;
`;

export const FeatureImg = styled.img`
  width: 80px;
  height: 75px;
`;

export const Feature = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.5fr;
  grid-template-rows: 0.5 1.5fr;
`;
export const FeatureImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
export const FeatureDescriptionContainer = styled.div``;
export const FeatureDescription = styled.p`
  color: #acd5f2;
`;

import React from 'react';
import {
  Container,
  ContainerHeader,
  Feature,
  FeaturesContainer,
  FeaturesTitle,
  FeatureImg,
  FeatureDescriptionContainer,
  FeatureImgContainer,
  HeaderParagraph,
  FeatureDescription,
} from './Header.component';
import { apps, social, custom, stats } from '../../assets/images/';

const Header: React.FC = () => {
  return (
    <Container>
      <ContainerHeader>The next-generation anime platform</ContainerHeader>
      <HeaderParagraph>
        Track, share and discover your favorite anime and manga with WeebList
      </HeaderParagraph>
      <FeaturesContainer>
        <Feature>
          <FeatureImgContainer>
            <FeatureImg src={apps} />
          </FeatureImgContainer>
          <FeatureDescriptionContainer>
            <FeaturesTitle>Discover your weeb obsessions</FeaturesTitle>
            <FeatureDescription>
              What are your highest rated genres or most watched voice actors?
              Follow your watching habits over time with in-depth statistics.
            </FeatureDescription>
          </FeatureDescriptionContainer>
        </Feature>
        <Feature>
          <FeatureImgContainer>
            <FeatureImg src={social} />
          </FeatureImgContainer>
          <FeatureDescriptionContainer>
            <FeaturesTitle>Join the conversation</FeaturesTitle>
            <FeatureDescription>
              Share your thoughts with our thriving community, make friends,
              socialize, and receive recommendations.
            </FeatureDescription>
          </FeatureDescriptionContainer>
        </Feature>
        <Feature>
          <FeatureImgContainer>
            <FeatureImg src={custom} />
          </FeatureImgContainer>
          <FeatureDescriptionContainer>
            <FeaturesTitle>Tweak it into your liking</FeaturesTitle>
            <FeatureDescription>
              Customize your scoring system, title format, color scheme, and
              much more! Also, we have a dark mode.
            </FeatureDescription>
          </FeatureDescriptionContainer>
        </Feature>
        <Feature>
          <FeatureImgContainer>
            <FeatureImg src={stats} />
          </FeatureImgContainer>
          <FeatureDescriptionContainer>
            <FeaturesTitle>Bring WeebList anywhere</FeaturesTitle>
            <FeatureDescription>
              Keep track of your progress on-the-go with one of many AniList
              apps across iOS, Android, macOS, and Windows.
            </FeatureDescription>
          </FeatureDescriptionContainer>
        </Feature>
      </FeaturesContainer>
    </Container>
  );
};

export default Header;

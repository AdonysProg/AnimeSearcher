import React from 'react';
import {
  CardContainer,
  CardImage,
  CardScore,
  CardToolTipTitle,
  CardType,
  CardEpisodes,
  CardTag,
  CardName,
  CardDate,
  CardToolTipeContainer,
} from './Card.component';
import Tooltip from '@material-ui/core/Tooltip';

type Props = {
  id?: number;
  englishTitle?: string;
  nativeTitle?: string;
  romajiTitle?: string;
  description?: string;
  mediumImg?: string;
  color?: string;
  startDateYear?: number;
  endDateYear?: number;
  type?: string;
  averageScore?: string;
  episodes?: number;
};

const AnimeCard: React.FC<Props> = ({
  id,
  englishTitle,
  nativeTitle,
  romajiTitle,
  description,
  mediumImg,
  color,
  startDateYear,
  endDateYear,
  averageScore,
  episodes,
  type,
}) => {
  return (
    <CardContainer textColor={color}>
      <Tooltip
        title={
          <React.Fragment>
            <CardToolTipeContainer
              style={{ padding: '10px', width: '185px  ' }}
            >
              <CardToolTipTitle>{nativeTitle}</CardToolTipTitle>{' '}
              {averageScore ? (
                <CardScore color={color}>{averageScore}</CardScore>
              ) : null}
              <CardType>{type}</CardType>
              {episodes ? (
                <CardEpisodes>
                  {episodes} {episodes > 1 ? 'episodes' : 'episode'}
                </CardEpisodes>
              ) : null}
              <CardDate>
                {startDateYear} - {endDateYear}
              </CardDate>
            </CardToolTipeContainer>
          </React.Fragment>
        }
        placement="right"
      >
        <CardImage src={mediumImg} arias-label={englishTitle} />
      </Tooltip>
      <CardName>{romajiTitle}</CardName>
    </CardContainer>
  );
};

export default AnimeCard;

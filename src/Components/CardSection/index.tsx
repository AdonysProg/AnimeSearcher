import React, { useEffect, useState } from 'react';
import {
  Container,
  CardContainer,
  SectionTitle,
  ViewAll,
} from './CardSection.component';
import AnimeCard from '../Card/';
import { getDataSortBy } from '../../api';

type Props = {
  filter: string;
  title: string;
};

const CardSection: React.FC<Props> = ({ filter, title }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataSortBy(`${filter}`, 6, 1).then((res: any) => setData(res));
  }, [setData, filter]);

  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <ViewAll>View all</ViewAll>
      <CardContainer>
        {data
          ? data.map((data: any) => (
              <AnimeCard
                key={data.id}
                id={data.id}
                englishTitle={data.title.english}
                romajiTitle={data.title.romaji}
                nativeTitle={data.title.native}
                mediumImg={data.coverImage.extraLarge}
                description={data.description}
                color={data.coverImage.color}
                startDateYear={data.startDate.year}
                endDateYear={data.endDate.year}
                type={data.type}
                averageScore={data.averageScore}
                episodes={data.episodes}
              />
            ))
          : null}
      </CardContainer>
    </Container>
  );
};

export default CardSection;

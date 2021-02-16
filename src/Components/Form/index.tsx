import React, { useState, useEffect } from 'react';
import {
  Container,
  Result,
  Form as FormSearch,
  FilterWrap,
  FilterContainer,
  FilterInputContainer,
  FilterLabelContainer,
  FilterLabel,
} from './Form.component';
import {
  TextField,
  Input,
  Grid,
  InputAdornment,
  createStyles,
  makeStyles,
  Theme,
  MenuItem,
} from '@material-ui/core';
import { getMangas } from '../../api';
import AnimeCard from '../Card';
import { SearchOutlined } from '@material-ui/icons';
import {
  formatFilter,
  genreFilter,
  seasonFilter,
  yearFilter,
} from './FilterOptions';
import CardSection from '../CardSection';

const textStyle = makeStyles((theme: Theme) =>
  createStyles({
    textInput: {
      background: '#151f2e',
      color: '#fff',
      padding: '5px 15px',
      width: '180px',
      borderRadius: '9px',
    },
  })
);

const Form = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [searchYear, setSearchYear] = useState(+'');
  const [searchSeason, setSearchSeason] = useState('');
  const [searchFormat, setSearchFormat] = useState('');

  const classesStyle = textStyle();

  useEffect(() => {
    getMangas(
      searchInput,
      searchSeason,
      searchYear,
      searchGenre,
      searchFormat
    ).then((res: any) => {
      return setSearchResult(res.media);
    });

    return () => {};
  }, [searchInput, searchSeason, searchYear, searchGenre, searchFormat]);

  const FormRow = () => {
    return (
      <React.Fragment>
        {' '}
        {searchResult.map((data: any) => (
          <Grid item xs={2} key={data.id}>
            <AnimeCard
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
          </Grid>
        ))}
      </React.Fragment>
    );
  };
  return (
    <Container>
      <FormSearch
        onSubmit={(e: any) => {
          e.preventDefault();
        }}
      >
        <FilterWrap>
          <FilterContainer>
            <FilterLabelContainer>
              <FilterLabel>Name</FilterLabel>
            </FilterLabelContainer>
            <FilterInputContainer>
              <Input
                disableUnderline={true}
                onChange={(e) => setSearchInput(e.target.value)}
                className={classesStyle.textInput}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                }
              />
            </FilterInputContainer>
          </FilterContainer>
          <FilterContainer>
            <FilterLabelContainer>
              <FilterLabel>Genres</FilterLabel>
            </FilterLabelContainer>
            <FilterInputContainer>
              <TextField
                onChange={(e) => setSearchGenre(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  className: classesStyle.textInput,
                }}
                select
                defaultValue=""
              >
                {genreFilter.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FilterInputContainer>
          </FilterContainer>
          <FilterContainer>
            <FilterLabelContainer>
              <FilterLabel>Year</FilterLabel>
            </FilterLabelContainer>
            <FilterInputContainer>
              <TextField
                onChange={(e) => setSearchYear(+e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  className: classesStyle.textInput,
                }}
                select
                defaultValue=""
              >
                {yearFilter.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FilterInputContainer>
          </FilterContainer>
          <FilterContainer>
            <FilterLabelContainer>
              <FilterLabel>Season</FilterLabel>
            </FilterLabelContainer>
            <FilterInputContainer>
              <TextField
                onChange={(e) => setSearchSeason(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  className: classesStyle.textInput,
                }}
                select
                defaultValue=""
              >
                {seasonFilter.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FilterInputContainer>
          </FilterContainer>
          <FilterContainer>
            <FilterLabelContainer>
              <FilterLabel>Format</FilterLabel>
            </FilterLabelContainer>
            <FilterInputContainer>
              <TextField
                onChange={(e) => setSearchFormat(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  className: classesStyle.textInput,
                }}
                select
                defaultValue=""
              >
                {formatFilter.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FilterInputContainer>
          </FilterContainer>
        </FilterWrap>
      </FormSearch>
      {searchResult.length > 0 ? (
        <Result>
          <Grid container spacing={10}>
            <FormRow />
          </Grid>
        </Result>
      ) : (
        <React.Fragment>
          <CardSection filter="TRENDING_DESC" title="TRENDING NOW" />
          <CardSection filter="POPULARITY_DESC" title="ALL TIME POPULAR" />
        </React.Fragment>
      )}
    </Container>
  );
};

export default Form;

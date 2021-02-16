import axios from 'axios';

let url = 'https://graphql.anilist.co';


export const getMangas = (name: string, season?: string, seasonYear?: number, genre?: string, format_in?: string) => {
    let result;
    const query: string = `
  query ($id: Int, $page: Int, $perPage: Int, $search: String, $season:MediaSeason, $seasonYear:Int, $genre:String, $format_in:[MediaFormat]) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search, season: $season, seasonYear: $seasonYear, genre: $genre, format_in: $format_in, sort: SEARCH_MATCH, isAdult: false) {
        id,
        description,
        episodes,
        chapters,
        volumes,
        type,
        genres,
        averageScore,
        startDate {
          year
        },
        endDate {
          year
        },
        coverImage {
          extraLarge
          large
          medium
          color
        },
        title {
          romaji,
          english,
          native
        }
      }
    }
  }
  `;
  

  const variables: any  = {
    search: name,
    page: 1,
    perPage: 30,
  };

  if(seasonYear){
    variables.seasonYear = seasonYear;
  }
  if(season){
    variables.season = season;
  }
  if(genre){
    variables.genres = genre;
  }
  if(format_in){
    variables.format_in = format_in;
  }
   result = axios
      .post(
        url,
        {
          query: query,
          variables: variables,
        },
        {
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
        }
      )
      .then((res) => {
        return res.data.data.Page;
      });

      return result;
}

type Sorting = {
sort: string;
perPage: number;
page: number;
}

export const getDataSortBy:any = async (sort: Sorting, perPage: Sorting, page: Sorting) => {
  
  const query = `query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search, sort:$sort) {
        id,
        description,
        episodes,
        chapters,
        volumes,
        type,
        averageScore,
        startDate {
          year
        },
        endDate {
          year
        },
        coverImage {
          extraLarge
          large
          medium
          color
        },
        title {
          romaji,
          english,
          native
        }
      }
    }
  }`;

  let variables = {
    sort: sort,
    perPage: perPage,
    page: page
  }

  const result = await axios
  .post(
    url,
    {
      query: query,
      variables: variables,
    },
    {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
  .then((res) => {
    return res.data.data.Page.media;
  });
return result;

}
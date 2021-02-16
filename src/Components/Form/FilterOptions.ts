interface filterSelectI {
    value: string;
    label: string;
  }
  export const genreFilter: filterSelectI[] = [
    {
label: '',
value: ''
    },
    {
      label: 'Action',
      value: 'action',
    },
    {
      label: 'Adventure',
      value: 'adventure',
    },
    {
      label: 'Comedy',
      value: 'comedy',
    },
    {
      label: 'Drama',
      value: 'drama',
    },
    {
      label: 'Sport',
      value: 'sport',
    },
    {
      label: 'Ecchi',
      value: 'ecchi',
    },
  ];

  export const yearFilter: filterSelectI[] = [
    {
      label: '',
      value: ''
    },
    {
      label: '2021',
      value: '2021',
    },
    {
      label: '2020',
      value: '2020',
    },
    {
      label: '2019',
      value: '2019',
    },
    {
      label: '2018',
      value: '2018',
    },
    {
      label: '2017',
      value: '2017',
    },
  ];

  export const seasonFilter: filterSelectI[] = [
    {
label: '',
value: '',
    },
    {
      label: 'Winter',
      value: 'WINTER',
    },
    {
      label: 'Spring',
      value: 'SPRING',
    },
    {
      label: 'Fall',
      value: 'FALL',
    },
    {
      label: 'Summer',
      value: 'SUMMER',
    },
  ];

  export const formatFilter: filterSelectI[] = [
    {
      label: '',
      value: ''
    },
    {
      label: 'TV Show',
      value: 'TV',
    },
    {
      label: 'TV Short',
      value: 'TV_SHORT',
    },
    {
      label: 'Movie',
      value: 'MOVIE',
    },
    {
      label: 'Special',
      value: 'SPECIAL',
    },
    {
      label: 'OVA',
      value: 'OVA',
    },
    {
      label: 'Manga',
      value: 'MANGA',
    },
  ];

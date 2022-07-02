const apiConfig = {
    API_KEY: '842fcf62001ef429e4d5fa0f4cbd33e0',
    API_BASE_URL: 'https://api.themoviedb.org/3/',
    TRENDING_PATH_PARAMS: 'trending/all/day',
    SEARCH_PATH_PARAMS: 'search/movie',
    DETAILS_PATH_PARAMS: 'movie/',
    TREND_URL:'${BASE_URL}trending/movie/${period}',
    SEARCH_URL:'${BASE_URL}search/movie',
    DETAILS_URL:'${BASE_URL}movie/${id}',
    GENRES_URL:'${BASE_URL}genre/movie/list'

  };
  
  export default apiConfig;
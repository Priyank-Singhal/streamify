const GOOGLE_API_KEY = 'AIzaSyCzt9zcLlSMt6gxkqaOsWELQOz00vL6Guc';
export const YOUTUBE_VIDEOS_API =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&maxResults=50&chart=mostPopular&regionCode=IN&key=' + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_SUGGEST_API =
    'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

// export const YOUTUBE_SEARCH_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet?q=';
export const YOUTUBE_SEARCH_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=' + GOOGLE_API_KEY;
// https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%7D#usage
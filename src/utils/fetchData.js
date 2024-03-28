
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3fe6a314bcmsh4681ecfdf187a03p15048ajsn6ce7a72d0fac',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '3fe6a314bcmsh4681ecfdf187a03p15048ajsn6ce7a72d0fac',
    },
  };

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
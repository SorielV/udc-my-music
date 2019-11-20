import fetchAPI from './fetch'

fetchAPI.baseUrl = 'https://mobile-api-ucol.herokuapp.com'

export const getToken = (email, password) =>
  fetchAPI
    .post('/login', { email, password })
    .then(response => response.json())

export const getMusicData = () => 
  fetchAPI
    .post('/music_data', { token: global.token })
    .then(async _=> _.json())
    .then(({ topartists: { artist } }) => artist)
    .then(artists => artists.map(artist => ({
      id: artist.mbid,
      name: artist.name,
      image: artist.image[3]['#text'],
      likes: 666,
      comments: 666
    })))

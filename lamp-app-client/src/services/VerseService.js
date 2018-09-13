const API_URL = process.env.LAMP_API_URL

const VerseService = {
  fetchVerse() {
    return fetch(`${API_URL}/verses`)
    .then(res => res.json())
  }
}

export default VerseService

let BIBLE_API = config.BIBLE_API;

const VerseService = {
  fetchVerse() {
    return
    // boldness
    fetch(`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVN2&query=righteous&v=2`)
    .then(res => res.json())
  }
}

export default VerseService

other urls:
`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVN2&query=peace+i&v=2`
`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVN2&query=holy&v=2`
`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVN2&query=my+hope&v=2`
`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVO2ET&query=rejoice+in&v=2`
`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVN2&query=steadfast+love&v=2`
`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVN2&query=hope+in&v=2`
`https://dbt.io/text/search?key=${BIBLE_API}&dam_id=ENGESVN2&query=protect&v=2`

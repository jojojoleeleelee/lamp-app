#
# fetchVerse = (search ="righteous") => {
#   let key = process.env.BIBLE_API
#   console.log(search)
#   console.log(`https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=${search}&v=2`)
#   fetch(`https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=${search}&v=2`)
#   .then(res => res.json())
#   .then(({data}) => this.setState({
#   }))
# }
#
# componentsDidMount() {
#   let key = process.env.BIBLE_API
#   console.log(key)
#   fetch(`https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=righteous&v=2`)
#   .then(res => res.json())
#   .then(res => console.log(res))
# }
#
# // other urls:
# // `https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=peace+i&v=2`
# // `https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=holy&v=2`
# // `https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=my+hope&v=2`
# // `https://dbt.io/text/search?key=${key}&dam_id=ENGESVO2ET&query=rejoice+in&v=2`
# // `https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=steadfast+love&v=2`
# // `https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=hope+in&v=2`
# // `https://dbt.io/text/search?key=${key}&dam_id=ENGESVN2&query=protect&v=2`

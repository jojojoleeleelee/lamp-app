prayers = Prayer.create([{
  verse_id: 1,
  duration: 30,
  focus: 4,
  summary: "Prayer for husband and the current season that we are in. Lord, help us be more prayerful!"
  },
  {
    verse_id: 4,
    duration: 32,
    focus: 1,
    summary: "Feeling rather down and lethargic. Help me from my own lethargy, Lord."
    },
    {
      verse_id: 93,
      duration: 19,
      focus: 3,
      summary: "Thankful for all the blessings that God hath given me. God is so good!"
      },
      {
        verse_id: 83,
        duration: 10,
        focus: 5,
        summary: "God, please give me a wonderful place to live with my husband once we are married."
        },
        {
          verse_id: 132,
          duration: 40,
          focus: 4,
          summary: "Lord, bless our church members and all the wonderful brothers and sisters you have bestowed in our lives. Help us have ears to hear!"
          },
          {
            verse_id: 123,
            duration: 120,
            focus: 3,
            summary: "Prayed for my brother, especially Daniel - so that he may gain more freedom from his past hurts."
            },
            {
              verse_id: 200,
              duration: 50,
              focus: 2,
              summary: "Thankful for all the blessings that God hath given me. God is so good!"
              }])

# require 'open-uri'
# require 'pry'
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# #
# # Verse.delete_all
#
# # For categories of emotions needed: joy peace wisdom courage love hope
#
# joy_url =
# "https://dbt.io/text/search?key=87fd47726ddef251ea71c94d14b958a0&dam_id=ENGESVO2ET&query=rejoice+in|joyful&v=2"
# joy_json = open(joy_url)
# joy_parsed = ActiveSupport::JSON.decode(joy_json)
# binding.pry
# joy_parsed['ResultSet']['Result'].each do |result|
#   # Verse.create!({
#   #   text: result['']
#   #   text: result['']
#   # })
# end
#
#
#
#
# love_url = "https://dbt.io/text/search?key=87fd47726ddef251ea71c94d14b958a0&dam_id=ENGESVN2&query=steadfast+love&v=2"
# love_json = open(love_url)
# love_parsed = ActiveSupport::JSON.decode(love_json)
# love_parsed['ResultSet']['Result'].each do |result|
#   # Verse.create!({
#   #
#   #   })
# end
#
#
#
#
# peace_url = "https://dbt.io/text/search?key=87fd47726ddef251ea71c94d14b958a0&dam_id=ENGESVN2&query=comfort&v=2"
# peace_json = open(peace_url)
# peace_parsed = ActiveSupport::JSON.decode(peace_json)
# peace_parsed['ResultSet']['Result'].each do |result|
#   # Verse.create!({
#   #
#   #   })
# end
#
#
#
# hope_json = open(hope_url)
# hope_url =  "https://dbt.io/text/search?key=87fd47726ddef251ea71c94d14b958a0&dam_id=ENGESVN2&query=hope+in&v=2"
# hope_parsed = ActiveSupport::JSON.decode(hope_json)
# hope_parsed['ResultSet']['Result'].each do |result|
#   # Verse.create!({
#   #
#   #   })
# end
#
#
#
#
# wisdom_url = "https://dbt.io/text/search?key=87fd47726ddef251ea71c94d14b958a0&dam_id=ENGESVN2&query=wisdom&v=2"
# wisdom_json = open(wisdom_url)
# wisdom_parsed = ActiveSupport::JSON.decode(wisdom_json)
# wisdom_parsed['ResultSet']['Result'].each do |result|
#   # Verse.create!({
#   #
#   #   })
# end
#
#
#
#
#
# courage_url = "https://dbt.io/text/search?key=87fd47726ddef251ea71c94d14b958a0&dam_id=ENG
# ESVN2&query=guide|protect&v=2"
# courage_json = open(courage_url)
# courage_parsed = ActiveSupport::JSON.decode(courage_json)
# courage_parsed['ResultSet']['Result'].each do |result|
#   # Verse.create!({
#   #
#   #   })
# end

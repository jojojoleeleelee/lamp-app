verses = eval File.open('db/verses.rb').read

verses.each do |d|
  verse = Verse.create!(
    {
      text: d[:verse_text],
      book: d[:book_name],
      chapter: d[:verse_id]
    }
  )
end

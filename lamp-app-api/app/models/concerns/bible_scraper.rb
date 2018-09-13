require 'open-uri'
require 'nokogiri'

module BibleScraper
# perhaps make this into a class and then add attr_accessors for url, location(of the verse), etc?
  def scrape_verses(emotion)
    doc = Nokogiri::HTML(open("https://www.biblegateway.com/quicksearch/?quicksearch=#{emotion.downcase.strip}&qs_version=NIV"))

    @verses = doc.css('div.bible-item-text').map do |v| v.text.gsub("\n",'').chomp("In Context | Full Chapter | Other Translations ")
    end
    @verses
  end
end

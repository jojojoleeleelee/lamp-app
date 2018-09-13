class Verse < ApplicationRecord

  validates_uniqueness_of :word
  validates :word, presence: true
end

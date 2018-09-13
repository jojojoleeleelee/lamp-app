class Verse < ApplicationRecord
  belongs_to :emotion

  validates_uniqueness_of :word
  validates :word, presence: true
end

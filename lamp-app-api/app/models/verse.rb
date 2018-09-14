class Verse < ApplicationRecord

  validates_uniqueness_of :text
  validates :text, presence: true
end

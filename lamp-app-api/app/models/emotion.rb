class Emotion < ApplicationRecord
  validates :label, presence: true
  validates :context, presence: true
end

class Prayer < ApplicationRecord
  belongs_to :verse

  validates :verse, presence: true
end

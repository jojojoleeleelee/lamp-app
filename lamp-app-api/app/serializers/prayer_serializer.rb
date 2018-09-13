class PrayerSerializer < ActiveModel::Serializer
  attributes :id, :duration, :focus, :summary
  belongs_to :verse
end

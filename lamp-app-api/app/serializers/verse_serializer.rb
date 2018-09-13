class VerseSerializer < ActiveModel::Serializer
  attributes :id, :text, :book, :chapter, :memorized
end

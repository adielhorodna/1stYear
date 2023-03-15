class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :baby_milestone, :baby_tip
end

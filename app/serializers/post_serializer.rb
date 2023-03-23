class PostSerializer < ActiveModel::Serializer
  attributes :text, :id, :card_id
  # id, :text, :mom_id, :card_id
end

class MomSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :email, :password
end

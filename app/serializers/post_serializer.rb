class PostSerializer < ActiveModel::Serializer
  attributes :text, :mom_id, :card_id, :id, :username 
  
  # id, :text, :mom_id, :card_id

  # have the username show up here
  def username 
    return object.mom.username
  end


end

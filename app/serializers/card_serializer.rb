class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :baby_milestone, :baby_tips, :posts, :mom_id

  def posts
    object.posts.map do |item|
      {
        post: item.text
    }
    end
  end
end

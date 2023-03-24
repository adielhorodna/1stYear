class MomSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :email, :password, :posts, :scribbles

  # overwrites it
  def posts
    object.posts.map do |item|
      {
        post: item.text
    }
      # object is class, and then item is an instance of that class 
    end
  end

    def scribbles
      object.scribbles.map do |item|
        {
          scribble: item.memory
      }
    end
  end


  end

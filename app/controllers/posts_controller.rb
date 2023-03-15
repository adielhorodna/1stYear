class PostsController < ApplicationController

    # Shows all Posts
    def index
        render json: Post.all, status: :ok
    end
    
   
    # def create
    #  post= Post.create!(post_params)
    #  render json: post, status: :created
    # end
    
    
    # def update
    # end

    # def destroy

    # end

    private 
    def post_params
        params.permit(:text)

    end
end

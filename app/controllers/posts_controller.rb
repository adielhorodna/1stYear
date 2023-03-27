class PostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :post_deleted
    # Shows all Posts
    def index
        render json: Post.all, status: :ok
    end
    
    # Show one post
    def show
        render json: Post.find(params[:id]), status: :ok
    end 

   
    def create
     post = Post.create!(post_params)
     render json: post, status: :created
    end
    
    
     def update
        post = Post.find(params[:id]).update!(post_params)
        render json: post
     end

    def destroy
        Post.find(params[:id]).destroy
    head :no_content
   
    end

    private 
    def post_params
        params.permit(:text, :mom_id, :card_id)

    end

    def post_deleted
        render json: {"error": "this post does not exist."}, status: :not_found
    
    end
end

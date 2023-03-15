class ScribblesController < ApplicationController


    def index
        render json: Scribble.all, status: :ok
    end
    
    
    def show
        render json: Scribble.find(params[:id]), status: :ok
    end 
    
    def create
        post = Scribble.create!(scribble_params)
        render json: post, status: :created
       end

       private 

 def scribble_params
    params.permit(:mom_id)
    # I need to have a text here .
 end
end

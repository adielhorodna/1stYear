class ScribblesController < ApplicationController


    def index
        render json: Scribble.all, status: :ok
    end
    
    # .where returns all (not one) that match, in an array
    def show
        render json: Scribble.where(mom_id: params[:id]), status: :ok
    end 
    
    def create
        post = Scribble.create!(scribble_params)
        render json: post, status: :created
       end

       private 

 def scribble_params
    params.permit(:mom_id, :memory)

 end
end

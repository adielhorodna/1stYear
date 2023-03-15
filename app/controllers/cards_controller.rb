class CardsController < ApplicationController

# Shows all cards
def index
    render json: Card.all, status: :ok
end

# Shows one single card
def show
    render json: Card.find(params[:id]), status: :ok
end 



end

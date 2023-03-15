class MomsController < ApplicationController



def index
    render json: Mom.all, status: :ok
end


def show
    render json: Mom.find(params[:id]), status: :ok
end 

end
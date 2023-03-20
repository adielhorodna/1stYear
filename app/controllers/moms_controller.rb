class MomsController < ApplicationController
skip_before_action :authorize, only: :create, :show


def index
    render json: Mom.all, status: :ok
end


def show
    # render json: Mom.find(params[:id]), status: :ok
    
    # created already in the application controller, 
    # so can have access here:
    render json: @current_user 
end 

# create and login at same time
def create
user = user.create!(user_params)
session[:mom_id] = mom.id
render json: user, status: :created
end 

private 

def user_params
    params.permit(:first, :last, :email, :username, :password, :confirm_password)
end 

end
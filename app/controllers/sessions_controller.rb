class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

# LOGIN:

def create 
    mom = Mom.find_by(username: params[:username])
    if mom&.authenticate (params[:password])
        session[:mom_id] = mom.id
        render json: mom 

    else
        render json: {error: ["Invalid username or password"]}, 
        status: :unauthorized
    end 
end

    def destroy 
    session.delete :mom_id
    head :no_content
    end 

end

class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize 

    private 

    def authorize
    @current_mom = Mom.find_by(id: session[:mom_id])
    render json: {errors: ["Not authorized, please login"]}, 
    status: :unauthorized unless @current_mom
    end
    
   
end

class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize 

    private 

    def authorize
      
    @current_user = Mom.find_by(id: session[mom_id])
    render json: {errors: ["Not authorized, please login"]}, status: :unauthorized unless @current_user
    end
    
    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    #   end
end

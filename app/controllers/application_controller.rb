class ApplicationController < ActionController::API
    include ActionController::MimeResponds
    include ActionController::ImplicitRender
    respond_to :html, :json

    before_action :configure_permitted_parameters, if: :devise_controller?
    private
      def configure_permitted_parameters
        devise_parameter_sanitizer.for(:sign_up) << :username
      end
end

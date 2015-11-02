class ApplicationController < ActionController::API
    include ActionController::MimeResponds
    include ActionController::ImplicitRender
    respond_to :html, :json

  private
      def configure_permitted_parameters
        devise_parameter_sanitizer.for(:sign_up) << :username
      end
end

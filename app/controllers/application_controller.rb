class ApplicationController < ActionController::API
    include ActionController::MimeResponds
    include ActionController::ImplicitRender
    respond_to :html, :json

end

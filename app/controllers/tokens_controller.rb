class TokensController < ApplicationController

    def index
        respond_with Token.all
    end

    def create
        new_token = generate_token
        respond_with Token.create({token: new_token})
    end

    def show
        respond_with Token.find(params[:id])
    end

    def update
        token = Token.find(params[:id])
        token.user_id = params[:user_id]
        token.save

        respond_with token
    end

    protected
        def generate_token
            random_token = SecureRandom.urlsafe_base64(nil, false)
            while Token.exists?(token: random_token) do
                random_token = SecureRandom.urlsafe_base64(nil, false)
            end

            random_token
        end

    private
        def token_params
            params.require(:token).permit(:token)
        end
end

class TokensController < ApplicationController

  def index
    respond_with Token.all
  end

  def create
    respond_with Token.create(token_params.merge(user_id: params[:user_id]))
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

  private
  def token_params
    params.require(:token).permit(:token)
  end
end

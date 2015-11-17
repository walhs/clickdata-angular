class PostsController < ApplicationController

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params.merge(user_id: params[:user_id]))
  end

  def show
    respond_with Post.find(params[:id])
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end

  def destroy
    respond_with Post.find(params[:id]).delete
  end

  private
  def post_params
    params.require(:post).permit(:text)
  end
end

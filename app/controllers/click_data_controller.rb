class ClickDataController < ApplicationController
  before_action :set_click_data, only: [:show, :update, :destroy]
  #before_filter :authenticate_user!
  # GET /click_data
  # GET /click_data.json
  def index
    @click_data = ClickData.all

    render json: @click_data
  end

  # GET /click_data/1
  # GET /click_data/1.json
  def show
    render json: @click_data
  end

  # POST /click_data
  # POST /click_data.json
  def create
    @click_data = ClickData.new(click_data_params)

    if @click_data.save
      render json: @click_data, status: :created, location: @click_data
    else
      render json: @click_data.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /click_data/1
  # PATCH/PUT /click_data/1.json
  def update
    @click_data = ClickData.find(params[:id])

    if @click_data.update(click_data_params)
      head :no_content
    else
      render json: @click_data.errors, status: :unprocessable_entity
    end
  end

  # DELETE /click_data/1
  # DELETE /click_data/1.json
  def destroy
    @click_data.destroy

    head :no_content
  end

  private

    def set_click_data
      @click_data = ClickData.find(params[:id])
    end

    def click_data_params
      params.require(:click_data).permit(:token_id, :x, :y, :scroll_position, :url, :gatilho)
    end
end

class ClickDataController < ApplicationController
  before_action :set_click_datum, only: [:show, :update, :destroy]

  # GET /click_data
  # GET /click_data.json
  def index
    @click_data = ClickDatum.all

    render json: @click_data
  end

  # GET /click_data/1
  # GET /click_data/1.json
  def show
    render json: @click_datum
  end

  # POST /click_data
  # POST /click_data.json
  def create
    @click_datum = ClickDatum.new(click_datum_params)

    if @click_datum.save
      render json: @click_datum, status: :created, location: @click_datum
    else
      render json: @click_datum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /click_data/1
  # PATCH/PUT /click_data/1.json
  def update
    @click_datum = ClickDatum.find(params[:id])

    if @click_datum.update(click_datum_params)
      head :no_content
    else
      render json: @click_datum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /click_data/1
  # DELETE /click_data/1.json
  def destroy
    @click_datum.destroy

    head :no_content
  end

  private

    def set_click_datum
      @click_datum = ClickDatum.find(params[:id])
    end

    def click_datum_params
      params.require(:click_datum).permit(:user_token, :x, :y, :scroll_position, :url)
    end
end

class PrayersController < ApplicationController
  before_action :set_prayer, only: [:show, :update, :destroy]

  # GET /prayers
  def index
    @prayers = Prayer.all

    render json: @prayers
  end

  # GET /prayers/1
  def show
    render json: @prayer
  end

  # POST /prayers
  def create
    @prayer = Prayer.new(prayer_params)

    if @prayer.save
      render json: @prayer, status: :created, location: @prayer
    else
      render json: @prayer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prayers/1
  def update
    if @prayer.update(prayer_params)
      render json: @prayer
    else
      render json: @prayer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prayers/1
  def destroy
    @prayer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prayer
      @prayer = Prayer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def prayer_params
      params.require(:prayer).permit(:duration, :focus, :context)
    end
end

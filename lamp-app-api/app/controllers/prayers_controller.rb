
class PrayersController < ApplicationController
  # GET /prayers
  def index
    @prayers = Prayer.all

    render json: @prayers
  end

  # GET /prayers/1
  def show
    @prayer = Prayer.find(params[:id])
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
    @prayer = Prayer.find(params[:id])
    if @prayer.update(prayer_params)
      render json: @prayer
    else
      render json: @prayer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prayers/1
  def destroy
    @prayer = Prayer.find(params[:id])
    @prayer.destroy
  end
end

require 'pry'
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
      render json: @prayer
    else
      render json: {message: @prayer.errors}, status: 400
    end
  end

  # PATCH/PUT /prayers/1
  def update
    @prayer = Prayer.find(params[:id])
    if @prayer.update(prayer_params)
      render json: @prayer
    else
      render json: {message: @prayer.errors}, status: 400
    end
  end

  # DELETE /prayers/1
  def destroy
    @prayer = Prayer.find(params[:id])
    if @prayer.destroy
      render status: 204
    else
      render json: {message: "Unable to delete this prayer"}, status: 400
    end
  end

  private

  def prayer_params
    params.require(:prayer).permit(:summary, :duration, :focus)
  end
end

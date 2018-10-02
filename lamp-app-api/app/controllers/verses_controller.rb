
class VersesController < ApplicationController
  def index
    @verses = Verse.all
    render json: @verses
  end

  def show
    @verse = Verse.find(params[:id])
    render json: @verse
  end

end

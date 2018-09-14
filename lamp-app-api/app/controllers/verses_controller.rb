
class VersesController < ApplicationController
  before_action :set_verse, only: [:show, :update, :destroy]
  def index
    @verses = Verse.all
    render json: @verses
  end

  def show
    @verse = Verse.find(params[:id])
    render json: @verse
  end
end

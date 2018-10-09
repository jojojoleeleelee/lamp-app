
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

  def create
    @verse = Verse.new(verse_params)

    if @verse.save
      render json: @verse, status: :created, location: @verse
    else
      render json: @verse.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /verses/1
  def update
    if @verse.update(verse_params)
      render json: @verse
    else
      render json: @verse.errors, status: :unprocessable_entity
    end
  end

  # DELETE /verses/1
  def destroy
    @verse.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_verse
      @verse = Verse.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def verse_params
      params.require(:verse).permit(:text, :book, :chapter, :memorized)
    end
end

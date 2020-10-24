class Api::ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :update, :destroy]

  def index
    render json: Artist.all
  end

  def show
    render json: @artist
  end

  def create
    artist = Artist.new(artist_params)
      if product.save
        render json: artist
      else
        render json: artist.errors, status: 422
      end
  end

  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: @artist.errors, status: 422
    end
  end

  def destroy
    @artist.destroy
  end

  private
    def set_artist
      @artist = Artist.find(params[:id])
    end

    def artist_params
      params.require(:name).permit(:name )
    end
end
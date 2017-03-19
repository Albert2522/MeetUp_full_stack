class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    if @image.save
      render json: @image
    else
      render @image.errors.full_messages
    end
  end

  def destroy
    @image = Image.find_by_id(params[:id])
    if @image.destroy
      render json: @image
    else
      render json: ["Image not found"]
    end
  end

  private

  def image_params
    params.require(:image).permit(:url)
  end
end

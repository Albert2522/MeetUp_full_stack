class Api::ImageRelationshipsController < ApplicationController
  def create
    @img_rel = ImageRelationship.new(img_rel_params)
    if @img_rel.save
      render json: ["Relationship Created"]
    else
      render @img_rel.errors.ful_messages
    end
  end

  def update
    @img_rel = ImageRelationship.find_by_id(img_rel_params[:id])
    unless @img_rel
      render json: ["Can't find such relationship"], status: 422
      return
    end
    renew_params = {event_id: img_rel_params[:event_id], group_id: img_rel_params[:group_id], image_id: img_rel_params[:image_id]}
    if @img_rel.update(renew_params)
      render json: ["Relationship succesfully updated"]
    else
      render json: @img_rel.errors.full_messages, status: 422
    end
  end

  def destroy
    @img_rel = ImageRelationship.find_by_id(params[:id])
    if @img_rel
      @img_rel.destroy
      render ["Relationship destroyed"]
    else
      render ["Object is not found"]
    end
  end

  private
  def img_rel_params
    params.require(:img_rel).permit(:event_id, :group_id, :event_id)
  end
end

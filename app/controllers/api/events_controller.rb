class Api::EventsController < ApplicationController
  def show
    @event = Event.find_by_id(params[:id])
  end

  def create
    renew_params = {title: event_params[:title], group_id: event_params[:group_id], description: event_params[:description],
      data: event_params[:data], location: event_params[:location],
       author_id: event_params[:author_id], image_url: event_params[:image_url]}
    @event = Event.new(renew_params)
    if @event.save
      event_params[:images].each do |image_id|
        img_rel = ImageRelationship.new({event_id: @event.id, image_id: image_id.to_i, group_id: @event.group_id})
        img_rel.save
      end
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
      @events = Event.limit(30)
  end

  def destroy
    @event = Event.find_by_id(params[:id])
    @event.destroy
    render json: ["Object destroyed"]
  end

  def event_params
    params.require(:event).permit(:title, :group_id,
    :description, :data, :location, :founded_on, :author_id, :image_url, :images => [])
  end
end

class Api::EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    if @event.save!
      render "api/events/show"
    else
      render json: @event.errors, status: 422
    end
  end

  def index
    @events = Event.limit(30)
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render "api/events/show"
  end

  def event_params
    params.require(:event).permit(:title, :group_id,
    :description, :data, :location, :founded_on, :author_id)
  end
end

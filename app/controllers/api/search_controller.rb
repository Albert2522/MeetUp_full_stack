class Api::SearchController < ApplicationController
  def index
    search = params[:search]
    @events = Event.where("title like ? or description like ?", "%#{search}%", "%#{search}%")
    @groups = Group.where("name like ? or description like ?", "%#{search}%", "%#{search}%")
  end
end

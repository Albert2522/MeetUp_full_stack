class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render json: ["membership created"]
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = nil
    user_id = params[:user_id]
    event_id = params[:event_id]
    group_id = params[:group_id]
    if event_id && group_id
      @membership = Membership.where(:user_id => user_id).where(:event_id => event_id).where(:group_id => group_id)
    elsif event_id && !group_id
      @membership = Membership.where(:user_id => user_id).where(:event_id => event_id)
    else
      @membership = Membership.where(:user_id => user_id).where(:group_id => group_id)
    end
    @membership[0].destroy
    render json: ["Object destroyed"]
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :event_id, :group_id)
  end
end

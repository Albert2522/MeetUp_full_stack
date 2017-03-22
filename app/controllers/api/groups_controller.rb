class Api::GroupsController < ApplicationController
  def show
    @group = Group.find_by_id(params[:id])
  end

  def create
    renew_params = {name: group_params[:name], description: group_params[:description],
       author_id: group_params[:author_id], image_url: group_params[:image_url], category_id: group_params[:category_id]}
    @group = Group.new(renew_params)
    if @group.save
      if group_params[:images]
        group_params[:images].each do |image_id|
          img_rel = ImageRelationship.new({group_id: @group.id, image_id: image_id.to_i})
          img_rel.save
        end
      end
      group_params[:category_ids].each do |categ_id|
        cat_rel = CategoryRel.new({category_id: categ_id, group_id: @group.id})
        cat_rel.save
      end
      render "api/groups/show"
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def index
      @groups = Group.all
  end

  def destroy
    @group = Group.find_by_id(params[:id])
    @group.destroy
    render ["Object destroyed"]
  end

  def group_params
    params.require(:group).permit(:name,
    :description, :author_id, :image_url, :category_id, :images => [], :category_ids => [])
  end
end

class CategoryRel < ActiveRecord::Base
  belongs_to :category

  belongs_to :event

  belongs_to :group
end

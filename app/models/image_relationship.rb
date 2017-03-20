class ImageRelationship < ActiveRecord::Base
  validates :event_id, uniqueness: {scope: :image_id}
  validates :group_id, uniqueness: {scope: :image_id}
  validates :image_id, presence: true

  belongs_to :event
  belongs_to :group
  belongs_to :image
end

# == Schema Information
#
# Table name: image_relationships
#
#  id         :integer          not null, primary key
#  group_id   :integer
#  event_id   :integer
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ImageRelationship < ActiveRecord::Base
  validates :event_id, uniqueness: {scope: :image_id}
  validates :group_id, uniqueness: {scope: :image_id}
  validates :image_id, presence: true

  belongs_to :event
  belongs_to :group
  belongs_to :image
end

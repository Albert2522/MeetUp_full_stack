# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ActiveRecord::Base
  validates :url, presence: :true

  has_many :image_relationships
end

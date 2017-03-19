class Image < ActiveRecord::Base
  validates :url, presence: :true

  has_many :image_relationships
end

# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  author_id   :integer          not null
#  image_url   :string
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ActiveRecord::Base
  validates :name, :description, :author_id, presence: true
  validates :name, uniqueness: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  has_many :events

  has_many :memberships

  has_many :members,
   through: :memberships,
   source: :user

  has_many :image_relationships

  has_many :category_rels

  has_many :categories,
    through: :category_rels,
    source: :category

  has_many :images,
    through: :image_relationships,
    source: :image
end

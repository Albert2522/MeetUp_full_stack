# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  group_id    :integer
#  author_id   :integer          not null
#  description :text             not null
#  data        :datetime         not null
#  image_url   :string
#  location    :string
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ActiveRecord::Base
  validates :title, :author_id, :description, :data, :location,  presence:true

  belongs_to :group

  has_many :members

  belongs_to :author
end

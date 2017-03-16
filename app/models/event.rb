# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  group_id     :integer
#  athor_id     :integer          not null
#  description  :text             not null
#  data         :datetime         not null
#  image_url_id :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  location     :string
#  category_id  :integer
#

class Event < ActiveRecord::Base
  validates :title, :author_id, :description, :data, :location,  presence:true

  belongs_to :group

  has_many :members

  belongs_to :author
end

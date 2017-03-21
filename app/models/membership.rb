class Membership < ActiveRecord::Base
  validates :user_id, presence: true
  belongs_to :user

  belongs_to :event

  belongs_to :group
end

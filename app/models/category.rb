class Category < ActiveRecord::Base

  has_many :category_rels

  has_many :events,
    through: :category_rels,
    source: :event

  has_many :groups,
    through: :category_rels,
    source: :group


end

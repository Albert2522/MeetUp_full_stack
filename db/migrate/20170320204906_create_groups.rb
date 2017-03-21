class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :author_id, null: false
      t.string :image_url
      t.integer :category_id

      t.timestamps null: false
    end
  end
end

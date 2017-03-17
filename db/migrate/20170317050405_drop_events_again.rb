class DropEventsAgain < ActiveRecord::Migration
  def change
    drop_table :events
    create_table :events do |t|
      t.string :title, null: false
      t.integer :group_id
      t.integer :author_id, null:false
      t.text :description, null:false
      t.datetime :data, null:false
      t.string :image_url
      t.string :location
      t.integer :category_id
      t.timestamps null: false
    end
  end
end

class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.integer :group_id
      t.integer :athor_id, null:false
      t.text :description, null:false
      t.datetime :data, null:false
      t.string :image_url_id
      t.timestamps null: false
    end
  end
end

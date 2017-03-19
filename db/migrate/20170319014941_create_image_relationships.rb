class CreateImageRelationships < ActiveRecord::Migration
  def change
    create_table :image_relationships do |t|
      t.integer :group_id
      t.integer :event_id
      t.integer :image_id, null: false

      t.timestamps null: false
    end
    add_index "image_relationships", ["group_id", "image_id"], name: "index_groups_and_images", unique: true
    add_index "image_relationships", ["event_id", "image_id"], name: "index_events_and_images", unique: true
  end
end

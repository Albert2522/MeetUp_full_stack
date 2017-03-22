class CreateCategoryRels < ActiveRecord::Migration
  def change
    create_table :category_rels do |t|
      t.integer :category_id, null: false
      t.integer :group_id
      t.integer :event_id
      t.timestamps null: false
    end
  end
end

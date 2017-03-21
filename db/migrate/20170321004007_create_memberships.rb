class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :event_id
      t.integer :group_id

      t.timestamps null: false
    end
  end
end

class CreateClickData < ActiveRecord::Migration
  def change
    create_table :click_data do |t|
      t.string :user_token
      t.float :x
      t.float :y
      t.float :scroll_position
      t.string :url

      t.timestamps
    end
  end
end

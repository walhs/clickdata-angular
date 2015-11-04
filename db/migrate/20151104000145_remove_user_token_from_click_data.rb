class RemoveUserTokenFromClickData < ActiveRecord::Migration
  def change
    remove_column :click_data, :user_token, :string
  end
end

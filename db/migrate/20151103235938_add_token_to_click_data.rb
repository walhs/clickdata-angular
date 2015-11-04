class AddTokenToClickData < ActiveRecord::Migration
  def change
    add_reference :click_data, :token, index: true
  end
end

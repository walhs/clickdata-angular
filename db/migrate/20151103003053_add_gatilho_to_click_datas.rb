class AddGatilhoToClickDatas < ActiveRecord::Migration
  def change
    add_column :click_data, :gatilho, :string
  end
end

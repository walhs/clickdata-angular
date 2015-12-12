class Token < ActiveRecord::Base
  belongs_to :user
  has_many :click_datas
end

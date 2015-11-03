class RemoveLinkFromPosts < ActiveRecord::Migration
  def change
        remove_column :posts, :link
  end
end

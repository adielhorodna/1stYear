class UpdateCards < ActiveRecord::Migration[7.0]
  def change
    change_column :cards, :mom_id, :integer
    change_column :posts, :mom_id, :integer   
    change_column :posts, :card_id, :integer 
     change_column :scribbles, :mom_id, :integer
  end
end

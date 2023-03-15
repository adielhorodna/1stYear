class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.integer :title
      t.string :image
      t.string :baby_milestone
      t.string :baby_tip
   

      t.timestamps
    end
  end
end

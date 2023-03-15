class UpdatedMigrations < ActiveRecord::Migration[7.0]
  def change 
    create_table :moms do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :password
    end


    create_table :cards do |t|
      t.integer :title
      t.string :image_url
      t.string :baby_milestone
      t.string :baby_tips
      t.integer :mom_id
    end

    create_table :posts do |t|
      t.string :text
      t.integer :mom_id
      t.integer :card_id

    end

    create_table :scribbles do |t|
      t.integer :mom_id
      t.string :memory
  
    end
  end
end

class CreateMoms < ActiveRecord::Migration[7.0]
  def change
    create_table :moms do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end

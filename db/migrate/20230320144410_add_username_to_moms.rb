class AddUsernameToMoms < ActiveRecord::Migration[7.0]
  def change
    add_column :moms, :username, :string
  end
end

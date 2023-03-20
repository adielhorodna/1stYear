class AddConfirmPasswordToMoms < ActiveRecord::Migration[7.0]
  def change
    add_column :moms, :confirm_password, :string
  end
end

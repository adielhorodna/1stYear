class UpdatedPasswordConfirmation < ActiveRecord::Migration[7.0]
  def change
    rename_column :moms, :confirm_password, :password_confirmation
  end
end

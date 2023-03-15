class CreateScribbles < ActiveRecord::Migration[7.0]
  def change
    create_table :scribbles do |t|
      t.string :mom_id

      t.timestamps
    end
  end
end

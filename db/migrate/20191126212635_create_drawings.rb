class CreateDrawings < ActiveRecord::Migration[5.2]
  def change
    create_table :drawings do |t|
      t.string :title
      t.text :description
      t.text :base64_png

      t.timestamps
    end
  end
end

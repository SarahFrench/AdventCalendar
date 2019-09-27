class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.integer :day
      t.string :answer

      t.timestamps
    end
  end
end

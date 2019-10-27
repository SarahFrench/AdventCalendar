class CreateClickScores < ActiveRecord::Migration[5.2]
  def change
    create_table :click_scores do |t|

      t.timestamps
    end
  end
end

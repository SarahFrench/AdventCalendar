class AddColumnsToClickScores < ActiveRecord::Migration[5.2]
  def change
    add_column :click_scores, :score, :integer
    add_column :click_scores, :name, :string
  end
end

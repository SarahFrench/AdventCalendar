class CreatePubQuizAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :pub_quiz_answers do |t|
      t.string :teamname
      t.string :q1answer
      t.string :q2answer
      t.string :q3answer
      t.string :q4answer
      t.string :q5answer
      t.string :q6answer
      t.string :q7answer
      t.string :q8answer
      t.string :q9answer
      t.string :q10answer
      t.string :q11answer
      t.string :q12answer
      t.string :q13answer
      t.string :q14answer
      t.string :q15answer
      t.string :q16answer
      t.string :q17answer
      t.string :q18answer

      t.timestamps
    end
  end
end

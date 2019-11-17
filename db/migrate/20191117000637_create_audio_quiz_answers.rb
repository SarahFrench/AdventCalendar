class CreateAudioQuizAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :audio_quiz_answers do |t|
      t.string :who
      t.string :called

      t.timestamps
    end
  end
end

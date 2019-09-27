class Answer < ApplicationRecord

  validates :day, presence: true, numericality: { only_integer: true }
  validates :question, presence: true, numericality: { only_integer: true }
  validates :answer, presence: true, length: { minimum: 2 }

end

class ClickScore < ApplicationRecord
  default_scope { order(score: :desc) }
  validates :name, presence: true, length: { minimum: 1, maximum: 20 }
  validates :score, presence: true, numericality: { only_integer: true, greater_than: 0 }


  def self.top_five
    order(score: :desc).limit(5)
  end
end

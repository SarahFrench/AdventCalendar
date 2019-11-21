class CrosswordController < ApplicationController

  def answers
    render json: CrosswordService::CROSSWORD_ANSWERS
  end

end

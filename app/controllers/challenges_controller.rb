class ChallengesController < ApplicationController

  before_action :set_challenge, only: [:show]

  def show

    if @challenge.accessible?
      render @challenge.route
    else
      redirect_to root_path
    end

  end

  def check_crossword
    # JS on frontend to send all answers as one param
  end

  private

  def set_challenge
    @challenge ||= ChallengeService.new(params[:id].to_i)
  end

end

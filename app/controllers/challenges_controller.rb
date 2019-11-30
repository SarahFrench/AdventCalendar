class ChallengesController < ApplicationController

  before_action :set_challenge, only: [:show]
  before_action :new_audio_quiz_answer, only: [:show]

  def show

    if @challenge.accessible?
      render @challenge.route
    else
      redirect_to root_path
    end

  end

  private

  def set_challenge
    @challenge ||= ChallengeService.new(params[:id].to_i)
  end

  def new_audio_quiz_answer()
    @audio_quiz_answer = AudioQuizAnswer.new if @challenge.day_of_month === 6
  end

end

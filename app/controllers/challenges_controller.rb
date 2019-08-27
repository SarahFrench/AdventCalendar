class ChallengesController < ApplicationController

  CHALLENGES = {
    1 => 'pong',
    2 => 'test',
    3 => 'eyebrows'
  }

  def show
    day_of_month = params[:id].to_i
    if day_of_month < (Time.now.day + 1)
      render "#{day_of_month}-#{CHALLENGES[day_of_month]}"
    else
      redirect_to root_path
    end
  end

end

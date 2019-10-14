class ChallengesController < ApplicationController

  CHALLENGES = {
    1 => 'pong',
    2 => 'test',
    3 => 'eyebrows',
    4 => 'vue',
    5 => 'connect',
    6 => 'audio'
  }

# final version of controller that responds to what day it is
  # def show
  #   day_of_month = params[:id].to_i
  #   if day_of_month < (Time.now.day + 1)
  #     render "#{day_of_month}-#{CHALLENGES[day_of_month]}"
  #   else
  #     redirect_to root_path
  #   end
  # end

#version for development - allow access to all
  def show
    day_of_month = params[:id].to_i
    if day_of_month < (30)
      render "#{day_of_month}-#{CHALLENGES[day_of_month]}"
    else
      redirect_to root_path
    end
  end

end

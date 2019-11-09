class ChallengesController < ApplicationController

  CHALLENGES = {
    1 => 'pong',
    2 => 'icebox',
    3 => 'eyebrows',
    4 => 'lent',
    5 => 'connect',
    6 => 'audio',
    7 => 'rapid',
    8 => 'whatsapp',
    12 => 'bo-jo',
    15 => 'limerick',
    17 => 'pelham',
    21 => 'troll-bar'
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

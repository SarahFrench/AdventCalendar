class ChallengesController < ApplicationController

  before_action :permit_params_crossword, only: [:check_crossword]

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
    20 => 'crossword'
  }

  CROSSWORD_ANSWERS = {
    "letter-1" => "r",
    "letter-2" => "i",
    "letter-3" => "c",
    "letter-4" => "k",
    "letter-5" => "y",
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

  def check_crossword
    params_answers = permit_params.to_h
    params_answers.map {|key,value| !!key.match(/letter-\d{1,2}/) }

    puts params_answers

    if(params['letter-1'] == "r")
      redirect_to root_path
    else
      redirect_to days_path
    end
    # binding.pry
    # params.require(:challenge).permit()
  end

  def permit_params_crossword
    params.delete(:authenticity_token)
    params.delete(:controller)
    params.delete(:action)
    params.permit(params.keys)
  end

end

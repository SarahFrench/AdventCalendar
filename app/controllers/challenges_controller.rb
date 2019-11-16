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
    9 => 'wide',
    12 => 'bo-jo',
    15 => 'limerick',
    17 => 'pelham',
    19 => 'geolocation',
    20 => 'crossword',
    21 => 'troll-bar',
    22 => 'samoyed'
  }

  CROSSWORD_ANSWERS = {
    "letter-1" => "r",
    "letter-2" => "i",
    "letter-3" => "c",
    "letter-4" => "k",
    "letter-5" => "y",
    "letter-6" => "e",
    "letter-7" => "s",
    "letter-8" => "e",
    "letter-9" => "d",
    "letter-10" => "g",
    "letter-11" => "y",
    "letter-12" => "m",
    "letter-13" => "b",
    "letter-14" => "h",
    "letter-15" => "k",
    "letter-16" => "e",
    "letter-17" => "a",
    "letter-18" => "e",
    "letter-19" => "j",
    "letter-20" => "e",
    "letter-21" => "n",
    "letter-22" => "r",
    "letter-23" => "a",
    "letter-24" => "r",
    "letter-25" => "d",
    "letter-26" => "l",
    "letter-27" => "v",
    "letter-28" => "e",
    "letter-29" => "g",
    "letter-30" => "a",
    "letter-31" => "n",
    "letter-32" => "k",
    "letter-33" => "e",
    "letter-34" => "t",
    "letter-35" => "o",
    "letter-36" => "o",
    "letter-37" => "i",
    "letter-38" => "r",
    "letter-39" => "c",
    "letter-40" => "p",
    "letter-41" => "l",
    "letter-42" => "u",
    "letter-43" => "m",
    "letter-44" => "f",
    "letter-45" => "u",
    "letter-46" => "n",
    "letter-47" => "k",
    "letter-48" => "f",
    "letter-49" => "a",
    "letter-50" => "r",
    "letter-51" => "t",
    "letter-52" => "s",
    "letter-53" => "k",
    "letter-54" => "i",
    "letter-55" => "n",
    "letter-56" => "d",
    "letter-57" => "u",
    "letter-58" => "v",
    "letter-59" => "e",
    "letter-60" => "t",
    "letter-61" => "a",
    "letter-62" => "e",
    "letter-63" => "c",
    "letter-64" => "h",
    "letter-65" => "a",
    "letter-66" => "r",
    "letter-67" => "i",
    "letter-68" => "t",
    "letter-69" => "y",
    "letter-70" => "s",
    "letter-71" => "h",
    "letter-72" => "o",
    "letter-73" => "p",
    "letter-74" => "s",
    "letter-75" => "c",
    "letter-76" => "a",
    "letter-77" => "i",
    "letter-78" => "b",
    "letter-79" => "o",
    "letter-80" => "r",
    "letter-81" => "o",
    "letter-82" => "u",
    "letter-83" => "g",
    "letter-84" => "h",
    "letter-85" => "m",
    "letter-86" => "m",
    "letter-87" => "o",
    "letter-88" => "l",
    "letter-89" => "y",
    "letter-90" => "i",
    "letter-91" => "e",
    "letter-92" => "c",
    "letter-93" => "d",
    "letter-94" => "o"
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
      if (CHALLENGES[day_of_month] === 'crossword')
        @old_answers = session[:old_answers]
        @correct_answers = CROSSWORD_ANSWERS
        @crossword_message = session[:crossword_message]
      end
      render "#{day_of_month}-#{CHALLENGES[day_of_month]}"
    else
      redirect_to root_path
    end
  end

  def check_crossword
    answers = return_answers

    if(all_correct_answers?(answers))
      session[:crossword_message] = "🎉 Well done! You completed the crossword 🎉"
      session[:old_answers] = answers
      redirect_to '/days/20'
    else
      session[:old_answers] = answers
      session[:crossword_message] = "You made some mistakes, but I left the correct letters in place"
      redirect_back(fallback_location: '/days/20')
    end
  end

  def forget_crossword_answers
    session.delete(:old_answers)
    session.delete(:crossword_message)
    redirect_to '/days/20'
  end

  def permit_params_crossword
    params.delete(:authenticity_token)
    params.delete(:controller)
    params.delete(:action)
    params.permit(params.keys)
    # params.keys.each do |key|
    #   params[key] = params[key].downcase
    # end
  end

  def all_correct_answers?(answers)
    answers === CROSSWORD_ANSWERS
  end

  def return_answers
    answers = permit_params_crossword.to_h
    answers.each do |k,v|
      answers[k] = v.downcase
    end
  end

end

class ChallengeService
  attr_reader :challenge, :options

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
    10 => 'vibrate',
    12 => 'bo-jo',
    15 => 'limerick',
    17 => 'pelham',
    18 => 'mealplan',
    19 => 'geolocation',
    20 => 'crossword',
    21 => 'troll-bar',
    22 => 'samoyed',
    25 => 'xmas-day'
  }

  def initialize(day_of_month=1)
    @day_of_month ||= day_of_month
    if is_crossword?
      @old_answers ||= session[:old_answers]
      @correct_answers ||= CROSSWORD_ANSWERS
      @crossword_message ||= session[:crossword_message]
    end
  end

  def accessible?
    if in_development_mode?
      #in development mode I can see any page
      true
    elsif being_viewed_after_2019?
      #after Dec 2019 all pages are visible in the deployed project whenever you visit
      true
    else
      #In December 2019 you need to wait to see each day!
      @day_of_month < (Time.now.day + 1)
    end
  end

  def route
    #This kind of behaviour is what got me told off at a meetup :/
    #this method can be changed once I've made all the pages and can change their names to just numbers
    if CHALLENGES.keys.include?(@day_of_month)
      "challenges/#{@day_of_month}-#{CHALLENGES[@day_of_month]}"
    else
      "/"
    end
  end

  private

  def is_crossword?
    CHALLENGES[@day_of_month] == 'crossword'
  end

  def in_development_mode?
    ENV['RAILS_ENV'] == "development"
  end

  def being_viewed_after_2019?
    Time.now.year > 2019
  end

end

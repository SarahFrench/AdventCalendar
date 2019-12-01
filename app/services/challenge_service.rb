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
    10 => 'rick-roll',
    11 => 'under-desk',
    12 => 'bo-jo',
    13 => 'samoyed',
    14 => 'draw',
    15 => 'limerick',
    17 => 'pelham',
    18 => 'mealplan',
    19 => 'geolocation',
    20 => 'crossword',
    21 => 'troll-bar',
    23 => 'can-can',
    25 => 'xmas-day'
  }

  def initialize(day_of_month=1)
    @day_of_month ||= day_of_month
  end

  def day_of_month
    @day_of_month
  end

  def accessible?
    true
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

  def in_development_mode?
    ENV['RAILS_ENV'] == "development"
  end

  def being_viewed_after_2019?
    Time.now.year > 2019
  end

end

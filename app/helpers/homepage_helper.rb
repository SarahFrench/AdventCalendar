module HomepageHelper

  def window_link(number)
    if(number == 25 && !is_it_xmas_day?)
      '/youve-been-bad'
    else
      "/days/#{number}"
    end
  end

  def is_it_xmas_day?
    if Time.now.year == 2019
      (Time.now.day == 25 && Time.now.month == 12) ? true : false
    else
      true
    end
  end

end

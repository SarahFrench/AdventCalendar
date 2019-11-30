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
      (Time.now.day >= 25 && Time.now.month == 12) ? true : false
    else
      true
    end
  end

  def menu_links_html
    html = ""
    if Time.now.year == 2019
      for i in (1..Time.now.day)
        if i < 26
          html += "<a href=\"/days/#{i}\" class=\"menu-link pad-left\" >Day #{i}</a>"
        end
      end
    else
      for i in (1..25)
        html += "<a href=\"/days/#{i}\" class=\"menu-link pad-left\" >Day #{i}</a>"
      end
    end
    html.html_safe
  end

end

module CrosswordHelper

  def display_old_answer_or_blank(letter_id)
    if(@correct_answers && @old_answers)
      @correct_answers[letter_id] === @old_answers[letter_id] ? @old_answers[letter_id] : ""
    else
      ""
    end
  end

end

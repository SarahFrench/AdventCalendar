class AudioQuizAnswersController < ApplicationController
  before_action :set_audio_quiz_answer, only: [:show, :edit, :update, :destroy]

  # GET /audio_quiz_answers
  # GET /audio_quiz_answers.json
  def index
    @audio_quiz_answers = AudioQuizAnswer.all
  end

  # GET /audio_quiz_answers/new
  def new
    @audio_quiz_answer = AudioQuizAnswer.new
  end

  # POST /audio_quiz_answers
  # POST /audio_quiz_answers.json
  def create
    @audio_quiz_answer = AudioQuizAnswer.new(audio_quiz_answer_params)

    respond_to do |format|
      if @audio_quiz_answer.save
        format.html { redirect_to '/days/6', notice: 'Thanks, I\'ll have a look at what you just submitted later on ;)' }
      else
        format.html { render :new }
      end
    end
  end

  # DELETE /audio_quiz_answers/1
  # DELETE /audio_quiz_answers/1.json
  def destroy
    @audio_quiz_answer.destroy
    respond_to do |format|
      format.html { redirect_to audio_quiz_answers_url, notice: 'Audio quiz answer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_audio_quiz_answer
      @audio_quiz_answer = AudioQuizAnswer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def audio_quiz_answer_params
      params.require(:audio_quiz_answer).permit(:who, :called)
    end
end

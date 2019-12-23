class PubQuizAnswersController < ApplicationController
  before_action :set_pub_quiz_answer, only: [:show, :edit, :update, :destroy]

  # GET /pub_quiz_answers
  # GET /pub_quiz_answers.json
  def index
    @pub_quiz_answers = PubQuizAnswer.all
  end

  # GET /pub_quiz_answers/1
  # GET /pub_quiz_answers/1.json
  def show
  end

  # GET /pub_quiz_answers/new
  def new
    @pub_quiz_answer = PubQuizAnswer.new
  end

  # GET /pub_quiz_answers/1/edit
  def edit
  end

  # POST /pub_quiz_answers
  # POST /pub_quiz_answers.json
  def create
    @pub_quiz_answer = PubQuizAnswer.new(pub_quiz_answer_params)

    respond_to do |format|
      if @pub_quiz_answer.save
        format.html { redirect_to '/days/23', notice: 'Your pub quiz answers were successfully submitted! Ask Sarah to mark them...' }
        format.json { render :show, status: :created, location: @pub_quiz_answer }
      else
        format.html { render :new }
        format.json { render json: @pub_quiz_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pub_quiz_answers/1
  # PATCH/PUT /pub_quiz_answers/1.json
  def update
    respond_to do |format|
      if @pub_quiz_answer.update(pub_quiz_answer_params)
        format.html { redirect_to @pub_quiz_answer, notice: 'Pub quiz answer was successfully updated.' }
        format.json { render :show, status: :ok, location: @pub_quiz_answer }
      else
        format.html { render :edit }
        format.json { render json: @pub_quiz_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pub_quiz_answers/1
  # DELETE /pub_quiz_answers/1.json
  def destroy
    @pub_quiz_answer.destroy
    respond_to do |format|
      format.html { redirect_to pub_quiz_answers_url, notice: 'Pub quiz answer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pub_quiz_answer
      @pub_quiz_answer = PubQuizAnswer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pub_quiz_answer_params
      params.require(:pub_quiz_answer).permit(:teamname, :q1answer, :q2answer, :q3answer, :q4answer, :q5answer, :q6answer, :q7answer,:q8answer, :q9answer, :q10answer, :q11answer, :q12answer, :q13answer, :q14answer, :q15answer, :q16answer, :q17answer, :q18answer)
    end
end

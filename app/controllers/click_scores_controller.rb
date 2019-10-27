class ClickScoresController < ApplicationController
  before_action :set_click_score, only: [:show, :edit, :update, :destroy]


  # GET /click_scores
  # GET /click_scores.json
  def index
    @click_scores = ClickScore.all
  end

  # GET /top-five-rapid-clicks.json
  def top_five
    @top_five = ClickScore.top_five
  end

  # GET /click_scores/1
  # GET /click_scores/1.json
  def show
  end

  # GET /click_scores/new
  def new
    @click_score = ClickScore.new
  end

  # GET /click_scores/1/edit
  def edit
  end

  # POST /click_scores
  # POST /click_scores.json
  def create
    @click_score = ClickScore.new(click_score_params)

    respond_to do |format|
      if @click_score.save
        format.html { redirect_to @click_score, notice: 'Click score was successfully created.' }
        format.json { render :show, status: :created, location: @click_score }
      else
        puts @click_score.errors.full_messages
        format.html { render :new }
        format.json { render json: @click_score.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /click_scores/1
  # PATCH/PUT /click_scores/1.json
  def update
    respond_to do |format|
      if @click_score.update(click_score_params)
        format.html { redirect_to @click_score, notice: 'Click score was successfully updated.' }
        format.json { render :show, status: :ok, location: @click_score }
      else
        format.html { render :edit }
        format.json { render json: @click_score.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /click_scores/1
  # DELETE /click_scores/1.json
  def destroy
    @click_score.destroy
    respond_to do |format|
      format.html { redirect_to click_scores_url, notice: 'Click score was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destroy_all
    ClickScore.all.destroy_all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_click_score
      @click_score = ClickScore.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def click_score_params
      params.require(:click_score).permit(:name, :score)
    end
end

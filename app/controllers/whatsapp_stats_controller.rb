class WhatsappStatsController < ApplicationController
  before_action :set_whatsapp_stat, only: [:show, :edit, :update, :destroy]

  # GET /whatsapp_stats
  # GET /whatsapp_stats.json
  def index
    @whatsapp_stats = WhatsappStat.all
  end

  # GET /whatsapp_stats/1
  # GET /whatsapp_stats/1.json
  def show
  end

  # GET /whatsapp_stats/new
  def new
    @whatsapp_stat = WhatsappStat.new
  end

  # GET /whatsapp_stats/1/edit
  def edit
  end

  # POST /whatsapp_stats
  # POST /whatsapp_stats.json
  def create
    @whatsapp_stat = WhatsappStat.new(whatsapp_stat_params)

    respond_to do |format|
      if @whatsapp_stat.save
        format.html { redirect_to @whatsapp_stat, notice: 'Whatsapp stat was successfully created.' }
        format.json { render :index, status: :created, location: @whatsapp_stat }
      else
        format.html { render :show }
        format.json { render json: @whatsapp_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /whatsapp_stats/1
  # PATCH/PUT /whatsapp_stats/1.json
  def update
    respond_to do |format|
      if @whatsapp_stat.update(whatsapp_stat_params)
        format.html { redirect_to @whatsapp_stat, notice: 'Whatsapp stat was successfully updated.' }
        format.json { render :show, status: :ok, location: @whatsapp_stat }
      else
        format.html { render :edit }
        format.json { render json: @whatsapp_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /whatsapp_stats/1
  # DELETE /whatsapp_stats/1.json
  def destroy
    @whatsapp_stat.destroy
    respond_to do |format|
      format.html { redirect_to whatsapp_stats_url, notice: 'Whatsapp stat was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_whatsapp_stat
      @whatsapp_stat = WhatsappStat.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def whatsapp_stat_params
      params.require(:whatsapp_stat).permit(:phrase, :hugo_frequency, :sarah_frequency, :months_frequency, :hugo_months_frequency, :sarah_months_frequency)
    end
end

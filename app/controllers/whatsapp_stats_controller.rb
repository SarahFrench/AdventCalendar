class WhatsappStatsController < ApplicationController
  before_action :set_whatsapp_stat, only: [:show, :edit, :update, :destroy]

  def init
    if !WhatsappStat.any?
      WhatsappStat.create(phrase:"Opera", slug: "opera", hugo_frequency: 117, sarah_frequency: 55, months_frequency: '{"0":21,"1":33,"2":30,"3":15,"4":17,"5":8,"6":12,"7":7,"8":1,"9":11,"10":0,"11":17}', hugo_months_frequency: '{"0":16,"1":22,"2":18,"3":13,"4":12,"5":6,"6":10,"7":4,"8":0,"9":5,"10":0,"11":11}', sarah_months_frequency: '{"0":5,"1":11,"2":12,"3":2,"4":5,"5":2,"6":2,"7":3,"8":1,"9":6,"10":0,"11":6}')
      WhatsappStat.create(phrase:"Nerd", slug: "nerd", hugo_frequency: 80, sarah_frequency: 41, months_frequency: '{"0":20,"1":12,"2":18,"3":16,"4":2,"5":12,"6":7,"7":8,"8":12,"9":8,"10":1,"11":5}', hugo_months_frequency: '{"0":15,"1":9,"2":12,"3":11,"4":1,"5":8,"6":5,"7":5,"8":5,"9":5,"10":1,"11":3}', sarah_months_frequency: '{"0":5,"1":3,"2":6,"3":5,"4":1,"5":4,"6":2,"7":3,"8":7,"9":3,"10":0,"11":2}')
      WhatsappStat.create(phrase:"heart emoji", slug: "heart-emoji", hugo_frequency: 12, sarah_frequency: 78, months_frequency: '{"0":5,"1":10,"2":11,"3":11,"4":8,"5":14,"6":15,"7":7,"8":6,"9":2,"10":1,"11":0}', hugo_months_frequency: '{"0":2,"1":6,"2":2,"3":0,"4":1,"5":0,"6":0,"7":1,"8":0,"9":0,"10":0,"11":0}', sarah_months_frequency: '{"0":3,"1":4,"2":9,"3":11,"4":7,"5":14,"6":15,"7":6,"8":6,"9":2,"10":1,"11":0}')
      WhatsappStat.create(phrase:"Runescape", slug: "runescape", hugo_frequency: 76, sarah_frequency: 32, months_frequency: '{"0":10,"1":26,"2":10,"3":13,"4":2,"5":3,"6":3,"7":7,"8":0,"9":1,"10":0,"11":33}', hugo_months_frequency: '{"0":8,"1":18,"2":9,"3":8,"4":1,"5":2,"6":2,"7":4,"8":0,"9":1,"10":0,"11":23}', sarah_months_frequency: '{"0":2,"1":8,"2":1,"3":5,"4":1,"5":1,"6":1,"7":3,"8":0,"9":0,"10":0,"11":10}')
      WhatsappStat.create(phrase:"GIF", slug: "gif", hugo_frequency: 169, sarah_frequency: 251, months_frequency: '{"0":119,"1":70,"2":59,"3":25,"4":28,"5":22,"6":16,"7":16,"8":8,"9":7,"10":0,"11":50}', hugo_months_frequency: '{"0":58,"1":34,"2":20,"3":7,"4":8,"5":10,"6":3,"7":3,"8":2,"9":0,"10":0,"11":24}', sarah_months_frequency: '{"0":61,"1":36,"2":39,"3":18,"4":20,"5":12,"6":13,"7":13,"8":6,"9":7,"10":0,"11":26}')
      WhatsappStat.create(phrase:";)", slug: "wink", hugo_frequency: 134, sarah_frequency: 239, months_frequency: '{"0":89,"1":74,"2":52,"3":33,"4":13,"5":7,"6":24,"7":11,"8":9,"9":10,"10":1,"11":50}', hugo_months_frequency: '{"0":31,"1":25,"2":19,"3":9,"4":6,"5":1,"6":5,"7":4,"8":2,"9":4,"10":1,"11":27}', sarah_months_frequency: '{"0":58,"1":49,"2":33,"3":24,"4":7,"5":6,"6":19,"7":7,"8":7,"9":6,"10":0,"11":23}')
      WhatsappStat.create(phrase:"xxx", slug: "xxx", hugo_frequency: 593, sarah_frequency: 436, months_frequency: '{"0":14,"1":90,"2":159,"3":206,"4":109,"5":109,"6":148,"7":61,"8":85,"9":45,"10":3,"11":0}', hugo_months_frequency: '{"0":11,"1":58,"2":106,"3":118,"4":59,"5":66,"6":85,"7":29,"8":41,"9":18,"10":2,"11":0}', sarah_months_frequency: '{"0":3,"1":32,"2":53,"3":88,"4":50,"5":43,"6":63,"7":32,"8":44,"9":27,"10":1,"11":0}')
      WhatsappStat.create(phrase:"Love", slug: "love", hugo_frequency: 497, sarah_frequency: 263, months_frequency: '{"0":59,"1":60,"2":49,"3":108,"4":88,"5":94,"6":114,"7":53,"8":57,"9":29,"10":3,"11":46}', hugo_months_frequency: '{"0":47,"1":46,"2":40,"3":70,"4":57,"5":53,"6":63,"7":31,"8":33,"9":18,"10":2,"11":37}', sarah_months_frequency: '{"0":12,"1":14,"2":9,"3":38,"4":31,"5":41,"6":51,"7":22,"8":24,"9":11,"10":1,"11":9}')
      WhatsappStat.create(phrase:"Love-you", slug: "love-you", hugo_frequency: 179,sarah_frequency: 180, months_frequency: '{"0":3,"1":2,"2":5,"3":59,"4":56,"5":58,"6":71,"7":33,"8":47,"9":23,"10":2,"11":0}', hugo_months_frequency: '{"0":2,"1":1,"2":3,"3":31,"4":29,"5":27,"6":33,"7":15,"8":25,"9":12,"10":1,"11":0}', sarah_months_frequency: '{"0":1,"1":1,"2":2,"3":28,"4":27,"5":31,"6":38,"7":18,"8":22,"9":11,"10":1,"11":0}')
      WhatsappStat.create(phrase:"REE", slug: "ree", hugo_frequency: 70, sarah_frequency: 102, months_frequency: '{"0":0,"1":1,"2":27,"3":34,"4":11,"5":14,"6":29,"7":33,"8":14,"9":8,"10":1,"11":0}', hugo_months_frequency: '{"0":0,"1":0,"2":10,"3":17,"4":8,"5":1,"6":10,"7":13,"8":8,"9":3,"10":0,"11":0}', sarah_months_frequency: '{"0":0,"1":1,"2":17,"3":17,"4":3,"5":13,"6":19,"7":20,"8":6,"9":5,"10":1,"11":0}')
      WhatsappStat.create(phrase:"Shit", slug: "shit", hugo_frequency: 294, sarah_frequency: 153, months_frequency: '{"0":42,"1":41,"2":71,"3":51,"4":46,"5":43,"6":62,"7":26,"8":15,"9":15,"10":1,"11":34}', hugo_months_frequency: '{"0":33,"1":27,"2":49,"3":35,"4":28,"5":24,"6":41,"7":19,"8":10,"9":7,"10":1,"11":20}', sarah_months_frequency: '{"0":9,"1":14,"2":22,"3":16,"4":18,"5":19,"6":21,"7":7,"8":5,"9":8,"10":0,"11":14}')
    end
    redirect_to whatsapp_stats_path
  end

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
      @whatsapp_stat = WhatsappStat.friendly.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def whatsapp_stat_params
      params.require(:whatsapp_stat).permit(:phrase,:slug, :hugo_frequency, :sarah_frequency, :months_frequency, :hugo_months_frequency, :sarah_months_frequency)
    end
end

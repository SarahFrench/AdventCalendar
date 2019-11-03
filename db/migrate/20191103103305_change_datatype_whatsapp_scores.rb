class ChangeDatatypeWhatsappScores < ActiveRecord::Migration[5.2]
  def change
    change_column :whatsapp_stats, :months_frequency, :string
  end
end

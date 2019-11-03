class AddColumnsToWhatsappStats < ActiveRecord::Migration[5.2]
  def change
    add_column :whatsapp_stats, :phrase, :string
    add_column :whatsapp_stats, :hugo_frequency, :integer
    add_column :whatsapp_stats, :sarah_frequency, :integer
    add_column :whatsapp_stats, :months_frequency, :integer
    add_column :whatsapp_stats, :hugo_months_frequency, :string
    add_column :whatsapp_stats, :sarah_months_frequency, :string
  end
end

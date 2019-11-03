class AddSlugToWhatsappStats < ActiveRecord::Migration[5.2]
  def change
    add_column :whatsapp_stats, :slug, :string
    add_index :whatsapp_stats, :slug, unique: true
  end
end

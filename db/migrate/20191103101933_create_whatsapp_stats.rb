class CreateWhatsappStats < ActiveRecord::Migration[5.2]
  def change
    create_table :whatsapp_stats do |t|

      t.timestamps
    end
  end
end

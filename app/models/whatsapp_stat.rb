class WhatsappStat < ApplicationRecord
  extend FriendlyId
  friendly_id :phrase, use: :slugged
end

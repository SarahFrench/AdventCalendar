# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
Rails.application.config.assets.precompile += %w[
  homepage/*.js
  1-pong/*.js
  3-eyebrows/*.js
  5-connect/*.js
  6-audio/*.js
  7-rapid/*.js
  8-whatsapp/*.js
  19-geolocation/*.js
  20-crossword/*.js
  21-troll-bar/*.js
  22-samoyed/*.js
]

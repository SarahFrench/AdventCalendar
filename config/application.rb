require_relative 'boot'

require 'rails/all'
# can pick and choose what to use
# use code from https://github.com/rails/rails/blob/master/railties/lib/rails/all.rb
# but you'll need to remove all references to what you remove elsewhere in project


# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AdventCalendar
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.assets.precompile << "audios/*"
    config.assets.precompile << "videos/*"
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end

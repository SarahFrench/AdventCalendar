require_relative 'boot'

# require 'rails/all
# instead of above, use code from https://github.com/rails/rails/blob/master/railties/lib/rails/all.rb
# deleted stuff that's not needed for this project
require "rails"

%w(
  action_controller/railtie
  action_view/railtie
  rails/test_unit/railtie
  sprockets/railtie
).each do |railtie|
  begin
    require railtie
  rescue LoadError
  end
end

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AdventCalendar
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end

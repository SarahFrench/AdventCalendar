Rails.application.routes.draw do
  resources :answers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  get '/about', to: 'home#about'
  resources :challenges, only: [:show], path: '/days'

  get '/delete-local-storage', to: 'home#delete-local-storage'
end

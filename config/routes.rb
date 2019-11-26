Rails.application.routes.draw do
  resources :drawings
  root to: 'home#index'
  get '/about', to: 'home#about'

  get '/days', to: redirect('/')
  get '/days/10', to: redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  resources :challenges, only: [:show], path: '/days'

  resources :audio_quiz_answers, only: [:index, :new, :create, :destroy]
  resources :whatsapp_stats
  resources :click_scores

  get '/crossword-answers', to: 'crossword#answers'
  get '/top-five-rapid-clicks', to: 'click_scores#top_five'
  get '/rm-crossword-info', to: 'challenges#forget_crossword_answers'
  post '/days/check-crossword', to: 'challenges#check_crossword'
  get '/initialise-whatsapp-stats', to: 'whatsapp_stats#init'
  get '/delete-click-scores', to: 'click_scores#destroy_all'
  get '/delete-local-storage', to: 'home#delete-local-storage'
  get '/youve-been-bad', to: 'home#youve-been-bad'
end

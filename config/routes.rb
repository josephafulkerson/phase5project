Rails.application.routes.draw do
  
  resources :watchlists, only: [:index, :create]
  resources :users

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  get '/profile', to: 'watchlists#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end

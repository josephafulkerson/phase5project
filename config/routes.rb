Rails.application.routes.draw do
  
  resources :watchlist_items, only: [:create, :index]
  resources :users

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  get '/profile', to: 'watchlist_items#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end

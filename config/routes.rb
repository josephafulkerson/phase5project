Rails.application.routes.draw do

  namespace :api do 
  
  resources :watchlist_items, only: [:create, :index, :destroy]
  resources :users

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  get '/profile', to: 'watchlist_items#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  end
  
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

end

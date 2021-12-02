Rails.application.routes.draw do
  
  resources :watchlists, only: [:index, :create]
  resources :users

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
end

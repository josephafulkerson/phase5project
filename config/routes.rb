Rails.application.routes.draw do
  
  resources :watchlists
  resources :users
  get '/hello', to: 'application#hello_world'
end

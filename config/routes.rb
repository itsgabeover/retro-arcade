Rails.application.routes.draw do
  resources :games
  resources :users, except: :show
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '', to: 'users#create'
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end

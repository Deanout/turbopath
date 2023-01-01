Rails.application.routes.draw do
  root 'pages#home'
  get "pathfindout", to: "pages#pathfindout"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

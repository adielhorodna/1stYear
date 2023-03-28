Rails.application.routes.draw do
  resources :scribbles, only: [:index, :show, :create] 
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :cards, only: [:index, :show]
  resources :moms, only: [:index, :show, :create]

  # custom routes:
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "moms#create"
  get "/me", to: "moms#show"
  get "/myposts", to: "posts#index"
  get "myscribbles", to: "scribbles#index"
  # create a custom route to show users personal posts and scribbles:




  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # route to test your configuration
    # get '/hello', to: 'application#hello_world'

    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  end



Rails.application.routes.draw do
  root 'team#home'
  get '/teams/new', to: 'team#new', as: 'new_cricket_team'
  post '/teams', to: 'team#create'
  get '/teams', to: 'team#index', as: 'cricket_teams'
  get '/team/:id', to: 'team#show', as: 'cricket_team'
  get '/team/:id/edit', to: 'team#edit', as: 'edit_cricket_team'
  patch '/team/:id', to: 'team#update'
  delete '/team/:id/delete', to: 'team#destroy', as: 'delete_cricket_team'
  
  get '/players', to: 'player#index', as: 'players'
  post '/players', to: 'player#create'
  get '/players/new', to: 'player#new', as: 'new_player'
  get '/players/:id/edit', to: 'player#edit', as: 'edit_player'
  get '/players/:id', to: 'player#show', as: 'player'
  patch  '/players/:id', to: 'player#update'
  delete '/players/:id', to: 'player#destroy', as: 'delete_player'
  
  get '/team/:id/players', to: 'team#listPlayers', as: 'team_players_list'
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

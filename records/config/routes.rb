Rails.application.routes.draw do
 
  root 'engineers#home'
  get '/employees/new', to: 'engineers#new', as: 'new_engineer'
  post '/employees/create', to: 'engineers#create', as: 'create_new_engineer'
  get '/employees/all', to: 'engineers#index', as: 'engineers'
  get '/employee/:id', to: 'engineers#show', as: 'engineer'
  get '/employee/:id/edit', to: 'engineers#edit', as: 'edit_engineer'
  post '/employee/:id/update', to: 'engineers#update', as: 'update_engineer'
  delete '/employee/:id/delete', to: 'engineers#destroy', as: 'delete_engineer'
  get '/employees/all/developers', to: 'engineers#developers', as: 'developers'
  get '/employee/developer/:id/edit', to: 'engineers#editDevelopers', as: 'edit_developers'
  
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

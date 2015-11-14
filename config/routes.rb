# == Route Map
#
#                   Prefix Verb   URI Pattern                                       Controller#Action
#         new_user_session GET    /users/sign_in(.:format)                          devise/sessions#new
#             user_session POST   /users/sign_in(.:format)                          devise/sessions#create
#     destroy_user_session DELETE /users/sign_out(.:format)                         devise/sessions#destroy
#            user_password POST   /users/password(.:format)                         devise/passwords#create
#        new_user_password GET    /users/password/new(.:format)                     devise/passwords#new
#       edit_user_password GET    /users/password/edit(.:format)                    devise/passwords#edit
#                          PATCH  /users/password(.:format)                         devise/passwords#update
#                          PUT    /users/password(.:format)                         devise/passwords#update
# cancel_user_registration GET    /users/cancel(.:format)                           devise/registrations#cancel
#        user_registration POST   /users(.:format)                                  devise/registrations#create
#    new_user_registration GET    /users/sign_up(.:format)                          devise/registrations#new
#   edit_user_registration GET    /users/edit(.:format)                             devise/registrations#edit
#                          PATCH  /users(.:format)                                  devise/registrations#update
#                          PUT    /users(.:format)                                  devise/registrations#update
#                          DELETE /users(.:format)                                  devise/registrations#destroy
#               click_data GET    /api/click_data(.:format)                         click_data#index
#                          POST   /api/click_data(.:format)                         click_data#create
#              click_datum GET    /api/click_data/:id(.:format)                     click_data#show
#                          PATCH  /api/click_data/:id(.:format)                     click_data#update
#                          PUT    /api/click_data/:id(.:format)                     click_data#update
#                          DELETE /api/click_data/:id(.:format)                     click_data#destroy
#                    users GET    /api/users(.:format)                              users#index
#                          POST   /api/users(.:format)                              users#create
#                     user GET    /api/users/:id(.:format)                          users#show
#                          PATCH  /api/users/:id(.:format)                          users#update
#                          PUT    /api/users/:id(.:format)                          users#update
#                          DELETE /api/users/:id(.:format)                          users#destroy
#           users_password POST   /api/users/password(.:format)                     users#password
#                   tokens GET    /api/tokens(.:format)                             tokens#index
#                          POST   /api/tokens(.:format)                             tokens#create
#                    token GET    /api/tokens/:id(.:format)                         tokens#show
#                          PATCH  /api/tokens/:id(.:format)                         tokens#update
#                          PUT    /api/tokens/:id(.:format)                         tokens#update
#                          DELETE /api/tokens/:id(.:format)                         tokens#destroy
#      upvote_post_comment PUT    /api/posts/:post_id/comments/:id/upvote(.:format) comments#upvote
#            post_comments GET    /api/posts/:post_id/comments(.:format)            comments#index
#                          POST   /api/posts/:post_id/comments(.:format)            comments#create
#             post_comment GET    /api/posts/:post_id/comments/:id(.:format)        comments#show
#                          PATCH  /api/posts/:post_id/comments/:id(.:format)        comments#update
#                          PUT    /api/posts/:post_id/comments/:id(.:format)        comments#update
#                          DELETE /api/posts/:post_id/comments/:id(.:format)        comments#destroy
#              upvote_post PUT    /api/posts/:id/upvote(.:format)                   posts#upvote
#                    posts GET    /api/posts(.:format)                              posts#index
#                          POST   /api/posts(.:format)                              posts#create
#                     post GET    /api/posts/:id(.:format)                          posts#show
#                          PATCH  /api/posts/:id(.:format)                          posts#update
#                          PUT    /api/posts/:id(.:format)                          posts#update
#                          DELETE /api/posts/:id(.:format)                          posts#destroy
#

Rails.application.routes.draw do

  devise_for :users
  scope '/api' do
    resources :click_data, except: [:new, :edit]
    resources :users, except: [:new, :edit]

    post '/users/password', to: 'users#password'

    resources :tokens, except: [:new, :edit]

    resources :posts, except: [:new, :edit] do
    resources :comments, except: [:new, :edit] do
        member do
          put '/upvote' => 'comments#upvote'
        end
      end

      member do
        put '/upvote' => 'posts#upvote'
      end
    end
  end
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

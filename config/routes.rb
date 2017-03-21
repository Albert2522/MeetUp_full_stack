Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:create, :show, :destroy, :index]
    resources :images, only: [:create, :destroy]
    resources :img_rel, only: [:create, :update, :destroy]
    resources :groups, only: [:create, :update, :destroy, :show]
    resources :memberships, only: [:create, :destroy]
  end

  root "static_pages#root"
end

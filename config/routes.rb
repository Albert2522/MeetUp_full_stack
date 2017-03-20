Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:create, :show, :destroy, :index]
    resources :images, only: [:create, :destroy]
    resources :img_rel, only: [:create, :update, :destroy]
  end

  root "static_pages#root"
end

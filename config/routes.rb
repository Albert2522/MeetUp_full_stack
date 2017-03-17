Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resource :events, only: [:create, :show, :destroy]
  end

  root "static_pages#root"
end

Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root  to: 'dashboard#index'
  devise_for :users, controllers: { sessions: 'sessions', registrations:'registrations' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :weeks,        only: :update
  resources :expenses,     only: :create

  resources :comparisons,  only: :index
  get '/settings', to: 'dashboard#settings'
end

Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root  to: 'dashboard#index'
  devise_for :users, controller: { :sessions => 'sessions', :registrations => 'registrations' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :weeks,        only: :update
  resources :expenditures, only: :update
  resources :comparisons,  only: [:index]

end

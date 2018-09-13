Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :verses
      resources :prayers
    end
  end
end

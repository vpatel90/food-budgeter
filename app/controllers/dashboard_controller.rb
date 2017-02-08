class DashboardController < ApplicationController

  def index
    if user_signed_in?
      @week = current_user.find_week
    end
  end
end

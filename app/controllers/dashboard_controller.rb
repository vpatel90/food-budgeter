class DashboardController < ApplicationController

  def index
    if user_signed_in?
      @week = current_user.current_week
    end
  end

end
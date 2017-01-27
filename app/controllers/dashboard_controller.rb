class DashboardController < ApplicationController

  def index
    if user_signed_in?
      @week = current_user.find_week(0)
    end
  end

end

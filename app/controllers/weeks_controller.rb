class WeeksController < ApplicationController
  
  before_action :load_week

  def update
    if params[:budget]
      @week.add_budget(params[:budget])
    elsif params[:meals]
      @week.add_meal
    end
    redirect_to :back
  end

protected

  def load_week
    @week = Week.find(params[:id])
  end

end
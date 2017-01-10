class WeeksController < ApplicationController
  
  before_action :load_week

  def update
    @week.add_meal
    render json: { week: @week }
  end

protected

  def load_week
    @week = Week.find(params[:id])
  end

end
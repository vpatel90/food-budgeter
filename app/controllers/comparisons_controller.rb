class ComparisonsController < ApplicationController

  def index
    @weeks = current_user.weeks.order(end: :asc)
  end
  
end

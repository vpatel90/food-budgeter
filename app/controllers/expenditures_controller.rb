class ExpendituresController < ApplicationController
  
  before_action :load_expenditure

  def update
    if params[:groceries]
      @expenditure.add_to_groceries(params[:groceries])
    elsif params[:resturants]
      @expenditure.add_to_resturants(params[:resturants])
    end
    redirect_to :back
  end

protected

  def load_expenditure
    @expenditure = Expenditure.find(params[:id])
  end

end
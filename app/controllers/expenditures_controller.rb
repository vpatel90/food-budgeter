class ExpendituresController < ApplicationController
  
  before_action :load_expenditure

  def update
    @expenditure.send("add_to_#{params[:expenditure][:type]}", params[:expenditure][:amount])
    render json: { week: @expenditure.week, expenditure: @expenditure }
  end

protected

  def load_expenditure
    @expenditure = Expenditure.find(params[:id])
  end

end
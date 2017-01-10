class ExpendituresController < ApplicationController

  before_action :load_expenditure

  def update
    method_to_call = params[:expenditure][:type] == 'groceries' ? :add_to_groceries : :add_to_restaurants
    @expenditure.send(method_to_call, params[:expenditure][:amount])
    render json: { week: @expenditure.week, expenditure: @expenditure }
  end

protected

  def load_expenditure
    @expenditure = Expenditure.find(params[:id])
  end

end

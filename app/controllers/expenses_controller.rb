class ExpensesController < ApplicationController

  def create
    week = current_user.current_week
    week.expenses.create(amount: params[:expenses][:amount], manner: params[:expenses][:type])
    render json: { week: week }
  end

protected

  def load_expenditure
    @expenditure = Expenditure.find(params[:id])
  end

end
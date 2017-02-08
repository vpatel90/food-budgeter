class ExpensesController < ApplicationController
  def create
    week = params[:expenses][:next_week] == 'true' ? get_next_week : get_this_week
    week.expenses.create(expense_params)
    render json: { week: get_this_week }
  end

  protected
  def get_this_week
    current_user.find_week
  end

  def get_next_week
    current_user.find_week(true)
  end

  def expense_params
    params.require(:expenses).permit(:amount, :manner)
  end
end

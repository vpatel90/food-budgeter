class ExpensesController < ApplicationController
  def create
    current_week = current_user.find_week(0.week)
    next_week = current_user.find_week(1.week) if params[:expenses][:week] == "true"
    if params[:expenses][:amount].present?
      week = next_week || current_week
      week.expenses.create(amount: params[:expenses][:amount], manner: params[:expenses][:type])
    end
    render json: { week: current_week }
  end
end

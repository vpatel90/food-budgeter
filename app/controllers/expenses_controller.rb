class ExpensesController < ApplicationController

  def create
    if params[:expenses][:week] == "false"
      week = current_user.find_week(0.week)
    else
      week = current_user.find_week(1.week)
    end
    if params[:expenses][:amount].present?
      week.expenses.create(amount: params[:expenses][:amount], manner: params[:expenses][:type])
    end
    render json: { week: week }
    puts "hi there!"
  end
end

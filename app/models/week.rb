class Week < ApplicationRecord
  
  belongs_to :user

  def add_budget(spending)
    self.budget += spending.to_f
    save
  end


  def add_meal
    self.meals += 1
    save
  end

  def average
    average = budget / meals
    average.round(2)
  end

  def saved_money?(hypothetical_spent)
    hypothetical_spent - budget > 0 ? true : false
  end

  def savings_message(hypothetical_spent)
    difference = hypothetical_spent - budget

    if difference > 0
      "You've saved $#{difference}"
    elsif difference < 0
      "You've overspent $#{difference.abs}"
    else
      "You've spent exactly the same"
    end
  end

end

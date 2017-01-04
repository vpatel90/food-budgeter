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

end

class Expenditure < ApplicationRecord

  belongs_to :week

  def add_to_groceries(spending)
    self.groceries += spending.to_f
    save
  end

  def add_to_restaurants(spending)
    self.restaurants += spending.to_f
    save
  end
  
end

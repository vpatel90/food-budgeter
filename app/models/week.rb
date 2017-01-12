class Week < ApplicationRecord

  belongs_to :user
  has_one :expenditure
  # has_many :meals

  after_create :create_expenditure

  def total_expenditure
    expenditure.groceries + expenditure.restaurants
  end

  def add_meal
    self.meals += 1
    save
  end

  def average
    average = total_expenditure / meals
    average.nan? || average.infinite? ? 0 : average.round(2)
  end

  def saved_money?(hypothetical_spent)
    hypothetical_spent - total_expenditure > 0 ? true : false
  end

  def savings_message(hypothetical_spent)
    difference = hypothetical_spent - total_expenditure

    if difference > 0
      "You've saved $#{difference}"
    elsif difference < 0
      "You've overspent $#{difference.abs}"
    else
      "You've spent exactly the same"
    end
  end

  def as_json(_ = nil)
    super(methods: [:average])
  end

end

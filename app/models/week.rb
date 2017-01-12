class Week < ApplicationRecord

  belongs_to :user
  has_one :expenditure
  # has_many :meals

  after_create :create_expenditure

  def total_expenditure
    expenditure.groceries + expenditure.restaurants
  end

  def total_meals
    meals.count
  end

  def add_meal(manner, free = false)
    meals.create(manner: manner, free: free)
  end

  def average
    average = total_expenditure / total_meals
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
    super(methods: [:average, :total_meals])
  end

end

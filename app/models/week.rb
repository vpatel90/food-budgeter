class Week < ApplicationRecord

  belongs_to :user
  has_one :expenditure
  has_many :meals

  after_create :create_expenditure

  def total_expenditure
    expenditure.groceries + expenditure.restaurants
  end

  def total_meals
    meals.count
  end

  def ate_in_meals
    meals.ate_in.count
  end

  def ate_out_meals
    meals.ate_out.count
  end

  def add_meal(m, free = false)
    manner = m == 'groceries' ? 'eat_in' : 'eat_out'
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
    super(methods: [:average, :total_meals, :ate_in_meals, :ate_out_meals])
  end

end

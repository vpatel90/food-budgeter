class Expense < ApplicationRecord

  belongs_to :week

  validates :manner, inclusion: { in: %w(restaurants groceries),
            message: "%{value} is not a valid" }

  before_create :set_spent_at #TODO: In the future we will have the user select date/time default Today

  scope :groceries, -> { where(manner: 'groceries') }
  scope :restaurants, -> { where(manner: 'restaurants') }
  

protected

  def set_spent_at
    self.spent_at = Time.now
  end

end

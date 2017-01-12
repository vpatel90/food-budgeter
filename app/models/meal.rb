class Meal < ApplicationRecord

  # belongs_to :week
  validates :type, inclusion: { in: %w(eat_in eat_out),
    message: "%{value} is not a valid" }

end

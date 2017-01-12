class Meal < ApplicationRecord
  
  belongs_to :week
  validates :manner, inclusion: { in: %w(eat_in eat_out),
    message: "%{value} is not a valid" }

end

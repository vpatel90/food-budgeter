class Meal < ApplicationRecord
  
  belongs_to :week
  validates :manner, inclusion: { in: %w(eat_in eat_out),
    message: "%{value} is not a valid" }

  scope :ate_out, -> { where(manner: 'eat_out') }
  scope :ate_in, -> { where(manner: 'eat_in') }

end

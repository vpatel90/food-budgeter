class Meal < ApplicationRecord
  
  belongs_to :week
  validates :manner, inclusion: { in: %w(eat_in eat_out),
            message: "%{value} is not a valid" }

  before_create :set_ate_at #TODO: In the future we will have the user select date/time default Today

  scope :ate_out, -> { where(manner: 'eat_out') }
  scope :ate_in, -> { where(manner: 'eat_in') }


protected

  def set_ate_at
    self.ate_at = Time.now
  end
  
end

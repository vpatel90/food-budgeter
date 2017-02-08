class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :weeks

  CST = 'Central Time (US & Canada)'

  def find_week(next_week = false)
    week_end_time = Time.now.in_time_zone(CST).end_of_week
    week_end_time = week_end_time + 1.week if next_week
    weeks.where(end: week_end_time).first_or_create(start: week_end_time.beginning_of_week)
  end
end

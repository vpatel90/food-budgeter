class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :weeks

  CST = 'Central Time (US & Canada)'

  def find_week(week)
    week_cst_time_zone = (Time.now + week).in_time_zone(CST)

    if week_exists = weeks.find_by(end: week_cst_time_zone.end_of_week)
      week_exists
    else
      weeks.create(start: week_cst_time_zone.beginning_of_week,
                   end:   week_cst_time_zone.end_of_week)
    end
  end

end

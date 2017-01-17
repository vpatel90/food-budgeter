class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :weeks

  CST = 'Central Time (US & Canada)'

  def current_week
    if weeks.last && Time.now.in_time_zone(CST) < weeks.last.end
      weeks.last
    else
      weeks.create(start: Time.now.in_time_zone(CST).beginning_of_week,
                   end: Time.now.in_time_zone(CST).end_of_week)
    end
  end

end

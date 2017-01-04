class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :weeks

  def current_week
    if weeks.last && Time.now < weeks.last.end
      weeks.last
    else
      weeks.create(start: Time.now.beginning_of_week,
                   end: Time.now.end_of_week)
    end
  end

end

class RemoveMealsTableFromWeek < ActiveRecord::Migration[5.0]
  def change
    Week.all.each do |week|
      week.create_meal(eat_in: week.type)
    end

    remove_column :weeks, :meals
  end
end

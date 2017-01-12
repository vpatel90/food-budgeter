class RemoveMealsTableFromWeek < ActiveRecord::Migration[5.0]
  def change
    Week.all.each do |week|
      week.meals.times do
        Meal.create(manner: "eat_in", week_id: week.id)
      end
    end

    remove_column :weeks, :meals
  end
end

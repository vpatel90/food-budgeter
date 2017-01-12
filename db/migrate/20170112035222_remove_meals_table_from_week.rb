class RemoveMealsTableFromWeek < ActiveRecord::Migration[5.0]
  def change
    Week.all.each do |week|
      week.meals.create(type: "eat_in")
    end

    remove_column :weeks, :meals
  end
end

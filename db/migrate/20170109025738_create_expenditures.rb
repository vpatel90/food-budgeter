class CreateExpenditures < ActiveRecord::Migration[5.0]
  def change
    create_table :expenditures do |t|
      t.belongs_to :week, foreign_key: true
      t.float :groceries, default: 0.0
      t.float :restaurants, default: 0.0

      t.timestamps
    end

    Week.all.each do |week|
      week.create_expenditure(groceries: week.budget)
    end

    remove_column :weeks, :budget
  end
end

class AddTableExpenses < ActiveRecord::Migration[5.0]
  def up
    create_table :expenses do |t|
      t.belongs_to :week, foreign_key: true
      t.string  :manner
      t.float :amount, default: 0.0
      t.datetime :spent_at

      t.timestamps
    end

    add_column :meals, :ate_at, :datetime

    Week.all.each do |w|
      w.expenses.create(manner: 'groceries', amount: w.expenditure.groceries, created_at: w.start + 12.hours)
      w.expenses.create(manner: 'restaurants', amount: w.expenditure.restaurants, created_at: w.start + 12.hours)
    end

    Meal.all.each do |m|
      if m.created_at >= m.week.start && m.created_at <= m.week.end
        m.update(ate_at: m.created_at)
      else
        m.update(ate_at: m.week.start + 12.hours)
      end
    end
  end

  def down
    remove_column :meals, :ate_at
    drop_table :expenses
  end

end

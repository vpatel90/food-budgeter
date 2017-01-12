class AddMealsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :meals do |t|
      t.belongs_to :week, foreign_key: true
      t.string  :type
      t.boolean :free, default: false

      t.timestamps
    end
  end
end

class CreateWeeks < ActiveRecord::Migration[5.0]
  def change
    create_table :weeks do |t|
      t.belongs_to :user
      t.integer :meals, default: 0
      t.float :budget, default: 0.0
      t.datetime :start
      t.datetime :end
      t.timestamps
    end
  end
end

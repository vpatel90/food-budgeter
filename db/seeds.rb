# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(email: 'admin@example.com', password: 'password')
u2 = User.create(email: 'user@example.com', password: 'password')


w1 = u1.current_week
w2 = u2.current_week

w1.expenditure.update(groceries: 32.6, restaurants: 22.4)
w2.expenditure.update(groceries: 43.6, restaurants: 0)

6.times do
  w1.meals.create(manner: 'eat_in')
end

2.times do
  w1.meals.create(manner: 'eat_out')
end

9.times do
  w2.meals.create(manner: 'eat_in')
end

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


6.times do
  w1.meals.create(manner: 'eat_in')
end
w1.expenses.create(manner: 'groceries', amount: 32.5)

2.times do
  w1.meals.create(manner: 'eat_out')
  w1.expenses.create(manner: 'restaurants', amount: 12.32)
end

9.times do
  w2.meals.create(manner: 'eat_in')
end
w2.expenses.create(manner: 'groceries', amount: 42.5)

10.times do
  Artist.create(
    name: Faker::Artist.name
  )
end

puts "10 Artists Seeded"


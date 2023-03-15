# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# puts "Deleting seeds to then reseed..."
# Mom.destroy_all
# Card.destroy_all
# Post.destroy_all
# Scribble.destroy_all

# Mom seed data:
puts "seeding moms"
Mom.create(first: "Adiel", last: "Eichenstein", email: "adiel.eich@gmail.com", password: "abcd")


# Card seed data:
puts "seeding cards"
12.times do
Card.create(title:Faker::Number.between(from: 1, to: 12 ),
image_url:"https://cdn.shopify.com/s/files/1/0189/2600/products/Safari_Rubber_0-6_2pack_NEW_600x_c48eb175-e013-447c-b469-fc7a61c30443_1000x.jpg?v=1619548128",
baby_milestone: Faker::TvShows::Suits.quote,
baby_tips: Faker::TvShows::Friends.quote,
mom_id: Mom.all.sample.id)
end

# Post seed data:
puts "seeding posts"

5.times do
    Post.create(text:Faker::TvShows::BrooklynNineNine.quote, mom_id: Mom.all.sample.id, card_id: Card.all.sample.id)
end

# Scribble seed data:
puts "seeding scribbles"
3.times do
Scribble.create(mom_id: Mom.all.sample.id, memory:Faker::TvShows::BrooklynNineNine.quote)
end

puts "done seeding"
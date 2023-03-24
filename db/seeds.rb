# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# puts "Deleting seeds to then reseed..."
Mom.destroy_all
Card.destroy_all
Post.destroy_all
Scribble.destroy_all

# Mom seed data:
puts "seeding moms"
Mom.create(first: "Adiel", last: "Eichenstein", email: "adiel.eich@gmail.com", username:"Adiel", password: "abcd", password_confirmation:"abcd")
Mom.create(first: "Tsuriel", last: "Eichenstein", email: "tsurieli@gmail.com", username:"Tsuriel", password: "love", password_confirmation: "love")
Mom.create(first: "Ella", last: "Horodna", email: "ellahorodna@yahoo.com", username:"Ella", password: "cute", password_confirmation:"cute")

# Card seed data:
puts "seeding cards"
# 12.times do
# Card.create(title:Faker::Number.between(from: 1, to: 12 ),
# image_url:"https://cdn.shopify.com/s/files/1/0189/2600/products/Safari_Rubber_0-6_2pack_NEW_600x_c48eb175-e013-447c-b469-fc7a61c30443_1000x.jpg?v=1619548128",
# baby_milestone: Faker::TvShows::Suits.quote,
# baby_tips: Faker::TvShows::Friends.quote,
# mom_id: Mom.all.sample.id)
# end



Card.create(title:1,
image_url:"https://i.pinimg.com/564x/6d/36/83/6d3683f37821d9e08f59274037472926.jpg",
baby_milestone: "Responds to familiar faces and voices.",
baby_tips: "Talk or sing to your baby to help them recognize your voice.",
mom_id: Mom.all.sample.id )
# mom_id: mom.id )


Card.create(title:2,
image_url:"https://i.pinimg.com/564x/ab/2c/06/ab2c063f497fa9943a1707ce3da83ba4.jpg",
baby_milestone: "Baby may lift their head briefly and turn it from side to side while on their tummy.",
baby_tips: "Provide plenty of tummy time to help strengthen your baby's neck muscles",
mom_id: Mom.all.sample.id )




Card.create(title:3,
image_url:"https://i.pinimg.com/564x/1c/f1/af/1cf1af12d58133d46cc75b9fc5c4ef0e.jpg",
baby_milestone: "Shows interest in their surroundings",
baby_tips: "Provide plenty of opportunities for your baby to explore different textures and objects",
mom_id: Mom.all.sample.id )




Card.create(title:4,
image_url:"https://i.pinimg.com/564x/b8/1a/3f/b81a3fb8749711d014f6b72cc953e2a6.jpg",
baby_milestone: "Laughs and smiles spontaneously",
baby_tips: "Play peek-a-boo and other interactive games to encourage your baby's social development",
mom_id: Mom.all.sample.id )




Card.create(title:5,
image_url:"https://i.pinimg.com/564x/f6/16/e4/f616e45eb7be8e64b25d824035add15a.jpg",
baby_milestone: "Begins to babble",
baby_tips: "Respond to your baby's babbling and encourage them to continue experimenting with different sounds",
mom_id: Mom.all.sample.id )




Card.create(title:6,
image_url:"https://i.pinimg.com/564x/c0/22/77/c022776ae33e96d15f4acb019b54e7e2.jpg",
baby_milestone: "Starts to recognize their own name",
baby_tips: "Use your baby's name frequently when talking to them to help them learn to recognize it" ,
mom_id: Mom.all.sample.id )




Card.create(title:7,
image_url:"https://i.pinimg.com/564x/3d/cf/b3/3dcfb3f595083312755b2526be66c16b.jpg",
baby_milestone: "Develops object permanence (understands that objects continue to exist even when out of sight)",
baby_tips: "Play peek-a-boo and other games that help reinforce the concept of object permanence",
mom_id: Mom.all.sample.id )




Card.create(title:8,
image_url:"https://i.pinimg.com/564x/5e/63/3f/5e633f8fb21d8361ace54c4666d62780.jpg",
baby_milestone: "Starts to understand simple words like 'no' or 'bye-bye'",
baby_tips: "Use simple language and gestures to help your baby understand simple commands",
mom_id: Mom.all.sample.id )




Card.create(title:9,
image_url:"https://i.pinimg.com/564x/03/63/ce/0363ce4f22f39b07834441c164fa40f6.jpg",
baby_milestone: "Develops separation anxiety",
baby_tips: "Be patient and understanding as your baby experiences separation anxiety",
mom_id: Mom.all.sample.id )




Card.create(title:10,
image_url:"https://i.pinimg.com/564x/98/ee/20/98ee2075c469bb3526afc93b0665e7f4.jpg",
baby_milestone: "Begins to and take a few steps independently",
baby_tips: "Provide a safe and supportive space for your baby to practice walking",
mom_id: Mom.all.sample.id )




Card.create(title:11,
image_url:"https://i.pinimg.com/564x/11/c3/b6/11c3b6923e29fc5250cdac128651222f.jpg",
baby_milestone: "Uses simple gestures like pointing or waving",
baby_tips: "Read to your baby and encourage them to imitate the sounds you make",
mom_id: Mom.all.sample.id )




Card.create(title:12,
image_url:"https://i.pinimg.com/564x/4f/3a/19/4f3a19399796b8d5f05f23694c755220.jpg",
baby_milestone: "Begins to understand simple sentences",
baby_tips: "Use simple sentences and clear language to help your baby understand new concepts and ideas.",
mom_id: Mom.all.sample.id )
# end




# Post seed data:
puts "seeding posts"


    Post.create(text:"We had our first family photo shoot today and I am in love with every single picture. My little one was such a natural in front of the camera and I am so grateful we have these memories to cherish forever.", mom_id: Mom.all.sample.id, card_id: Card.all.sample.id)
    Post.create(text:"Today was a tough day. My baby was cranky and fussy all day, and nothing seemed to soothe them. But then they finally fell asleep on my chest and I was reminded of how lucky I am to be their mom. It's not always easy, but it's always worth it.", mom_id: Mom.all.sample.id, card_id: Card.all.sample.id)
    Post.create(text:"Is it just me or does anyone else get emotional when their baby hits a milestone? My baby just learned to sit unassisted and I am so proud and so scared all at the same time. Where did my tiny newborn go?!", mom_id: Mom.all.sample.id, card_id: Card.all.sample.id)
    Post.create(text:"My little guy has been teething non-stop and it's been a tough couple of nights. But then he flashes that big, toothless grin and my heart just melts. Hang in there little buddy, mommy's got you!", mom_id: Mom.all.sample.id, card_id: Card.all.sample.id)
    Post.create(text:"My baby's first words were 'mama' today and I am over the moon! I think I cried happy tears for an hour straight. Can't wait to hear what other words are coming next!", mom_id: Mom.all.sample.id, card_id: Card.all.sample.id )
    Post.create(text:"Today we had our first taste of solid food, and let's just say things got messy! But seeing those little fingers pick up bits of food was the cutest thing ever!", mom_id: Mom.all.sample.id, card_id: Card.all.sample.id )


# Scribble seed data:
puts "seeding scribbles"

Scribble.create(mom_id: Mom.all.sample.id, memory:"Today my little one reached up and grabbed my hand while I was feeding them. It was such a simple gesture, but it melted my heart. I can't believe how much love I feel for this tiny human and how much they depend on me. I feel so lucky to be their mom.")
Scribble.create(mom_id: Mom.all.sample.id, memory:"I'll never forget the first time my baby said 'I love you.' They were only 9 months old, and I know they didn't understand the words yet, but they said it so clearly and looked right into my eyes. It was one of the most special moments of my life, and I'll cherish it forever.")
Scribble.create(mom_id: Mom.all.sample.id, memory: "We took our baby to the beach for the first time today. They were a little nervous at first, but then they started giggling and splashing in the waves. Seeing the pure joy on their face was such a reminder of how precious life is and how lucky I am to experience it with my child. I know there will be more challenging days ahead, but moments like these make it all worth it.")

puts "done seeding"
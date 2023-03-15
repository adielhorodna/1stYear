class Mom < ApplicationRecord
    has_many :cards
    has_many :posts, through: :cards
    has_many :scribbles

validates :first, :last, :email, presence: true
validates :password, length: { minimum: 3 }

end
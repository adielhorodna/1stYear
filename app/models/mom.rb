class Mom < ApplicationRecord
    has_secure_password

    has_many :cards
    has_many :posts, through: :cards
    has_many :scribbles
    
validates :first, :last, :email, :username, presence: true
validates :password, length: { minimum: 3 }
# validates :password, confirmation: true
# validates :password_confirmation, presence: true
end
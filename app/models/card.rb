class Card < ApplicationRecord
    # has_many :moms
    belongs_to :mom
    has_many :posts


end

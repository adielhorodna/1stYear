class Post < ApplicationRecord
    belongs_to :mom
    belongs_to :card

    validates :text, presence: true
end

class WatchlistItem < ApplicationRecord
   belongs_to :user
   validates :symbol, uniqueness: true
end

class WatchlistItem < ApplicationRecord
   belongs_to :user
   validates :symbol, :uniqueness => {:scope=>:user_id}
end

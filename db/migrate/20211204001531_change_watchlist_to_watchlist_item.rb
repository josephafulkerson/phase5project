class ChangeWatchlistToWatchlistItem < ActiveRecord::Migration[6.1]
 
    def change
      rename_table :watchlists, :watchlist_items
  end
end

class RemoveStockFromWatchlist < ActiveRecord::Migration[6.1]
  def change
    remove_column :watchlists, :stock, :string
  end
end

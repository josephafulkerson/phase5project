class AddDetailsToWatchlist < ActiveRecord::Migration[6.1]
  def change
    add_column :watchlists, :symbol, :string
    add_column :watchlists, :date, :string
    add_column :watchlists, :high, :string
    add_column :watchlists, :low, :string
    add_column :watchlists, :close, :string
  end
end

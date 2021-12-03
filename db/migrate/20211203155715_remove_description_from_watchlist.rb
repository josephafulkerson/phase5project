class RemoveDescriptionFromWatchlist < ActiveRecord::Migration[6.1]
  def change
    remove_column :watchlists, :description, :string
  end
end

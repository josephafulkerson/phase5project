class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :description, :stock, :user_id
end

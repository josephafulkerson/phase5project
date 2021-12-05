class WatchlistItemsController < ApplicationController

    def index
        watchlist = WatchlistItem.all
        render json: watchlist
    end

    def create
        watchlist = WatchlistItem.create(watchlist_params)
        render json: watchlist
    end

    def show 
        watchlist = WatchlistItem.find_by(id: session[:user_id])
        render json: watchlist
    end



    private

    def watchlist_params
        params.permit(:symbol, :date, :high, :low, :close, :user_id)
    end
end

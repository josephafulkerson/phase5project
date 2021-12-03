class WatchlistsController < ApplicationController

    def index
        watchlist = Watchlist.all
        render json: watchlist
    end

    def create
        watchlist = Watchlist.create(watchlist_params)
        render json: watchlist
    end

    def show 
        watchlist = Watchlist.find_by(id: session[:user_id])
        render json: watchlist
    end



    private

    def watchlist_params
        params.permit(:symbol, :date, :high, :low, :close, :user_id)
    end
end

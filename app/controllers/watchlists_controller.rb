class WatchlistsController < ApplicationController

    def index
        watchlist = Watchlist.all
        render json: watchlist
    end

    def create
        watchlist = Watchlist.create(watchlist_params)
        render json: watchlist
    end

    private

    def watchlist_params
        params.permit(:description, :stock, :user_id)
    end
end

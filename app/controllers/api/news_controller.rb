class Api::NewsController < ApplicationController
  require 'net/http'
  require 'uri'

  def index
    uri = URI.parse("https://newsapi.org/v2/everything?sources=Bloomberg,Reuters&q=stocks&sortBy=popularity&apiKey=b58620b0fadd46c3a1249c063789a726")
    response = Net::HTTP.get_response uri
    render json: response.body
  end
end

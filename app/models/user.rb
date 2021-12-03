class User < ApplicationRecord
    has_secure_password

    has_one :watchlist

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
end

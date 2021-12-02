class User < ApplicationRecord
    has_secure_password

    has_one :watchlist

    validates_presence_of :username
    validates_presence_of :password_digest
end

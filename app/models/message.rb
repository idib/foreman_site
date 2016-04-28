class Message < ActiveRecord::Base
  validates :text, presence: true
  validates :username, presence: true
end

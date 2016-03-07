class Player < ActiveRecord::Base
  belongs_to :cricket_team
  validates :player_name, presence: true,
    length: {minimum: 5}
  
  validates :player_age,
  numericality: {only_integer: true, greater_than: 18}
  
  validates :player_email, format: { with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/ }, confirmation: true
  
  validates :player_email_confirmation , presence: true
end

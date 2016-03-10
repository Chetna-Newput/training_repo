class Player < ActiveRecord::Base
  belongs_to :cricket_team
  has_many :ipl_histories
  has_many :ipl_teams, :through => :ipl_histories
  validates :player_name,format: { with: /\A[A-Za-z ]+\z/ }, presence: true,
    length: {minimum: 5}
  
  validates :player_age,
  numericality: {only_integer: true, greater_than: 18}
  
  validates :player_email, format: { with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/ }, confirmation: true
  
  validates :player_email_confirmation , presence: true
end

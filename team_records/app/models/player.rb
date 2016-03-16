class Player < ActiveRecord::Base
  belongs_to :cricket_team
  has_many :ipl_histories
  has_many :ipl_teams, :through => :ipl_histories
  validates :player_name,format: { with: /\A[A-Za-z -]+\z/ }, presence: true,
    length: {minimum: 5}
  
  validates :player_age,
  numericality: {only_integer: true, greater_than: 18}
  
  validates :player_email, format: { with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/ }, confirmation: true
  
  validates :player_email_confirmation , presence: true
  
  after_save :increment_players_count
  after_destroy :decrement_players_count
 
  protected
    def increment_players_count
      cricket_team.update_attribute(:players_count, cricket_team.players_count + 1)
    end
    
    def decrement_players_count
      cricket_team.update_attribute(:players_count, cricket_team.players_count - 1)
    end
end


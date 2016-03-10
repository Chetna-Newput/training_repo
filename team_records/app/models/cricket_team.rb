class CricketTeam < ActiveRecord::Base
  has_many :players 
  has_one :captain
  has_and_belongs_to_many :tournaments
  has_one :coaches_cricket_team
  has_one :coach, :through => :coaches_cricket_team
  validates :team_name,format: { with: /\A[A-Za-z ]+\z/ }, length: {minimum: 3}
end

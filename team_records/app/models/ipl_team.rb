class IplTeam < ActiveRecord::Base
  has_many :ipl_histories
  has_many :players, :through => :ipl_histories
end

class AddValuesToPlayersCount < ActiveRecord::Migration
  def change 
   CricketTeam.find_in_batches do |teams|
     teams.each do |team|
       team.players_count = team.players.count
       team.save
     end
   end
  end
end

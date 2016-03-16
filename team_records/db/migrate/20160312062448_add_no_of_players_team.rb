class AddNoOfPlayersTeam < ActiveRecord::Migration
  def change
    add_column :cricket_teams, :players_count, :integer
  end
end

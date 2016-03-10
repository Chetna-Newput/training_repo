class RemoveTeamId < ActiveRecord::Migration
  def change
    remove_column :cricket_teams, :team_id
  end
end

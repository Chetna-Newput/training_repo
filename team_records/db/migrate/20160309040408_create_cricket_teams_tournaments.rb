class CreateCricketTeamsTournaments < ActiveRecord::Migration
  def change
    create_table :cricket_teams_tournaments do |t|
      t.integer :cricket_team_id
      t.integer :tournament_id

      t.timestamps null: false
    end
  end
end

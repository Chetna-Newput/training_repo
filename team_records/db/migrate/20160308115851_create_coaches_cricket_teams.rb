class CreateCoachesCricketTeams < ActiveRecord::Migration
  def change
    create_table :coaches_cricket_teams do |t|
      t.integer :coach_id
      t.integer :cricket_team_id
      t.integer :working_for

      t.timestamps null: false
    end
  end
end

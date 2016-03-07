class CreateCricketTeams < ActiveRecord::Migration
  def change
    create_table :cricket_teams do |t|
      t.string :team_name
      t.string :team_id

      t.timestamps null: false
    end
  end
end

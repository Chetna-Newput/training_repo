class CreateIplTeams < ActiveRecord::Migration
  def change
    create_table :ipl_teams do |t|
      t.string :ipl_team_name

      t.timestamps null: false
    end
  end
end

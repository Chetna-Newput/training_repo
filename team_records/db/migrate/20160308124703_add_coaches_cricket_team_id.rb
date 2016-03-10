class AddCoachesCricketTeamId < ActiveRecord::Migration
  def change
    add_column :coaches, :coaches_cricket_team_id, :integer
  end
end

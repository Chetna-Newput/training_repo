class RemoveCoachId < ActiveRecord::Migration
  def change
    remove_column :coaches_cricket_teams, :coach_id
  end
end

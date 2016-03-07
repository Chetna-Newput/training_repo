class ChangeColumnType < ActiveRecord::Migration
  def change
    change_table :players do |t|
      t.rename :team_id , :cricket_team_id
    end
  end
end

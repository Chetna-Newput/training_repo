class CreateIplHistories < ActiveRecord::Migration
  def change
    create_table :ipl_histories do |t|
      t.integer :ipl_team_id
      t.integer :player_id
      t.integer :year

      t.timestamps null: false
    end
  end
end

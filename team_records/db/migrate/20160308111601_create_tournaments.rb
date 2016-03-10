class CreateTournaments < ActiveRecord::Migration
  def change
    create_table :tournaments do |t|
      t.string :t_name
      t.string :place

      t.timestamps null: false
    end
  end
end

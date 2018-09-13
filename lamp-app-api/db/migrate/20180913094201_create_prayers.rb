class CreatePrayers < ActiveRecord::Migration[5.2]
  def change
    create_table :prayers do |t|
      t.references :verse, index: true, foreign_key: true
      t.integer :duration
      t.integer :focus
      t.string :summary

      t.timestamps
    end
  end
end

class CreatePrayers < ActiveRecord::Migration[5.2]
  def change
    create_table :prayers do |t|
      t.integer :duration
      t.integer :focus
      t.string :context

      t.timestamps
    end
  end
end

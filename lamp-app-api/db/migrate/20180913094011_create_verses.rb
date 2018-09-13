class CreateVerses < ActiveRecord::Migration[5.2]
  def change
    create_table :verses do |t|
      t.text :verse
      t.string :book
      t.boolean :memorized

      t.timestamps
    end
  end
end

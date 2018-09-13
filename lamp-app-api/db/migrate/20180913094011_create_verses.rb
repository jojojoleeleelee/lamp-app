class CreateVerses < ActiveRecord::Migration[5.2]
  def change
    create_table :verses do |t|
      t.text :word
      t.string :book
      t.boolean :memorized, default: false

      t.timestamps
    end
  end
end

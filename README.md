# L A M P - A P P
#### A React Portfolio Project for Flatiron School
---

The project is a react app that allows users to find bible verses and read and memorize specific bible verses.

Built using HTML, CSS, Javascript, Ruby on Rails, React, and Materialize CSS framework


## Installation Instructions

#### Setup Rails API backend

Clone this repo, and then navigate to the repo directory in your terminal.

Go to the RAILS backend API by running `cd lamp-app-api`

Run `bundle install` to install all gem dependencies.

Run all rake migrations with `rake db:migrate`

Run in Rails Console (`rails c`) to set up database:

```
verses = eval File.open('db/verses.rb').read

verses.each do |d|
  verse = Verse.create!(
    {
      text: d[:verse_text],
      book: d[:book_name],
      chapter: d[:verse_id]
    }
  )
end

```

Start up a rails server on port 3001: `rails s -p 3001`

#### Setup React server frontend

Change directories into client folder: Run `cd ..` then `cd client`

Run `npm install` to install all package dependencies

Start up React server and enjoy the app! `npm start`


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jojojoleelee/lamp-app. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

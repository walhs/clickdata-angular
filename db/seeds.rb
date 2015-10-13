# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Group.create([
  { name: 'Ben Franklin Labs' },
  { name: 'Snip Salon Software' },
  { name: 'GloboChem' },
  { name: 'TechCorp' },
])

ClickData.create([
	{ user_token: 'gordinho', x: 0, y:20.0, scroll_position: 234, url:"localhost:9000" },
	{ user_token: 'gordinha', x: 10, y:40.0, scroll_position: 532, url:"localhost:3000" },
])
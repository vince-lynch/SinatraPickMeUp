
messages = ["You are freakishly good at thumb wars.","You never forget to fill the ice-cube tray.","Your ex thought about you this morning, then they thought about donuts.","You remind everyone of kiwis- delicious and surprisingly fuzzy.","People always think your jeggings are regular jeans.","Cockroaches, mice and other pests avoid your place out of respect.","Kids think you are the 'cool old person'.","I’d give you the last piece of my gum even if I’d just ate garlic.","You remind everyone of kiwis- delicious and surprisingly fuzzy.", "People behind you at movies think you are the perfect height.", "You want the best for everyone...except Gary.","There was a high school rumor that you are a distant relative of Abraham Lincoln.","You rarely have to go to the bathroom when you fly in the window seat."]

am_i = ["good", "smart", "clever", "beautiful","ruthless", "intelligent", "hard working", "pretty","tall","attractive", "interesting", "cool", "good looking","creative ","handsome","tough","artistic","logical","hungry", "brave"]






yes_u = ["You are good enough", "You are smart enough", "You are clever enough", "Your are beautiful enough", "You are ruthless enough"]

# Un-RESTful routes Routes
get "/" do
  @am_i = "Am I " + am_i.shuffle.first + " enough?"

  erb :index
end

get "/response" do
  @am_i =  yes_u.shuffle.first

  erb :index
end

get '/*' do
 puts "The user just typed the following message: #{params[:splat]}"
 response = "#{params[:splat]}"
 response = response.to_s
 response = response.delete "[]"
 response = response.delete '""'
 response = response.split(' ')[2..-2].join(' ')
 print response
 @am_i =  "You are " + response + " enough"
 erb :index
end
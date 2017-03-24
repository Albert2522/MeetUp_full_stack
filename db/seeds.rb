# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create(title: "Movements", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Movements_bmrccw.jpg");
Category.create(title: "Outdoors & Adventure", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Outdoors_Adventure_uylryn.jpg");
Category.create(title: "Tech", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135169/Tech_tl9reo.jpg");
Category.create(title: "Family", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135166/Family_e92r92.jpg");
Category.create(title: "Health & Wellness", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135167/Health_Wellness_vyqjzr.jpg");
Category.create(title: "Sports & Fitness", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Sports_Fitness_tlw8ce.jpg");
Category.create(title: "Learning", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Learning_tha69g.jpg");
Category.create(title: "Photography", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Photography_qctiue.jpg");
Category.create(title: "Food & Drink", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135167/Food_Drink_xnwsfd.jpg");
Category.create(title: "Writing", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135169/Writing_mggwru.jpg");
Category.create(title: "Language & Culture", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Language_Culture_aacuqb.jpg");
Category.create(title: "Music", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Music_pvlkoa.jpg");
Category.create(title: "LGBTQ", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/LGBTQ_ia4bgk.jpg");
Category.create(title: "Film", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135167/Film_twachv.jpg");
Category.create(title: "Sci - Fi & Games", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Sci-Fi_Games_e00gxd.jpg");
Category.create(title: "Beliefs", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135167/Beliefs_zekgv5.jpg");
Category.create(title: "Arts", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135166/Arts_o9hcmb.jpg");
Category.create(title: "Book Clubs", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135167/Book_Clubs_hqgdau.jpg");
Category.create(title: "Dance", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135166/Dance_pea9hm.jpg");
Category.create(title: "Pets", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135168/Pets_eaecae.jpg");
Category.create(title: "Hobbies & Crafts", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135167/Hobbies_Crafts_msvhck.jpg");
Category.create(title: "Fashion & Beauty", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135167/Fashion_Beauty_zfwtp0.jpg");
Category.create(title: "Social", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135169/Social_wvkfwn.jpg");
Category.create(title: "Career & Business", url: "https://res.cloudinary.com/dd40qyh43/image/upload/v1490135166/Career_Business_gsv5oz.jpg");
User.create(email: "albert@gmail.com", password: "123456");
User.create(email: "demo@gmail.com", password: "123456");
User.create(email: "antonyAr@gmail.com", password: "123456");
User.create(email: "alecJ@gmail.com", password: "123456");
User.create(email: "wadehas@gmail.com", password: "123456");
User.create(email: "jane15@gmail.com", password: "123456");
User.create(email: "luke39@gmail.com", password: "123456");
Event.create(title: "All About WebVR", description: "WebVR has come a long way since its inception in 2014: from a few experimental builds and demos, to an entire ecosystem today. Multiple browsers are shipping with the API, and tools, frameworks and file formats have emerged to support a growing community of developers. Join us for an evening of talks with the people that are making virtual reality a reality on the web.

Talk #1: Introduction

Tony will provide an overview of the WebVR ecosystem, including updates on browser support, available tools and frameworks, and a peek at the glTF for delivering 3D assets into WebVR applications.

Speaker: Tony Parisi


Tony Parisi is a virtual reality pioneer, serial entrepreneur and angel investor. Tony is the co-creator of 3D graphics standards, including VRML, X3D and glTF, the new file format standard for 3D web and mobile applications.Tony is also the author of O’Reilly Media’s books on Virtual Reality and WebGL: Learning Virtual Reality (2015), Programming 3D Applications in HTML5 and WebGL (2014), and WebGL Up and Running (2012).

Tony is currently Head of VR and AR at Unity Technologies, where he oversees the company’s strategy for virtual and augmented reality.

Talk #2:  WebVR API Update

Brandon will review the current state of the WebVR API, what changes are coming down the pipe and why, and offer a brief glimpse of what the API is likely to focus on in the future.

Speaker: Brandon Jones



Brandon Jones (@Tojiro) is a Software Engineer at Google and spec editor for WebVR, a feature he’s been working on since it’s inception in 2014 with Mozilla. Previously worked on Chrome’s WebGL implementation, with a lifetime of hobby graphics development prior to that.

Talk #3: A Tour of React VR

React VR from Oculus is a Javascript library for creating VR apps and 360 immersive experiences. It pairs modern APIs like WebGL and WebVR with the declarative power of React. Learn about the key features of this new framework and get a jumpstart on building your own React VR apps.

Speaker: Amber Roy



Amber (@amberroyVR) is a software engineer fascinated by virtual reality. She is a founding member of the WebVR team at Oculus and an author and maintainer of React VR.

Talk #4: A-Frame Ecosystem Update

A-Frame (https://aframe.io) (http://i.imgur.com/2ZY51dZ.jpg) is a web framework for building VR experiences with HTML and Entity-Component (ECS). It was created by the Mozilla VR team to make 3D and WebVR content creation easier, faster, and more accessible. A-Frame makes WebVR simple by being just HTML, but brings along the ECS pattern from the game industry and adapts it to the DOM. ECS development centers around reusable, composable, and sharable modules that we mix and match on game objects.

Kevin and Diego will give a brief introduction how easy and powerful it is to develop A-Frame, putting a spotlight on the blazing growth of the ecosystem, and showing off a few of the hundreds of community demos.

Speakers: Kevin Ngo and Diego Marcos



Kevin (@andgokevin) is a developer on the Mozilla VR team which invented WebVR and is a core developer on A-Frame.



Diego Marcos (@dmarcos) is a developer in the Mozilla VR team since its inception. A-Frame came out from one of the multiple prototypes he made and currently evolves and maintains the API with Kevin Ngo. His obsession is designing tools that enable anyone to create content in VR.

Event details

Note: Price: $10 online, $15 at the door. No refunds. No ticket transfers.

We charge this small fee to help reduce no-shows. Please contact the organizers (sfhtml5 at gmail dot com) if this is a financial hardship for you.

Agenda

• 5:00 PM Doors open. The event is on the 7th floor.

• 5:00-6:30 PM Networking, wine tasting, cocktail, and dinner (gf/veg options available)

• 6:30-6:40 PM Introductions/Announcements

• 6:40-6:50 PM Talk #1: Introduction (Tony Parisi)

• 6:50-7:10 PM Talk #2: Web API Overview (Brandon Jones)

• 7:10-7:30 PM Talk #3: Oculus and ReactVR (Amber Roy)

• 7:30-8:00 PM Break, networking, drinks, and dessert

• 8:00-8:02 PM Lightning Talk: Mozilla's Developer Roadshow with Janette Cibrowski

• 8:02-8:04 PM Lightning Talk: Bash with Hirsch Singhai

• 8:04-8:06 PM Lightning Talk: Samsung and WebVR with Damon Hernandez

• 8:10-8:30 PM Talk #4: A-Frame (Kevin Ngo and Diego Marcos)

• 8:30-9:00 Q&A with all Speakers

• 9:00 Raffle! Your raffle ticket give you a chance to win cool prizes including the grand prize: an Oculus Rift!



* Contact the Organizers if you'd like to give a lightning talk.

** You must be present at the venue to qualify for raffle prizes.

Notes

* There is bicycle parking in the garage below the building, but you must bring your own lock and leave your bicycle at your own risk.
* There is also street and garage parking. Check all signs for restrictions and fees.
* Smile! We are recording and photographing this event. If you do not wish to be included in SFHTML5 video or audio recordings or photographs, you can watch the recordings of all of our events at bit.ly/sfhtml5videos from the comfort of your home.

Cocktails by Alcademics
Wine Tasting by Grant and Marie Winery

", category_id: "3", author_id: "1", location: "San Francisco", image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt002fffx36c200/sg1a2f0d6339/435692805.jpeg", data: "2017-03-22 18:00:00");

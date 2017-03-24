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
User.create(email: "demoUser@gmail.com", password: "123456");
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

", category_id: "3", author_id: "1", location: "San Francisco", image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt002fffx36c200/sg1a2f0d6339/435692805.jpeg", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00");

Group.create(name: "Bay Area Hikers (Born 1975-1995)", description: "Do we need another hiking group???

Yeah we do!!!

This is a group for all the young adult hikers in the bay area. This will have at least one hiking activity a month and other outdoor activities like camping, partying, beer tasting, wine tasting, sports etc. I Did not find any other group especially near San Francisco area which organizes regular hikes for people in the awesome age group.

If you would like to organize anything, shoot me a message.", author_id: "4", image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt7700c8xff7900/sg8e438d2e6c/451937540.jpeg", category_id: "2");

Event.create(title: "Learn to Code San Francisco", description: "About the Event:

Angular is hot, and there is a huge amount of information available on building applications, improving performance, and various other topics. But do you know how to make your Angular applications secure? What kind of security features does Angular offer you, and which additional steps can you take to really boost the security of your applications?

In this session, we cover one of the biggest threats in modern web applications: untrusted JavaScript code. You will learn how Angular protects you against XSS, and why you shouldn't bypass this protection. We will also dive into new security mechanisms, such as Content Security Policy. Through a few examples,the speaker will show you how you can use these mechanisms to enhance the security in your client-side context.

About the Speaker:

Philippe De Ryck is a professional speaker and trainer on software security and web security. Since he obtained his PhD at the imec-DistriNet research group (KU Leuven, Belgium), he has been running the group's Web Security Training program, which ensures a sustainable knowledge transfer of the group’s security expertise towards practitioners.

You can find more about Philippe on https://www.websec.be

About Galvanize:

Galvanize is the premiere dynamic learning community for technology. With campuses located in booming technology sectors throughout the country, Galvanize provides a community for each the following:

Education - part-time and full-time training in web development, data science, and data engineering

Workspace - whether you’re a freelancer, startup, or established business, we provide beautiful spaces with a community dedicated to support your company’s growth

Networking - events in the tech industry happen constantly in our campuses, ranging from popular Meetups to multi-day international conferences

To learn more about Galvanize, visit galvanize.com.

*Reminder: register for this workshop via Eventbrite.", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00", location: "San Francisco", author_id: "3", image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt24a601xbdb202/sgac283334c8/451150380.jpeg", category_id: "3");

# Event.create(title: "VR Arcade", data: "2017-24-03 18:00",  description: "Get ready to play the latest VR games! We'll talk startups, gaming, design, meeting game devs, and talking with up-and-coming VR people. This is also to meet the other VR enthusiasts in the group, let's get it going!
#
# Join VR Arcade on FB https://www.facebook.com/groups/259454887756456/
#
# I encourage all indie devs in the group to bring your unreleased games that are still in development (we have enough VR stations, but bring yours if you'd like).
#
# JOIN US now!", location: "San Francisco", image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dtfa002fx00a8ff/sg754a8ecefd/450084192.jpeg", author_id: "2", category_id: "15");

Group.create(name: "SF Urban Adventure Club",image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/b/9/0/9/global_456107369.jpeg", description: "The SAN FRANCISCO URBAN ADVENTURE CLUB is the best way to meet and connect with like-minded and adventurous people in San Francisco.

Join our facebook group! Check out our facebook page!

WHAT MAKES US DIFFERENT:

• VARIETY OF EVENTS: We like hiking, happy hours, dance parties, BBQs, beach parties, camping trips, ski trips, and much more. San Francisco Urban Adventure Club is like 50 Meetup groups rolled into one!

• FREQUENT EVENTS: We have events almost every day of the week. Just check out our calendar!

• 90%+ ATTENDANCE: People who RSVP for our events actually show up! That's because we take attendance at events and actively discourage flakers.

• REGULAR MEMBERS: Our members attend events regularly. That means you will see the same faces at different events and be able to build real friendships.

• CONNECT ON FACEBOOK: We have an active facebook group for our members to connect with each other after events. It's also great for posting event photos and sharing new event ideas.

• MEMBERSHIP DUES: We charge monthly membership dues because we believe that quality is worth paying for.", author_id: "6", category_id: "2");
Event.create(title: "Bay Area Cyber Security Meetup", description: "This group is for Bay Area security enthusiasts, security professionals, and technology professionals who want to learn, network and share their knowledge.  Our goal is to get technologists interested in cyber security and share resources about the latest in information security, threat intelligence, and incident response. ", image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/451687861.jpeg", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00", location: "San Jose", author_id: "2", category_id: "3");

Event.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt7700c8xff7900/sg8e438d2e6c/447701252.jpeg", title: "Software Engineer Interview Prep Meetup", description: "Fourth Friday will be held at Rithm School. The address is[masked]th Street, suite 100. We’re on the ground floor, so we should be easy to spot.

Join us for a free evening of drinks, snacks, music, positive vibes, and board games! We promise to keep laptops away, put the whiteboard markers aside, write 0 lines of code, and send no emails.


Outco and Rithm School are banding together to host this shindig as a way to give back to our phenomenal community of developers. On the \"Fourth Friday\" of the month welcome back alumni,
 celebrate students, and introduce our space to people who want to know more about how Rithm and Outco support developers at all stages of their careers.


Outco has now supported over 250+ software engineers as they prepare for the rigorous job application process. Rithm trains full-stack software developers in their intensive 17-week coding course. As part of their program, they send their graduates to Outco… so together we work with developers of all skill levels, from beginners to experienced devs who need to brush up on their interviewing chops.

If you have specific questions - send us an email", author_id: "5", category_id: "3", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00", location: "San Francisco");
Event.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt24a601xbdb202/sgac283334c8/451770988.jpeg", title: "20-somethings friends & fun in SF", description: "We're gonna be checking out a total of 16 drinking holes as we explore some new neighborhoods as a group.  This event is going to be very low-key and casual so feel free to dress comfortable and bring a good attitude.

Catch you all in the Valley! ", location: "Santa Clara", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00", category_id: "2", author_id: "4");
Event.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/c/b/f/7/event_453652215.jpeg", title: "Women's Drum Circle at herchurch", description: "Gather in sacred space to join with the voice of the sacred drums. These are women-only gatherings. (Open drum circles, to which men are welcome, take place during the 1st, 3rd and 5th Sundays as a part of the worship experience at herchurch. Please see herchurch.org for details.)

No experience needed. Some drums provided, however bring your own if you have them. Rather than following a particular discipline or style, this is an improv-based drum circle, guided by Mz. Dionne, who has a lifetime's experience of drumming in a wide variety of genres. This is offered for free as part of the programming at herchurch.",
location: "San Francisco", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00
", author_id: "6", category_id: "16");
Event.create(title: "Stock Investors Wyckoff Educational Meetup", description: "Normally, TSAASF speakers come and give presentations on their technical analysis of various stocks, sectors & markets and then share their methodology with us. Evan McCulloch’s talk will be much different than the norm, but I believe it will be highly beneficial for all who attend. So, please don’t miss this opportunity to come listen to Evan talk about his job as Director of Research, Portfolio Manager and Analyst at this prestigious local investment firm, Franklin Equity Group.
Some of the strategies of his fund are;
--Taking a bottom-up approach to individual stock selection.
--Looking for companies that possess products with favorable competitive profiles, large market opportunities and strong intellectual property.
--Favoring companies with excellent management, strong financial characteristics and attractive valuations.
--Their San Francisco Bay Area location is shared by many leading biotechnology companies, enabling us to easily attend scientific meetings and symposia, and to consult with community and academic physicians.
Evan will start his talk by answering some pre-selected questions and will then field questions from the audience. His talk will begin at 4 pm and will last until at least 5 pm and will possibly go until 6 pm.

Evan McCulloch is Senior Vice President, Director of Equity Research for Franklin Equity Group. Mr. McCulloch is also the lead portfolio manager of Franklin Biotechnology Discovery Fund. Mr. McCulloch specializes in research analysis of biotechnology and emerging pharmaceutical companies, with a therapeutic focus on infectious diseases, ophthalmology, pulmonology, cardiovascular disease, gastroenterology and the central nervous system. Prior research coverage includes the pharmaceutical, medical technology and healthcare service sectors.

More information and registration:

Golden Gate Univ. Room 3214

TSAA-SF Members - $10

Non-members - $20

", image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt000ddfxff646a/sgb5be2d848b/415068062.jpeg", location: "San Francisco", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00", author_id: "3", category_id: "24");
Event.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt7700c8xff7900/sg8e438d2e6c/451665019.jpeg", title: "Fiddlers Green Pub - Pub Night", description: "Fiddlers Green was a great pub back in the day but has recently reopened and thought we'd give them a try. Very close to North Beach, Ghiradelli etc and easy-ish parking on the streets.
 LMK what you all think. Plus they have pub food.", data: "Wed, 22 Mar 2017 18:00:00 UTC +00:00", location: "San Francisco", author_id: "3", category_id: "9");

Group.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/445398176.jpeg", name: "San Francisco Trail Runners", description: "There are so many hiking groups, but I wanted to start a group for runners like me that prefer to run the trails than the streets.", author_id: "6", category_id: "2");
Group.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/450899134.jpeg", name: "Four Corners Hiking & Beer Club", description: "We hail from the FOUR CORNERS of the Bay Area with one mission: Hike, Drink, Rinse, Repeat! Our group hikes follow the compass, alternating between North Bay, East Bay, South Bay and Peninsula. No matter what corner of the map you come from, we'll be hiking in your neck of the woods just around every 4th event.")
Group.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/451144064.jpeg", name: "SF Data Science", description: "Data Scientists in San Francisco and the Bay Area are doing incredible data science: making graph models of symptoms and human disease, extracting insight from huge amounts of data in real time, and building tools to make this whole process easier. The SF Data Science Meetup is a community organized forum to showcase this ongoing work, to spread knowledge and help the data science community level up.", author_id: "6", category_id: "3");
Group.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/450639106.jpeg", name: "Tech in Motion in SF", description: "Tech in Motion is broad by design, the goal of this group is to be interactive and allow technology enthusiasts to learn from other professionals, have questions answered in real-time, discover new tech, and hear stories that inspire. This group is a place for technology professionals who wouldn’t normally cross paths to meet, collaborate, and learn about what their peers are doing across the city.
Reach out to our organizers for more information on featured sponsorship opportunities - where you can speak or demo at our next event!", author_id: "5", category_id: "3");
Group.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/453338153.jpeg", name: "SIERRA MOUNTAINEERING CLUB", description: "THE SIERRA MOUNTAINEERING CLUB is a modern, active mountaineering club. We are a community where people connect, train and climb together. We think we have something special happening and would love for you to join us.

You're at the first step, which is to follow us here on Meetup. When you do that you'll have access to view our complete calendar, and be involved. But we can offer you much more than that...", author_id: "4", category_id: "2");
Group.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/451804428.jpeg", name: "Driving Lovers", description: "This group is for anyone who got a car and who loves driving. With this Meetup, we will organise some small road trips (one day maximum) in beautiful areas around San Francisco. The goal is to discover great places, have beautiful sights and enjoy driving on winding mountain roads with some picnic or restaurant breaks.

Safety first! Please respect road rules and behave your drive style on the road for the best security for you and the others.

Enjoy the rides!", author_id: "1", category_id: "21");
Group.create(image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/451608030.jpeg", name: "San Francisco Sailing", description: "A place for Skippers and Crew to \"Meetup\" and share a safe, enjoyable day on the water while practicing sailing skills and learning more about boats, sailing and the sea.

If you have taken a small boat sailing or basic keel-boat class and would like to get some experience actually working a sailboat on the Bay, then this Meetup group is for you.  Don't be offended by being called a Newbie, sharing our love of sailing is what we enjoy most.

Our hope is to provide a place to organize real \"sailing\" events.  Not happy hour meetups at the bar to talk about sailing, or hikes, or picnics, or other such events (unless they are related to real \"on-the-water\" sailing events.", author_id: "5", category_id: "2");

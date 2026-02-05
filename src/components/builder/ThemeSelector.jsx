import { useState, useEffect } from 'react';

const themeMessages = {
  athletes: {
    label: "Athletes",
    sublabel: "Jr High \u2022 High School \u2022 College",
    themes: {
      testing: [
        "[name], this week we find out where you stand. No pressure\u2014just data. Give honest effort and we\u2019ll have a clear picture to build from.",
        "Testing week, [name]. This isn\u2019t about impressing anyone. It\u2019s about establishing your baseline so every rep moving forward has purpose.",
        "[name], time to see what you\u2019ve built. These numbers don\u2019t define you\u2014they direct your training. Let\u2019s get accurate data.",
        "This week is about truth, [name]. We test, we measure, we plan. Attack each test like it matters, because it does."
      ],
      running: [
        "[name], conditioning is the separator. When talent is equal, the athlete who doesn\u2019t gas out wins. We\u2019re building that edge this week.",
        "Legs and lungs, [name]. This week we push your engine. Every sprint, every interval is money in the bank for your sport.",
        "[name], speed without stamina is a liability. This week we fix that. Trust the process and embrace the suck.",
        "Running week, [name]. Your sport requires you to move\u2014fast, often, and when you\u2019re tired. Let\u2019s train that reality."
      ],
      time: [
        "[name], this week every rep has a clock. Time under tension builds what shortcuts can\u2019t. Control the weight, own the tempo.",
        "Slow down to speed up, [name]. This week we\u2019re adding time components to build control and strength you can actually use.",
        "[name], tempo work this week. The clock keeps us honest and your muscles under tension longer. That\u2019s where growth happens."
      ],
      mobility: [
        "[name], you can\u2019t use strength you can\u2019t access. This week we open up ranges of motion that make you more athletic.",
        "Mobility week, [name]. An athlete who can\u2019t move well can\u2019t perform well. We\u2019re removing restrictions so you can compete unrestricted.",
        "[name], tight athletes get hurt and underperform. This week we invest in your movement quality. It pays dividends all season."
      ],
      flexibility: [
        "[name], flexibility isn\u2019t just for recovery\u2014it\u2019s for resilience. This week we lengthen what\u2019s limiting you.",
        "Range of motion is range of performance, [name]. Let\u2019s open things up this week so your body can do what your mind wants."
      ],
      recovery: [
        "[name], recovery is where adaptation happens. This week is strategic\u2014we\u2019re letting your body catch up to your training.",
        "Smart athletes recover smart, [name]. This week we dial it back so you can dial it up when it counts.",
        "[name], this isn\u2019t a lazy week. It\u2019s a building week. Your body is adapting to everything we\u2019ve thrown at it. Let it."
      ],
      deload: [
        "[name], deload week. We\u2019re not going backwards\u2014we\u2019re setting up to go further. Trust the process.",
        "This week we pull back, [name]. Your nervous system, joints, and muscles need this. Next week we attack with a full tank.",
        "[name], think of this week as sharpening the blade. Light weights, quality movement, mental reset. We reload to reload."
      ],
      peak_week: [
        "[name], everything we\u2019ve done has led here. This is peak week\u2014you\u2019re ready. Trust your preparation.",
        "Peak week, [name]. Body is primed, training is tapered. Now we fine-tune and stay sharp. Game time approaches.",
        "[name], this is the week where it comes together. Light, explosive, confident. You\u2019ve done the work\u2014now show it."
      ],
      taper: [
        "[name], we\u2019re tapering. Less volume, maintained intensity. Your body is supercompensating\u2014let it happen.",
        "Taper time, [name]. The hay is in the barn. We stay sharp but let the fatigue clear out. Trust the timing."
      ],
      high_volume: [
        "[name], volume week. We\u2019re stacking reps and building capacity. This is where work ethic separates athletes.",
        "High volume this week, [name]. Your body adapts to demands placed on it. We\u2019re placing demands. Embrace the grind.",
        "[name], lots of work this week. Not every rep will feel great\u2014that\u2019s fine. Consistency over perfection. Stack the reps."
      ],
      high_intensity: [
        "[name], heavy week. We\u2019re pushing limits and finding new ceilings. Respect the weight but don\u2019t fear it.",
        "Intensity is up this week, [name]. Focus, brace, execute. Every heavy rep builds strength and mental toughness.",
        "[name], time to lift heavy things. Your nervous system needs this stimulus. Approach the bar with confidence."
      ],
      time_under_tension: [
        "[name], TUT week. We\u2019re slowing everything down and making muscles work longer. This builds the strength that sticks.",
        "Time under tension this week, [name]. Control every inch of every rep. Your muscles don\u2019t know weight\u2014they know tension and time."
      ],
      focus: [
        "[name], this week is about precision. Quality over quantity. Every rep with full attention and perfect intent.",
        "Focus week, [name]. We\u2019re dialing in technique and building the movement patterns that make you better long-term.",
        "[name], attention to detail this week. The athletes who master basics dominate. Let\u2019s master basics."
      ],
      bulk: [
        "[name], we\u2019re building mass this phase. Eat to grow, train to grow, sleep to grow. Your body needs fuel\u2014give it fuel.",
        "Growth phase, [name]. Don\u2019t fear the scale going up. We\u2019re adding muscle that makes you more competitive."
      ],
      cut: [
        "[name], leaning out this phase. Training stays intense\u2014we protect muscle while losing fat. Stay disciplined with nutrition.",
        "Cut phase, [name]. This takes mental toughness. We maintain strength while the body composition shifts. You\u2019ve got this."
      ]
    }
  },
  adults: {
    label: "Adults",
    sublabel: "General Population",
    themes: {
      testing: [
        "[name], this week we establish baselines. No judgment\u2014just information. These numbers help us train smarter going forward.",
        "Assessment week, [name]. Let\u2019s see where you are so we can map where you\u2019re going. Honest effort, accurate data.",
        "[name], time to test. This isn\u2019t about comparison to anyone else\u2014it\u2019s about having clear markers for your progress."
      ],
      running: [
        "[name], cardio focus this week. A stronger cardiovascular system means more energy for everything\u2014work, family, life.",
        "Conditioning week, [name]. We\u2019re building the engine that powers everything else you do. Let\u2019s earn that improved stamina.",
        "[name], this week we run. Not because you have to\u2014because a body that moves well lives well. Let\u2019s build that capacity."
      ],
      time: [
        "[name], tempo training this week. We\u2019re controlling the pace to maximize results. Slow and controlled builds real strength.",
        "Time-based work this week, [name]. We\u2019re adding a clock to keep us honest and make every second count."
      ],
      mobility: [
        "[name], mobility focus this week. This is how we keep you moving well for decades. Investment in your future self.",
        "This week we work on how you move, [name]. Better mobility means less pain, more capability, improved quality of life.",
        "[name], tight muscles and stiff joints limit everything. This week we create freedom in your movement."
      ],
      flexibility: [
        "[name], flexibility week. This might not feel like a workout, but it\u2019s building the foundation for everything else.",
        "Stretching and lengthening this week, [name]. Your body will thank you. This is maintenance that prevents breakdowns."
      ],
      recovery: [
        "[name], recovery week. Life is demanding\u2014this week we let your body catch up. Active recovery, not laziness.",
        "This week we recover, [name]. You\u2019ve been consistent and your body needs consolidation time. This is part of the plan.",
        "[name], strategic recovery this week. We\u2019re not stopping\u2014we\u2019re letting adaptation happen. Trust the process."
      ],
      deload: [
        "[name], deload week. Lighter weights, same quality movement. Your joints and nervous system need this reset.",
        "Pulling back this week, [name]. Not because you can\u2019t handle more\u2014because smart training includes planned recovery.",
        "[name], think of this week as maintenance. We\u2019re keeping the habit while giving your body a break."
      ],
      peak_week: [
        "[name], let\u2019s see what you\u2019ve built. This week we test your peak\u2014you might surprise yourself.",
        "Peak week, [name]. All those consistent sessions have added up. Time to feel strong."
      ],
      taper: [
        "[name], we\u2019re tapering the volume this week. You should start feeling fresher and more energetic. That\u2019s the goal.",
        "Less volume this week, [name]. We maintain intensity but let accumulated fatigue clear. You\u2019ll feel the difference."
      ],
      high_volume: [
        "[name], higher volume this week. More sets, more reps, more work. This is where results get built.",
        "Volume week, [name]. We\u2019re stacking quality reps. Some sessions will be challenging\u2014that\u2019s the point.",
        "[name], lots of work this week. Consistency through this builds the foundation for everything. Show up and execute."
      ],
      high_intensity: [
        "[name], heavier weights this week. We\u2019re challenging your strength. Respect the load, maintain technique, push limits.",
        "Intensity is up, [name]. This is where you discover what you\u2019re capable of. Focus and execute.",
        "[name], time to lift heavy. Your body is ready for this challenge. Confidence and control."
      ],
      time_under_tension: [
        "[name], slow and controlled this week. Time under tension builds the kind of strength that\u2019s functional and lasting.",
        "TUT week, [name]. We\u2019re making muscles work longer under load. It\u2019s harder than it sounds\u2014and more effective."
      ],
      focus: [
        "[name], technique focus this week. Perfect practice makes perfect. We\u2019re refining movement quality.",
        "Precision week, [name]. Every rep with attention and intention. Quality over quantity.",
        "[name], this week we dial in the details. Better movement patterns now mean better results forever."
      ],
      bulk: [
        "[name], we\u2019re in a building phase. Eat enough to support muscle growth. The scale might go up\u2014that\u2019s expected and okay.",
        "Growth phase, [name]. Training hard means eating enough to recover and build. Embrace the process."
      ],
      cut: [
        "[name], leaning out this phase. Training stays consistent\u2014nutrition tightens up. Discipline and patience.",
        "Cut phase, [name]. We protect the muscle you\u2019ve built while creating the deficit for fat loss. Sustainable approach."
      ]
    }
  },
  recreational: {
    label: "Recreational",
    sublabel: "Weekend Warriors \u2022 Casual Fitness",
    themes: {
      testing: [
        "[name], let\u2019s see where we\u2019re at this week. Simple assessments, useful information. No stress\u2014just benchmarks.",
        "Quick testing this week, [name]. This helps us know what\u2019s working and what to adjust. Easy process, valuable data."
      ],
      running: [
        "[name], some cardio focus this week. Building stamina makes everything else in life a little easier.",
        "Running and conditioning this week, [name]. We\u2019re building the engine. Find a pace you can sustain and push it slightly."
      ],
      time: [
        "[name], adding tempo work this week. Controlling the pace of each rep gets more out of every movement.",
        "Time-focused training, [name]. We\u2019re making each rep count by controlling the speed. Simple but effective."
      ],
      mobility: [
        "[name], mobility work this week. This is how we keep you feeling good and moving well between sessions.",
        "Movement quality focus, [name]. Better mobility means less stiffness, fewer aches, more energy."
      ],
      flexibility: [
        "[name], stretching focus this week. Maintaining flexibility keeps you feeling young and moving freely.",
        "Flexibility work, [name]. This might feel easy, but it\u2019s protecting your body long-term."
      ],
      recovery: [
        "[name], light week. You\u2019ve been showing up consistently\u2014let\u2019s bank that and let your body adapt.",
        "Recovery focus, [name]. This is part of the process. Active rest, movement maintenance, no guilt."
      ],
      deload: [
        "[name], easy week. Same movements, lighter load. Keep the habit while giving your body a break.",
        "Deload week, [name]. Think of it as an active rest week. Stay moving, stay light, stay consistent."
      ],
      high_volume: [
        "[name], more volume this week. Extra sets build extra results. You\u2019ve got the consistency to handle this.",
        "Higher rep week, [name]. We\u2019re building work capacity. Pace yourself and complete the work."
      ],
      high_intensity: [
        "[name], pushing intensity this week. Heavier weights, more challenge. You\u2019re ready for this.",
        "Heavy week, [name]. Let\u2019s see what you\u2019ve got. Maintain form, push effort."
      ],
      focus: [
        "[name], technique focus this week. Refining movement quality makes every future session more effective.",
        "Quality over quantity this week, [name]. Let\u2019s make each rep look and feel better."
      ]
    }
  },
  runners: {
    label: "Runners",
    sublabel: "Distance \u2022 Sprinters \u2022 Trail",
    themes: {
      testing: [
        "[name], time trial week. Let\u2019s get current data on where your fitness is. Pace honest, effort full.",
        "Assessment week, [name]. We test so we can train with precision. Your times and distances guide the programming.",
        "[name], benchmark runs this week. These numbers tell us exactly where to focus. Run your race, not someone else\u2019s."
      ],
      running: [
        "[name], mileage week. We\u2019re building base. Easy pace, accumulated volume. Trust the slow build.",
        "Volume running, [name]. This week we stack miles. Keep the effort conversational\u2014we\u2019re building aerobic foundation.",
        "[name], run more this week, run easy. The base you build now supports the speed you want later."
      ],
      time: [
        "[name], tempo runs this week. Comfortably hard\u2014you can talk, but you don\u2019t want to. This builds race pace fitness.",
        "Time-based intervals, [name]. We\u2019re training your body to hold pace. The clock keeps us honest.",
        "[name], tempo work teaches your body to run fast while tired. That\u2019s what racing is. Let\u2019s practice it."
      ],
      mobility: [
        "[name], hip and ankle work this week. Runners who move well run faster and stay healthier. This is investment.",
        "Mobility focus, [name]. Your stride is limited by your range of motion. Let\u2019s open things up.",
        "[name], a mobile runner is an efficient runner. This week we work on the flexibility that supports your stride."
      ],
      flexibility: [
        "[name], stretching focus this week. Tight hamstrings, hip flexors, and calves limit your potential. Let\u2019s address that.",
        "Flexibility work, [name]. Runners often neglect this. We don\u2019t. Maintain pliability, prevent injury."
      ],
      recovery: [
        "[name], recovery week. Easy runs only. Your body is adapting to recent training. Let it happen.",
        "Active recovery, [name]. Keep moving but keep it light. Sleep well, eat well, run easy.",
        "[name], easy week. This isn\u2019t lost fitness\u2014it\u2019s consolidated fitness. Trust the recovery."
      ],
      deload: [
        "[name], reduced mileage this week. We\u2019re freshening up while maintaining fitness. Light and easy.",
        "Deload week, [name]. Cut volume, keep frequency. Your legs will feel fresh by week\u2019s end.",
        "[name], pulling back to push forward. Less miles, same consistency. Recovery is training."
      ],
      peak_week: [
        "[name], peak week. You\u2019re fit, you\u2019re ready. Short, sharp efforts only. Trust your training.",
        "This is it, [name]. Peak fitness, fresh legs. Light running, stay loose. Race day approaches.",
        "[name], the work is done. Peak week is about maintenance and confidence. You\u2019re prepared."
      ],
      taper: [
        "[name], taper time. Cut volume significantly, keep intensity short and sharp. You\u2019ll feel amazing by race day.",
        "Tapering, [name]. Less running, more rest. Your body is supercompensating. Let it.",
        "[name], trust the taper. It feels weird to run less when a race approaches. It works. Rest now, race fast."
      ],
      high_volume: [
        "[name], big mileage week. This is where endurance gets built. Manage effort, stack the miles.",
        "Volume week, [name]. More miles than usual. Stay patient, stay fueled, stay consistent.",
        "[name], we\u2019re pushing volume this week. This builds the engine. Don\u2019t rush the easy runs."
      ],
      high_intensity: [
        "[name], speed work this week. Intervals, repeats, fast finish runs. We\u2019re building top end.",
        "Intensity focus, [name]. Track work or tempo runs. We\u2019re teaching your body to run fast.",
        "[name], hard running this week. Recover fully between efforts, then execute the next one. Quality speed."
      ],
      time_under_tension: [
        "[name], strength work for runners this week. Eccentric loading builds the resilience your legs need for miles.",
        "Slow strength work, [name]. Time under tension builds the tissue durability runners need. This protects your body."
      ],
      focus: [
        "[name], technique focus this week. Cadence, posture, foot strike. Small improvements, big efficiency gains.",
        "Form work, [name]. We\u2019re refining your running mechanics. Efficient runners are faster runners.",
        "[name], running drills and form focus this week. Build better habits that last thousands of miles."
      ]
    }
  },
  golfers: {
    label: "Golfers",
    sublabel: "Recreational \u2022 Club \u2022 Competitive",
    themes: {
      testing: [
        "[name], assessment week. We test rotational power, hip mobility, and stability. These drive your swing.",
        "Baseline testing, [name]. Let\u2019s measure the physical capabilities that determine your golf performance.",
        "[name], physical screening this week. Knowing your limitations helps us remove them."
      ],
      running: [
        "[name], cardio focus this week. 18 holes is 4+ hours\u2014conditioning affects late-round performance more than you think.",
        "Aerobic work, [name]. A fit golfer makes better decisions on the back nine. We\u2019re building that endurance.",
        "[name], conditioning matters in golf. Fatigue causes swing breakdown. This week we build stamina."
      ],
      time: [
        "[name], tempo training this week. Controlled movements build the body control your swing needs.",
        "Time-based work, [name]. Slow, controlled loading builds stability through your swing.",
        "[name], tempo focus. Golf is about control, not just power. This translates directly."
      ],
      mobility: [
        "[name], mobility is the foundation of a good swing. This week we work thoracic spine, hips, and shoulders.",
        "Rotation work, [name]. Your swing is limited by your mobility. Let\u2019s expand your range.",
        "[name], can\u2019t rotate what\u2019s restricted. This week we open up the movement that powers your swing.",
        "Hip and thoracic mobility, [name]. This is where swing speed and consistency come from. Essential work."
      ],
      flexibility: [
        "[name], flexibility focus this week. Tight muscles create compensations. Compensations create inconsistency.",
        "Stretching for golf, [name]. Your body needs length to create the positions a good swing requires."
      ],
      recovery: [
        "[name], recovery week. Active mobility, light movement. Your body consolidates the work we\u2019ve done.",
        "Easy week, [name]. Golf season is long\u2014strategic recovery keeps you fresh. Trust the process.",
        "[name], backing off this week. Stay moving, stay loose, let your body adapt."
      ],
      deload: [
        "[name], deload week. Maintain movement quality with lighter loads. Keep the groove without the grind.",
        "Light week, [name]. Same movements, less intensity. Your joints and muscles need this reset."
      ],
      peak_week: [
        "[name], tournament prep week. Light, explosive movements. You\u2019re physically ready\u2014stay sharp and confident.",
        "Peak week, [name]. We maintain and fine-tune. Your body is primed for performance."
      ],
      taper: [
        "[name], tapering for your event. Reduced volume, maintained intensity. You\u2019ll feel athletic and explosive.",
        "Taper time, [name]. Less is more right now. Stay loose, stay confident."
      ],
      high_volume: [
        "[name], higher volume this week. Building work capacity that sustains you through long rounds and seasons.",
        "Volume focus, [name]. More reps, more sets. We\u2019re building the durability golfers need."
      ],
      high_intensity: [
        "[name], power focus this week. Rotational strength and explosive movements. This is where club head speed lives.",
        "Heavy week, [name]. Building the strength that becomes power. Respect the weights, execute with control.",
        "[name], strength focus. A stronger golfer is a better golfer. Let\u2019s build that foundation."
      ],
      time_under_tension: [
        "[name], stability work this week. Time under tension builds the control your body needs through your swing.",
        "TUT focus, [name]. Slow, controlled loading builds the resilience your joints need for longevity."
      ],
      focus: [
        "[name], technique week. We\u2019re refining movement patterns that transfer to your swing. Quality reps only.",
        "Precision focus, [name]. Golf is a game of control. So is this week\u2019s training.",
        "[name], detail work this week. Small improvements in movement quality, big improvements on the course."
      ]
    }
  },
  fitness: {
    label: "Fitness",
    sublabel: "General Fitness \u2022 Health Focus",
    themes: {
      testing: [
        "[name], assessment week. Let\u2019s establish where you are so we can plan where you\u2019re going.",
        "Testing this week, [name]. These benchmarks help us measure progress. Honest effort, useful data.",
        "[name], time to test. No judgment\u2014just information that guides your training."
      ],
      running: [
        "[name], cardio focus this week. Building your aerobic base improves everything from energy to mood.",
        "Conditioning week, [name]. Your heart and lungs need training too. Let\u2019s build that engine.",
        "[name], run, row, bike\u2014pick your cardio. This week we build stamina that carries into daily life."
      ],
      time: [
        "[name], tempo work this week. Controlling the pace of each rep maximizes results.",
        "Time-based training, [name]. The clock keeps us honest. Slow eccentrics, controlled concentrics."
      ],
      mobility: [
        "[name], movement quality focus this week. Better mobility means better workouts and better daily life.",
        "Mobility work, [name]. This is how we keep you feeling good and moving well for decades.",
        "[name], tight spots limit your potential. This week we work on moving better."
      ],
      flexibility: [
        "[name], flexibility focus this week. Maintain range of motion, prevent stiffness, feel better.",
        "Stretching emphasis, [name]. Your body will thank you. This is essential maintenance."
      ],
      recovery: [
        "[name], recovery week. You\u2019ve been consistent\u2014let\u2019s let your body catch up. Active rest.",
        "Easy week, [name]. Strategic recovery is part of smart training. Move light, recover right.",
        "[name], pulling back this week. This isn\u2019t regression\u2014it\u2019s consolidation. Trust the process."
      ],
      deload: [
        "[name], deload week. Same movements, lighter weights. Keep the habit, give your body a break.",
        "Light week, [name]. We\u2019re maintaining the groove while letting accumulated fatigue clear.",
        "[name], think of this as maintenance week. Stay consistent, stay light."
      ],
      peak_week: [
        "[name], let\u2019s see what you\u2019ve built. This week we test your peak capabilities. You might surprise yourself.",
        "Peak week, [name]. Time to perform. Your consistent work has prepared you. Trust it."
      ],
      taper: [
        "[name], tapering volume this week. You should start feeling fresher and stronger. That\u2019s the goal.",
        "Less volume, [name]. Maintained intensity. You\u2019ll feel the difference by week\u2019s end."
      ],
      high_volume: [
        "[name], higher volume this week. More sets, more reps. This is where work capacity and results get built.",
        "Volume week, [name]. Consistency through challenging weeks builds the foundation. Execute the work.",
        "[name], lots of reps this week. Embrace the grind\u2014this is where change happens."
      ],
      high_intensity: [
        "[name], heavy week. We\u2019re challenging your strength. Respect the weights, maintain technique, push yourself.",
        "Intensity is up, [name]. This is where you discover capability. Focus and deliver.",
        "[name], strength focus this week. Heavier loads, full effort. You\u2019re ready for this."
      ],
      time_under_tension: [
        "[name], TUT week. Slow, controlled reps. Your muscles don\u2019t know weight\u2014they know tension and time.",
        "Time under tension focus, [name]. Make every rep count by controlling every second of it."
      ],
      focus: [
        "[name], technique week. Perfect practice makes progress. We\u2019re refining movement quality.",
        "Quality over quantity, [name]. Every rep with attention and intention this week.",
        "[name], precision focus. Better movement now means better results forever."
      ],
      bulk: [
        "[name], building phase. Eat to support your training. The goal is muscle\u2014scale weight may increase.",
        "Growth phase, [name]. Training hard requires eating enough. Embrace the process."
      ],
      cut: [
        "[name], leaning out phase. Training stays intense\u2014we protect muscle while creating a deficit.",
        "Cut phase, [name]. Nutrition tightens up while training stays consistent. Discipline and patience."
      ]
    }
  }
};

const themeLabels = {
  testing: "Testing",
  running: "Running / Cardio",
  time: "Time / Tempo",
  mobility: "Mobility",
  flexibility: "Flexibility",
  recovery: "Recovery",
  deload: "Deload",
  peak_week: "Peak Week",
  taper: "Taper",
  high_volume: "High Volume",
  high_intensity: "High Intensity",
  time_under_tension: "Time Under Tension",
  focus: "Focus / Technique",
  bulk: "Bulk / Growth",
  cut: "Cut / Lean Out"
};

// Day-specific theme messages that coordinate with the weekly theme
// "mid" = Days 2-3 (mid-week check-in), "close" = final day(s) (close-out)
const dayThemeData = {
  athletes: {
    testing: {
      mid: [
        "[name], more assessments today. Stay locked in—every test gives us better data to build your program.",
        "Testing continues, [name]. Same focus as Day 1. Honest effort, accurate results."
      ],
      close: [
        "[name], final testing session. Finish strong—these last numbers complete the picture. You've shown up and earned your data.",
        "Last test day, [name]. Leave nothing in the tank. After today, we have everything we need to move forward."
      ]
    },
    running: {
      mid: [
        "[name], back on the conditioning track today. Your body is adapting—trust the burn and keep pushing.",
        "More cardio work today, [name]. Yesterday's effort made you better. Today's effort stacks on top of it."
      ],
      close: [
        "[name], final conditioning session of the week. Close it out strong—you've built serious capacity.",
        "Last run day, [name]. Everything this week has expanded your engine. Finish with pride."
      ]
    },
    time: {
      mid: [
        "[name], more tempo work today. Control the weight, own every second of the rep. This builds what shortcuts can't.",
        "Back to time-based training, [name]. Your muscles are responding to the extended tension. Stay disciplined with the tempo."
      ],
      close: [
        "[name], last tempo session this week. You've been patient with the pace—that discipline is paying off.",
        "Final time-focused day, [name]. Close the week with control and precision. Every rep earned."
      ]
    },
    mobility: {
      mid: [
        "[name], more mobility work today. Each session opens up ranges that make you more athletic. Stay committed.",
        "Mobility continues, [name]. You're investing in movement freedom that pays dividends all season."
      ],
      close: [
        "[name], final mobility session. You should already feel a difference. This investment compounds over time.",
        "Last mobility day, [name]. You've put in the work to move better. Carry that into next week."
      ]
    },
    flexibility: {
      mid: [
        "[name], flexibility work continues today. Lengthening what's limiting you takes consistency. Stay with it.",
        "More stretching today, [name]. Your body is responding. Keep building that range of motion."
      ],
      close: [
        "[name], wrapping up flexibility focus. You've expanded your range—maintain it moving forward.",
        "Final flexibility session, [name]. The work you've done this week protects you long-term."
      ]
    },
    recovery: {
      mid: [
        "[name], recovery continues today. Light movement, quality work. Your body is adapting to everything we've built.",
        "Another recovery day, [name]. This isn't wasted time—it's when your body gets stronger."
      ],
      close: [
        "[name], last recovery session. You should feel recharged and ready. Next week we attack with a full tank.",
        "Recovery week closes out today, [name]. You've been smart. Now your body is primed to perform."
      ]
    },
    deload: {
      mid: [
        "[name], deload continues. Light weights, quality movement. Stay sharp without grinding yourself down.",
        "More deload work today, [name]. Keep the motor running but don't redline it. Recovery is the priority."
      ],
      close: [
        "[name], last deload session. You've been disciplined with the lighter weights. Next week we reload.",
        "Deload wraps up today, [name]. Blade is sharpened, body is fresh. Get ready to attack."
      ]
    },
    peak_week: {
      mid: [
        "[name], stay the course. Peak week means precise, confident work. You're primed—don't overthink it.",
        "Peak week continues, [name]. Short, sharp, explosive. Trust what you've built and let it show."
      ],
      close: [
        "[name], final session of peak week. You're ready. Light, confident, explosive. Game time is here.",
        "Last day of peak week, [name]. Everything has led to this. Trust your preparation and perform."
      ]
    },
    taper: {
      mid: [
        "[name], taper continues. Less volume, maintained sharpness. Your body is supercompensating—let it happen.",
        "More taper work today, [name]. It might feel weird to hold back. Trust the science—this makes you faster."
      ],
      close: [
        "[name], taper wraps up. You should feel fresh, explosive, ready. That's the supercompensation effect.",
        "Final taper session, [name]. Light and sharp. You're physically prepared for what's ahead."
      ]
    },
    high_volume: {
      mid: [
        "[name], volume work continues. More reps, more capacity. Your body adapts to the demands—keep stacking.",
        "Back at it with more volume today, [name]. Consistency through these sessions is what separates athletes."
      ],
      close: [
        "[name], final high-volume session. You've handled the workload like a competitor. Recovery starts now.",
        "Volume week closes today, [name]. You stacked the reps and built the work capacity. Strong week."
      ]
    },
    high_intensity: {
      mid: [
        "[name], heavy work continues today. Respect the weight, attack it with confidence. You're building strength.",
        "More intensity today, [name]. Every heavy rep builds physical and mental toughness. Focus and execute."
      ],
      close: [
        "[name], last heavy session this week. Give it everything—you've been building toward this all week.",
        "Final intensity day, [name]. Close the week at the top. You've earned the strength. Show it."
      ]
    },
    time_under_tension: {
      mid: [
        "[name], more TUT work today. Slow and controlled—your muscles don't know weight, they know tension and time.",
        "Time under tension continues, [name]. Embrace the burn. This builds the strength that sticks."
      ],
      close: [
        "[name], last TUT session. You've been disciplined with the tempo all week. That control is strength.",
        "Final time-under-tension day, [name]. Close it out with the same patience you started with."
      ]
    },
    focus: {
      mid: [
        "[name], precision continues today. Every rep with full attention and perfect intent. Basics mastered.",
        "More technique work, [name]. The athletes who nail fundamentals dominate. Keep refining."
      ],
      close: [
        "[name], final focus session. Your movement quality has improved this week. Carry that standard forward.",
        "Technique week wraps up, [name]. The details you've dialed in compound over time."
      ]
    },
    bulk: {
      mid: [
        "[name], building phase continues. Eat to grow, train to grow. Your body needs fuel—keep feeding it.",
        "More growth-focused work today, [name]. Mass doesn't build overnight. Consistency is the recipe."
      ],
      close: [
        "[name], last session of the growth push this week. Strong work. Keep the nutrition dialed in.",
        "Building phase closes for the week, [name]. You've put in the volume. Let nutrition do its job."
      ]
    },
    cut: {
      mid: [
        "[name], cut phase continues. Training stays intense—we protect muscle while the body leans out.",
        "More work today, [name]. Discipline in training and nutrition. You're in the process—trust it."
      ],
      close: [
        "[name], last session of the cut this week. Mental toughness showing. Stay the course.",
        "Cut week wraps up, [name]. You've maintained intensity while leaning out. Discipline paying off."
      ]
    }
  },
  adults: {
    testing: {
      mid: [
        "[name], more assessments today. These numbers guide your training—stay focused and give honest effort.",
        "Testing continues, [name]. No pressure, just data. Each test gives us a clearer picture."
      ],
      close: [
        "[name], final assessment today. Great work showing up consistently. These baselines set you up for progress.",
        "Last testing day, [name]. You've given us great data. Now we know exactly where to focus."
      ]
    },
    running: {
      mid: [
        "[name], more cardio work today. You're building stamina that shows up in everything—work, energy, sleep.",
        "Conditioning continues, [name]. Your cardiovascular system is adapting. Keep showing up."
      ],
      close: [
        "[name], last cardio session this week. Your engine is stronger than when the week started.",
        "Conditioning wraps up, [name]. The stamina you've built carries into everything you do."
      ]
    },
    time: {
      mid: [
        "[name], more tempo work today. Controlling the pace gets more from every movement.",
        "Time-based training continues, [name]. Slow and controlled builds real, functional strength."
      ],
      close: [
        "[name], final tempo session. You've been patient with the pace—your body thanks you.",
        "Last time-focused day, [name]. Quality reps all week. Well done."
      ]
    },
    mobility: {
      mid: [
        "[name], more mobility work today. You're investing in how you'll feel for decades. Worth every minute.",
        "Mobility continues, [name]. Better movement today means less pain tomorrow."
      ],
      close: [
        "[name], last mobility session. You should feel the difference already. Maintain this going forward.",
        "Mobility week wraps up, [name]. Freedom of movement earned. Keep it up."
      ]
    },
    flexibility: {
      mid: [
        "[name], more stretching today. Your body is loosening up—keep the consistency going.",
        "Flexibility work continues, [name]. Each session builds on the last."
      ],
      close: [
        "[name], last flexibility session. The maintenance you've done prevents future breakdowns.",
        "Stretching wraps up, [name]. Your body is thanking you. Keep incorporating this."
      ]
    },
    recovery: {
      mid: [
        "[name], recovery continues today. Light movement, letting your body consolidate. This is strategic.",
        "More recovery work, [name]. You've been consistent—your body needs and deserves this time."
      ],
      close: [
        "[name], last recovery session. You should feel refreshed and ready for next week. Smart training.",
        "Recovery week wraps up, [name]. Recharged and ready. The patience pays off."
      ]
    },
    deload: {
      mid: [
        "[name], deload continues. Same quality movement, lighter load. Your body is resetting.",
        "More light work today, [name]. Keep the habit alive while giving your system a break."
      ],
      close: [
        "[name], deload wraps up. You've been disciplined. Your body is ready for the next push.",
        "Final deload session, [name]. Fresh and maintained. Next week we build."
      ]
    },
    peak_week: {
      mid: [
        "[name], peak week continues. Stay confident—your consistent work has prepared you for this.",
        "More peak work today, [name]. Feel strong? That's the result of everything you've built."
      ],
      close: [
        "[name], peak week finishes today. You might have surprised yourself. That's what consistency does.",
        "Final peak session, [name]. Strong finish. You've proven what you're capable of."
      ]
    },
    taper: {
      mid: [
        "[name], taper continues. Less volume, more freshness. You should start feeling more energetic.",
        "More taper work today, [name]. Let the fatigue clear—you'll feel the difference soon."
      ],
      close: [
        "[name], taper wraps up. You should feel lighter, fresher, stronger. Mission accomplished.",
        "Final taper session, [name]. Your body has recovered while maintaining fitness. Well done."
      ]
    },
    high_volume: {
      mid: [
        "[name], more volume today. Stacking reps builds results. Some sessions are tough—that's the point.",
        "Volume continues, [name]. Consistency through challenging work is where the magic happens."
      ],
      close: [
        "[name], final high-volume session. You've handled the workload. Your body will reward the effort.",
        "Volume week wraps up, [name]. Strong showing. Recovery time earned."
      ]
    },
    high_intensity: {
      mid: [
        "[name], heavy work continues. Maintain technique, push limits. You're discovering what you're capable of.",
        "More intensity today, [name]. Focus, brace, execute. You've got this."
      ],
      close: [
        "[name], last heavy session this week. Finish with confidence. You've been strong all week.",
        "Intensity week wraps up, [name]. New limits discovered. Well earned."
      ]
    },
    time_under_tension: {
      mid: [
        "[name], more TUT today. Slow and controlled—it's harder than it sounds and more effective too.",
        "Time under tension continues, [name]. Your muscles are learning what real work feels like."
      ],
      close: [
        "[name], last TUT session. The patience and control you've shown builds lasting strength.",
        "TUT wraps up, [name]. Disciplined reps all week. Your muscles will remember."
      ]
    },
    focus: {
      mid: [
        "[name], technique focus continues. Perfect practice makes progress. Keep refining.",
        "More precision work today, [name]. Quality over quantity. Each rep with intention."
      ],
      close: [
        "[name], final technique session. Your movement quality is better than it was Monday. That lasts.",
        "Focus week wraps up, [name]. Better movement patterns established. Carry them forward."
      ]
    },
    bulk: {
      mid: [
        "[name], growth phase continues. Train hard, eat enough, recover well. Building takes patience.",
        "More building work today, [name]. Your body is responding. Keep fueling it."
      ],
      close: [
        "[name], last growth session this week. Strong work. Keep the nutrition supporting the training.",
        "Building week wraps up, [name]. Consistent effort plus proper nutrition equals results."
      ]
    },
    cut: {
      mid: [
        "[name], cut phase continues. Training stays intense—nutrition stays disciplined. You're doing it right.",
        "More work today, [name]. Protecting muscle while leaning out takes effort. Stay the course."
      ],
      close: [
        "[name], final cut session this week. Discipline is showing. Keep trusting the process.",
        "Cut week wraps up, [name]. Consistent intensity with smart nutrition. Results are coming."
      ]
    }
  },
  recreational: {
    testing: {
      mid: [
        "[name], more benchmarks today. Easy process, useful data. Just show up and give your best.",
        "Testing continues, [name]. Each assessment adds to the picture. No stress."
      ],
      close: [
        "[name], last test today. Great job showing up. These numbers help us plan what's next.",
        "Assessment wraps up, [name]. Simple, useful, done. Now we know where to focus."
      ]
    },
    running: {
      mid: [
        "[name], more cardio today. Building stamina makes daily life easier. Find your pace and push it.",
        "Conditioning continues, [name]. Your engine is getting stronger. Keep moving."
      ],
      close: [
        "[name], last cardio session this week. You've built real stamina. Nice work.",
        "Running wraps up, [name]. The effort you put in shows up everywhere else."
      ]
    },
    time: {
      mid: [
        "[name], more tempo work today. Controlling each rep gets more from every movement.",
        "Time-based training continues, [name]. Making each rep count—that's the focus."
      ],
      close: [
        "[name], last tempo session. Quality reps all week. Well done.",
        "Time-focused work wraps up, [name]. Patience and control—that's how results are built."
      ]
    },
    mobility: {
      mid: [
        "[name], more mobility today. Keeping you feeling good between sessions—that's the goal.",
        "Movement work continues, [name]. Less stiffness, more energy. This is the payoff."
      ],
      close: [
        "[name], last mobility session. You should feel noticeably better moving around. Keep it going.",
        "Mobility wraps up, [name]. The investment in how you move pays off daily."
      ]
    },
    flexibility: {
      mid: [
        "[name], more stretching today. It might feel easy, but it's protecting your body long-term.",
        "Flexibility continues, [name]. Each session maintains and builds your range."
      ],
      close: [
        "[name], last stretch session. Your body is more pliable than Monday. Maintain it.",
        "Flexibility wraps up, [name]. Easy work with lasting benefits."
      ]
    },
    recovery: {
      mid: [
        "[name], more easy movement today. Let your body adapt. No guilt, just recovery.",
        "Recovery continues, [name]. Active rest—staying in the habit without the grind."
      ],
      close: [
        "[name], recovery week wraps up. You should feel refreshed. Next week we go.",
        "Last recovery day, [name]. Smart training includes smart rest. Well done."
      ]
    },
    deload: {
      mid: [
        "[name], more light work today. Same movements, easy effort. Keep the routine.",
        "Deload continues, [name]. Think of it as maintenance mode. Light and consistent."
      ],
      close: [
        "[name], deload wraps up. Your body got the break it needed. Ready for next week.",
        "Last easy day, [name]. Consistency through deload shows commitment. Well done."
      ]
    },
    high_volume: {
      mid: [
        "[name], more reps today. You've got the consistency to handle it. Pace yourself and execute.",
        "Volume continues, [name]. Extra work builds extra results. Show up and stack reps."
      ],
      close: [
        "[name], last volume session. Big workload this week—your body will reward the effort.",
        "High volume wraps up, [name]. You handled the challenge. Strong week."
      ]
    },
    high_intensity: {
      mid: [
        "[name], more heavy work today. Maintain form, push effort. You're ready for this.",
        "Intensity continues, [name]. Challenging yourself builds capability. Keep going."
      ],
      close: [
        "[name], last heavy session. You've pushed limits this week. Finish strong.",
        "Intensity wraps up, [name]. Stronger than Monday. That's the goal."
      ]
    },
    focus: {
      mid: [
        "[name], more technique work today. Refining each rep makes every future session better.",
        "Quality focus continues, [name]. Getting the details right pays dividends."
      ],
      close: [
        "[name], last focus session. Better movement established this week. Carry it forward.",
        "Technique wraps up, [name]. The quality you've built is permanent progress."
      ]
    }
  },
  runners: {
    testing: {
      mid: [
        "[name], more assessments today. Pace honest, effort full. Every test sharpens the picture.",
        "Testing continues, [name]. Run your race, not someone else's. Accurate data over big numbers."
      ],
      close: [
        "[name], final benchmark today. Leave it on the track. After today we have the full picture.",
        "Last test run, [name]. Give everything—this data sets the course forward."
      ]
    },
    running: {
      mid: [
        "[name], more miles today. Easy pace, stacked volume. Trust the slow build.",
        "Base building continues, [name]. Keep the effort conversational. Aerobic foundation grows with patience."
      ],
      close: [
        "[name], last run of the week. The miles you've banked build the base for speed later.",
        "Volume week closes, [name]. Consistent easy miles all week. Your aerobic engine thanks you."
      ]
    },
    time: {
      mid: [
        "[name], more tempo work today. Comfortably hard—the effort that builds race fitness.",
        "Tempo continues, [name]. Your body is learning to hold pace under fatigue. Trust the process."
      ],
      close: [
        "[name], last tempo run. You've trained your body to run fast when tired. Race-specific fitness built.",
        "Time-based work wraps up, [name]. The speed endurance from this week shows up on race day."
      ]
    },
    mobility: {
      mid: [
        "[name], more hip and ankle work today. Mobile runners are efficient runners. Keep investing.",
        "Mobility continues, [name]. Opening up your stride pays dividends every run."
      ],
      close: [
        "[name], last mobility session. Your stride should feel freer already. Maintain this.",
        "Mobility wraps up, [name]. Efficient movement established. Carry it into your miles."
      ]
    },
    flexibility: {
      mid: [
        "[name], more stretching today. Tight muscles limit your stride. We're addressing that.",
        "Flexibility continues, [name]. Runners who stretch stay healthy longer. Worth the time."
      ],
      close: [
        "[name], last stretch session. Hamstrings, hips, calves—all more pliable. Keep it up.",
        "Flexibility wraps up, [name]. Pliability built this week protects you for thousands of miles."
      ]
    },
    recovery: {
      mid: [
        "[name], easy running today. Keep moving, keep it light. Your body is adapting.",
        "Recovery continues, [name]. Easy effort, good form. Let your legs come back."
      ],
      close: [
        "[name], last recovery day. Legs should feel fresh. That means it worked.",
        "Recovery wraps up, [name]. Recharged and ready to train properly again."
      ]
    },
    deload: {
      mid: [
        "[name], reduced miles again today. Cut volume, keep frequency. Legs freshen up daily.",
        "Deload continues, [name]. Running light is still running. Maintain the rhythm."
      ],
      close: [
        "[name], deload wraps up. Fresh legs, maintained fitness. Ready to push again.",
        "Last deload run, [name]. You've been patient. That patience becomes speed."
      ]
    },
    peak_week: {
      mid: [
        "[name], stay sharp. Short, quality efforts. You're fit and ready—don't force it.",
        "Peak week continues, [name]. Confidence over volume. Trust what you've built."
      ],
      close: [
        "[name], last peak session. Light legs, sharp mind. You're prepared. Go race.",
        "Peak week finishes, [name]. The work is done. Now you perform."
      ]
    },
    taper: {
      mid: [
        "[name], taper continues. Less volume, maintained intensity. Your body is supercompensating.",
        "More rest, less miles today, [name]. It feels counterintuitive. It works."
      ],
      close: [
        "[name], taper wraps up. You should feel fresh and fast. Trust it—race day ready.",
        "Final taper session, [name]. Light, easy, done. Your legs are loaded for race day."
      ]
    },
    high_volume: {
      mid: [
        "[name], big miles again today. Manage effort, stay fueled. This builds the engine.",
        "Volume continues, [name]. Don't rush the easy runs. Patient miles compound."
      ],
      close: [
        "[name], last high-volume day. You've stacked serious miles this week. Time to recover.",
        "Volume wraps up, [name]. The endurance built this week is in the bank. Well done."
      ]
    },
    high_intensity: {
      mid: [
        "[name], more speed work today. Quality over quantity. Recover fully between efforts.",
        "Intensity continues, [name]. Execute each interval with purpose. This builds top-end speed."
      ],
      close: [
        "[name], last speed session. Fast legs earned this week. Quality work all around.",
        "Intensity wraps up, [name]. The speed you've built shows up when it counts."
      ]
    },
    time_under_tension: {
      mid: [
        "[name], more strength work today. Eccentric loading builds the durability your legs need for miles.",
        "TUT continues, [name]. Slow strength builds the tissue resilience runners need. Stay patient."
      ],
      close: [
        "[name], last TUT session. Stronger, more resilient legs built this week. Protection for the road ahead.",
        "Strength work wraps up, [name]. Your body is more durable. Miles will feel easier."
      ]
    },
    focus: {
      mid: [
        "[name], more form work today. Cadence, posture, foot strike. Small gains, big efficiency.",
        "Technique continues, [name]. Better mechanics mean faster, more efficient running. Keep refining."
      ],
      close: [
        "[name], last form session. The habits you've built last for thousands of miles.",
        "Focus wraps up, [name]. Efficient movement established. Every future run benefits."
      ]
    }
  },
  golfers: {
    testing: {
      mid: [
        "[name], more assessments today. Rotational power, stability, mobility—all driving your golf game.",
        "Testing continues, [name]. Each measurement tells us where to focus for your swing."
      ],
      close: [
        "[name], final testing session. Complete picture of your physical capabilities. Now we optimize.",
        "Assessment wraps up, [name]. Great data collected. This guides everything moving forward."
      ]
    },
    running: {
      mid: [
        "[name], more conditioning today. Fitness affects your back nine more than most golfers realize.",
        "Cardio continues, [name]. A fit golfer makes better decisions late in the round. Building that."
      ],
      close: [
        "[name], last conditioning session. Stamina built this week shows up in late-round performance.",
        "Cardio wraps up, [name]. You won't fade on the back nine. Endurance earned."
      ]
    },
    time: {
      mid: [
        "[name], more tempo work today. Controlled movement builds the body control your swing demands.",
        "Time-based training continues, [name]. Slow, deliberate loading transfers directly to your game."
      ],
      close: [
        "[name], last tempo session. Control built this week shows up in your swing consistency.",
        "Tempo work wraps up, [name]. Body control refined. That's golf-specific strength."
      ]
    },
    mobility: {
      mid: [
        "[name], more rotation and mobility work today. Your swing is limited by your range—we're expanding it.",
        "Mobility continues, [name]. Thoracic spine, hips, shoulders—all opening up for better movement."
      ],
      close: [
        "[name], last mobility session. You should feel freer in your rotation already. Game changer.",
        "Mobility wraps up, [name]. The range you've built translates directly to your swing."
      ]
    },
    flexibility: {
      mid: [
        "[name], more stretching today. Tight muscles create compensations that show up in your swing.",
        "Flexibility continues, [name]. Your body needs length for the positions a good swing requires."
      ],
      close: [
        "[name], last stretch session. More pliable, fewer compensations. Your swing thanks you.",
        "Flexibility wraps up, [name]. Range built, consistency protected. Smart investment."
      ]
    },
    recovery: {
      mid: [
        "[name], more easy work today. Active mobility, light movement. Season is long—stay fresh.",
        "Recovery continues, [name]. Strategic rest keeps you performing through a long golf season."
      ],
      close: [
        "[name], recovery wraps up. You should feel refreshed and ready to perform.",
        "Last recovery day, [name]. Smart recovery is smart golf. Recharged and ready."
      ]
    },
    deload: {
      mid: [
        "[name], more light work today. Maintain the groove without the grind. Joints happy.",
        "Deload continues, [name]. Same movement quality, easier load. Your body is resetting."
      ],
      close: [
        "[name], deload wraps up. Body refreshed, movement maintained. Ready for the next block.",
        "Last light day, [name]. Disciplined deload sets up a strong next phase."
      ]
    },
    peak_week: {
      mid: [
        "[name], stay sharp and explosive today. Light work, confidence building. Your body is primed.",
        "Peak continues, [name]. Maintain and fine-tune. You're physically ready to perform."
      ],
      close: [
        "[name], peak week finishes. You're athletic, explosive, and ready. Trust your preparation.",
        "Final peak session, [name]. Light, confident, sharp. Tournament ready."
      ]
    },
    taper: {
      mid: [
        "[name], taper continues. Less is more right now. Stay loose, stay confident.",
        "More taper today, [name]. Reduced volume, maintained feel. You'll be explosive by game day."
      ],
      close: [
        "[name], taper wraps up. You should feel athletic and powerful. Perfect timing.",
        "Final taper session, [name]. Fresh, explosive, ready. Go perform."
      ]
    },
    high_volume: {
      mid: [
        "[name], more volume today. Building the durability and work capacity golfers need for long seasons.",
        "Volume continues, [name]. More reps build the physical foundation. Keep executing."
      ],
      close: [
        "[name], last volume session. You've built durability this week. Solid work.",
        "High volume wraps up, [name]. Strong work capacity built. Your body can handle the season."
      ]
    },
    high_intensity: {
      mid: [
        "[name], more power work today. Rotational strength and explosive movement—where club head speed lives.",
        "Intensity continues, [name]. Heavy loading builds the strength that becomes power in your swing."
      ],
      close: [
        "[name], last heavy session. Stronger foundation built this week. That translates to the course.",
        "Strength focus wraps up, [name]. More powerful, more athletic. Your golf game benefits."
      ]
    },
    time_under_tension: {
      mid: [
        "[name], more stability work today. Controlled loading builds the resilience your joints need.",
        "TUT continues, [name]. Slow, deliberate strength work for longevity and control."
      ],
      close: [
        "[name], last TUT session. Stability and control refined this week. Your body is more resilient.",
        "Time under tension wraps up, [name]. Joint health and stability improved. Playing for decades."
      ]
    },
    focus: {
      mid: [
        "[name], more technique refinement today. Quality reps that transfer to your swing. Precision focus.",
        "Form work continues, [name]. Golf is control. Training is control. They reinforce each other."
      ],
      close: [
        "[name], last technique session. Movement quality improved this week. That shows up on the course.",
        "Focus wraps up, [name]. Refined movement patterns established. Better training, better golf."
      ]
    }
  },
  fitness: {
    testing: {
      mid: [
        "[name], more assessments today. No judgment—just useful information to guide your training.",
        "Testing continues, [name]. Honest effort, helpful data. Each test tells us something useful."
      ],
      close: [
        "[name], final test today. Great work. These numbers guide everything going forward.",
        "Assessment wraps up, [name]. Clear picture established. Now we move with purpose."
      ]
    },
    running: {
      mid: [
        "[name], more cardio today. Building your aerobic base improves energy, mood, and health.",
        "Conditioning continues, [name]. Your heart and lungs are getting stronger. Keep it going."
      ],
      close: [
        "[name], last cardio session. You've built real stamina this week. Carries into everything.",
        "Cardio wraps up, [name]. Stronger engine built. That energy shows up in daily life."
      ]
    },
    time: {
      mid: [
        "[name], more tempo work today. Controlled pace maximizes results from every rep.",
        "Time-based training continues, [name]. Slow and controlled—this is where real strength builds."
      ],
      close: [
        "[name], final tempo session. Patience with the pace all week. Your muscles are thanking you.",
        "Tempo wraps up, [name]. Quality week of controlled work. Results incoming."
      ]
    },
    mobility: {
      mid: [
        "[name], more mobility work today. Better movement makes better workouts and better daily life.",
        "Mobility continues, [name]. Investing in how you move pays off in everything you do."
      ],
      close: [
        "[name], last mobility session. Moving better already. Keep this going.",
        "Mobility wraps up, [name]. Freedom of movement earned. Maintain it."
      ]
    },
    flexibility: {
      mid: [
        "[name], more stretching today. Range of motion maintenance—essential and often overlooked.",
        "Flexibility continues, [name]. Your body is looser and more capable. Keep stretching."
      ],
      close: [
        "[name], last stretch session. Your body is more pliable. That's protection and performance.",
        "Flexibility wraps up, [name]. Maintenance done right. Feel the difference."
      ]
    },
    recovery: {
      mid: [
        "[name], more easy movement today. Strategic rest is part of smart training.",
        "Recovery continues, [name]. Light effort, big adaptation. Your body is consolidating."
      ],
      close: [
        "[name], recovery wraps up. Recharged and ready for next week. Smart training.",
        "Last recovery day, [name]. Patience pays off. You're fresh and ready."
      ]
    },
    deload: {
      mid: [
        "[name], more light work today. Same exercises, less intensity. Keep the groove.",
        "Deload continues, [name]. Maintaining the habit while letting fatigue clear."
      ],
      close: [
        "[name], deload wraps up. Body rested, habits maintained. Ready for the next push.",
        "Last deload session, [name]. Disciplined and consistent. That's how it's done."
      ]
    },
    peak_week: {
      mid: [
        "[name], peak work continues. You've built toward this—enjoy feeling strong.",
        "More peak testing today, [name]. Your consistent sessions have added up. Show yourself."
      ],
      close: [
        "[name], peak week finishes. You might have surprised yourself with what you can do.",
        "Final peak session, [name]. Strong week. Your consistency created this capability."
      ]
    },
    taper: {
      mid: [
        "[name], taper continues. You should be starting to feel fresher and more energetic.",
        "Less volume again today, [name]. Let the accumulated fatigue clear. The difference is coming."
      ],
      close: [
        "[name], taper wraps up. Feeling fresher? That was the plan. Well executed.",
        "Final taper session, [name]. Fresh, strong, ready. Mission accomplished."
      ]
    },
    high_volume: {
      mid: [
        "[name], more volume today. Stacking reps is where results get built. Keep executing.",
        "Volume continues, [name]. Challenging weeks build the strongest foundations. Show up."
      ],
      close: [
        "[name], last high-volume session. You've done the work. Your body rewards consistency.",
        "Volume wraps up, [name]. Big workload handled with composure. Strong week."
      ]
    },
    high_intensity: {
      mid: [
        "[name], heavy work continues. You're discovering capability. Focus and deliver.",
        "More intensity today, [name]. Respect the weights, push yourself. You've got this."
      ],
      close: [
        "[name], last heavy session. Stronger than Monday. That's the whole point.",
        "Intensity wraps up, [name]. New limits found. New confidence earned."
      ]
    },
    time_under_tension: {
      mid: [
        "[name], more TUT today. Make every rep count by controlling every second of it.",
        "Time under tension continues, [name]. Slow reps, real results. Embrace the burn."
      ],
      close: [
        "[name], last TUT session. Disciplined tempo all week. Your muscles learned real work.",
        "TUT wraps up, [name]. Patient, controlled work. Lasting strength built."
      ]
    },
    focus: {
      mid: [
        "[name], more technique today. Every rep with attention and intention. Quality builds quality.",
        "Precision continues, [name]. Better movement now means better results always."
      ],
      close: [
        "[name], last focus session. Your form has improved this week. That's permanent progress.",
        "Technique wraps up, [name]. Quality movement established. Carry this standard forward."
      ]
    },
    bulk: {
      mid: [
        "[name], building phase continues. Train hard, eat enough. Mass takes time and consistency.",
        "More growth work today, [name]. Feed the process. Your body is responding."
      ],
      close: [
        "[name], last building session this week. Strong work. Keep the nutrition supporting it.",
        "Growth week wraps up, [name]. Consistent effort plus nutrition equals results."
      ]
    },
    cut: {
      mid: [
        "[name], cut continues. Training stays intense, nutrition stays disciplined. Trust the process.",
        "More work today, [name]. Protecting muscle while leaning out. Discipline is the tool."
      ],
      close: [
        "[name], last cut session this week. You've shown the mental toughness this requires.",
        "Cut wraps up, [name]. Consistent intensity with controlled nutrition. Changes are happening."
      ]
    }
  }
};

const dayPhaseLabels = {
  weekly: 'Start of Week',
  mid: 'Mid-Week',
  close: 'Close Out'
};

export default function ThemeSelector({ isOpen, onClose, onAppendText }) {
  const [selectedCategory, setSelectedCategory] = useState('athletes');
  const [selectedTheme, setSelectedTheme] = useState('testing');
  const [customName, setCustomName] = useState('[name]');
  const [appendedIndices, setAppendedIndices] = useState(new Set());
  const [dayPhase, setDayPhase] = useState('weekly');

  // Reset appended state when modal opens
  useEffect(() => {
    if (isOpen) setAppendedIndices(new Set());
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = Object.keys(themeMessages);
  const availableThemes = Object.keys(themeMessages[selectedCategory].themes);
  const messages = dayPhase === 'weekly'
    ? (themeMessages[selectedCategory]?.themes[selectedTheme] || [])
    : (dayThemeData[selectedCategory]?.[selectedTheme]?.[dayPhase] || []);

  const formatMessage = (msg) => msg.replace(/\[name\]/g, customName);

  const handleAppend = (message, index) => {
    onAppendText(formatMessage(message));
    setAppendedIndices((prev) => new Set(prev).add(`${dayPhase}-${selectedCategory}-${selectedTheme}-${index}`));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Theme Selector</h2>
              <p className="text-white/70 text-sm">Choose category, focus, day phase, then click messages to add</p>
            </div>
            <button onClick={onClose} className="bg-white/20 border-none text-white text-base w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center">&times;</button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5">

          {/* Name input */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Client Name</label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value || '[name]')}
              placeholder="Enter client name"
              className="w-full max-w-[220px] px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#667eea]"
            />
          </div>

          {/* Category pills */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Client Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (!themeMessages[cat].themes[selectedTheme]) {
                      setSelectedTheme(Object.keys(themeMessages[cat].themes)[0]);
                    }
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border-2 ${
                    selectedCategory === cat
                      ? 'border-[#667eea] bg-indigo-50 text-[#667eea]'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-sm">{themeMessages[cat].label}</div>
                  <div className="text-[10px] text-gray-400">{themeMessages[cat].sublabel}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Theme focus pills */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Training Focus</label>
            <div className="flex flex-wrap gap-1.5">
              {availableThemes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                    selectedTheme === theme
                      ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {themeLabels[theme]}
                </button>
              ))}
            </div>
          </div>

          {/* Day phase pills */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">Day Phase</label>
            <div className="flex gap-1.5">
              {Object.entries(dayPhaseLabels).map(([phase, label]) => (
                <button
                  key={phase}
                  onClick={() => setDayPhase(phase)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                    dayPhase === phase
                      ? 'bg-gradient-to-br from-[#f59e0b] to-[#ef4444] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages — click to append */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
              {dayPhase === 'weekly' ? 'Weekly Messages' : dayPhase === 'mid' ? 'Mid-Week Messages' : 'Close-Out Messages'} — click to add (multiple allowed)
            </label>
            <div className="flex flex-col gap-2">
              {messages.length === 0 && (
                <p className="text-sm text-gray-400 italic py-3">No messages for this combination. Try a different day phase or training focus.</p>
              )}
              {messages.map((message, index) => {
                const key = `${dayPhase}-${selectedCategory}-${selectedTheme}-${index}`;
                const wasAppended = appendedIndices.has(key);
                return (
                  <div
                    key={index}
                    onClick={() => handleAppend(message, index)}
                    className={`p-3.5 rounded-lg border-2 cursor-pointer transition-all ${
                      wasAppended
                        ? 'border-green-400 bg-green-50'
                        : 'border-gray-200 hover:border-[#667eea] hover:bg-indigo-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm text-gray-800 flex-1">{formatMessage(message)}</p>
                      <span className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded ${
                        wasAppended
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {wasAppended ? 'Added' : 'Add'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-[15px] font-semibold bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

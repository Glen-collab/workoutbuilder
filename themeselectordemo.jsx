< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Weekly Theme Selector - Training App</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <style>
                        .message-card:hover {transform: translateY(-1px); }
                    </style>
                </head>
                <body class="bg-gray-100 min-h-screen">
                    <div id="root"></div>

                    <script type="module">
                        import {createElement as h, useState, Fragment} from 'https://esm.sh/react@18';
                        import {createRoot} from 'https://esm.sh/react-dom@18/client';

                        // Theme messages organized by category and focus
                        const themeMessages = {
                            athletes: {
                            label: "Athletes",
                        sublabel: "Jr High • High School • College",
                        themes: {
                            testing: [
                        "[name], this week we find out where you stand. No pressure—just data. Give honest effort and we'll have a clear picture to build from.",
                        "Testing week, [name]. This isn't about impressing anyone. It's about establishing your baseline so every rep moving forward has purpose.",
                        "[name], time to see what you've built. These numbers don't define you—they direct your training. Let's get accurate data.",
                        "This week is about truth, [name]. We test, we measure, we plan. Attack each test like it matters, because it does."
                        ],
                        running: [
                        "[name], conditioning is the separator. When talent is equal, the athlete who doesn't gas out wins. We're building that edge this week.",
                        "Legs and lungs, [name]. This week we push your engine. Every sprint, every interval is money in the bank for your sport.",
                        "[name], speed without stamina is a liability. This week we fix that. Trust the process and embrace the suck.",
                        "Running week, [name]. Your sport requires you to move—fast, often, and when you're tired. Let's train that reality."
                        ],
                        time: [
                        "[name], this week every rep has a clock. Time under tension builds what shortcuts can't. Control the weight, own the tempo.",
                        "Slow down to speed up, [name]. This week we're adding time components to build control and strength you can actually use.",
                        "[name], tempo work this week. The clock keeps us honest and your muscles under tension longer. That's where growth happens."
                        ],
                        mobility: [
                        "[name], you can't use strength you can't access. This week we open up ranges of motion that make you more athletic.",
                        "Mobility week, [name]. An athlete who can't move well can't perform well. We're removing restrictions so you can compete unrestricted.",
                        "[name], tight athletes get hurt and underperform. This week we invest in your movement quality. It pays dividends all season."
                        ],
                        flexibility: [
                        "[name], flexibility isn't just for recovery—it's for resilience. This week we lengthen what's limiting you.",
                        "Range of motion is range of performance, [name]. Let's open things up this week so your body can do what your mind wants."
                        ],
                        recovery: [
                        "[name], recovery is where adaptation happens. This week is strategic—we're letting your body catch up to your training.",
                        "Smart athletes recover smart, [name]. This week we dial it back so you can dial it up when it counts.",
                        "[name], this isn't a lazy week. It's a building week. Your body is adapting to everything we've thrown at it. Let it."
                        ],
                        deload: [
                        "[name], deload week. We're not going backwards—we're setting up to go further. Trust the process.",
                        "This week we pull back, [name]. Your nervous system, joints, and muscles need this. Next week we attack with a full tank.",
                        "[name], think of this week as sharpening the blade. Light weights, quality movement, mental reset. We reload to reload."
                        ],
                        peak_week: [
                        "[name], everything we've done has led here. This is peak week—you're ready. Trust your preparation.",
                        "Peak week, [name]. Body is primed, training is tapered. Now we fine-tune and stay sharp. Game time approaches.",
                        "[name], this is the week where it comes together. Light, explosive, confident. You've done the work—now show it."
                        ],
                        taper: [
                        "[name], we're tapering. Less volume, maintained intensity. Your body is supercompensating—let it happen.",
                        "Taper time, [name]. The hay is in the barn. We stay sharp but let the fatigue clear out. Trust the timing."
                        ],
                        high_volume: [
                        "[name], volume week. We're stacking reps and building capacity. This is where work ethic separates athletes.",
                        "High volume this week, [name]. Your body adapts to demands placed on it. We're placing demands. Embrace the grind.",
                        "[name], lots of work this week. Not every rep will feel great—that's fine. Consistency over perfection. Stack the reps."
                        ],
                        high_intensity: [
                        "[name], heavy week. We're pushing limits and finding new ceilings. Respect the weight but don't fear it.",
                        "Intensity is up this week, [name]. Focus, brace, execute. Every heavy rep builds strength and mental toughness.",
                        "[name], time to lift heavy things. Your nervous system needs this stimulus. Approach the bar with confidence."
                        ],
                        time_under_tension: [
                        "[name], TUT week. We're slowing everything down and making muscles work longer. This builds the strength that sticks.",
                        "Time under tension this week, [name]. Control every inch of every rep. Your muscles don't know weight—they know tension and time."
                        ],
                        focus: [
                        "[name], this week is about precision. Quality over quantity. Every rep with full attention and perfect intent.",
                        "Focus week, [name]. We're dialing in technique and building the movement patterns that make you better long-term.",
                        "[name], attention to detail this week. The athletes who master basics dominate. Let's master basics."
                        ],
                        bulk: [
                        "[name], we're building mass this phase. Eat to grow, train to grow, sleep to grow. Your body needs fuel—give it fuel.",
                        "Growth phase, [name]. Don't fear the scale going up. We're adding muscle that makes you more competitive."
                        ],
                        cut: [
                        "[name], leaning out this phase. Training stays intense—we protect muscle while losing fat. Stay disciplined with nutrition.",
                        "Cut phase, [name]. This takes mental toughness. We maintain strength while the body composition shifts. You've got this."
                        ]
        }
      },
                        adults: {
                            label: "Adults",
                        sublabel: "General Population",
                        themes: {
                            testing: [
                        "[name], this week we establish baselines. No judgment—just information. These numbers help us train smarter going forward.",
                        "Assessment week, [name]. Let's see where you are so we can map where you're going. Honest effort, accurate data.",
                        "[name], time to test. This isn't about comparison to anyone else—it's about having clear markers for your progress."
                        ],
                        running: [
                        "[name], cardio focus this week. A stronger cardiovascular system means more energy for everything—work, family, life.",
                        "Conditioning week, [name]. We're building the engine that powers everything else you do. Let's earn that improved stamina.",
                        "[name], this week we run. Not because you have to—because a body that moves well lives well. Let's build that capacity."
                        ],
                        time: [
                        "[name], tempo training this week. We're controlling the pace to maximize results. Slow and controlled builds real strength.",
                        "Time-based work this week, [name]. We're adding a clock to keep us honest and make every second count."
                        ],
                        mobility: [
                        "[name], mobility focus this week. This is how we keep you moving well for decades. Investment in your future self.",
                        "This week we work on how you move, [name]. Better mobility means less pain, more capability, improved quality of life.",
                        "[name], tight muscles and stiff joints limit everything. This week we create freedom in your movement."
                        ],
                        flexibility: [
                        "[name], flexibility week. This might not feel like a workout, but it's building the foundation for everything else.",
                        "Stretching and lengthening this week, [name]. Your body will thank you. This is maintenance that prevents breakdowns."
                        ],
                        recovery: [
                        "[name], recovery week. Life is demanding—this week we let your body catch up. Active recovery, not laziness.",
                        "This week we recover, [name]. You've been consistent and your body needs consolidation time. This is part of the plan.",
                        "[name], strategic recovery this week. We're not stopping—we're letting adaptation happen. Trust the process."
                        ],
                        deload: [
                        "[name], deload week. Lighter weights, same quality movement. Your joints and nervous system need this reset.",
                        "Pulling back this week, [name]. Not because you can't handle more—because smart training includes planned recovery.",
                        "[name], think of this week as maintenance. We're keeping the habit while giving your body a break."
                        ],
                        peak_week: [
                        "[name], let's see what you've built. This week we test your peak—you might surprise yourself.",
                        "Peak week, [name]. All those consistent sessions have added up. Time to feel strong."
                        ],
                        taper: [
                        "[name], we're tapering the volume this week. You should start feeling fresher and more energetic. That's the goal.",
                        "Less volume this week, [name]. We maintain intensity but let accumulated fatigue clear. You'll feel the difference."
                        ],
                        high_volume: [
                        "[name], higher volume this week. More sets, more reps, more work. This is where results get built.",
                        "Volume week, [name]. We're stacking quality reps. Some sessions will be challenging—that's the point.",
                        "[name], lots of work this week. Consistency through this builds the foundation for everything. Show up and execute."
                        ],
                        high_intensity: [
                        "[name], heavier weights this week. We're challenging your strength. Respect the load, maintain technique, push limits.",
                        "Intensity is up, [name]. This is where you discover what you're capable of. Focus and execute.",
                        "[name], time to lift heavy. Your body is ready for this challenge. Confidence and control."
                        ],
                        time_under_tension: [
                        "[name], slow and controlled this week. Time under tension builds the kind of strength that's functional and lasting.",
                        "TUT week, [name]. We're making muscles work longer under load. It's harder than it sounds—and more effective."
                        ],
                        focus: [
                        "[name], technique focus this week. Perfect practice makes perfect. We're refining movement quality.",
                        "Precision week, [name]. Every rep with attention and intention. Quality over quantity.",
                        "[name], this week we dial in the details. Better movement patterns now mean better results forever."
                        ],
                        bulk: [
                        "[name], we're in a building phase. Eat enough to support muscle growth. The scale might go up—that's expected and okay.",
                        "Growth phase, [name]. Training hard means eating enough to recover and build. Embrace the process."
                        ],
                        cut: [
                        "[name], leaning out this phase. Training stays consistent—nutrition tightens up. Discipline and patience.",
                        "Cut phase, [name]. We protect the muscle you've built while creating the deficit for fat loss. Sustainable approach."
                        ]
        }
      },
                        recreational: {
                            label: "Recreational",
                        sublabel: "Weekend Warriors",
                        themes: {
                            testing: [
                        "[name], let's see where we're at this week. Simple assessments, useful information. No stress—just benchmarks.",
                        "Quick testing this week, [name]. This helps us know what's working and what to adjust. Easy process, valuable data."
                        ],
                        running: [
                        "[name], some cardio focus this week. Building stamina makes everything else in life a little easier.",
                        "Running and conditioning this week, [name]. We're building the engine. Find a pace you can sustain and push it slightly."
                        ],
                        time: [
                        "[name], adding tempo work this week. Controlling the pace of each rep gets more out of every movement.",
                        "Time-focused training, [name]. We're making each rep count by controlling the speed. Simple but effective."
                        ],
                        mobility: [
                        "[name], mobility work this week. This is how we keep you feeling good and moving well between sessions.",
                        "Movement quality focus, [name]. Better mobility means less stiffness, fewer aches, more energy."
                        ],
                        flexibility: [
                        "[name], stretching focus this week. Maintaining flexibility keeps you feeling young and moving freely.",
                        "Flexibility work, [name]. This might feel easy, but it's protecting your body long-term."
                        ],
                        recovery: [
                        "[name], light week. You've been showing up consistently—let's bank that and let your body adapt.",
                        "Recovery focus, [name]. This is part of the process. Active rest, movement maintenance, no guilt."
                        ],
                        deload: [
                        "[name], easy week. Same movements, lighter load. Keep the habit while giving your body a break.",
                        "Deload week, [name]. Think of it as an active rest week. Stay moving, stay light, stay consistent."
                        ],
                        high_volume: [
                        "[name], more volume this week. Extra sets build extra results. You've got the consistency to handle this.",
                        "Higher rep week, [name]. We're building work capacity. Pace yourself and complete the work."
                        ],
                        high_intensity: [
                        "[name], pushing intensity this week. Heavier weights, more challenge. You're ready for this.",
                        "Heavy week, [name]. Let's see what you've got. Maintain form, push effort."
                        ],
                        focus: [
                        "[name], technique focus this week. Refining movement quality makes every future session more effective.",
                        "Quality over quantity this week, [name]. Let's make each rep look and feel better."
                        ]
        }
      },
                        runners: {
                            label: "Runners",
                        sublabel: "Distance • Sprint • Trail",
                        themes: {
                            testing: [
                        "[name], time trial week. Let's get current data on where your fitness is. Pace honest, effort full.",
                        "Assessment week, [name]. We test so we can train with precision. Your times and distances guide the programming.",
                        "[name], benchmark runs this week. These numbers tell us exactly where to focus. Run your race, not someone else's."
                        ],
                        running: [
                        "[name], mileage week. We're building base. Easy pace, accumulated volume. Trust the slow build.",
                        "Volume running, [name]. This week we stack miles. Keep the effort conversational—we're building aerobic foundation.",
                        "[name], run more this week, run easy. The base you build now supports the speed you want later."
                        ],
                        time: [
                        "[name], tempo runs this week. Comfortably hard—you can talk, but you don't want to. This builds race pace fitness.",
                        "Time-based intervals, [name]. We're training your body to hold pace. The clock keeps us honest.",
                        "[name], tempo work teaches your body to run fast while tired. That's what racing is. Let's practice it."
                        ],
                        mobility: [
                        "[name], hip and ankle work this week. Runners who move well run faster and stay healthier. This is investment.",
                        "Mobility focus, [name]. Your stride is limited by your range of motion. Let's open things up.",
                        "[name], a mobile runner is an efficient runner. This week we work on the flexibility that supports your stride."
                        ],
                        flexibility: [
                        "[name], stretching focus this week. Tight hamstrings, hip flexors, and calves limit your potential. Let's address that.",
                        "Flexibility work, [name]. Runners often neglect this. We don't. Maintain pliability, prevent injury."
                        ],
                        recovery: [
                        "[name], recovery week. Easy runs only. Your body is adapting to recent training. Let it happen.",
                        "Active recovery, [name]. Keep moving but keep it light. Sleep well, eat well, run easy.",
                        "[name], easy week. This isn't lost fitness—it's consolidated fitness. Trust the recovery."
                        ],
                        deload: [
                        "[name], reduced mileage this week. We're freshening up while maintaining fitness. Light and easy.",
                        "Deload week, [name]. Cut volume, keep frequency. Your legs will feel fresh by week's end.",
                        "[name], pulling back to push forward. Less miles, same consistency. Recovery is training."
                        ],
                        peak_week: [
                        "[name], peak week. You're fit, you're ready. Short, sharp efforts only. Trust your training.",
                        "This is it, [name]. Peak fitness, fresh legs. Light running, stay loose. Race day approaches.",
                        "[name], the work is done. Peak week is about maintenance and confidence. You're prepared."
                        ],
                        taper: [
                        "[name], taper time. Cut volume significantly, keep intensity short and sharp. You'll feel amazing by race day.",
                        "Tapering, [name]. Less running, more rest. Your body is supercompensating. Let it.",
                        "[name], trust the taper. It feels weird to run less when a race approaches. It works. Rest now, race fast."
                        ],
                        high_volume: [
                        "[name], big mileage week. This is where endurance gets built. Manage effort, stack the miles.",
                        "Volume week, [name]. More miles than usual. Stay patient, stay fueled, stay consistent.",
                        "[name], we're pushing volume this week. This builds the engine. Don't rush the easy runs."
                        ],
                        high_intensity: [
                        "[name], speed work this week. Intervals, repeats, fast finish runs. We're building top end.",
                        "Intensity focus, [name]. Track work or tempo runs. We're teaching your body to run fast.",
                        "[name], hard running this week. Recover fully between efforts, then execute the next one. Quality speed."
                        ],
                        time_under_tension: [
                        "[name], strength work for runners this week. Eccentric loading builds the resilience your legs need for miles.",
                        "Slow strength work, [name]. Time under tension builds the tissue durability runners need. This protects your body."
                        ],
                        focus: [
                        "[name], technique focus this week. Cadence, posture, foot strike. Small improvements, big efficiency gains.",
                        "Form work, [name]. We're refining your running mechanics. Efficient runners are faster runners.",
                        "[name], running drills and form focus this week. Build better habits that last thousands of miles."
                        ]
        }
      },
                        golfers: {
                            label: "Golfers",
                        sublabel: "Recreational • Competitive",
                        themes: {
                            testing: [
                        "[name], assessment week. We test rotational power, hip mobility, and stability. These drive your swing.",
                        "Baseline testing, [name]. Let's measure the physical capabilities that determine your golf performance.",
                        "[name], physical screening this week. Knowing your limitations helps us remove them."
                        ],
                        running: [
                        "[name], cardio focus this week. 18 holes is 4+ hours—conditioning affects late-round performance more than you think.",
                        "Aerobic work, [name]. A fit golfer makes better decisions on the back nine. We're building that endurance.",
                        "[name], conditioning matters in golf. Fatigue causes swing breakdown. This week we build stamina."
                        ],
                        time: [
                        "[name], tempo training this week. Controlled movements build the body control your swing needs.",
                        "Time-based work, [name]. Slow, controlled loading builds stability through your swing.",
                        "[name], tempo focus. Golf is about control, not just power. This translates directly."
                        ],
                        mobility: [
                        "[name], mobility is the foundation of a good swing. This week we work thoracic spine, hips, and shoulders.",
                        "Rotation work, [name]. Your swing is limited by your mobility. Let's expand your range.",
                        "[name], can't rotate what's restricted. This week we open up the movement that powers your swing.",
                        "Hip and thoracic mobility, [name]. This is where swing speed and consistency come from. Essential work."
                        ],
                        flexibility: [
                        "[name], flexibility focus this week. Tight muscles create compensations. Compensations create inconsistency.",
                        "Stretching for golf, [name]. Your body needs length to create the positions a good swing requires."
                        ],
                        recovery: [
                        "[name], recovery week. Active mobility, light movement. Your body consolidates the work we've done.",
                        "Easy week, [name]. Golf season is long—strategic recovery keeps you fresh. Trust the process.",
                        "[name], backing off this week. Stay moving, stay loose, let your body adapt."
                        ],
                        deload: [
                        "[name], deload week. Maintain movement quality with lighter loads. Keep the groove without the grind.",
                        "Light week, [name]. Same movements, less intensity. Your joints and muscles need this reset."
                        ],
                        peak_week: [
                        "[name], tournament prep week. Light, explosive movements. You're physically ready—stay sharp and confident.",
                        "Peak week, [name]. We maintain and fine-tune. Your body is primed for performance."
                        ],
                        taper: [
                        "[name], tapering for your event. Reduced volume, maintained intensity. You'll feel athletic and explosive.",
                        "Taper time, [name]. Less is more right now. Stay loose, stay confident."
                        ],
                        high_volume: [
                        "[name], higher volume this week. Building work capacity that sustains you through long rounds and seasons.",
                        "Volume focus, [name]. More reps, more sets. We're building the durability golfers need."
                        ],
                        high_intensity: [
                        "[name], power focus this week. Rotational strength and explosive movements. This is where club head speed lives.",
                        "Heavy week, [name]. Building the strength that becomes power. Respect the weights, execute with control.",
                        "[name], strength focus. A stronger golfer is a better golfer. Let's build that foundation."
                        ],
                        time_under_tension: [
                        "[name], stability work this week. Time under tension builds the control your body needs through your swing.",
                        "TUT focus, [name]. Slow, controlled loading builds the resilience your joints need for longevity."
                        ],
                        focus: [
                        "[name], technique week. We're refining movement patterns that transfer to your swing. Quality reps only.",
                        "Precision focus, [name]. Golf is a game of control. So is this week's training.",
                        "[name], detail work this week. Small improvements in movement quality, big improvements on the course."
                        ]
        }
      },
                        fitness: {
                            label: "Fitness",
                        sublabel: "General Health",
                        themes: {
                            testing: [
                        "[name], assessment week. Let's establish where you are so we can plan where you're going.",
                        "Testing this week, [name]. These benchmarks help us measure progress. Honest effort, useful data.",
                        "[name], time to test. No judgment—just information that guides your training."
                        ],
                        running: [
                        "[name], cardio focus this week. Building your aerobic base improves everything from energy to mood.",
                        "Conditioning week, [name]. Your heart and lungs need training too. Let's build that engine.",
                        "[name], run, row, bike—pick your cardio. This week we build stamina that carries into daily life."
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
                        "[name], recovery week. You've been consistent—let's let your body catch up. Active rest.",
                        "Easy week, [name]. Strategic recovery is part of smart training. Move light, recover right.",
                        "[name], pulling back this week. This isn't regression—it's consolidation. Trust the process."
                        ],
                        deload: [
                        "[name], deload week. Same movements, lighter weights. Keep the habit, give your body a break.",
                        "Light week, [name]. We're maintaining the groove while letting accumulated fatigue clear.",
                        "[name], think of this as maintenance week. Stay consistent, stay light."
                        ],
                        peak_week: [
                        "[name], let's see what you've built. This week we test your peak capabilities. You might surprise yourself.",
                        "Peak week, [name]. Time to perform. Your consistent work has prepared you. Trust it."
                        ],
                        taper: [
                        "[name], tapering volume this week. You should start feeling fresher and stronger. That's the goal.",
                        "Less volume, [name]. Maintained intensity. You'll feel the difference by week's end."
                        ],
                        high_volume: [
                        "[name], higher volume this week. More sets, more reps. This is where work capacity and results get built.",
                        "Volume week, [name]. Consistency through challenging weeks builds the foundation. Execute the work.",
                        "[name], lots of reps this week. Embrace the grind—this is where change happens."
                        ],
                        high_intensity: [
                        "[name], heavy week. We're challenging your strength. Respect the weights, maintain technique, push yourself.",
                        "Intensity is up, [name]. This is where you discover capability. Focus and deliver.",
                        "[name], strength focus this week. Heavier loads, full effort. You're ready for this."
                        ],
                        time_under_tension: [
                        "[name], TUT week. Slow, controlled reps. Your muscles don't know weight—they know tension and time.",
                        "Time under tension focus, [name]. Make every rep count by controlling every second of it."
                        ],
                        focus: [
                        "[name], technique week. Perfect practice makes progress. We're refining movement quality.",
                        "Quality over quantity, [name]. Every rep with attention and intention this week.",
                        "[name], precision focus. Better movement now means better results forever."
                        ],
                        bulk: [
                        "[name], building phase. Eat to support your training. The goal is muscle—scale weight may increase.",
                        "Growth phase, [name]. Training hard requires eating enough. Embrace the process."
                        ],
                        cut: [
                        "[name], leaning out phase. Training stays intense—we protect muscle while creating a deficit.",
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

                        function ThemeSelector({onSelect}) {
      const [isOpen, setIsOpen] = useState(false);
                        const [selectedCategory, setSelectedCategory] = useState('athletes');
                        const [selectedTheme, setSelectedTheme] = useState('testing');
                        const [selectedMessage, setSelectedMessage] = useState(null);
                        const [customName, setCustomName] = useState('[name]');
                        const [copiedIndex, setCopiedIndex] = useState(null);

                        const categories = Object.keys(themeMessages);

      const getAvailableThemes = () => {
        return Object.keys(themeMessages[selectedCategory].themes);
      };

      const getMessages = () => {
        const categoryData = themeMessages[selectedCategory];
                        if (!categoryData || !categoryData.themes[selectedTheme]) {
          return [];
        }
                        return categoryData.themes[selectedTheme];
      };

      const formatMessage = (message) => {
        return message.replace(/\[name\]/g, customName);
      };

      const handleCopy = (message, index) => {
                            navigator.clipboard.writeText(formatMessage(message));
                        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      };

      const handleSelect = (message) => {
                            setSelectedMessage(message);
      };

      const handleConfirm = () => {
        if (selectedMessage && onSelect) {
                            onSelect({
                                category: selectedCategory,
                                theme: selectedTheme,
                                message: formatMessage(selectedMessage),
                                rawMessage: selectedMessage
                            });
        }
                        setIsOpen(false);
      };

                        return h(Fragment, null, [
                        // Trigger Button
                        h('button', {
                            key: 'trigger',
          onClick: () => setIsOpen(true),
                        className: 'flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-lg'
        }, [
                        h('svg', {xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5', viewBox: '0 0 20 20', fill: 'currentColor' },
                        h('path', {fillRule: 'evenodd', d: 'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z', clipRule: 'evenodd' })
                        ),
                        'Select Week Theme'
                        ]),

                        // Modal
                        isOpen && h('div', {
                            key: 'modal',
                        className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
        },
                        h('div', {className: 'bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col' }, [
                        // Header
                        h('div', {key: 'header', className: 'bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4' },
                        h('div', {className: 'flex items-center justify-between' }, [
                        h('div', {key: 'title' }, [
                        h('h2', {className: 'text-xl font-bold' }, 'Weekly Theme Selector'),
                        h('p', {className: 'text-blue-100 text-sm' }, 'Choose your client category and training focus')
                        ]),
                        h('button', {
                            key: 'close',
                  onClick: () => setIsOpen(false),
                        className: 'text-white hover:text-blue-200 transition-colors'
                },
                        h('svg', {xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                        h('path', {strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M6 18L18 6M6 6l12 12' })
                        )
                        )
                        ])
                        ),

                        // Content
                        h('div', {key: 'content', className: 'flex-1 overflow-auto p-6' }, [
                        // Name Input
                        h('div', {key: 'name-input', className: 'mb-6' }, [
                        h('label', {className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Client Name (for personalization)'),
                        h('input', {
                            type: 'text',
                        value: customName,
                  onChange: (e) => setCustomName(e.target.value || '[name]'),
                        placeholder: 'Enter client name',
                        className: 'w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                })
                        ]),

                        // Category Selection
                        h('div', {key: 'category', className: 'mb-6' }, [
                        h('label', {className: 'block text-sm font-medium text-gray-700 mb-3' }, 'Client Category'),
                        h('div', {className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3' },
                  categories.map((cat) =>
                        h('button', {
                            key: cat,
                      onClick: () => {
                            setSelectedCategory(cat);
                        if (!themeMessages[cat].themes[selectedTheme]) {
                            setSelectedTheme(Object.keys(themeMessages[cat].themes)[0]);
                        }
                        setSelectedMessage(null);
                      },
                        className: `px-4 py-3 rounded-lg border-2 transition-all text-center ${
                            selectedCategory === cat
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`
                    }, [
                        h('div', {className: 'font-semibold text-sm' }, themeMessages[cat].label),
                        h('div', {className: 'text-xs text-gray-500 mt-1' }, themeMessages[cat].sublabel)
                        ])
                        )
                        )
                        ]),

                        // Theme Selection
                        h('div', {key: 'theme', className: 'mb-6' }, [
                        h('label', {className: 'block text-sm font-medium text-gray-700 mb-3' }, 'Training Focus'),
                        h('div', {className: 'flex flex-wrap gap-2' },
                  getAvailableThemes().map((theme) =>
                        h('button', {
                            key: theme,
                      onClick: () => {
                            setSelectedTheme(theme);
                        setSelectedMessage(null);
                      },
                        className: `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedTheme === theme
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`
                    }, themeLabels[theme])
                        )
                        )
                        ]),

                        // Messages
                        h('div', {key: 'messages' }, [
                        h('label', {className: 'block text-sm font-medium text-gray-700 mb-3' }, 'Select Welcome Message'),
                        h('div', {className: 'space-y-3' },
                  getMessages().map((message, index) =>
                        h('div', {
                            key: index,
                      onClick: () => handleSelect(message),
                        className: `p-4 rounded-lg border-2 cursor-pointer transition-all message-card ${
                            selectedMessage === message
                                ? 'border-blue-600 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`
                    },
                        h('div', {className: 'flex items-start justify-between gap-4' }, [
                        h('p', {className: 'text-gray-800 flex-1' }, formatMessage(message)),
                        h('button', {
                            onClick: (e) => {
                            e.stopPropagation();
                        handleCopy(message, index);
                          },
                        className: 'flex-shrink-0 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors'
                        }, copiedIndex === index ? '✓ Copied' : 'Copy')
                        ])
                        )
                        )
                        )
                        ])
                        ]),

                        // Footer
                        h('div', {key: 'footer', className: 'border-t bg-gray-50 px-6 py-4 flex items-center justify-between' }, [
                        h('div', {className: 'text-sm text-gray-600' },
                        selectedMessage
                        ? h('span', {className: 'text-green-600 font-medium' }, '✓ Message selected')
                        : h('span', null, 'Click a message to select it')
                        ),
                        h('div', {className: 'flex gap-3' }, [
                        h('button', {
                            onClick: () => setIsOpen(false),
                        className: 'px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors'
                }, 'Cancel'),
                        h('button', {
                            onClick: handleConfirm,
                        disabled: !selectedMessage,
                        className: `px-6 py-2 rounded-lg font-medium transition-colors ${
                            selectedMessage
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`
                }, 'Use This Message')
                        ])
                        ])
                        ])
                        )
                        ]);
    }

                        // Demo App
                        function App() {
      const [selectedData, setSelectedData] = useState(null);

                        return h('div', {className: 'min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8' }, [
                        h('div', {key: 'header', className: 'max-w-4xl mx-auto' }, [
                        h('h1', {className: 'text-3xl font-bold text-gray-800 mb-2' }, 'Training App - Theme Selector'),
                        h('p', {className: 'text-gray-600 mb-8' }, 'Click the button below to open the weekly theme rubric'),

                        h('div', {className: 'mb-8' },
                        h(ThemeSelector, {onSelect: setSelectedData })
                        ),

                        selectedData && h('div', {key: 'result', className: 'bg-white rounded-xl shadow-lg p-6' }, [
                        h('h2', {className: 'text-lg font-semibold text-gray-800 mb-4' }, 'Selected Theme'),
                        h('div', {className: 'space-y-3' }, [
                        h('div', {className: 'flex gap-2' }, [
                        h('span', {className: 'font-medium text-gray-600' }, 'Category:'),
                        h('span', {className: 'text-gray-800' }, themeMessages[selectedData.category].label)
                        ]),
                        h('div', {className: 'flex gap-2' }, [
                        h('span', {className: 'font-medium text-gray-600' }, 'Focus:'),
                        h('span', {className: 'text-gray-800' }, themeLabels[selectedData.theme])
                        ]),
                        h('div', null, [
                        h('span', {className: 'font-medium text-gray-600 block mb-2' }, 'Message:'),
                        h('p', {className: 'bg-blue-50 p-4 rounded-lg text-gray-800 border-l-4 border-blue-600' }, selectedData.message)
                        ])
                        ])
                        ])
                        ])
                        ]);
    }

                        createRoot(document.getElementById('root')).render(h(App));
                    </script>
                </body>
            </html>
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

export default function ThemeSelector({ isOpen, onClose, onAppendText }) {
  const [selectedCategory, setSelectedCategory] = useState('athletes');
  const [selectedTheme, setSelectedTheme] = useState('testing');
  const [customName, setCustomName] = useState('[name]');
  const [appendedIndices, setAppendedIndices] = useState(new Set());

  // Reset appended state when modal opens
  useEffect(() => {
    if (isOpen) setAppendedIndices(new Set());
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = Object.keys(themeMessages);
  const availableThemes = Object.keys(themeMessages[selectedCategory].themes);
  const messages = themeMessages[selectedCategory]?.themes[selectedTheme] || [];

  const formatMessage = (msg) => msg.replace(/\[name\]/g, customName);

  const handleAppend = (message, index) => {
    onAppendText(formatMessage(message));
    setAppendedIndices((prev) => new Set(prev).add(`${selectedCategory}-${selectedTheme}-${index}`));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Weekly Theme Selector</h2>
              <p className="text-white/70 text-sm">Choose category, focus, then click messages to add them</p>
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

          {/* Messages — click to append */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
              Click to add to notes (multiple allowed)
            </label>
            <div className="flex flex-col gap-2">
              {messages.map((message, index) => {
                const key = `${selectedCategory}-${selectedTheme}-${index}`;
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

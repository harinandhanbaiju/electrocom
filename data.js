// Structured Electronic Components and Microboard Data
const electronicComponents = [
  {
    "id": 1,
    "name": "Resistor",
    "category": "Passive",
    "importance": "Resistors are the most fundamental component in electronics, used to control current flow and set precise voltage levels. Almost every circuit, however simple, contains at least one.",
    "uses": "Limiting current to protect LEDs and transistors, dividing voltage, setting timing constants with capacitors, and providing pull-up or pull-down references for digital logic pins.",
    "symbol": "A rectangular box (US style) or a zig-zag line (older British/European style) with two leads coming out of each end. Colour bands around the body indicate resistance value and tolerance using the standard resistor colour code.",
    "creative_idea": "Hobbyists in the UK often build a 'resistor colour code wheel' or spinner as a teaching aid for GCSE and A-level electronics students, and repurpose old resistors as tiny sculptural jewellery or circuit-art keyrings."
  },
  {
    "id": 2,
    "name": "Capacitor",
    "category": "Passive",
    "importance": "Capacitors store and release electrical energy, making them essential for smoothing power supplies, filtering noise, and enabling timing circuits alongside resistors.",
    "uses": "Smoothing rectified DC in power supplies, decoupling noise near ICs, coupling AC signals between amplifier stages, and storing energy for camera flash circuits.",
    "symbol": "Two parallel lines (one sometimes curved for electrolytic types) representing the plates, with leads extending from each. Electrolytic capacitor symbols include a plus sign to show polarity.",
    "creative_idea": "Large supercapacitors are used by UK maker communities to build solar-powered garden lights that need no battery replacement, and small capacitors are salvaged to create simple joule-thief torches from single flat batteries."
  },
  {
    "id": 3,
    "name": "Inductor",
    "category": "Passive",
    "importance": "Inductors resist changes in current by storing energy in a magnetic field, playing a vital role in filtering, energy storage, and radio frequency circuits.",
    "uses": "Choke filtering in power supplies, forming LC resonant circuits in radio tuners, energy storage in switch-mode converters (boost/buck), and blocking high-frequency noise.",
    "symbol": "A series of curved loops (like a coiled spring) or several semicircular bumps in a row, sometimes with parallel lines alongside to indicate a ferrite or iron core.",
    "creative_idea": "Wound by hand on a former, inductors are a classic British school project component for building simple crystal radio receivers that need no external power supply."
  },
  {
    "id": 4,
    "name": "Diode",
    "category": "Active",
    "importance": "Diodes allow current to flow in only one direction, making them indispensable for rectification, protection, and signal demodulation.",
    "uses": "Converting AC mains to DC in power supplies, protecting circuits from reverse battery connection, and demodulating radio signals in receivers.",
    "symbol": "A triangle pointing towards a straight bar, with the triangle representing the anode and the bar the cathode; current flows in the direction the triangle points.",
    "creative_idea": "UK electronics clubs often use diodes in 'flip-flop' novelty circuits and to build simple logic gates from scratch as a way of teaching Boolean logic before students move on to ICs."
  },
  {
    "id": 5,
    "name": "Light Emitting Diode (LED)",
    "category": "Active",
    "importance": "LEDs are the most visible and energy-efficient way to indicate status or produce light, and have largely replaced incandescent indicator bulbs worldwide.",
    "uses": "Status indicators on devices, backlighting for displays, general room lighting, traffic signals, and optical communication such as TV remote controls.",
    "symbol": "Identical to a standard diode symbol (triangle and bar) but with two small arrows pointing away from it to show that light is being emitted.",
    "creative_idea": "Popular in UK festival culture and cosplay for wearable e-textile costumes, and used by artists to build 'LED cube' displays and light-painting rigs for long-exposure night photography."
  },
  {
    "id": 6,
    "name": "Bipolar Junction Transistor (BJT)",
    "category": "Active",
    "importance": "The transistor is arguably the most important invention in electronics, acting as both a switch and an amplifier and forming the basis of nearly all modern digital and analogue circuits.",
    "uses": "Amplifying weak audio or sensor signals, switching relays and motors on and off, and forming the building blocks of logic gates in older digital circuits.",
    "symbol": "A circle (sometimes omitted) containing a vertical line for the base, with two angled lines for the collector and emitter; an arrow on the emitter shows current direction and indicates NPN or PNP type.",
    "creative_idea": "Retro-hi-fi enthusiasts in the UK restore vintage transistor radios and amplifiers from the 1960s and 70s, prized for their distinctive 'warm' analogue sound compared with digital amplification."
  },
  {
    "id": 7,
    "name": "MOSFET",
    "category": "Active",
    "importance": "MOSFETs are the workhorse switching device of modern power electronics, valued for their high efficiency, fast switching speed, and ability to handle large currents with minimal control power.",
    "uses": "Switching high-current loads such as motors and LED strips, forming the basis of digital logic in every microprocessor, and controlling power in electric vehicle inverters.",
    "symbol": "A line representing the channel between drain and source, with a separate gate line positioned close by but not touching it, symbolising the insulated gate structure.",
    "creative_idea": "Electric-vehicle conversion hobbyists across the UK use large power MOSFETs to build custom motor controllers for converting classic cars and go-karts to electric drive."
  },
  {
    "id": 8,
    "name": "Integrated Circuit (IC)",
    "category": "Semiconductor IC",
    "importance": "Integrated circuits pack thousands to billions of transistors into a single chip, enabling the complex digital logic, memory, and processing that defines modern electronics.",
    "uses": "Microprocessors in computers and phones, operational amplifiers in audio equipment, timers such as the classic 555 chip, and memory chips in every digital device.",
    "symbol": "Usually drawn as a rectangle with numbered pins on each side; the specific internal function is represented separately by its own labelled block diagram or datasheet symbol.",
    "creative_idea": "The humble 555 timer IC is a favourite among UK Raspberry Pi and Arduino hobbyists for building novelty projects like LED flashers, simple synthesizers, and Halloween sound-effect boxes."
  },
  {
    "id": 9,
    "name": "Battery / Cell",
    "category": "Electromechanical & Power",
    "importance": "Batteries provide the portable, self-contained energy storage that makes mobile electronics possible, from torches to smartphones and electric vehicles.",
    "uses": "Powering portable devices, providing backup power for memory circuits, and storing renewable energy from solar panels in off-grid UK cabins and boats.",
    "symbol": "A series of alternating long and short parallel lines, where the long line represents the positive terminal and the short line the negative terminal.",
    "creative_idea": "Old battery packs are repurposed by UK DIY solar enthusiasts into home energy storage banks, and single cells are used in classic 'potato battery' science experiments for schools."
  },
  {
    "id": 10,
    "name": "Switch",
    "category": "Electromechanical & Power",
    "importance": "Switches give users direct manual control over a circuit, forming the simplest and most intuitive human interface in electronics.",
    "uses": "Turning devices on and off, selecting between different circuit modes, and providing safety isolation in mains wiring.",
    "symbol": "A straight line with a small circle at each end and a diagonal line representing the moving contact, shown either open or closed depending on the switch state.",
    "creative_idea": "Reclaimed vintage Bakelite light switches are a popular upcycling material among UK interior designers building industrial-style steampunk lamps and furniture."
  },
  {
    "id": 11,
    "name": "Fuse",
    "category": "Electromechanical & Power",
    "importance": "Fuses are a critical safety component that sacrifices itself to protect expensive equipment and prevent electrical fires by breaking the circuit under fault conditions.",
    "uses": "Protecting household wiring and plugs (a legal requirement in UK mains plugs), safeguarding sensitive electronics from power surges, and protecting vehicle wiring looms.",
    "symbol": "A rectangle with a thin wire running through the middle, or sometimes just a rectangle alone, placed in series within the circuit line.",
    "creative_idea": "UK electricians and hobbyists keep a labelled tin of spare fuses as a household essential, and some makers build glowing 'fuse art' displays showing a fuse blowing safely behind glass for educational demonstrations."
  },
  {
    "id": 12,
    "name": "Transformer",
    "category": "General",
    "importance": "Transformers efficiently step voltage up or down using electromagnetic induction, and are essential to the entire electricity grid as well as countless power adapters.",
    "uses": "Stepping mains voltage down for device power supplies, isolating circuits for safety, and enabling the UK's national grid to transmit electricity efficiently over long distances at high voltage.",
    "symbol": "Two coils drawn as parallel sets of loops, separated by a pair of straight vertical lines representing the iron core that links them magnetically.",
    "creative_idea": "Small mains transformers salvaged from old UK appliances are a favourite among hobbyists for building bench power supplies, and larger ones feature in educational Van de Graaff-style demonstrations of induction."
  },
  {
    "id": 13,
    "name": "Relay",
    "category": "Electromechanical & Power",
    "importance": "Relays allow a low-power control signal to switch a much higher-power circuit safely, bridging the gap between delicate electronics and heavy-duty loads.",
    "uses": "Switching mains-powered appliances from a low-voltage microcontroller, isolating control circuits from motors, and enabling home automation systems to control lighting and heating.",
    "symbol": "A coil symbol connected to a switch symbol drawn nearby, showing that energising the coil mechanically operates the separate switch contacts.",
    "creative_idea": "UK home-automation enthusiasts use relay boards with Raspberry Pi systems to build DIY smart home setups that control kettles, lamps, and garden irrigation from a phone app."
  },
  {
    "id": 14,
    "name": "Potentiometer",
    "category": "General",
    "importance": "Potentiometers provide continuously variable resistance, giving users smooth manual control over voltage or current in a circuit.",
    "uses": "Volume controls on audio equipment, brightness dimmers for lighting, and position sensors in joysticks and robotic arms.",
    "symbol": "A resistor symbol (rectangle or zig-zag) with an arrow drawn diagonally across it, representing the sliding wiper contact that taps off a variable voltage.",
    "creative_idea": "Vintage guitar pedal builders in the UK hand-select specific potentiometer tapers to fine-tune the feel and tone of custom fuzz and overdrive effects pedals."
  },
  {
    "id": 15,
    "name": "Crystal Oscillator",
    "category": "RF & Timing",
    "importance": "Crystal oscillators provide a highly stable, precise frequency reference that keeps digital clocks, microcontrollers, and communication devices synchronised.",
    "uses": "Generating clock signals for microprocessors, keeping accurate time in watches and clocks, and stabilising radio transmission frequencies.",
    "symbol": "A rectangle with two short lines on either side representing the electrodes, often drawn between two capacitor symbols in a typical oscillator circuit.",
    "creative_idea": "Quartz crystals rescued from old electronics are used by UK amateur radio operators to build simple homebrew transmitters and receivers for the shortwave bands."
  },
  {
    "id": 16,
    "name": "Operational Amplifier (Op-Amp)",
    "category": "Semiconductor IC",
    "importance": "The op-amp is a versatile analogue building block capable of amplification, filtering, and mathematical signal processing, forming the backbone of analogue circuit design.",
    "uses": "Amplifying microphone and sensor signals, building active filters for audio equalisers, and performing summing or comparator functions in analogue computers.",
    "symbol": "A triangle pointing in the direction of signal flow, with a plus and minus sign marking the two input terminals and a single output at the triangle's point.",
    "creative_idea": "UK synthesizer builders use op-amps as the core of DIY modular synth modules, prized in the Eurorack hobbyist community for creating unique analogue sounds."
  },
  {
    "id": 17,
    "name": "Voltage Regulator",
    "category": "Semiconductor IC",
    "importance": "Voltage regulators maintain a steady, safe output voltage despite fluctuations in input voltage or load, protecting sensitive downstream components from damage.",
    "uses": "Providing stable 5V or 3.3V supplies for microcontrollers, regulating battery output in portable devices, and protecting circuits from voltage spikes.",
    "symbol": "Typically drawn as a rectangular block with labelled input, output, and ground pins, since its internal circuitry is too complex to symbolise directly.",
    "creative_idea": "The classic 7805 regulator is a staple of UK school and college electronics kits, often used in simple 'breadboard power supply' projects that teach students about linear regulation."
  },
  {
    "id": 18,
    "name": "Microcontroller",
    "category": "Semiconductor IC",
    "importance": "Microcontrollers are self-contained computers on a chip that bring programmable intelligence to everyday devices, from washing machines to weather stations.",
    "uses": "Controlling embedded systems in appliances, running Arduino and Raspberry Pi Pico projects, and managing sensors and actuators in robotics.",
    "symbol": "Represented as a rectangular IC block with numbered or labelled pins, often shown alongside a simplified internal block diagram of its CPU, memory, and peripherals.",
    "creative_idea": "The BBC micro:bit, developed and distributed free to UK schoolchildren, has become a beloved platform for teaching coding through projects like wearable badges and simple robots."
  },
  {
    "id": 19,
    "name": "Speaker (Loudspeaker)",
    "category": "Audio",
    "importance": "Speakers convert electrical audio signals into sound waves, making them essential for any device that communicates through audio.",
    "uses": "Producing sound in radios, televisions, and phones, providing audible alerts and alarms, and forming the output stage of hi-fi and PA systems.",
    "symbol": "A square or rectangle connected to a triangle that widens outward, representing the cone shape of the speaker driver and its horn-like sound projection.",
    "creative_idea": "UK scrap-store and repair-caf\u00e9 volunteers rebuild old speaker cones with new surrounds, and hobbyists build cigar-box guitar amplifiers using small salvaged speakers."
  },
  {
    "id": 20,
    "name": "Microphone",
    "category": "Semiconductor IC",
    "importance": "Microphones convert sound waves into electrical signals, forming the essential input device for recording, broadcasting, and voice communication.",
    "uses": "Capturing voice for phone calls and podcasts, recording music in studios, and enabling voice control in smart home assistants.",
    "symbol": "A circle with a slanted line through it, or sometimes drawn as a simplified capsule shape with sound waves indicated entering from one side.",
    "creative_idea": "UK podcasters and home-studio musicians often build DIY reflection filters and pop shields from cheap materials to improve cheap microphone recordings without expensive studio gear."
  },
  {
    "id": 21,
    "name": "Buzzer / Piezo Sounder",
    "category": "Audio",
    "importance": "Buzzers provide a simple, low-power way to generate audible alerts and tones, widely used wherever a device needs to get a person's attention.",
    "uses": "Alarm and alert tones in appliances, doorbells, timers, and providing audible feedback in electronic toys and calculators.",
    "symbol": "A circle with a plus and minus terminal marked, sometimes shown with small sound wave lines radiating outward to indicate it produces noise.",
    "creative_idea": "UK primary school STEM clubs use piezo buzzers to build simple electronic 'buzz-wire' game circuits, a favourite for school fetes and science fairs."
  },
  {
    "id": 22,
    "name": "Photoresistor (LDR)",
    "category": "Passive",
    "importance": "Light dependent resistors change resistance based on ambient light, making them a cheap and simple way to add basic light-sensing to a circuit.",
    "uses": "Automatic street and garden lighting that switches on at dusk, light-sensing alarms, and simple line-following robot sensors.",
    "symbol": "A resistor symbol (rectangle or zig-zag) with two diagonal arrows pointing towards it, representing incoming light striking the sensitive surface.",
    "creative_idea": "UK allotment gardeners build simple dusk-triggered LDR circuits to automatically switch on solar greenhouse lighting or scare-away devices for pests."
  },
  {
    "id": 23,
    "name": "Thermistor",
    "category": "Sensors & Light",
    "importance": "Thermistors change resistance predictably with temperature, providing an inexpensive and reliable way to sense heat in a huge range of devices.",
    "uses": "Temperature sensing in kettles and ovens, overheating protection in battery chargers, and monitoring engine temperature in vehicles.",
    "symbol": "A resistor symbol (rectangle or zig-zag) with the letter 't' or 'theta' beside it, or a diagonal line with 't' to indicate temperature dependence.",
    "creative_idea": "UK home-brewers and fermenters use thermistor-based temperature controllers to keep beer and kombucha brews at a precise, consistent temperature."
  },
  {
    "id": 24,
    "name": "Zener Diode",
    "category": "Active",
    "importance": "Zener diodes are engineered to conduct in reverse once a specific breakdown voltage is reached, making them ideal for precise voltage reference and protection.",
    "uses": "Providing stable voltage references in regulator circuits, clamping and protecting circuits from voltage spikes, and setting precise threshold voltages.",
    "symbol": "Similar to a standard diode's triangle and bar, but with the ends of the bar bent into small hooks, resembling a stylised letter 'Z'.",
    "creative_idea": "UK electronics hobbyists use zener diodes to build simple, low-cost over-voltage protection circuits for solar panel charge controllers on camper vans and canal boats."
  },
  {
    "id": 25,
    "name": "Bridge Rectifier",
    "category": "Active",
    "importance": "Bridge rectifiers convert alternating current into direct current efficiently using four diodes, forming the essential first stage of most power supplies.",
    "uses": "Converting mains AC to DC in chargers and power adapters, providing DC power for motor controllers, and enabling battery charging circuits.",
    "symbol": "Four diode symbols arranged in a diamond or square pattern, with AC input terminals on two opposite corners and DC output terminals on the other two.",
    "creative_idea": "UK electric bike and go-kart builders often use compact bridge rectifier modules to convert alternator output into usable DC charging current for custom battery packs."
  },
  {
    "id": 26,
    "name": "Antenna",
    "category": "RF & Timing",
    "importance": "Antennas convert electrical signals into radio waves and back again, forming the essential link for all wireless communication technology.",
    "uses": "Receiving television and radio broadcasts, enabling mobile phone and WiFi connectivity, and transmitting signals in amateur radio and satellite communication.",
    "symbol": "A single straight or angled line meeting at a point, often drawn like an inverted 'V' or a simple vertical line with small diagonal strokes near the top.",
    "creative_idea": "UK amateur radio enthusiasts (hams) build homemade wire antennas strung between trees or lofts to make long-distance contacts, a classic weekend hobby project."
  },
  {
    "id": 27,
    "name": "Connector / Jack",
    "category": "Electromechanical & Power",
    "importance": "Connectors provide the physical, reliable interface that lets circuits and cables be joined and separated without soldering, essential for modular and repairable electronics.",
    "uses": "Joining audio cables to speakers and headphones, connecting power adapters to devices, and enabling modular wiring in cars and appliances.",
    "symbol": "Often shown as a simple rectangle or a pair of interlocking shapes with pin numbers labelled, representing the plug and socket halves.",
    "creative_idea": "UK repair caf\u00e9 volunteers frequently replace worn headphone jacks and DC power connectors as one of the most common and satisfying electronics repairs."
  },
  {
    "id": 28,
    "name": "Push Button",
    "category": "Electromechanical & Power",
    "importance": "Push buttons offer simple, momentary manual control, widely used wherever a brief human action needs to trigger an electronic response.",
    "uses": "Triggering doorbells, providing reset and input controls on electronic devices, and forming keypad matrices in calculators and remote controls.",
    "symbol": "Similar to a switch symbol but drawn with a gap and an arrow or bar above it showing the button must be pressed to momentarily close the contact.",
    "creative_idea": "UK games and gadget hobbyists mod classic arcade cabinets with large industrial push buttons to build home 'bartop' arcade machines for retro gaming nights."
  },
  {
    "id": 29,
    "name": "Thyristor (SCR)",
    "category": "Active",
    "importance": "Silicon controlled rectifiers can switch large currents on with a small trigger pulse and then remain latched on, making them valuable for high-power switching and control.",
    "uses": "Controlling power in light dimmers, motor speed controllers, and providing crowbar overvoltage protection in power supplies.",
    "symbol": "A diode symbol (triangle and bar) with an additional gate lead branching off near the base of the triangle, representing the trigger input.",
    "creative_idea": "UK stage lighting technicians and theatre hobbyists use thyristor-based dimmer packs to control the brightness of incandescent stage lights during am-dram productions."
  },
  {
    "id": 30,
    "name": "Sensor Module (e.g. PIR / Ultrasonic)",
    "category": "Semiconductor IC",
    "importance": "Modern sensor modules package complex sensing electronics into an easy-to-use unit, letting even beginners add sophisticated environmental awareness to a project.",
    "uses": "Motion-activated security lighting, automatic hand dryers and taps, obstacle detection in robotics, and environmental monitoring for weather stations.",
    "symbol": "Usually represented as a labelled rectangular block with input and output pins, since the internal sensing element (such as a pyroelectric crystal) has no single standard symbol.",
    "creative_idea": "UK Raspberry Pi hobbyists use PIR motion sensors to build DIY garden wildlife cameras that automatically photograph badgers and hedgehogs visiting at night."
  }
];

const microboardsData = [
  {
    "id": 1,
    "name": "Raspberry Pi 5 / 4",
    "subtitle": "The full-fat single-board computer that runs a real desktop OS",
    "category": "Single-Board Computer (SBC)",
    "has_wireless": "no",
    "overview": "The Raspberry Pi is a credit-card-sized computer capable of running a full Linux desktop, making it the most capable board on this list for anything that needs real processing power, storage, and networking.",
    "uses": "Home media centres, retro-gaming emulation stations, network-wide ad-blockers (Pi-hole), lightweight desktop PCs for schools, home automation hubs, and computer-vision projects with a camera module.",
    "advantages": [
      "\u007f",
      "Runs a full operating system with a desktop, browser, and office apps",
      "\u007f",
      "Huge official and community documentation, including the free Raspberry Pi Foundation resources",
      "\u007f",
      "Built-in WiFi, Bluetooth, USB, HDMI and a 40-pin GPIO header for hardware projects",
      "\u007f",
      "Massive accessory ecosystem: HATs, cameras, touchscreens and cases"
    ],
    "disadvantages": [
      "\u007f",
      "More expensive and power-hungry than microcontroller boards",
      "\u007f",
      "Boots from an SD card or SSD, so it is slower to start than a microcontroller and less forgiving of sudden",
      "power loss",
      "\u007f",
      "Not truly real-time, so it is less ideal for precise timing-critical hardware control",
      "\u007f",
      "Ongoing stock shortages have periodically pushed UK prices above RRP"
    ],
    "uk_info": "Designed and manufactured in Wales by Raspberry Pi Ltd (Cambridge-headquartered); widely stocked by UK suppliers such as The Pi Hut, Pimoroni, and RS Components, typically \u00a345-\u00a385 depending on RAM."
  },
  {
    "id": 2,
    "name": "Arduino Uno (R3 / R4)",
    "subtitle": "The original beginner-friendly microcontroller board",
    "category": "Microcontroller (MCU)",
    "has_wireless": "no",
    "overview": "The Arduino Uno is the classic entry point into electronics and programming, using a simple microcontroller rather than a full operating system, and is prized for its rock-solid reliability and simplicity.",
    "uses": "Learning the basics of coding and circuits, driving motors and servos, reading sensors for school projects, and building simple robots or automated plant-watering systems.",
    "advantages": [
      "\u007f",
      "Extremely beginner-friendly with a huge number of tutorials and example projects",
      "\u007f",
      "Very robust and hard to accidentally damage compared with bare microcontroller chips",
      "\u007f",
      "The Arduino IDE is simple and free, with a vast library ecosystem",
      "\u007f",
      "Analogue input pins make it easy to read sensors directly without extra circuitry"
    ],
    "disadvantages": [
      "\u007f",
      "No built-in WiFi or Bluetooth on the classic Uno (add-on shields are needed)",
      "\u007f",
      "Limited processing power and memory compared with newer boards like the ESP32",
      "\u007f",
      "Slower development cycle for complex projects involving displays or wireless data",
      "\u007f",
      "8-bit architecture feels dated next to 32-bit rivals at a similar price"
    ],
    "uk_info": "Genuine boards and official UK-compatible clones are sold by Farnell, RS Components, and The Pi Hut from around \u00a320-\u00a328; cheaper unofficial clones are common on UK marketplaces."
  },
  {
    "id": 3,
    "name": "Raspberry Pi Pico / Pico W",
    "subtitle": "A tiny, ultra-affordable microcontroller from the Raspberry Pi Foundation",
    "category": "Microcontroller (MCU)",
    "has_wireless": "yes",
    "overview": "The Pico is a low-cost microcontroller board built around the Foundation's own RP2040 chip, offering surprising processing power and flexible I/O for a fraction of the price of a full Raspberry Pi.",
    "uses": "Physical computing lessons in schools, DIY MIDI controllers, LED matrix displays, simple robotics, and low-power sensor loggers, with the Pico W adding WiFi for connected projects.",
    "advantages": [
      "\u007f",
      "Extremely low cost, making it ideal for classroom sets and disposable projects",
      "\u007f",
      "Can be programmed in MicroPython or C/C++, suiting both beginners and advanced users",
      "\u007f",
      "Unique programmable I/O (PIO) hardware allows precise custom timing not possible on most rivals",
      "\u007f",
      "Very low power consumption suits battery-powered projects"
    ],
    "disadvantages": [
      "\u007f",
      "No built-in operating system, so it cannot run a desktop or browser like a full Pi",
      "\u007f",
      "Fewer beginner tutorials than the Arduino Uno, though this is improving quickly",
      "\u007f",
      "The non-W version has no wireless connectivity at all",
      "\u007f",
      "Micro-USB (or USB-C on Pico 2) only, with limited onboard storage for large programs"
    ],
    "uk_info": "Made in the UK alongside other Raspberry Pi products; sold by Pimoroni, The Pi Hut and CPC Farnell from around \u00a34-\u00a37, among the cheapest capable boards available in Britain."
  },
  {
    "id": 4,
    "name": "BBC micro:bit (v2)",
    "subtitle": "The pocket-sized board built specifically for UK education",
    "category": "Microcontroller (MCU)",
    "has_wireless": "no",
    "overview": "Developed by the BBC and partners specifically for UK schoolchildren, the micro:bit is designed to make coding and physical computing approachable from primary school age upward, with built-in sensors and an LED display.",
    "uses": "Classroom coding lessons, simple wearable badges, step counters, basic robotics, and quick prototyping of sensor-based ideas without needing extra components.",
    "advantages": [
      "\u007f",
      "Built-in LED matrix, buttons, compass, accelerometer, microphone and speaker, so many projects need no",
      "extra parts",
      "\u007f",
      "Block-based MakeCode editor makes it accessible to complete beginners, including young children",
      "\u007f",
      "Backed by extensive free UK curriculum-aligned teaching resources",
      "\u007f",
      "Radio and Bluetooth let multiple micro:bits communicate with each other easily"
    ],
    "disadvantages": [
      "\u007f",
      "Limited processing power and memory restrict more advanced or data-heavy projects",
      "\u007f",
      "Fewer general-purpose GPIO pins than an Arduino or Pico",
      "\u007f",
      "Outgrown quickly by ambitious hobbyists moving on to more capable boards",
      "\u007f",
      "Official edge-connector accessories can be pricier than generic alternatives"
    ],
    "uk_info": "A genuinely British success story, distributed free to Year 7 pupils across the UK in the past; now sold by The Pi Hut, Kitronik, and WHSmith for around \u00a313-\u00a317."
  },
  {
    "id": 5,
    "name": "ESP32 Dev Board",
    "subtitle": "The wireless powerhouse for connected projects",
    "category": "Microcontroller (MCU)",
    "has_wireless": "yes",
    "overview": "The ESP32 packs a dual-core processor with built-in WiFi and Bluetooth onto a low-cost board, making it the go-to choice for internet-connected and 'Internet of Things' projects.",
    "uses": "Home automation sensors, WiFi-controlled lighting, weather stations that upload data to the cloud, Bluetooth audio and BLE gadgets, and DIY smart doorbells.",
    "advantages": [
      "\u007f",
      "Built-in WiFi and Bluetooth remove the need for extra wireless modules",
      "\u007f",
      "Dual-core processor with plenty of RAM for its price point",
      "\u007f",
      "Compatible with the familiar Arduino IDE as well as MicroPython",
      "\u007f",
      "Extremely low cost for the amount of capability on offer"
    ],
    "disadvantages": [
      "\u007f",
      "Documentation can be inconsistent across the many different board variants",
      "\u007f",
      "Slightly steeper learning curve than an Arduino Uno for absolute beginners",
      "\u007f",
      "Higher power draw than simpler boards, which matters for coin-cell battery projects",
      "\u007f",
      "Some cheaper clone boards suffer from poor USB driver support on Windows"
    ],
    "uk_info": "Widely available from UK sellers including The Pi Hut, Rapid Electronics and Amazon UK from around \u00a36-\u00a312, making it one of the best value wireless boards on the market."
  },
  {
    "id": 6,
    "name": "ESP8266 (NodeMCU)",
    "subtitle": "The original budget WiFi microcontroller",
    "category": "Microcontroller (MCU)",
    "has_wireless": "yes",
    "overview": "The ESP8266 predates the ESP32 and remains popular as an ultra-cheap way to add WiFi to a project, trading some processing power and pin count for an even lower price.",
    "uses": "Simple WiFi-connected switches and plugs, garden soil-moisture sensors, budget weather stations, and lightweight home automation nodes controlled via apps like Home Assistant.",
    "advantages": [
      "\u007f",
      "Very cheap, often the lowest-cost WiFi-capable board available",
      "\u007f",
      "Well-established with years of tutorials, libraries and community support",
      "\u007f",
      "Small physical size suits compact enclosures",
      "\u007f",
      "Low power modes make simple battery-powered sensors practical"
    ],
    "disadvantages": [
      "\u007f",
      "Fewer usable GPIO pins than most rivals, which can limit more complex projects",
      "\u007f",
      "Only a single analogue input pin, restricting sensor variety",
      "\u007f",
      "Less processing power than the ESP32, so unsuitable for demanding tasks",
      "\u007f",
      "No Bluetooth support, unlike its ESP32 successor"
    ],
    "uk_info": "A firm favourite of UK home-automation hobbyists on forums and at Home Assistant meetups; available from Rapid Electronics and Amazon UK for as little as \u00a33-\u00a36."
  },
  {
    "id": 7,
    "name": "Arduino Nano",
    "subtitle": "A shrunk-down Arduino Uno for space-constrained builds",
    "category": "Microcontroller (MCU)",
    "has_wireless": "no",
    "overview": "The Nano offers the same core capability as the Arduino Uno in a much smaller breadboard-friendly package, making it a favourite for permanent or compact builds once a project has been prototyped.",
    "uses": "Wearable electronics, compact robotics controllers, permanent installations inside enclosures, and breadboard prototyping where board size matters.",
    "advantages": [
      "\u007f",
      "Fits directly into a breadboard, unlike the larger Uno",
      "\u007f",
      "Fully compatible with the same Arduino IDE, code and shields as the Uno",
      "\u007f",
      "Compact enough for wearable and space-limited projects",
      "\u007f",
      "Widely cloned, keeping prices very competitive"
    ],
    "disadvantages": [
      "\u007f",
      "No built-in wireless connectivity",
      "\u007f",
      "Smaller pin spacing can be fiddly to solder for beginners",
      "\u007f",
      "Older Nano revisions use a less common Mini-USB or micro-USB connector, causing cable confusion",
      "\u007f",
      "Limited memory restricts larger or more complex programs"
    ],
    "uk_info": "Genuine and clone Nano boards are sold across UK electronics retailers and Amazon UK from around \u00a38-\u00a318, with clones being especially popular for budget multi-board projects."
  },
  {
    "id": 8,
    "name": "Raspberry Pi Zero 2 W",
    "subtitle": "A full Linux computer shrunk to a stamp-sized board",
    "category": "Single-Board Computer (SBC)",
    "has_wireless": "yes",
    "overview": "The Pi Zero 2 W squeezes genuine Raspberry Pi computing power into a tiny form factor with built-in WiFi and Bluetooth, ideal for projects where a full-size Pi would be overkill or too bulky.",
    "uses": "Compact retro-gaming handhelds, hidden home automation controllers, lightweight WiFi security cameras, and portable Pi-powered gadgets built into small enclosures.",
    "advantages": [
      "\u007f",
      "Runs the same Raspberry Pi OS and software ecosystem as full-size Pi boards",
      "\u007f",
      "Very small and light, suiting handheld and wearable builds",
      "\u007f",
      "Built-in WiFi and Bluetooth as standard",
      "\u007f",
      "Lower price than a full-size Raspberry Pi 4 or 5"
    ],
    "disadvantages": [
      "\u007f",
      "Mini-HDMI and micro-USB connectors need adapters that are easy to mishandle or lose",
      "\u007f",
      "Limited processing power compared with the full-size Pi 4 or 5",
      "\u007f",
      "Only a single USB port (via OTG) limits connecting several peripherals at once",
      "\u007f",
      "Popularity means it has suffered some of the worst UK stock shortages in the range"
    ],
    "uk_info": "Sold through official UK resellers such as Pimoroni, The Pi Hut and CPC Farnell for around \u00a315-\u00a320, though buyers are usually limited to one per customer during shortages."
  },
  {
    "id": 9,
    "name": "Adafruit Circuit Playground Express",
    "subtitle": "An all-in-one sensor playground for creative coding",
    "category": "Microcontroller (MCU)",
    "has_wireless": "no",
    "overview": "This circular board packs an unusual number of sensors, LEDs, and inputs directly onto the board itself, letting beginners experiment with lights, sound and motion sensing without wiring a single extra component.",
    "uses": "Wearable e-textile projects sewn into clothing, interactive light-up costumes, simple music and sound-reactive art, and STEM club sessions introducing sensors and coding together.",
    "advantages": [
      "\u007f",
      "Ten onboard NeoPixel LEDs, a speaker, microphone, accelerometer and light sensor all built in",
      "\u007f",
      "Can be programmed with drag-and-drop MakeCode, CircuitPython, or the Arduino IDE",
      "\u007f",
      "Alligator-clip-friendly pads make it usable without any soldering",
      "\u007f",
      "Great for combining electronics with textiles and craft projects"
    ],
    "disadvantages": [
      "\u007f",
      "Less well known in the UK than Arduino or micro:bit, so fewer local tutorials",
      "\u007f",
      "More expensive than a basic Arduino Nano or Pico for similar core capability",
      "\u007f",
      "Circular shape and layout make it less suited to standard breadboard prototyping",
      "\u007f",
      "Limited general-purpose I/O pins compared with rectangular boards"
    ],
    "uk_info": "Available from UK Adafruit resellers such as Pimoroni and Proto-PIC, typically priced around \u00a322-\u00a328."
  },
  {
    "id": 10,
    "name": "STM32 'Blue Pill' / Nucleo Board",
    "subtitle": "An affordable step up to professional-grade 32-bit microcontrollers",
    "category": "Microcontroller (MCU)",
    "has_wireless": "no",
    "overview": "STM32 boards introduce hobbyists to the same family of ARM Cortex-M microcontrollers used in real commercial products, offering far greater processing power and peripheral flexibility than entry-level Arduino boards.",
    "uses": "Precision motor control, custom PCB prototyping before moving to a bespoke design, USB device projects, and learning industry-relevant embedded development skills.",
    "advantages": [
      "\u007f",
      "Genuine industrial-grade ARM Cortex-M processor found in real commercial products",
      "\u007f",
      "Extremely low cost for the processing power on offer, especially the 'Blue Pill' clones",
      "\u007f",
      "Rich set of peripherals including multiple timers, ADCs and communication buses",
      "\u007f",
      "Skills learned transfer directly to professional embedded engineering work"
    ],
    "disadvantages": [
      "\u007f",
      "Steeper learning curve, with a less beginner-friendly toolchain than Arduino",
      "\u007f",
      "Cheaper clone boards vary in quality and sometimes ship with counterfeit chips",
      "\u007f",
      "Requires a separate ST-Link programmer for the cheapest 'Blue Pill' variant",
      "\u007f",
      "Community support, while strong, is more technical and less hand-holding than Arduino forums"
    ],
    "uk_info": "Official Nucleo boards are sold by UK distributors including Farnell, RS Components and Digi-Key UK from around \u00a310-\u00a315, while budget 'Blue Pill' clones appear on Amazon UK and AliExpress for a few pounds. Prices are approximate and can fluctuate due to stock availability, exchange rates, and retailer promotions; always check current pricing directly with UK suppliers before purchasing."
  }
];

// ──────────────────────────────────────────────────────────────────────────────
// Articles inspired by Electronics Gurukulam (electronicsgurukulam.blogspot.com)
// "Let's Simplify Electronics" — 400+ posts, 565K+ visitors
// ──────────────────────────────────────────────────────────────────────────────
const gurukulamArticles = [
  {
    id: 1,
    title: "Ohm's Law",
    category: "Fundamentals",
    summary: "Explore the foundational relationship V = I × R with a live PhET simulation. Adjust voltage and resistance to see exactly how current responds, and understand why this simple law underpins every circuit design from LEDs to power amplifiers.",
    tags: ["V=IR", "Voltage", "Current", "Resistance", "Simulation"],
    contentHtml: `
      <h3>Ohm's Law</h3>
      <p>The unit for resistance is the ohm, or, and the symbol in equations is <em>R</em>. Now we come to the most important equation in electronics:</p>
      <p><strong>(2.1a)</strong> <em>V = IR</em><br>with <em>V</em> in volts, <em>I</em> in amps, <em>R</em> in ohms. This is Ohm's Law. We will use it so much that it bears being rewritten in its two other forms:</p>
      <p><strong>(2.1b)</strong> <em>I = V/R</em></p>
      <p>and:</p>
      <p><strong>(2.1c)</strong> <em>R = V/I</em></p>
      <p>These are used so frequently that you need to know them by heart.</p>
      <p>Ohm's Law tells us that placing a <a href="https://www.sciencedirect.com/topics/engineering/steady-voltage" target="_blank" rel="noopener noreferrer">steady voltage</a> across a material causes a proportional steady current to flow.</p>
      <p>Even insulators and conductors have resistance. Insulators have very high resistance; tens or hundreds of MΩ or more, so that for the normal voltages that we use an unmeasurably small current flows. If the voltage is raised to sufficiently high levels, usually at least a kV, a condition called 'breakdown' occurs; electrons are blasted free from atoms within the structure of the material, and its essential nature is changed. You will know if this happens; there is a nasty burning smell, and things stop working. It is a condition which we try to avoid.</p>
      <p>Conductors are the opposite; their resistance is very low, small fractions of an ohm typically. The commonest conductor that we use is copper. We cannot normally measure the voltage across a piece of copper wire, unless it is long. We can find out, from catalogues and so on, the resistance per metre of any given type of wire; this depends on the wire, but figures of around 0.1 Ω/m are typical. Occasionally we need to find this out and calculate the total resistance of a length of cable when our wires are very long, in a large system. The wire will also have a maximum current rating, which is what we can pass through it before the amount of heat generated in it becomes dangerous to its structure. The <a href="https://www.sciencedirect.com/topics/engineering/insulating-material" target="_blank" rel="noopener noreferrer">insulating material</a> around it may melt, causing it to short to things that it shouldn't, or the conductor itself. We only need know that we should stay comfortably within the maximum rated current for a conductor. In essence, anything can be destroyed with too much voltage/current.</p>
      <p>To summarize, we have three distinct classes of material; conductors, insulators and resistors. Conductors connect our circuit up and have very low resistance. We assume that the voltage is the same at both ends of them unless they are very long or current is very high. They are just vessels to carry current. Insulators are the separating material between different points in a circuit that need to be kept apart and have very high resistance. Resistors are electrical components having a known resistance. We can predict the current through them for any given voltage, or vice versa, using the all-powerful Ohm's Law, <em>V = IR</em>.</p>
    `,
    url: "https://electronicsgurukulam.blogspot.com/2015/07/ohms-law.html",
    emoji: "⚡",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.18)"
  },
  {
    id: 2,
    title: "Why Silicon is Preferred over Germanium",
    category: "Semiconductors",
    summary: "At room temperature Silicon has far fewer thermally generated carriers, giving lower leakage (ICBO) than Germanium. Silicon also withstands higher temperatures, offers greater Peak Inverse Voltage, and is cheaply extracted from sand — making it the universal choice for modern semiconductor devices.",
    tags: ["Silicon", "Germanium", "Semiconductor", "BJT", "PN Junction"],
    contentHtml: `
      <p>In semiconductor technology, silicon and germanium play crucial roles due to their intrinsic properties as semiconducting materials. Historically, germanium was used in the early development of semiconductor devices. However, silicon has become the dominant material in the industry. This shift can be attributed to several key factors that favor silicon over germanium in most semiconductor applications.</p>

      <h3>Why is silicon preferred over germanium?</h3>
      <p><img src="https://electronicslesson.com/wp-content/uploads/2024/04/Why-is-Silicon-Preferred-over-Germanium-1024x536.png" alt="why-is-silicon-preferred-over-germanium"></p>

      <h4>Abundance and Cost-Effectiveness</h4>
      <p>Silicon is the second most abundant element in the Earth’s crust after oxygen, making it readily available and significantly cheaper than germanium. This abundance leads to a lower cost for raw materials, which is a critical factor in large-scale production environments. In contrast, germanium is much rarer and, therefore, more expensive to procure, which limits its feasibility for widespread use in semiconductor manufacturing.</p>

      <h4>Thermal Stability</h4>
      <p>Silicon has a higher melting point (about 1414 degrees Celsius) compared to germanium (about 938 degrees Celsius). This higher thermal stability makes silicon more suitable for high-temperature applications, such as power electronics and automotive systems. Devices made from silicon can operate at higher temperatures without the risk of performance degradation, which is a significant advantage in ensuring the reliability and longevity of electronic components.</p>

      <h4>Electrical Properties</h4>
      <p>While both silicon and germanium are group IV elements and share similar electronic band structures, silicon’s larger band gap (1.12 eV at room temperature compared to germanium’s 0.66 eV) makes it more effective at maintaining its semiconducting properties at higher temperatures. The wider band gap reduces the leakage current in silicon-based devices, enhancing their performance in a broader range of temperatures and reducing power consumption, which is particularly important in mobile and computing applications. The following electrical properties of silicon make it superior to germanium.</p>

      <h4>Higher PIV Rating:</h4>
      <p>A silicon diode’s PIV (peak inverse voltage) value is approximately 1000 V, which is higher than that of germanium diodes. The PIV values for germanium diodes are closer to 400 V, while for silicon diodes, they are around 500-600 V.</p>

      <h4>Greater Working temperature:</h4>
      <p>Silicon can withstand high temperatures of up to 150 degrees Celsius without sustaining damage to its components. However, g-germanium can only handle temperatures of up to 70 degrees Celsius, and the structure of germanium can become damaged at temperatures exceeding 100 degrees Celsius.</p>

      <h4>Lower Leakage Current:</h4>
      <p>Leakage current can significantly impact performance in semiconductor devices, especially diodes and transistors. Devices made from materials with smaller band gaps (like Germanium) will inherently have higher leakage currents because more charge carriers are thermally generated. In contrast, the wider band gap of Silicon results in fewer carriers being thermally generated at the same temperature, thereby reducing the leakage current.</p>

      <h4>Oxide Quality</h4>
      <p>One of the most significant advantages of silicon in semiconductor technology is its ability to naturally form a stable, high-quality oxide layer (silicon dioxide) when exposed to oxygen. This oxide layer is integral in the manufacturing of electronic devices, serving as an insulator and protecting the pure silicon at the heart of the device. Silicon dioxide layers are used extensively to fabricate integrated circuits and microchips. They are crucial for the function of MOSFETs (metal-oxide-semiconductor field-effect transistors), which are the building blocks of most modern electronics. Germanium oxides, in contrast, are less stable and do not provide the same level of insulation and protection.</p>

      <h4>Industry Standard and Integration</h4>
      <p>The extensive history and evolution of silicon-based technology have led to a well-established industry standard that benefits from a vast body of research, development, and specialized equipment tailored specifically for silicon processing. This makes the integration of new silicon-based technologies into existing systems more seamless and cost-effective. Additionally, the semiconductor industry’s infrastructure and supply chain is optimized for silicon, which further discourages a shift towards germanium except in niche applications where its specific properties provide distinct advantages (like certain types of sensors and high-speed electronics).</p>

      <h4>Conclusion</h4>
      <p>Silicon’s dominance in semiconductor technology is based on a combination of material properties, economic factors, and industry standards that collectively outweigh the benefits offered by germanium in most practical applications. While germanium still has its uses in specialized fields, silicon’s versatility, cost-effectiveness, and excellent performance characteristics ensure that it remains the cornerstone of electronic device manufacturing, and therefore, silicon is preferred over germanium.</p>
    `,
    url: "https://electronicsgurukulam.blogspot.com/2013/10/why-silicon-and-not-germanium.html",
    emoji: "🔬",
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.18)"
  },
  {
    id: 3,
    title: "Basics of Fourier Transform",
    category: "Signal Processing",
    summary: "A six-minute video that demystifies the Fourier Transform — the mathematical tool that decomposes any signal into its constituent sine waves. Indispensable for audio engineering, telecommunications, image processing and every branch of digital signal processing.",
    tags: ["Fourier", "DSP", "Frequency Domain", "Spectrum", "Maths"],
    youtubeUrl: "https://www.youtube.com/watch?v=Og6JDPxQBFM",
    contentHtml: `
      <p>Fourier transform is a mathematical model that decomposes a function or signal into its constituent frequencies. It helps to transform the signals between two different domains, like transforming the frequency domain to the time domain. The Fourier Transform decomposes a complex signal into simpler sine and cosine waves of different frequencies and amplitudes, which can be combined again to reconstruct the original signal. Decomposing a signal into sine and cosine waves using Fourier Transform. The generalized form of the complex Fourier series is referred to as the Fourier transform.</p>

      <p>It is a powerful tool used in many fields, such as signal processing, physics, and engineering, to analyze the frequency content of signals or functions that vary over time or space. It is used to represent the mathematical functions and the frequency domain. It helps to expand the non-periodic functions and convert them into easy sinusoidal functions.</p>

      <h3>Continuous Fourier Transform (CFT)</h3>
      <p>For a continuous-time function <em>f(t)</em>, the Fourier transform <em>F(ω)</em> is defined as:</p>
      <p><strong>F(ω) = ∫<sub>−∞</sub><sup>∞</sup> f(t)e<sup>iωt</sup> dt</strong></p>
      <p>where:</p>
      <ul>
        <li><em>F(ω)</em> is the Fourier transform of <em>f(t)</em></li>
        <li><em>ω</em> is the angular frequency</li>
        <li><em>i</em> is the imaginary number (<em>i</em><sup>2</sup> = -1)</li>
        <li><em>t</em> is time</li>
      </ul>

      <h3>Fourier Transform Formulas</h3>
      <p>The formula for the Fourier transforms of a function <em>f(x)</em> is given by:</p>
      <p><strong>f(x) = ∫<sub>−∞</sub><sup>∞</sup> F(k)e<sup>2πikx</sup> dk</strong></p>
      <p><strong>F(k) = ∫<sub>−∞</sub><sup>∞</sup> f(x)e<sup>-2πikx</sup> dx</strong></p>
      <p>There are two types of Fourier transform i.e., forward Fourier transform and inverse Fourier transform.</p>

      <h3>Forward Fourier Transform</h3>
      <p>The forward Fourier transform is a mathematical technique used to transform a time-domain signal into its frequency-domain representation. This transformation is fundamental in various fields, including signal processing, image processing, and communications. Forward Fourier Transform is represented by <em>F(k)</em>. The symbol for forward Fourier transform is <em>f̂(k)</em> and is defined as:</p>
      <p><strong>F(k) = ∫<sub>−∞</sub><sup>∞</sup> f(x)e<sup>-2πikx</sup> dx</strong></p>

      <h3>Inverse Fourier Transform</h3>
      <p>The inverse Fourier transform is the process of converting a frequency-domain representation of a signal back into its time-domain form. This is the reverse process of the forward Fourier transform. Inverse Fourier Transform is represented by <em>f(x)</em>. Symbol for Inverse Fourier transform is <em>f̌(x)</em> and is defined as:</p>
      <p><strong>f(x) = F<sup>-1</sup>[F(k)](x) = ∫<sub>−∞</sub><sup>∞</sup> F(k)e<sup>2πikx</sup> dk</strong></p>

      <h3>Properties of Fourier Transform</h3>
      <p>If <em>a(t)</em> has a Fourier transform <em>A(f)</em>, then Fourier transform of <em>A(t)</em> is <em>a(-f)</em>. It is called the duality property. Fourier transform is a linear transform. It is called linear transform. Modulation property is the property in which the function is modulated by other function. A shift in the time domain corresponds to a phase shift in the frequency domain in Fourier Transform. Multiplying a time-domain signal by a complex exponential corresponds to a shift in the frequency domain in Fourier Transform. In Fourier Transform taking the complex conjugate of the time-domain signal corresponds to taking the complex conjugate of the frequency-domain signal and reversing the frequency.</p>

      <h3>Fourier Transform Table</h3>
      <p>The table below shows the Fourier transform of various functions.</p>
      <table>
        <thead>
          <tr><th>Functions</th><th>f(x)</th><th>F(k) = Fx[f(x)]</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>δ(k)</td><td>Sine Function sin(2πk<sub>0</sub>x) → (1/2) × i × [δ(k + k<sub>0</sub>) - δ(k - k<sub>0</sub>)]</td></tr>
          <tr><td>2</td><td>cos(2πk<sub>0</sub>x)</td><td>(1/2) × [δ(k + k<sub>0</sub>) + δ(k - k<sub>0</sub>)]</td></tr>
          <tr><td>3</td><td>-PV(1/πx)</td><td>i[1 - 2H(-k)]</td></tr>
          <tr><td>4</td><td>e<sup>-2πk<sub>0</sub>|x|</sup></td><td>(1/π)[k<sub>0</sub> / (k<sup>2</sup> + k<sub>0</sub><sup>2</sup>)]</td></tr>
          <tr><td>5</td><td>e<sup>-ax<sup>2</sup></sup></td><td>e<sup>-π<sup>2</sup>k<sup>2</sup>/a</sup></td></tr>
        </tbody>
      </table>

      <h3>Applications of Fourier Transform</h3>
      <p>Fourier transforms are used in signal processing, telecommunications, audio processing, and image processing. Fourier transforms are used to reduce noise, compression, etc. It is also used to represent the wave propagation, analysis of electrical signals and many more. The special form of Fourier transforms is used to represent periodic functions and infinite series in mathematics.</p>
    `,
    url: "https://electronicsgurukulam.blogspot.com/2021/05/basics-of-fourier-transform.html",
    emoji: "📈",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)"
  },
  {
    id: 4,
    title: "Python & Fourier Transform — Math + Code",
    category: "Signal Processing",
    summary: "Video tutorial bridging theory and practice: Python code for computing the DFT using NumPy's FFT routines, visualising frequency spectra, and applying Fourier-based noise removal to real signals. Perfect for learners who want hands-on DSP experience.",
    tags: ["Python", "FFT", "NumPy", "Noise Removal", "Coding"],
    youtubeUrl: "https://www.youtube.com/watch?v=-u8cUh8tlXY",
    url: "https://electronicsgurukulam.blogspot.com/2021/05/python-implementation-and-mathematical.html",
    emoji: "🐍",
    color: "#10b981",
    glow: "rgba(16,185,129,0.18)"
  },
  {
    id: 5,
    title: "Introduction to Communication Systems",
    category: "Communication",
    summary: "A visual walk-through of the universal communication model: source → encoder → modulator → channel → demodulator → decoder → destination. Covers noise, bandwidth, signal-to-noise ratio, and how every modern communication link — from radio to optical fibre — maps onto this framework.",
    tags: ["Communication", "Modulation", "Channel", "SNR", "Bandwidth"],
    url: "https://electronicsgurukulam.blogspot.com/2013/11/introduction-to-communication-systems.html",
    emoji: "📡",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    contentHtml: `
      <p>Communication is a process of building a connection or link between one point to another point for exchanging information. Different communication equipment including transmitter, receiver and communication channel assembled that form a communication system. It ensures that data such as voice, video and text is delivered efficiently, accurately and securely. The information being transmitted can be in either analog or digital form, depending on the type of communication system used.</p>

      <p>Examples of the communication system are line telephony and line telegraphy, radio telephony and radiotelegraphy, radio broadcasting, point-to-point communication, mobile communication, computer communication, radar communication, television broadcasting, radio telemetry, radio aids to navigation and aircraft landing, etc.</p>

      <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/20260327163721872675/information_source.webp" alt="Information source" style="max-width:100%;border-radius:12px;display:block;margin:1rem auto;"></p>

      <h2>Block Diagram</h2>
      <p>Represents the basic structure of a communication system, showing how information is transmitted from the source to the destination through components like transmitter, channel, and receiver, while noise may affect the signal during transmission.</p>

      <h3>Basic Elements</h3>
      <ul>
        <li><strong>Information Source:</strong> Generates the message (voice, text, video).</li>
        <li><strong>Transmitter:</strong> Changes the message into a signal that can be sent through the communication channel (Modulation).</li>
        <li><strong>Channel:</strong> Medium through which the signal travels (wire, air, optical fiber).</li>
        <li><strong>Noise:</strong> Unwanted disturbance that affects the signal during transmission.</li>
        <li><strong>Receiver:</strong> Recovers the original message from the received signal (demodulation).</li>
        <li><strong>Destination:</strong> Final user or device that receives the message.</li>
      </ul>

      <h3>Working</h3>
      <ul>
        <li>The information source generates the message.</li>
        <li>The transmitter converts it into a signal.</li>
        <li>The signal travels through the channel.</li>
        <li>Noise may affect the signal during transmission.</li>
        <li>The receiver processes the signal and retrieves the message.</li>
        <li>The destination receives the final output.</li>
      </ul>

      <h2>Analog and Digital Communication</h2>
      <p>Describe the two main ways in which information is transmitted in a communication system.</p>

      <h3>Analog Communication</h3>
      <ul>
        <li>Uses continuous signals</li>
        <li>More affected by noise</li>
        <li>Example: Radio broadcasting</li>
      </ul>

      <h3>Digital Communication</h3>
      <ul>
        <li>Uses discrete signals (0s and 1s)</li>
        <li>Less affected by noise</li>
        <li>Example: Internet communication</li>
      </ul>

      <h2>Modes of Communication</h2>
      <p><strong>Broadcasting:</strong> It involves the use of one powerful transmitter and many receivers that are relatively less expensive to build. Information-carrying signals flow only in one direction.</p>
      <p>Example - Radio broadcasting (FM/AM radio), television broadcasting, and live satellite TV transmission.</p>
      <p><strong>Point-to-point communication:</strong> Communication process that takes place over a link between a single transmitter and a receiver can be referred to as "point-to-point communication". Usually a bidirectional flow of information-carrying signals, which requires the use of transmitter and receiver at each end of the link.</p>
      <p>Example - Telephone calls, mobile communication, video conferencing, and direct computer-to-computer communication.</p>

      <h2>Need of Communication System</h2>
      <ul>
        <li>To transmit information over short and long distances</li>
        <li>To enable fast and reliable communication</li>
        <li>To support real-time communication (calls, video conferencing)</li>
        <li>To connect devices and networks (internet, mobile systems)</li>
        <li>To improve efficiency and reduce manual effort</li>
        <li>To support modern technologies like satellite and wireless communication</li>
      </ul>

      <h2>Real-World Scenarios</h2>
      <ul>
        <li>Making a phone call to talk to someone in another city</li>
        <li>Sending messages or chatting through mobile apps (WhatsApp, SMS)</li>
        <li>Watching live TV or listening to radio broadcasts</li>
        <li>Attending online classes or video meetings (Zoom, Google Meet)</li>
        <li>Using GPS for navigation and location tracking</li>
        <li>Browsing the internet and sending emails</li>
        <li>Communication in airplanes, ships, and military systems</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Introduction to Mobile & Cellular Telephony",
    category: "Communication",
    summary: "Explains the cell architecture, frequency reuse strategy, Base Transceiver Stations (BTS), Base Station Controllers (BSC), and Mobile Switching Centres (MSC) that make cellular networks work. Traces the evolution from 2G GSM voice to 4G LTE data services.",
    tags: ["Mobile", "Cellular", "4G", "GSM", "Base Station"],
    url: "https://electronicsgurukulam.blogspot.com/2013/12/introduction-to-mobile-and-cellular.html",
    emoji: "📱",
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.18)",
    contentHtml: `
      <h3>📱 Core Concepts</h3>

      <ul>
        <li><strong>Cell Architecture:</strong> The coverage area is divided into cells, each served by a <strong>Base Transceiver Station (BTS)</strong>. This allows efficient frequency reuse and supports large numbers of users.</li>
        <li><strong>Frequency Reuse Strategy:</strong> By assigning the same frequency bands to non-adjacent cells, networks maximize spectrum efficiency while minimizing interference.</li>
        <li><strong>Base Transceiver Station (BTS):</strong> Handles radio communication with mobile devices within its cell.</li>
        <li><strong>Base Station Controller (BSC):</strong> Manages multiple BTS units, controlling handovers and resource allocation.</li>
        <li><strong>Mobile Switching Centre (MSC):</strong> The central hub that connects calls, manages mobility, and interfaces with external networks like the PSTN (Public Switched Telephone Network).</li>
      </ul>

      <h3>📡 Evolution of Cellular Systems</h3>

      <ul>
        <li><strong>2G GSM:</strong> Focused on digital voice communication, introducing SMS and basic data services.</li>
        <li><strong>3G UMTS:</strong> Added higher-speed data, enabling mobile internet and video calls.</li>
        <li><strong>4G LTE:</strong> Optimized for data, supporting high-speed internet, streaming, and app-based communication.</li>
        <li><strong>5G (beyond the article):</strong> Expands capacity with ultra-low latency, massive IoT connectivity, and gigabit speeds.</li>
      </ul>

      <h3>🔑 Why It Matters</h3>

      <p>Mobile telephony transformed communication by:</p>

      <ul>
        <li>Allowing seamless mobility (calls and data while moving).</li>
        <li>Enabling global connectivity through standardized protocols.</li>
        <li>Laying the foundation for today’s smartphone-driven digital ecosystem.</li>
      </ul>
    `
  },
  {
    id: 7,
    title: "Introduction to Optical Communication",
    category: "Communication",
    summary: "Covers how light acts as the information carrier in fibre-optic links. Topics include total internal reflection, single-mode vs multimode fibres, semiconductor laser transmitters, PIN/APD photodetectors, optical amplifiers, and the massive bandwidth advantage over copper cables.",
    tags: ["Fibre Optic", "Laser", "Photodetector", "TIR", "Bandwidth"],
    url: "https://electronicsgurukulam.blogspot.com/2013/11/introduction-to-optical-communication.html",
    emoji: "💡",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    contentHtml: `
      <h3>🌐 What is Optical Communication?</h3>

      <ul>
        <li><strong>Definition:</strong> Optical communication refers to sending data as light signals through mediums like optical fibers, free space, or photonic devices.</li>
        <li><strong>Basic Principle:</strong> Information is encoded onto light waves (usually from lasers or LEDs), transmitted through a medium, and decoded by photodetectors at the receiving end.</li>
        <li><strong>Historical Roots:</strong> Early forms included signal fires and mirrors reflecting sunlight. Modern systems rely on <strong>photonics</strong>, integrating optics and electronics.</li>
      </ul>

      <h3>🔑 Key Components</h3>

      <ul>
        <li><strong>Optical Fiber:</strong> Thin strands of glass or plastic that guide light using <strong>total internal reflection</strong>.</li>
        <li><strong>Single-mode fibers:</strong> Support one light path, ideal for long-distance, high-speed communication.</li>
        <li><strong>Multi-mode fibers:</strong> Support multiple paths, used for shorter distances.</li>
        <li><strong>Light Sources:</strong></li>
        <li><strong>Lasers</strong> (coherent, high intensity, long-distance).</li>
        <li><strong>LEDs</strong> (cost-effective, short-distance).</li>
        <li><strong>Photodetectors:</strong> Convert light back into electrical signals (e.g., photodiodes).</li>
        <li><strong>Amplifiers:</strong> Boost signals over long distances (placed ~80 km apart in fiber networks).</li>
      </ul>

      <h3>📊 Advantages Over Traditional Communication</h3>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Optical Communication</th>
            <th>Electrical/Wireless Communication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Bandwidth</strong></td>
            <td>~1 terahertz</td>
            <td>&lt; 2 MHz typical for RF links</td>
          </tr>
          <tr>
            <td><strong>Distance</strong></td>
            <td>Thousands of km (with amplifiers)</td>
            <td>Limited to ~50 km for coaxial/wire-pair</td>
          </tr>
          <tr>
            <td><strong>Interference</strong></td>
            <td>Immune to electromagnetic noise</td>
            <td>Susceptible to EMI</td>
          </tr>
          <tr>
            <td><strong>Data Rates</strong></td>
            <td>Extremely high (Gbps to Tbps)</td>
            <td>Lower, constrained by spectrum</td>
          </tr>
          <tr>
            <td><strong>Security</strong></td>
            <td>Harder to tap without detection</td>
            <td>Easier to intercept</td>
          </tr>
        </tbody>
      </table>

      <h3>🚀 Applications</h3>

      <ul>
        <li><strong>Internet Backbone:</strong> Submarine fiber-optic cables carry global data across oceans.</li>
        <li><strong>Telecommunications:</strong> High-speed broadband, mobile backhaul, and enterprise networks.</li>
        <li><strong>Satellite &amp; Space:</strong> Optical links considered for Mars missions and deep-space communication.</li>
        <li><strong>Medical &amp; Industrial:</strong> Fiber sensors, imaging, and laser-based tools.</li>
      </ul>

      <h3>⚠️ Challenges</h3>

      <ul>
        <li><strong>Atmospheric Limitations:</strong> Clouds and fog hinder free-space optical communication.</li>
        <li><strong>Fiber Installation Costs:</strong> Laying submarine cables and urban fiber networks is expensive.</li>
        <li><strong>Signal Loss &amp; Dispersion:</strong> Requires advanced techniques like wavelength-division multiplexing (WDM) and error correction.</li>
      </ul>

      <h3>📌 Conclusion</h3>

      <p>Optical communication is the <strong>foundation of modern digital society</strong>, enabling high-speed internet, global telephony, and secure data transfer. With ongoing advances in <strong>photonics and 5G/6G integration</strong>, it will continue to expand into space communication, IoT, and ultra-fast computing networks.</p>

      <p>Would you like me to also prepare a <strong>simplified diagram of an optical communication system</strong> (showing transmitter, fiber, and receiver) to make this article more visually intuitive?</p>
    `
  },
  {
    id: 8,
    title: "Introduction to Satellite Communication",
    category: "Communication",
    summary: "Explores geostationary (GEO) and low-earth-orbit (LEO) satellites, uplink/downlink frequency bands, satellite transponders, and coverage footprints. Applications covered include direct broadcast TV, GPS navigation, VSAT internet, and remote sensing.",
    tags: ["Satellite", "GEO", "LEO", "Transponder", "GPS"],
    url: "https://electronicsgurukulam.blogspot.com/2013/11/introduction-to-satellite-communication.html",
    emoji: "🛰️",
    color: "#10b981",
    glow: "rgba(16,185,129,0.18)",
    contentHtml: `
      <h3>🛰️ What is Satellite Communication?</h3>

      <p>In general terms, a satellite is a smaller object that revolves around a larger object in space. For example, moon is a natural satellite of earth.</p>

      <p>We know that Communication refers to the exchange (sharing) of information between two or more entities, through any medium or channel. In other words, it is nothing but sending, receiving and processing of information.</p>

      <p>If the communication takes place between any two earth stations through a satellite, then it is called as <strong>satellite communication</strong>. In this communication, electromagnetic waves are used as carrier signals. These signals carry the information such as voice, audio, video or any other data between ground and space and vice-versa.</p>

      <p>Soviet Union had launched the world's first artificial satellite named, <strong>Sputnik 1</strong> in 1957. Nearly after 18 years, India also launched the artificial satellite named, <strong>Aryabhata</strong> in 1975.</p>

      <h3>📡 Need of Satellite Communication</h3>

      <p>The following two kinds of propagation are used earlier for communication up to some distance.</p>

      <ul>
        <li><strong>Ground wave propagation:</strong> Ground wave propagation is suitable for frequencies up to 30MHz. This method of communication makes use of the troposphere conditions of the earth.</li>
        <li><strong>Sky wave propagation:</strong> The suitable bandwidth for this type of communication is broadly between 30–40 MHz and it makes use of the ionosphere properties of the earth.</li>
      </ul>

      <p>The maximum hop or the station distance is limited to 1500KM only in both ground wave propagation and sky wave propagation. Satellite communication overcomes this limitation. In this method, satellites provide communication for long distances, which is well beyond the line of sight.</p>

      <p>Since the satellites locate at certain height above earth, the communication takes place between any two earth stations easily via satellite. So, it overcomes the limitation of communication between two earth stations due to earth's curvature.</p>

      <h3>🔧 How a Satellite Works</h3>

      <p>A satellite is a body that moves around another body in a particular path. A communication satellite is nothing but a <strong>microwave repeater station in space</strong>. It is helpful in telecommunications, radio and television along with internet applications.</p>

      <p>A repeater is a circuit, which increases the strength of the received signal and then transmits it. But, this repeater works as a <strong>transponder</strong>. That means, it changes the frequency band of the transmitted signal from the received one.</p>

      <p>The frequency with which, the signal is sent into the space is called as <strong>Uplink frequency</strong>. Similarly, the frequency with which, the signal is sent by the transponder is called as <strong>Downlink frequency</strong>.</p>

      <p>The transmission of signal from first earth station to satellite through a channel is called as <strong>uplink</strong>. Similarly, the transmission of signal from satellite to second earth station through a channel is called as <strong>downlink</strong>.</p>

      <p>Uplink frequency is the frequency at which, the first earth station is communicating with satellite. The satellite transponder converts this signal into another frequency and sends it down to the second earth station. This frequency is called as Downlink frequency. In similar way, second earth station can also communicate with the first one.</p>

      <p>The process of satellite communication begins at an earth station. Here, an installation is designed to transmit and receive signals from a satellite in an orbit around the earth. Earth stations send the information to satellites in the form of high powered, high frequency (GHz range) signals.</p>

      <p>The satellites receive and retransmit the signals back to earth where they are received by other earth stations in the coverage area of the satellite. Satellite's <strong>footprint</strong> is the area which receives a signal of useful strength from the satellite.</p>

      <h3>✅ Advantages of Satellite Communication</h3>

      <ul>
        <li>Area of coverage is more than that of terrestrial systems</li>
        <li>Each and every corner of the earth can be covered</li>
        <li>Transmission cost is independent of coverage area</li>
        <li>More bandwidth and broadcasting possibilities</li>
      </ul>

      <h3>⚠️ Disadvantages of Satellite Communication</h3>

      <ul>
        <li>Launching of satellites into orbits is a costly process.</li>
        <li>Propagation delay of satellite systems is more than that of conventional terrestrial systems.</li>
        <li>Difficult to provide repairing activities if any problem occurs in a satellite system.</li>
        <li>Free space loss is more.</li>
        <li>There can be congestion of frequencies.</li>
      </ul>

      <h3>🚀 Applications of Satellite Communication</h3>

      <p>Satellite communication plays a vital role in our daily life. Following are the applications of satellite communication:</p>

      <ul>
        <li>Radio broadcasting and voice communications</li>
        <li>TV broadcasting such as Direct To Home (DTH)</li>
        <li>Internet applications such as providing Internet connection for data transfer, GPS applications, Internet surfing, etc.</li>
        <li>Military applications and navigations</li>
        <li>Remote sensing applications</li>
        <li>Weather condition monitoring &amp; Forecasting</li>
      </ul>
    `
  },
  {
    id: 9,
    title: "TRF vs Superheterodyne Receiver",
    category: "Communication",
    summary: "Compares two AM receiver architectures side by side. The Tuned Radio Frequency (TRF) receiver converts RF directly to audio, while the superheterodyne converts to a fixed Intermediate Frequency (IF) first — achieving far superior selectivity, sensitivity, and image rejection. The superhet principle remains inside every radio and smartphone receiver today.",
    tags: ["AM", "Superheterodyne", "IF Stage", "Selectivity", "Receiver"],
    url: "https://electronicsgurukulam.blogspot.com/2016/01/sannasichakravarthy.html",
    emoji: "📻",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    contentHtml: `
      <h3>📻 TRF vs Superheterodyne Receiver</h3>

      <p>The Tuned Radio Frequency (TRF) receiver is simpler but suffers from poor selectivity and stability at higher frequencies, while the Superheterodyne receiver—developed by Edwin Armstrong—became the dominant design thanks to its superior selectivity, constant gain, and ability to handle a wide range of frequencies.</p>

      <h3>📻 TRF Receiver</h3>

      <p><strong>Structure:</strong> Multiple RF amplifier stages, each with tuned circuits directly tuned to the incoming frequency.</p>

      <p><strong>Operation:</strong> The detector demodulates the original RF signal after amplification.</p>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Simple design.</li>
        <li>No image frequency problem.</li>
      </ul>

      <p><strong>Limitations:</strong></p>
      <ul>
        <li>Selectivity decreases at higher frequencies.</li>
        <li>Difficult to maintain tuning across multiple stages.</li>
        <li>Amplification varies with frequency.</li>
        <li>Stability issues due to neutralization requirements in triode amplifiers.</li>
      </ul>

      <h3>📡 Superheterodyne Receiver</h3>

      <p><strong>Structure:</strong> Includes RF amplifier, mixer, local oscillator, IF amplifier, detector, and AF amplifier.</p>

      <p><strong>Operation:</strong> Incoming RF signal is mixed with a local oscillator to produce a fixed Intermediate Frequency (IF) (commonly 455 kHz). The IF is then amplified and demodulated.</p>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Constant selectivity and gain since IF is fixed.</li>
        <li>High fidelity and better rejection of unwanted signals.</li>
        <li>Easier to design sharp filters at IF.</li>
      </ul>

      <p><strong>Limitations:</strong></p>
      <ul>
        <li>More complex and costly.</li>
        <li>Produces image frequency, requiring careful filtering.</li>
      </ul>

      <h3>🔑 Comparison Table</h3>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>TRF Receiver</th>
            <th>Superheterodyne Receiver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Design Complexity</strong></td>
            <td>Simple</td>
            <td>Complex (multiple stages)</td>
          </tr>
          <tr>
            <td><strong>Selectivity</strong></td>
            <td>Poor at high frequencies</td>
            <td>Excellent, constant across band</td>
          </tr>
          <tr>
            <td><strong>Gain Stability</strong></td>
            <td>Varies with frequency</td>
            <td>Constant due to fixed IF</td>
          </tr>
          <tr>
            <td><strong>Image Frequency</strong></td>
            <td>None</td>
            <td>Present, needs filtering</td>
          </tr>
          <tr>
            <td><strong>Tuning</strong></td>
            <td>Multiple circuits must track</td>
            <td>Single tuning control</td>
          </tr>
          <tr>
            <td><strong>Cost</strong></td>
            <td>Cheaper</td>
            <td>More expensive</td>
          </tr>
          <tr>
            <td><strong>Applications</strong></td>
            <td>Early radios, simple sets</td>
            <td>Modern radios, communication systems</td>
          </tr>
        </tbody>
      </table>

      <h3>⚠️ Practical Notes</h3>

      <ul>
        <li>TRF receivers were common in the 1920s–1930s, but their limitations made them obsolete.</li>
        <li>Superheterodyne receivers dominate broadcast radios, televisions, and communication equipment today.</li>
        <li>Modern SDRs (Software Defined Radios) sometimes revisit direct conversion (Zero-IF), but high-performance designs still rely on superhet stages for selectivity.</li>
      </ul>

      <h3>📌 Conclusion</h3>

      <p>The TRF receiver is historically important but technically limited. The Superheterodyne receiver remains the standard due to its superior performance, despite added complexity. Understanding both architectures is essential for appreciating the evolution of radio communication systems.</p>

      <p>Would you like me to also create a <strong>block diagram comparison</strong> (TRF vs Superhet stages) to visually illustrate the differences?</p>
    `
  },
  {
    id: 10,
    title: "How a Mosquito Racket Works",
    category: "Applied Electronics",
    summary: "Inside the mosquito zapper: a humble 3 V battery feeds an oscillator-driven flyback transformer that boosts voltage to roughly 3000 V across a conductive grid. When an insect bridges the wires, it completes the high-voltage circuit and is instantly killed. A brilliant example of boost conversion and high-voltage engineering in a cheap consumer product.",
    tags: ["High Voltage", "Boost Converter", "Oscillator", "Flyback", "Practical"],
    url: "https://electronicsgurukulam.blogspot.com/2014/12/mosquito-bat.html",
    emoji: "🦟",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.18)",
    contentHtml: `
      <h3>⚡ Introduction</h3>

      <p>A mosquito racket, also called an electric mosquito swatter, is a handheld device designed to kill mosquitoes and other small flying insects instantly using electricity. It combines simple electronics with a practical design, making it a popular household tool.</p>

      <h3>🔧 Construction</h3>

      <ul>
        <li><strong>Racket Frame:</strong> Shaped like a tennis racket, with a mesh grid that acts as the killing surface.</li>
        <li><strong>Mesh Layers:</strong> Usually three layers:
          <ul>
            <li>Two outer protective nets (safe to touch).</li>
            <li>One inner high-voltage net (charged to kill insects).</li>
          </ul>
        </li>
        <li><strong>Handle:</strong> Contains the electronic circuit, rechargeable battery, and switch.</li>
        <li><strong>Indicator Light:</strong> Shows when the racket is active.</li>
      </ul>

      <h3>⚙️ Working Principle</h3>

      <ul>
        <li><strong>Power Supply:</strong> A rechargeable battery (often Li-ion) provides DC voltage.</li>
        <li><strong>Voltage Booster Circuit:</strong> Converts the low battery voltage (3–5 V) into a high voltage (around 500–1000 V).</li>
        <li><strong>High-Voltage Mesh:</strong> The central grid is energized with this voltage.</li>
        <li><strong>Contact with Mosquito:</strong> When a mosquito touches the mesh, it completes the circuit between the high-voltage wires.</li>
        <li><strong>Electric Shock:</strong> The insect experiences a sudden discharge, killing it instantly.</li>
      </ul>

      <h3>📊 Advantages</h3>

      <ul>
        <li>Portable and easy to use.</li>
        <li>Environmentally friendly (no chemicals).</li>
        <li>Instant kill, no mess.</li>
        <li>Rechargeable and long-lasting.</li>
      </ul>

      <h3>⚠️ Safety Features</h3>

      <ul>
        <li>Outer mesh prevents accidental human contact with the high-voltage grid.</li>
        <li>Built-in fuse or circuit protection avoids overload.</li>
        <li>Indicator light warns when the racket is active.</li>
      </ul>

      <h3>🚀 Applications</h3>

      <ul>
        <li>Household mosquito control.</li>
        <li>Outdoor use in gardens, camping, or picnics.</li>
        <li>Useful in tropical regions where mosquito-borne diseases are common.</li>
      </ul>

      <h3>📌 Conclusion</h3>

      <p>A mosquito racket is a simple yet effective electronic device that uses high-voltage discharge to eliminate mosquitoes. Its design balances safety, portability, and efficiency, making it a practical solution for everyday mosquito problems.</p>

      <p>Would you like me to also prepare a <strong>schematic-style diagram</strong> showing the battery, voltage booster, and mesh layers so you can visualize the internal working more clearly?</p>
    `
  },
  {
    id: 11,
    title: "Working of a Lighter — Piezoelectric Effect",
    category: "Applied Electronics",
    summary: "When you click a push-button lighter, a spring-loaded hammer strikes a piezoelectric crystal. The mechanical stress displaces ions inside the crystal lattice, generating a high-voltage pulse (up to ~15 kV) that sparks across an electrode gap and ignites the gas-air mixture. A textbook demonstration of direct electromechanical energy conversion.",
    tags: ["Piezoelectric", "Spark", "Crystal", "Energy Conversion", "Mechanism"],
    url: "https://electronicsgurukulam.blogspot.com/2016/04/sannasichakravarthy.html",
    emoji: "🔥",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)"
  },
  {
    id: 12,
    title: "Magnetic Resonance Imaging (MRI)",
    category: "Applied Electronics",
    summary: "MRI machines align hydrogen protons in tissue using a powerful static magnetic field, then disturb them with a radiofrequency pulse. As protons relax back to equilibrium they emit RF signals detected by receiver coils. Gradient fields encode 3D positional information; inverse Fourier transform reconstructs the final image. No ionising radiation required.",
    tags: ["MRI", "NMR", "Medical Imaging", "Magnetic Field", "Fourier"],
    url: "https://electronicsgurukulam.blogspot.com/2013/03/magnetic-resonance-imaging.html",
    emoji: "🏥",
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.18)"
  },
  {
    id: 13,
    title: "Introduction to Television",
    category: "Applied Electronics",
    summary: "Traces the complete TV chain: camera pickup tubes converting light to video signal, vestigial-sideband AM video modulation, FM audio modulation, VHF/UHF broadcasting, and the TV receiver's tuner, IF amplifier, video detector, sync separator, and CRT display. Also introduces colour encoding (NTSC, PAL) and modern flat-panel technology.",
    tags: ["Television", "CRT", "Video Signal", "Modulation", "Broadcasting"],
    url: "https://electronicsgurukulam.blogspot.com/2013/11/introduction-to-television.html",
    emoji: "📺",
    color: "#10b981",
    glow: "rgba(16,185,129,0.18)"
  },
  {
    id: 14,
    title: "A Journey Through VLSI",
    category: "Advanced",
    summary: "A visual journey from basic transistors to billion-transistor chips. Covers CMOS logic, MOSFET scaling, silicon wafer fabrication (lithography, doping, etching), EDA tools for design and verification, and Moore's Law — showing how transistor density has doubled roughly every two years since the 1970s, enabling everything from microprocessors to AI accelerators.",
    tags: ["VLSI", "CMOS", "Fabrication", "EDA", "Moore's Law"],
    url: "https://electronicsgurukulam.blogspot.com/2013/11/blog-post.html",
    emoji: "🖥️",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.18)"
  },
  {
    id: 15,
    title: "Instrumentation Amplifier",
    category: "Advanced",
    summary: "The instrumentation amplifier uses a classic three op-amp topology to amplify tiny differential signals — such as millivolt outputs from strain gauges, thermocouples, or medical electrodes — while rejecting common-mode noise. A single external resistor sets gain, and very high CMRR (common-mode rejection ratio) makes it ideal for noisy industrial environments.",
    tags: ["Op-Amp", "Differential", "CMRR", "Transducer", "Industrial"],
    url: "https://electronicsgurukulam.blogspot.com/2017/08/instrumentation-amplifier.html",
    emoji: "🔧",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)"
  },
  {
    id: 16,
    title: "Introduction to Android Applications",
    category: "Digital",
    summary: "A beginner's guide to the Android software stack: Linux kernel at the base, Hardware Abstraction Layer, Android Runtime (ART with ahead-of-time compilation), Application Framework providing APIs, and user-facing Apps. Explains the APK packaging format, the Manifest file, Activity lifecycle, and the general workflow for building and deploying Android apps.",
    tags: ["Android", "Mobile Dev", "APK", "Activity", "Java/Kotlin"],
    url: "https://electronicsgurukulam.blogspot.com/2013/12/introduction-to-android-applications.html",
    emoji: "🤖",
    color: "#10b981",
    glow: "rgba(16,185,129,0.18)"
  }
];

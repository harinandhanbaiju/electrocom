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
    title: "Ohm's Law — Interactive Simulation",
    category: "Fundamentals",
    summary: "Explore the foundational relationship V = I × R with a live PhET simulation. Adjust voltage and resistance to see exactly how current responds, and understand why this simple law underpins every circuit design from LEDs to power amplifiers.",
    tags: ["V=IR", "Voltage", "Current", "Resistance", "Simulation"],
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
    glow: "rgba(168,85,247,0.18)"
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
    glow: "rgba(20,184,166,0.18)"
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
    glow: "rgba(245,158,11,0.18)"
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
    glow: "rgba(16,185,129,0.18)"
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
    glow: "rgba(168,85,247,0.18)"
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
    glow: "rgba(239,68,68,0.18)"
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

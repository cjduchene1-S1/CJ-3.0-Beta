// CJ 3.0 Beta — Data & Knowledge Base
// All content is based on publicly available information only.
// This tool does not access Stryker internal systems.

window.CJ_DATA = {

  // ─── TRAINING MODULES ────────────────────────────────────────────────────
  trainingModules: [
    {
      id: 'mod1',
      title: 'Joint Anatomy & Physiology',
      icon: '🦴',
      category: 'Clinical',
      duration: '45 min',
      description: 'Understand the structure and function of hip and knee joints, common pathologies, and why replacement is indicated.',
      content: `The hip is a ball-and-socket joint (femoral head + acetabulum) providing multiaxial motion. The knee is a hinge joint (femoral condyles + tibial plateau + patella) with complex ligamentous support. Osteoarthritis (OA) is the #1 indication for joint replacement — cartilage breakdown leads to bone-on-bone pain, stiffness, and loss of function. Other indications: rheumatoid arthritis, avascular necrosis, post-traumatic arthritis. Understanding patient symptoms and X-ray findings helps you connect clinical need to product solutions.`,
      videos: [
        { title: 'Hip Joint Anatomy (Khan Academy)', url: 'https://www.youtube.com/watch?v=LHGbkPl5lsc' },
        { title: 'Knee Joint Anatomy Overview', url: 'https://www.youtube.com/watch?v=3DlQMNqp_2c' },
        { title: 'Osteoarthritis Explained', url: 'https://www.youtube.com/watch?v=9EfGR0HHQBE' }
      ],
      quiz: [
        { q: 'The hip joint is classified as what type of joint?', opts: ['Hinge', 'Ball-and-socket', 'Saddle', 'Pivot'], correct: 1, exp: 'The hip is a ball-and-socket joint, allowing multiaxial movement between the femoral head and acetabulum.' },
        { q: 'What is the most common indication for total joint replacement?', opts: ['Rheumatoid arthritis', 'Fracture', 'Osteoarthritis', 'Gout'], correct: 2, exp: 'Osteoarthritis (cartilage breakdown) is the leading indication for THA and TKA.' },
        { q: 'Which structure provides primary stability to the knee joint?', opts: ['Meniscus', 'ACL/PCL + collateral ligaments', 'Patella', 'Bursa'], correct: 1, exp: 'The cruciate and collateral ligaments are the primary stabilizers of the knee.' },
        { q: 'Avascular necrosis (AVN) refers to:', opts: ['Bone infection', 'Death of bone tissue due to loss of blood supply', 'Cartilage overgrowth', 'Nerve damage'], correct: 1, exp: 'AVN occurs when blood supply to bone is disrupted, causing bone death — a common indication for hip replacement.' },
        { q: 'The medial compartment of the knee is located:', opts: ['Toward the outside of the leg', 'Toward the inside (big-toe side)', 'Behind the knee', 'Above the patella'], correct: 1, exp: 'Medial = toward midline of the body; medial compartment OA is the most common type.' },
        { q: 'Which of the following is NOT a typical symptom of end-stage knee OA?', opts: ['Night pain', 'Crepitus', 'Increased range of motion', 'Stiffness after rest'], correct: 2, exp: 'End-stage OA typically causes decreased ROM, not increased, due to bone spurs and joint space loss.' }
      ]
    },
    {
      id: 'mod2',
      title: 'Mako SmartRobotics System',
      icon: '🤖',
      category: 'Technology',
      duration: '60 min',
      description: 'Deep dive into Mako robotic-arm technology — how it works, its clinical benefits, and how to position it with surgeons.',
      content: `Mako SmartRobotics (Stryker) uses CT-based 3D planning and a robotic arm to guide surgeons through joint replacement with precision. Key components: (1) CT scan → 3D patient-specific model, (2) Pre-op plan reviewed with surgeon, (3) Intraoperative robotic arm with haptic feedback boundaries ("AccuStop"), (4) Real-time data on bone resection and implant positioning. Approved for partial knee (PKA), total knee (TKA), and total hip (THA). Published clinical data shows improved accuracy of implant placement vs. manual technique. Your role: help schedule planning appointments, ensure CT protocol compliance, support surgeon in OR.`,
      videos: [
        { title: 'Mako SmartRobotics Overview (Stryker Official)', url: 'https://www.youtube.com/watch?v=7u7Z0JvfCqE' },
        { title: 'How Robotic Surgery Works', url: 'https://www.youtube.com/watch?v=AE5dUqAzJ7c' },
        { title: 'Mako Total Knee — Patient Perspective', url: 'https://www.youtube.com/results?search_query=mako+robotic+total+knee+stryker' }
      ],
      quiz: [
        { q: 'What imaging modality is used for Mako pre-operative planning?', opts: ['MRI', 'X-ray only', 'CT scan', 'Ultrasound'], correct: 2, exp: 'Mako uses CT scans to create a 3D patient-specific model for pre-op planning.' },
        { q: 'What does "AccuStop" technology do?', opts: ['Controls the robot speed', 'Creates haptic boundaries to prevent over-resection', 'Cleans the implant', 'Tracks blood loss'], correct: 1, exp: 'AccuStop uses haptic (force) feedback to keep the saw blade within planned bone boundaries.' },
        { q: 'Mako is FDA-cleared for which procedures?', opts: ['PKA only', 'TKA only', 'PKA, TKA, and THA', 'THA and TKA only'], correct: 2, exp: 'Mako is cleared for partial knee arthroplasty, total knee arthroplasty, and total hip arthroplasty.' },
        { q: 'What is your primary role during a Mako case as an ASR?', opts: ['Operate the robotic arm', 'Make implant selection decisions', 'Support surgeon, manage implant/instrument logistics, ensure workflow', 'Read CT scan'], correct: 2, exp: 'As an ASR you support the surgeon, manage instruments/implants, and help ensure the workflow runs smoothly.' },
        { q: 'A surgeon objecting to Mako because "it takes longer" should be addressed by:', opts: ['Agreeing and moving on', 'Sharing learning curve data showing time improves with experience', 'Dismissing the concern', 'Offering a discount'], correct: 1, exp: 'Published data shows OR time normalizes after the learning curve. Address with data and surgeon testimonials.' },
        { q: 'The 3D plan created before a Mako case is called:', opts: ['Surgical blueprint', 'RIO plan', 'Pre-operative plan / patient-specific plan', 'CT report'], correct: 2, exp: 'Each patient gets a customized pre-operative plan reviewed by the surgeon before the case.' }
      ]
    },
    {
      id: 'mod3',
      title: 'Total Hip Arthroplasty (THA)',
      icon: '🦿',
      category: 'Clinical',
      duration: '50 min',
      description: 'Understand the THA procedure, implant components, surgical approaches, and your role in the OR.',
      content: `THA replaces the femoral head and acetabular surface. Main components: (1) Acetabular cup (shell + liner), (2) Femoral stem + femoral head. Common approaches: posterior (most common), anterolateral, direct anterior (DAA — growing in popularity). Implant fixation: cementless (press-fit, most common today) vs cemented. Key metrics: leg length equality, offset, cup position (inclination ~40°, anteversion ~15-20°). Your OR role: know implant sizes, have backup available, track trial/final implants, maintain sterile technique awareness, anticipate surgeon needs.`,
      videos: [
        { title: 'Total Hip Replacement Surgery Overview', url: 'https://www.youtube.com/watch?v=0KAF0OFX4zI' },
        { title: 'Hip Replacement Implant Components', url: 'https://www.youtube.com/watch?v=TkSJ4kPiAGE' }
      ],
      quiz: [
        { q: 'Which of the following is NOT a component of a total hip arthroplasty?', opts: ['Acetabular shell', 'Femoral stem', 'Tibial tray', 'Femoral head'], correct: 2, exp: 'The tibial tray is a knee component. THA includes the cup shell, liner, femoral stem, and femoral head.' },
        { q: 'The direct anterior approach (DAA) is notable because:', opts: ['It is the most common approach', 'It avoids cutting major muscle groups', 'It requires the longest recovery', 'It is only used for revisions'], correct: 1, exp: 'DAA goes between muscle planes rather than cutting them, potentially enabling faster recovery.' },
        { q: 'Ideal acetabular cup inclination is approximately:', opts: ['10-15°', '20-25°', '40°', '60°'], correct: 2, exp: 'The "safe zone" for cup inclination is approximately 40° (±10°) to reduce impingement and dislocation risk.' },
        { q: 'Press-fit fixation means:', opts: ['Using cement', 'Screwing the implant in', 'Impacting the implant so bone grows onto its surface', 'Gluing with adhesive'], correct: 2, exp: 'Cementless/press-fit implants are coated with porous material that allows bone ingrowth for long-term fixation.' },
        { q: 'As an ASR during a THA, you should:', opts: ['Stand as close to the field as possible', 'Know the implant sizes and have backups ready', 'Ask the surgeon questions during critical steps', 'Leave the room during incision'], correct: 1, exp: 'Anticipating needs — knowing sizes, having backups, being ready with instruments — is key to OR support.' },
        { q: 'Leg length discrepancy after THA is most commonly caused by:', opts: ['Wrong implant material', 'Incorrect stem seating or head length selection', 'Patient weight', 'Anesthesia type'], correct: 1, exp: 'Improper stem seating or wrong femoral head length selection can cause leg length changes post-op.' }
      ]
    },
    {
      id: 'mod4',
      title: 'Total Knee Arthroplasty (TKA)',
      icon: '🦾',
      category: 'Clinical',
      duration: '50 min',
      description: 'Learn TKA procedure steps, implant components, and your responsibilities during knee replacement cases.',
      content: `TKA replaces femoral condyles, tibial plateau, and often the patellar surface. Components: (1) Femoral component, (2) Tibial tray + polyethylene insert, (3) Patellar button (if resurfaced). Key surgical goals: correct alignment (mechanical axis), balanced flexion/extension gaps, appropriate ligament tension. CR (cruciate-retaining) vs PS (posterior-stabilized) designs — PS sacrifices PCL, uses post/cam mechanism. Fixed vs mobile bearing inserts. Your role: organize instrument trays in correct order, know sizing, track trialing, document lot numbers, communicate with scrub tech.`,
      videos: [
        { title: 'Total Knee Replacement Surgery', url: 'https://www.youtube.com/watch?v=FLKyMNIkVGk' },
        { title: 'Knee Replacement Components Explained', url: 'https://www.youtube.com/watch?v=ZHGQtSGx7pQ' }
      ],
      quiz: [
        { q: 'In a CR (cruciate-retaining) TKA, which ligament is preserved?', opts: ['ACL', 'PCL', 'MCL', 'LCL'], correct: 1, exp: 'CR implants retain the posterior cruciate ligament (PCL), relying on it for rollback and stability.' },
        { q: 'The polyethylene insert in TKA sits between:', opts: ['The femoral component and the patella', 'The tibial tray and the femoral component', 'The tibia and the femur directly', 'The patella and the tibial tray'], correct: 1, exp: 'The poly insert articulates between the tibial tray (below) and the femoral component (above).' },
        { q: 'Proper alignment in TKA is measured along:', opts: ['The anatomic axis', 'The mechanical axis', 'The sagittal plane only', 'The patient\'s height'], correct: 1, exp: 'Mechanical axis (from femoral head center to ankle center) should pass through the knee to reduce wear.' },
        { q: 'A PS (posterior-stabilized) TKA differs from CR by:', opts: ['Having no tibial component', 'Using a post and cam instead of the PCL', 'Being smaller in size', 'Requiring no polyethylene'], correct: 1, exp: 'PS designs sacrifice the PCL and use a tibial post/femoral cam mechanism for posterior stability.' },
        { q: 'Lot number documentation in the OR is important because:', opts: ['Surgeons require it for payment', 'It enables product tracking and recall notification if needed', 'It is optional', 'It only applies to instruments'], correct: 1, exp: 'Lot/serial number tracking is FDA-required for implantable devices and enables traceability.' },
        { q: 'Gap balancing in TKA refers to:', opts: ['Matching implant sizes between left and right', 'Ensuring equal flexion and extension gaps with proper ligament tension', 'Balancing blood loss', 'Sizing the femoral component'], correct: 1, exp: 'Surgeons balance flexion/extension gaps to ensure the knee is stable and moves properly throughout range of motion.' }
      ]
    },
    {
      id: 'mod5',
      title: 'Partial Knee Replacement (PKA)',
      icon: '⚙️',
      category: 'Clinical',
      duration: '35 min',
      description: 'Understand unicompartmental and patellofemoral partial knee replacement — indications, advantages, and Mako\'s role.',
      content: `PKA replaces only the damaged compartment of the knee (medial, lateral, or patellofemoral) rather than the entire joint. Advantages: preserves natural ligaments, less bone removal, faster recovery, more natural feel. Key indication: isolated compartmental OA with intact ACL, stable ligaments, and reasonable BMI. Mako excels here — robotic precision ensures accurate component placement in a smaller surgical footprint. Medial PKA is most common. Contraindicated in inflammatory arthritis, severe deformity, or multi-compartment disease.`,
      videos: [
        { title: 'Partial Knee Replacement vs Total', url: 'https://www.youtube.com/watch?v=sAW0qKSBDbc' },
        { title: 'Mako Partial Knee Overview', url: 'https://www.youtube.com/results?search_query=mako+partial+knee+stryker+robot' }
      ],
      quiz: [
        { q: 'PKA is indicated when:', opts: ['All three compartments are damaged', 'Only one compartment shows significant disease with intact ACL', 'The patient is very young and active', 'The patient has rheumatoid arthritis'], correct: 1, exp: 'PKA requires isolated compartmental disease — typically medial — with intact ACL and no inflammatory arthritis.' },
        { q: 'Which compartment is most commonly replaced in PKA?', opts: ['Lateral', 'Patellofemoral', 'Medial', 'All equally'], correct: 2, exp: 'Medial compartment OA is the most common presentation, making medial PKA the most frequent procedure.' },
        { q: 'A key advantage of PKA over TKA is:', opts: ['It is less expensive', 'It preserves natural ligaments and removes less bone', 'It lasts longer', 'It requires no anesthesia'], correct: 1, exp: 'PKA preserves the ACL, PCL, and other compartments, often resulting in a more natural feel and faster recovery.' },
        { q: 'Mako is particularly valuable for PKA because:', opts: ['It eliminates the need for a surgeon', 'Its precision helps accurately place a smaller implant in a confined space', 'It is cheaper than manual technique', 'PKA can only be done with Mako'], correct: 1, exp: 'Robotic precision is especially valuable in PKA where accurate positioning in a small area is critical.' },
        { q: 'Which finding would CONTRAINDICATE a patient for PKA?', opts: ['Age 65', 'BMI 28', 'Intact ACL', 'Inflammatory arthritis'], correct: 3, exp: 'Inflammatory arthritis (RA, etc.) causes multi-compartment disease and contraindicates single-compartment replacement.' }
      ]
    },
    {
      id: 'mod6',
      title: 'OR Navigation & Professional Conduct',
      icon: '🏥',
      category: 'Professional',
      duration: '40 min',
      description: 'Master OR etiquette, sterile field rules, surgical team dynamics, and your professional responsibilities as a sales rep.',
      content: `The OR is a sterile, high-stakes environment. Rules: (1) Never break the sterile field, (2) Scrub in only when properly certified/credentialed, (3) Speak only when necessary during critical steps, (4) Anticipate — don't wait to be asked, (5) Know where everything is before the case starts, (6) Dress code: scrubs, shoe covers, hair cover, mask. Surgical team: Attending surgeon, resident/fellow, scrub tech (sterile field), circulating nurse (outside), anesthesiologist, OR coordinator. Your relationship with the scrub tech and circulating nurse is crucial — they influence surgeon preferences and can make your job easier or harder. Arrive 30-45 min before case. Have a complete instrument/implant count. Follow hospital-specific policies.`,
      videos: [
        { title: 'OR Etiquette for Medical Device Reps', url: 'https://www.youtube.com/results?search_query=operating+room+etiquette+medical+device+rep' },
        { title: 'Sterile Field Basics', url: 'https://www.youtube.com/watch?v=QxXmn8_sCGQ' }
      ],
      quiz: [
        { q: 'You should arrive before a case to:', opts: ['Watch the preceding surgery', 'Set up instruments, confirm implant sizes, and prepare for the case', 'Socialize with staff', 'Wait outside until called'], correct: 1, exp: 'Arriving 30-45 min early lets you set up and be ready — showing professionalism and reducing delays.' },
        { q: 'If you accidentally contaminate the sterile field:', opts: ['Pretend it did not happen', 'Immediately notify the scrub tech or surgeon', 'Quickly move something to cover it', 'Leave the room'], correct: 1, exp: 'Always report contamination immediately — patient safety is paramount, and cover-ups are never acceptable.' },
        { q: 'Who manages supplies from OUTSIDE the sterile field?', opts: ['Scrub tech', 'Surgeon', 'Circulating nurse', 'Anesthesiologist'], correct: 2, exp: 'The circulating (circulator) nurse works outside the sterile field and passes items in from outside.' },
        { q: 'Building a strong relationship with OR staff (nurses, scrub techs) is important because:', opts: ['They make purchasing decisions', 'They influence surgeon opinion and can ease your access and workflow', 'It is required by law', 'They control scheduling only'], correct: 1, exp: 'OR staff relationships are foundational — they influence surgeon preferences and daily case success.' },
        { q: 'During a critical surgical step, you should:', opts: ['Ask about scheduling next case', 'Stay quiet and observe unless specifically asked something', 'Check your phone quickly', 'Offer suggestions to the surgeon'], correct: 1, exp: 'Silence during critical moments shows respect and professionalism; speak only when necessary or asked.' },
        { q: 'Hospital credentialing before entering the OR is:', opts: ['Optional for sales reps', 'Required — you cannot enter the OR without it', 'Only needed for management reps', 'Only needed for first visit'], correct: 1, exp: 'Every facility requires vendor credentialing compliance (Reptrax, Vendormate, etc.) before OR access.' }
      ]
    },
    {
      id: 'mod7',
      title: 'Sales Excellence & Consultative Selling',
      icon: '💼',
      category: 'Sales',
      duration: '55 min',
      description: 'Learn the consultative sales framework, value selling, objection handling, and building surgeon partnerships.',
      content: `Consultative selling = understanding the customer\'s needs first, then positioning solutions. Framework: (1) Research — know your surgeon, their practice, their patient mix, (2) Open — earn the right to a conversation, (3) Discover — ask clinical and business questions, (4) Present — tie your solution to their specific need, (5) Handle objections — acknowledge, clarify, respond, confirm, (6) Close — ask for the business / next step, (7) Follow through — delivery, in-service, outcome tracking. Common objections in ortho: "We\'re happy with our current vendor," "Price is too high," "I don\'t want to change," "Mako takes too long." Your value = clinical support + reliability + education + problem solving. Track every interaction.`,
      videos: [
        { title: 'Consultative Selling Skills', url: 'https://www.youtube.com/watch?v=Wr0UIIr3-KY' },
        { title: 'Handling Sales Objections', url: 'https://www.youtube.com/watch?v=kijvlK0dXQg' },
        { title: 'Medical Device Sales Tips', url: 'https://www.youtube.com/results?search_query=medical+device+sales+tips+ortho' }
      ],
      quiz: [
        { q: 'In consultative selling, the FIRST priority is:', opts: ['Pitching your product', 'Understanding the customer\'s specific needs', 'Discussing price', 'Scheduling a demo'], correct: 1, exp: 'Consultative selling starts with understanding — ask before presenting so your solution is relevant.' },
        { q: 'When a surgeon says "We\'re happy with our current vendor," you should:', opts: ['Accept and leave', 'Acknowledge their loyalty, then ask what "ideal" looks like to uncover gaps', 'Immediately pitch price', 'Criticize the competitor'], correct: 1, exp: 'Acknowledge the relationship, then ask open-ended questions to discover unmet needs or opportunities.' },
        { q: 'The best close in surgical sales is:', opts: ['A hard pressure close', 'Asking for a specific next step (trial case, surgeon meeting, in-service)', 'Offering the biggest discount', 'Waiting for them to call you'], correct: 1, exp: 'In surgical sales, the "close" is often asking for a specific next step — a trial, a meeting, a case.' },
        { q: 'What is the most valuable thing you can provide a surgeon beyond product?', opts: ['Free lunches', 'Reliability, clinical expertise, and problem-solving', 'Golf outings', 'Bigger instrument sets'], correct: 1, exp: 'Surgeons value reps who are reliable, knowledgeable, and solve problems — this builds lasting partnerships.' },
        { q: 'Tracking every sales interaction is important because:', opts: ['Your manager requires it', 'It helps identify patterns, follow-up opportunities, and account trends', 'It is not necessary if you have good memory', 'Only applies to new accounts'], correct: 1, exp: 'Consistent tracking reveals account patterns, ensures timely follow-up, and documents your pipeline.' },
        { q: 'A surgeon\'s key influencers (who can support or block your access) include:', opts: ['Only the surgeon', 'OR staff, office manager, scheduler, and hospital administration', 'Only hospital administration', 'Only the scrub tech'], correct: 1, exp: 'Success requires building relationships across the care team — not just the surgeon.' }
      ]
    },
    {
      id: 'mod8',
      title: 'Territory Management & Account Planning',
      icon: '🗺️',
      category: 'Sales',
      duration: '45 min',
      description: 'Strategically manage your North Texas territory — prioritizing accounts, planning your week, and growing market share.',
      content: `Territory management = maximizing ROI on your time and effort. Account tiers: Tier 1 (high volume, current business — protect & grow), Tier 2 (medium volume, opportunity accounts — develop), Tier 3 (low volume or competitive — target selectively). Weekly planning: Monday prep (review schedule, prep cases), Tue-Thu (case coverage + office visits), Friday (admin, follow-up, planning). Key metrics: cases per week, new surgeon meetings, Mako utilization, conversion rate. North Texas market: large market with significant hospital systems (HCA, Baylor Scott & White, Methodist, UT Southwestern, Texas Health). Focus on Mako-enabled facilities and surgeons open to robotic adoption.`,
      videos: [
        { title: 'Territory Management for Sales Reps', url: 'https://www.youtube.com/watch?v=zIGcEHHcYnE' },
        { title: 'Account Prioritization Strategies', url: 'https://www.youtube.com/results?search_query=sales+territory+management+account+planning' }
      ],
      quiz: [
        { q: 'A Tier 1 account should receive:', opts: ['Minimal attention since it\'s already won', 'The most attention — protect and grow existing business', 'Only quarterly check-ins', 'Price discounts only'], correct: 1, exp: 'Tier 1 accounts drive your current revenue — protecting them while growing share is the top priority.' },
        { q: 'The best time for office calls on surgeon\'s practice staff is:', opts: ['During surgery', 'Between cases or mid-morning when traffic is lighter', 'Only by appointment', 'Early morning before clinic starts'], correct: 1, exp: 'Mid-morning between cases (9-11 AM) is often the best window — surgeons are accessible and staff less rushed.' },
        { q: 'Mako utilization rate measures:', opts: ['Number of Mako machines sold', 'Percentage of eligible cases performed with Mako vs. total cases', 'How often the robot is serviced', 'Surgeon satisfaction scores'], correct: 1, exp: 'Utilization rate = Mako cases / total possible Mako cases. Increasing this is a key growth metric.' },
        { q: 'If a competitor is dominant in an account, your first step should be:', opts: ['Give up on the account', 'Research the account deeply — find unmet needs, unconvinced surgeons, staff relationships', 'Immediately offer price matching', 'Report to your manager'], correct: 1, exp: 'Competitive accounts require research: find the weakest link, one open surgeon, or an unmet clinical need.' },
        { q: 'North Texas is considered a high-opportunity market because:', opts: ['There are no competitors', 'It is one of the fastest-growing regions in the US with large hospital systems and high procedure volume', 'Stryker gives it extra discounts', 'Surgeons there are less brand-loyal'], correct: 1, exp: 'North Texas has massive population growth, major healthcare systems, and high joint replacement volume.' }
      ]
    },
    {
      id: 'mod9',
      title: 'Hospital Credentialing 101',
      icon: '📋',
      category: 'Operations',
      duration: '30 min',
      description: 'Navigate vendor credentialing requirements — Reptrax, Vendormate, Intellicentrics — and keep your access current.',
      content: `Credentialing is non-negotiable — you cannot enter an OR without it. Major platforms: Reptrax (formerly Symplr), Vendormate (GHX), Intellicentrics (shared credentialing for Texas). Typical requirements: background check, drug screen, immunization records (flu, Hep B, MMR, TB/PPD), insurance certificate, product training certificates, HIPAA training, surgical observation training. Each hospital may add facility-specific requirements. Expirations: annual immunizations, background check (varies), insurance (annual). Set reminders 60 days before expiration. Keep digital copies of all documents. Missing credentialing = missing cases = losing business.`,
      videos: [
        { title: 'Vendor Credentialing Overview', url: 'https://www.youtube.com/results?search_query=hospital+vendor+credentialing+medical+device+rep' },
        { title: 'Reptrax/Symplr Platform Guide', url: 'https://www.youtube.com/results?search_query=reptrax+symplr+vendor+credentialing' }
      ],
      quiz: [
        { q: 'If your Reptrax profile shows "Non-Compliant," you:', opts: ['Can still enter the OR if you explain it to the nurse', 'Cannot enter the facility until compliance is restored', 'Only need to show your Stryker badge', 'Can ask your manager to get you in'], correct: 1, exp: 'Non-compliant status = no OR access. Restoring compliance must be your top priority.' },
        { q: 'Which document commonly expires annually and must be renewed for most facilities?', opts: ['Background check', 'Flu vaccine/immunization records', 'Your driver\'s license', 'Business card'], correct: 1, exp: 'Flu vaccines and many immunization records have annual renewal requirements for hospital access.' },
        { q: 'How far in advance should you set document expiration reminders?', opts: ['1 week before', 'The day they expire', '60 days before expiration', 'After they expire'], correct: 2, exp: '60 days gives you time to schedule appointments and process renewals without losing OR access.' },
        { q: 'Intellicentrics is particularly important in Texas because:', opts: ['It is the only platform in Texas', 'Many Texas health systems use it for shared vendor credentialing', 'It is mandatory by Texas law', 'Only Stryker uses it'], correct: 1, exp: 'Many Texas hospital systems participate in the Intellicentrics network for shared credentialing management.' },
        { q: 'The best practice for managing credential documents is:', opts: ['Keep paper copies only', 'Store digital copies in a secure, organized system with expiration tracking', 'Only rely on the platform to track everything', 'Ask your manager to manage them'], correct: 1, exp: 'Proactively managing your own documents — with digital backups and personal reminders — prevents lapses.' }
      ]
    },
    {
      id: 'mod10',
      title: 'Competitive Intelligence',
      icon: '🔍',
      category: 'Sales',
      duration: '40 min',
      description: 'Understand the orthopedic competitive landscape and position Stryker\'s strengths effectively.',
      content: `Key competitors in joint replacement: Zimmer Biomet, DePuy Synthes (J&J), Smith+Nephew, Exactech. Each has their own robotic platform (e.g., Rosa by Zimmer, Velys by DePuy, Cori by Smith+Nephew). Stryker differentiators: Mako has the longest market presence and most published clinical data in robotics; large instrument/implant portfolio; strong OR support reputation; Triathlon (knee) and Accolade/Trident (hip) systems. Strategy: don't disparage competitors — instead, highlight your strengths and ask questions that reveal where competitors fall short. Know which accounts use which competitors and tailor your approach. Clinical data and outcome studies are your most powerful tool.`,
      videos: [
        { title: 'How to Handle Competitive Situations in Sales', url: 'https://www.youtube.com/results?search_query=competitive+sales+strategy+medical+device' }
      ],
      quiz: [
        { q: 'When a surgeon brings up a competitor, the best response is:', opts: ['Criticize the competitor directly', 'Acknowledge their point, then ask questions and pivot to your strengths with data', 'Change the subject', 'Agree that the competitor is good too'], correct: 1, exp: 'Never disparage competitors — acknowledge, ask, and use data to highlight your differentiation.' },
        { q: 'Stryker\'s robotic platform is called:', opts: ['Rosa', 'Velys', 'Mako', 'Cori'], correct: 2, exp: 'Mako SmartRobotics is Stryker\'s proprietary robotic-arm platform for joint replacement.' },
        { q: 'The most credible tool for competitive differentiation is:', opts: ['Price discounts', 'Peer-reviewed clinical studies and outcome data', 'Surgeon testimonials only', 'Bigger instrument sets'], correct: 1, exp: 'Published clinical data is objective and credible — it\'s the foundation of evidence-based selling.' },
        { q: 'Understanding what competitor implants a surgeon uses helps you:', opts: ['Do nothing different', 'Tailor your approach, identify vulnerabilities, and target the right message', 'Avoid those surgeons', 'Match their pricing exactly'], correct: 1, exp: 'Knowing a surgeon\'s current system lets you frame your pitch around specific gaps or opportunities.' }
      ]
    }
  ],

  // ─── DAILY REPORT TEMPLATES ─────────────────────────────────────────────
  reportTemplates: [
    {
      day: 0, // Sunday
      focus: 'Weekly Planning & Reflection',
      makoHighlight: 'Mako Utilization Review: Identify your top Mako cases scheduled this week and confirm CT plans are uploaded and surgeon-reviewed. Early planning = fewer day-of disruptions.',
      marketInsight: 'Joint replacement procedure volumes in North Texas continue to outpace national averages, driven by population growth in DFW suburbs and the aging 60-75 demographic cohort.',
      territory: 'Sunday is ideal for reviewing your account list, prioritizing Tier 1 visits for the week, and preparing your weekly manager report. Which accounts need attention this week?',
      action: ['Send weekly manager report to Cody Crocker & Chanel Derr', 'Review all scheduled cases for the week', 'Update CRM with Friday follow-up notes', 'Check credentialing status for all facilities this week']
    },
    {
      day: 1, // Monday
      focus: 'Case Preparation & Weekly Launch',
      makoHighlight: 'Mako Pre-op Verification: Confirm all CT scans for this week\'s Mako cases are uploaded to the planning software. Missing scans = case delays. Be the one who catches it first.',
      marketInsight: 'Robotic-assisted joint replacement is growing at ~15% annually. Surgeons who adopt Mako early in their practice see higher patient volume from patients specifically requesting robotic surgery.',
      territory: 'North Texas has significant activity in the I-35 corridor. Target hospital systems in the Plano, Frisco, and McKinney area for Tier 2 conversion — these markets are growing rapidly.',
      action: ['Confirm case schedule for the week', 'Pre-pull instrument trays if possible', 'Send Monday morning check-in to key OR contacts', 'Update weekly targets in CRM']
    },
    {
      day: 2, // Tuesday
      focus: 'Clinical Excellence Day',
      makoHighlight: 'Mako Talk Track: "The data shows patients actively search for robotic surgery options. Surgeons with Mako in their profile see measurable increases in new patient inquiries." Use this with fence-sitters.',
      marketInsight: 'Patient awareness of robotic surgery has increased significantly post-pandemic. Consumer-facing marketing (like Stryker\'s "Make Your Move" campaign) is driving patients to ask their PCPs for Mako surgeons.',
      territory: 'Dallas-area independent surgery centers are increasingly interested in robotic capabilities. Identify any ASCs in your territory pursuing Mako installation — get involved early.',
      action: ['Cover all scheduled OR cases with precision', 'Visit one new surgeon office today', 'Follow up on any open instrument/tray issues', 'Log all OR interactions in CRM']
    },
    {
      day: 3, // Wednesday
      focus: 'Relationship Building & Pipeline',
      makoHighlight: 'Mako Conversion Strategy: Identify 1-2 high-volume surgeons in your territory who are NOT currently using Mako. Research their current case mix. Schedule a lunch-and-learn this week.',
      marketInsight: 'Health system consolidation in Texas is accelerating — knowing which independent hospitals are joining larger systems (BSW, HCA, Methodist) helps you navigate contract changes ahead of them.',
      territory: 'Wednesday is ideal for hospital admin meetings. Schedule time with OR directors, supply chain contacts, or physician relations teams to understand purchasing calendars.',
      action: ['Schedule a Mako education event', 'Connect with 2 new OR staff members', 'Update pipeline in CRM', 'Review competitor activity in top accounts']
    },
    {
      day: 4, // Thursday
      focus: 'Mako Expansion Day',
      makoHighlight: 'Clinical Data Ammunition: The published literature on Mako shows statistically significant improvements in implant positioning accuracy vs. manual technique. Have 2-3 study references ready when surgeons ask for evidence.',
      marketInsight: 'CMS and commercial payers are increasingly linking reimbursement to patient outcomes. Robotic surgery\'s documented precision improvements position it favorably in value-based care conversations.',
      territory: 'Fort Worth/Tarrant County is a strong growth area. Identify your key accounts west of I-35 and ensure you\'re getting adequate time there — don\'t let geography create gaps in coverage.',
      action: ['Drop in at a key account unannounced (after confirming OR schedule)', 'Review literature folder — add 1 new study reference', 'Follow up on any Mako trial commitments', 'Send thank-you notes to OR staff who helped this week']
    },
    {
      day: 5, // Friday
      focus: 'Admin, Follow-Up & Planning',
      makoHighlight: 'End-of-Week Mako Metric: How many Mako cases did you cover this week? What was the utilization rate at each facility? Note any friction points to discuss with your team or manager.',
      marketInsight: 'Hospital supply chain teams are focused on cost reduction. Frame your conversations around total cost of care (Mako\'s precision reduces revision rates) rather than just purchase price.',
      territory: 'Friday afternoon is excellent for surgeon office cold calls — practices are often less hectic, and a brief drop-in with lunch or snacks can open doors that cold calls cannot.',
      action: ['Complete all CRM updates for the week', 'Document case notes and outcomes', 'Draft Sunday manager report outline', 'Set goals and schedule for next week']
    },
    {
      day: 6, // Saturday
      focus: 'Professional Development Day',
      makoHighlight: 'Weekend Study: Review one Mako clinical paper or attend a Stryker online training module. Top performers in medical device sales dedicate at least 2 hours per week to product/clinical education.',
      marketInsight: 'The US orthopedic market is projected to reach $8B+ in joint replacement by 2028. North Texas, as one of the fastest-growing metro areas, represents a disproportionate share of growth.',
      territory: 'Use Saturdays to research target accounts online — hospital websites, surgeon profiles, and LinkedIn can reveal procedure volumes, specialties, and relationship networks.',
      action: ['Complete one training module or quiz', 'Research 2 new target surgeons on LinkedIn', 'Review credential expirations for next month', 'Rest and recharge for next week']
    }
  ],

  // ─── CHATBOT KNOWLEDGE BASE ──────────────────────────────────────────────
  chatKnowledge: [
    { keys: ['mako', 'robot', 'robotic'], response: 'Mako SmartRobotics uses CT-based 3D planning + a haptic-guided robotic arm to assist surgeons in joint replacement. It\'s FDA-cleared for PKA, TKA, and THA. Your role: ensure CT scans are planned before cases, support intraoperative workflow, and help grow utilization at Mako-enabled facilities. Key talk track: precision, personalized planning, and patient outcomes data.' },
    { keys: ['credential', 'credentialing', 'reptrax', 'vendormate', 'intellicentrics', 'compliance'], response: 'Hospital credentialing is mandatory for OR access. Key platforms in North Texas: Reptrax (Symplr), Vendormate, and Intellicentrics. Required documents usually include: background check, drug screen, immunization records (flu, Hep B, MMR, TB), HIPAA training, liability insurance certificate, and product training certs. Set 60-day renewal reminders and keep digital backups of all documents.' },
    { keys: ['tha', 'total hip', 'hip replacement', 'hip'], response: 'THA components: acetabular shell + liner, femoral stem, femoral head. Common approaches: posterior (most common), anterolateral, direct anterior (DAA). Your OR role: know implant sizes, have backup trays ready, track lot numbers, anticipate surgeon needs. Key metrics surgeons care about: leg length equality, cup inclination (~40°), and offset restoration.' },
    { keys: ['tka', 'total knee', 'knee replacement', 'knee'], response: 'TKA replaces femoral condyles, tibial plateau, and optionally the patella. Components: femoral component, tibial tray, poly insert, ± patellar button. CR vs PS design difference: CR retains PCL; PS uses post/cam mechanism. Your role: organize trays in order, know sizing, track trialing, document lot numbers. Goal: proper alignment along the mechanical axis with balanced gaps.' },
    { keys: ['partial knee', 'pka', 'unicompartmental', 'uni'], response: 'PKA (partial knee arthroplasty) replaces only the damaged compartment — most commonly medial. Indication: isolated compartmental OA with intact ACL. Advantages over TKA: preserves natural ligaments, less bone removal, often faster recovery. Mako is especially valuable for PKA due to the precision required for a smaller implant in a confined space.' },
    { keys: ['objection', 'objections', 'pushback', 'competing', 'competitor'], response: 'Common objections and responses: (1) "Happy with current vendor" → Acknowledge, then ask "What would ideal look like?" (2) "Mako takes too long" → Share learning curve data — times normalize quickly. (3) "Price is too high" → Pivot to total cost of care; Mako reduces revisions. (4) "Don\'t want to change" → Ask about their biggest OR frustration and tie Mako to solving it. Never badmouth competitors — use data instead.' },
    { keys: ['territory', 'dallas', 'north texas', 'dfw', 'market'], response: 'North Texas is one of the fastest-growing healthcare markets in the US. Key health systems: HCA, Baylor Scott & White, Methodist, UT Southwestern, Texas Health Resources. DFW suburbs (Plano, Frisco, McKinney, Allen, Mansfield) are high-growth targets. Tier your accounts: Tier 1 (protect), Tier 2 (grow), Tier 3 (target). Focus Mako conversations at facilities with the robot installed but underutilizing it.' },
    { keys: ['manager', 'report', 'cody', 'chanel', 'weekly report'], response: 'Your weekly manager report to Cody Crocker and Chanel Derr should include: (1) Cases covered this week + key wins, (2) New surgeon/admin contacts made, (3) Mako utilization updates, (4) Pipeline/opportunities, (5) Challenges needing support, (6) Ideas for Mako growth in the territory. Send every Sunday. Be concise, data-driven, and proactive about requesting help when needed.' },
    { keys: ['scrub tech', 'or staff', 'nurse', 'circulator', 'or etiquette'], response: 'Building strong OR staff relationships is as important as surgeon relationships. Tips: (1) Learn everyone\'s name and use it, (2) Bring food/snacks occasionally, (3) Help where appropriate without stepping on toes, (4) Respect the hierarchy, (5) Be reliable — if you say you\'ll do something, do it. The scrub tech and circulator influence surgeon preferences and your OR access.' },
    { keys: ['first 6 months', 'new rep', 'onboarding', 'success'], response: 'First 6-month blueprint: Month 1 — complete credentialing at all facilities, learn product line, shadow cases. Month 2 — begin supporting cases independently, build OR relationships. Month 3 — start independent case coverage, identify Mako growth opportunities. Month 4 — expand surgeon contacts, begin consultative sales calls. Month 5 — drive measurable territory growth. Month 6 — full territory management, performance review prep. Track every interaction in CRM.' },
    { keys: ['study', 'learn', 'training', 'module', 'quiz'], response: 'The Training Hub has 10 modules covering anatomy, Mako, THA/TKA/PKA, OR protocols, sales skills, territory management, credentialing, and competitive intelligence. Each module has quizzes to test retention. Recommended study schedule: 1 module per week minimum. Review quiz misses — those gaps will show up in real OR situations. Video resources are linked in each module.' },
    { keys: ['call', 'cold call', 'office visit', 'drop in'], response: 'Office call tips: (1) Research the practice and surgeon before going in, (2) Bring value — clinical article, product info, or lunch, (3) Build a relationship with the front desk first, (4) Keep it short — 5-10 min is ideal, (5) Always leave with a next step, (6) Friday afternoon and mid-morning (9-11 AM) are often the best windows. Log every visit in CRM immediately.' },
    { keys: ['crm', 'contact', 'track', 'log', 'notes'], response: 'Use the CRM for every surgeon, OR nurse, scrub tech, administrator, and scheduler you meet. Log: name, title, hospital, phone, email, relationship stage (cold/warm/hot/partner), last contact, next follow-up, and notes. Patterns you\'ll see over time: who responds to what, best contact times, relationship trajectory. CRM discipline separates top performers from average reps.' },
    { keys: ['anatomy', 'hip', 'knee', 'joint', 'bone'], response: 'For joint anatomy, refer to Module 1 in the Training Hub. Key points: Hip = ball-and-socket (femoral head + acetabulum), Knee = hinge joint (femoral condyles + tibial plateau + patella). OA (osteoarthritis = cartilage breakdown) is the primary indication for replacement. Understanding anatomy helps you have meaningful clinical conversations with surgeons.' },
    { keys: ['motivation', 'hard', 'tough', 'difficult', 'discouraged', 'tired'], response: 'Medical device sales is one of the most rewarding and challenging careers in healthcare. The first 6 months are the hardest — you\'re building from zero. Stay consistent: show up early, follow through on every commitment, keep learning, and track your progress. Your managers Cody and Chanel have been where you are. Use them. The reps who succeed are the ones who outwork, out-learn, and out-follow-up everyone else. You\'ve got this.' },
    { keys: ['insurance', 'liability', 'coverage'], response: 'Vendor liability insurance certificates are required for hospital credentialing. Stryker provides coverage for employees — confirm with your HR/operations team that your certificate is current and uploaded to all your credentialing platforms. Typical requirement: $1M-$2M general liability. Keep a digital copy of your current certificate.' }
  ],

  // ─── DEFAULT CREDENTIALS ─────────────────────────────────────────────────
  defaultCredentials: [
    { id: 'c1', hospital: 'Baylor Scott & White Medical Center', platform: 'Reptrax', status: 'active', expDate: '2026-11-15', docs: ['Background Check', 'Flu Vaccine', 'TB Test', 'HIPAA Training', 'Liability Insurance'], notes: 'Check in via kiosk at main entrance' },
    { id: 'c2', hospital: 'Texas Health Presbyterian', platform: 'Vendormate', status: 'expiring', expDate: '2026-04-30', docs: ['Drug Screen', 'Hep B Series', 'Product Training Cert', 'MMR Vaccine'], notes: 'Annual renewal required in April' },
    { id: 'c3', hospital: 'Methodist Dallas Medical Center', platform: 'Intellicentrics', status: 'active', expDate: '2026-09-01', docs: ['Background Check', 'Flu Vaccine', 'HIPAA Training', 'Surgical Observation Training'], notes: 'Use Intellicentrics shared profile' },
    { id: 'c4', hospital: 'Medical City Dallas', platform: 'Reptrax', status: 'pending', expDate: null, docs: ['Application Submitted', 'Background Check Pending'], notes: 'Awaiting approval — follow up with vendor credentialing office' },
    { id: 'c5', hospital: 'UT Southwestern Medical Center', platform: 'Vendormate', status: 'active', expDate: '2026-12-31', docs: ['All Documents Current'], notes: 'Academic medical center — additional protocols may apply' }
  ],

  // ─── SIX MONTH MILESTONES ────────────────────────────────────────────────
  milestones: [
    { month: 1, title: 'Foundation', color: '#FFC72C', goals: ['Complete credentialing at all assigned facilities', 'Complete all 10 training modules + quizzes', 'Shadow 10+ OR cases with senior reps', 'Introduce yourself to all OR staff contacts', 'Set up CRM with initial contact database'] },
    { month: 2, title: 'Case Support', color: '#FFD700', goals: ['Begin independent case coverage with oversight', 'Build relationships with scrub techs and circulators at top 3 accounts', 'Attend first Mako case and learn the workflow', 'Make 20+ surgeon office calls', 'Log 100% of interactions in CRM'] },
    { month: 3, title: 'Independence', color: '#f97316', goals: ['Cover cases independently', 'Identify top 5 Mako growth opportunities', 'Schedule first surgeon lunch-and-learn', 'Initiate contact with at least 2 target (competitive) accounts', 'Present first territory plan to managers'] },
    { month: 4, title: 'Growth', color: '#22c55e', goals: ['Drive measurable Mako utilization increase', 'Convert at least 1 new case from competitive account', 'Build relationships at 2+ new hospital accounts', 'Conduct surgeon education event (grand rounds, in-service)', 'Identify and document pipeline opportunities'] },
    { month: 5, title: 'Optimization', color: '#3b82f6', goals: ['Achieve 90%+ case coverage rate', 'Submit Mako growth proposal to managers', 'Train new contact on at least one product', 'Review and refine territory tiering', 'Mentor newer team members if applicable'] },
    { month: 6, title: 'Performance Review', color: '#8b5cf6', goals: ['Prepare comprehensive 6-month performance summary', 'Hit or exceed all activity KPIs', 'Present territory growth plan for next 6 months', 'Establish yourself as a trusted OR resource', 'Define 3 major goals for your second 6 months'] }
  ],

  // ─── PUBLIC STRYKER COMPANY METRICS ─────────────────────────────────────
  // Source: Stryker Corporation public investor relations, press releases, and
  // annual reports. All figures are publicly available. Verify at stryker.com/investors
  strykerPublicData: {
    lastUpdated: 'FY2024 / Q4 2024 Earnings Release (public)',
    source: 'stryker.com/en-us/investors',
    disclaimer: 'All figures sourced from publicly available Stryker investor relations materials. Verify latest figures at stryker.com/investors.',
    companyOverview: [
      { label: 'Full Year Net Sales (FY2024)',       value: '~$22.6B',   delta: '+10.1% reported', color: '#22c55e' },
      { label: 'Organic Net Sales Growth (FY2024)',  value: '~9.0%',     delta: 'vs prior year',  color: '#22c55e' },
      { label: 'MedSurg & Neurotechnology Sales',    value: '~$12.7B',   delta: 'Largest segment', color: '#3b82f6' },
      { label: 'Orthopaedics & Spine Sales',         value: '~$9.9B',    delta: '+8% organic',    color: '#FFC72C' },
      { label: 'Employees Worldwide',                value: '~52,000+',  delta: 'Global workforce',color: '#888'    },
      { label: 'Countries Operated In',              value: '75+',       delta: 'Global presence', color: '#888'    },
      { label: 'R&D Investment (FY2024)',             value: '~$1.3B',    delta: '~6% of revenue',  color: '#8b5cf6' },
      { label: 'Stryker Stock Ticker',               value: 'SYK (NYSE)', delta: '',                  color: '#FFC72C' },
    ],
    makoStats: [
      { label: 'Mako Global Installed Base',         value: '1,600+',    delta: 'Systems installed (public)',    color: '#FFC72C' },
      { label: 'Mako Procedure Growth',              value: 'Record',    delta: 'YoY growth cited in earnings', color: '#22c55e' },
      { label: 'Mako Cleared Indications',           value: '3',         delta: 'PKA · TKA · THA',              color: '#3b82f6' },
      { label: 'Mako FDA Clearance (THA)',           value: '2017',      delta: 'First robotic THA platform',   color: '#888'    },
      { label: 'Mako FDA Clearance (TKA)',           value: '2015',      delta: 'Robotic-arm TKA clearance',    color: '#888'    },
      { label: 'Mako FDA Clearance (PKA)',           value: '2006',      delta: 'Original MAKO clearance',      color: '#888'    },
    ],
    marketContext: [
      { label: 'US Joint Replacement Market Size',   value: '~$8B+',     delta: 'Projected 2026–2028',          color: '#FFC72C' },
      { label: 'Robotic TJR Segment Growth (YoY)',   value: '~15%',      delta: 'Industry analyst estimate',    color: '#22c55e' },
      { label: 'Annual US TKA Procedures',           value: '~700K+',    delta: 'AAOS public data',             color: '#3b82f6' },
      { label: 'Annual US THA Procedures',           value: '~450K+',    delta: 'AAOS public data',             color: '#3b82f6' },
      { label: 'DFW Metro Population Growth',        value: '+3.2%/yr',  delta: 'One of fastest in US (Census)',color: '#22c55e' },
      { label: 'Projected Procedure Growth (TX)',    value: 'Above avg', delta: 'Driven by DFW population boom',color: '#22c55e' },
    ]
  },

  // ─── PUBLISHED MAKO CLINICAL DATA ───────────────────────────────────────
  // All data sourced from publicly available peer-reviewed publications.
  // Use these stats in surgeon conversations. Always cite the source.
  makoClinicData: {
    disclaimer: 'Data sourced from publicly available peer-reviewed literature. Individual results vary. Always reference primary sources in clinical conversations.',
    keyStats: [
      {
        stat: 'Improved Implant Positioning Accuracy',
        value: 'Statistically Significant',
        detail: 'Multiple published studies demonstrate Mako provides statistically significant improvement in acetabular cup and tibial component positioning accuracy vs. manual technique.',
        source: 'Journal of Arthroplasty / JBJS (multiple peer-reviewed studies)',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=mako+robotic+arm+accuracy+joint+replacement',
        color: '#22c55e'
      },
      {
        stat: 'Reduced Outlier Rate in Component Placement',
        value: 'Up to 3× reduction',
        detail: 'Published data shows robotic-arm assisted TKA reduces positioning outliers (components outside target zone) by up to 3× compared to conventional instrumentation.',
        source: 'Khlopas et al., Journal of Arthroplasty (publicly available)',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=mako+robotic+knee+outlier+positioning',
        color: '#22c55e'
      },
      {
        stat: 'Mako TKA — Kinematic Alignment Precision',
        value: 'Higher reproducibility',
        detail: 'Studies show Mako enables more reproducible achievement of planned alignment targets than manual technique across both mechanical and kinematic alignment goals.',
        source: 'Marchand et al., JBJS / J Arthroplasty (public literature)',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=mako+robotic+total+knee+alignment',
        color: '#3b82f6'
      },
      {
        stat: 'Patient-Reported Outcome Improvements',
        value: 'Favors robotic in early PROs',
        detail: 'Several studies report improved early patient-reported outcomes (pain, function) and patient satisfaction for robotic-assisted vs. conventional TKA/THA at short-term follow-up.',
        source: 'Kayani et al., JBJS 2018; Multiple comparative studies (publicly available)',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=mako+robotic+patient+outcomes+satisfaction',
        color: '#FFC72C'
      },
      {
        stat: 'Mako PKA — Implant Survivorship',
        value: '>98% at 2 years (published)',
        detail: 'Published registry and cohort data show high survivorship rates for Mako-assisted partial knee replacements, supported by precise component positioning.',
        source: 'Coon et al., Knee (publicly available journal)',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=mako+partial+knee+survivorship',
        color: '#22c55e'
      },
      {
        stat: 'Operative Time — Learning Curve',
        value: 'Normalizes by ~20 cases',
        detail: 'Published learning curve analyses show operative time returns to conventional technique benchmarks within approximately 7–20 cases as surgeon and team proficiency builds.',
        source: 'Sodhi et al., J Knee Surg; Marchand et al. (publicly available)',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=mako+robotic+learning+curve+operative+time',
        color: '#f97316'
      },
      {
        stat: 'Revision Rate Comparison',
        value: 'Lower trend with robotic',
        detail: 'Registry data and comparative studies suggest a trend toward lower revision rates with robotic-assisted TKA, likely attributable to improved positioning accuracy.',
        source: 'AJRR Registry Data / Published comparative literature',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=robotic+knee+replacement+revision+rate',
        color: '#22c55e'
      },
      {
        stat: 'Surgeon Adoption Trend',
        value: 'Rapidly increasing',
        detail: 'AJRR data shows robotic-assisted joint replacement procedures growing as a percentage of total cases each year, reflecting increasing surgeon confidence and patient demand.',
        source: 'AJRR Annual Report (American Joint Replacement Registry — publicly available)',
        pubmedUrl: 'https://www.ajrr.net/publications-data/annual-reports',
        color: '#3b82f6'
      }
    ],
    talkTracks: [
      { objection: '"Mako takes too long in the OR"', response: 'Published learning curve data shows OR time normalizes within approximately 7–20 cases. Most high-volume Mako surgeons report no meaningful difference in total OR time vs. manual after the curve.' },
      { objection: '"I don\'t need a robot — I\'m already accurate"', response: 'Even experienced surgeons show variability in published studies. Mako doesn\'t replace skill — it enhances reproducibility. The data shows reduced outlier rates even for experienced surgeons.' },
      { objection: '"My patients aren\'t asking for it"', response: 'Consumer awareness of robotic surgery is growing rapidly. Published surveys show patients actively searching for robotic options, and practices marketing Mako see measurable increases in new patient inquiries.' },
      { objection: '"The data isn\'t mature enough"', response: 'Mako has been FDA-cleared since 2006 (PKA) and 2015 (TKA). There are now 10+ years of published peer-reviewed data, including registry data from the AJRR, supporting its accuracy and outcomes.' },
    ]
  }
};

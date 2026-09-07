// Curriculum data: phases and tasks. Ads Mastery Line.
// Each task = one 60 minute session. Order matters: the scheduler assigns
// pending tasks sequentially to upcoming active days.
// Free first. Paid stations are flagged and only used where the free ride
// genuinely ends.
// Thesis: paid traffic is two engines — Google (demand capture: people
// searching) and Meta/Instagram (demand creation: people scrolling). A
// media buyer who can research, launch, measure and scale on both, with
// tracking they trust, can charge any SMB for it. Zero to operator.

const PHASES = [
  {
    id: "p1",
    name: "Foundations",
    term: "short",
    goal: "How paid auctions actually work on both engines — bid, quality, context — plus the tool map, accounts, billing and the policies that ban beginners. Zero to operator vocabulary in one phase."
  },
  {
    id: "p2",
    name: "Google Search Ads",
    term: "short",
    goal: "The intent engine end to end: keywords, match types, Ad Rank and Quality Score, responsive search ads, assets. Build and diagnose your first real search campaign."
  },
  {
    id: "p3",
    name: "Beyond Search",
    term: "short",
    goal: "Display, YouTube, Shopping via Merchant Center, Demand Gen and Performance Max. Know each surface, when an SMB client needs it, and when to say no."
  },
  {
    id: "p4",
    name: "Meta Foundations",
    term: "short",
    goal: "The measurement layer before money moves: Business Manager, Meta Pixel, Events Manager, Conversions API, deduplication, iOS-era event ranking. Tracking green before the first rupee."
  },
  {
    id: "p5",
    name: "Meta Campaigns",
    term: "short",
    goal: "Ads Manager end to end: objectives, Advantage+ budget, audience and placements, bid strategies, formats. Ship a conversions campaign and read delivery like a buyer."
  },
  {
    id: "p6",
    name: "Creative Studio",
    term: "long",
    goal: "Hooks, copy frameworks, UGC-style video on a phone, Canva and CapCut, testing one variable at a time. On paid social, creative is the targeting."
  },
  {
    id: "p7",
    name: "Audiences",
    term: "long",
    goal: "Intent segments and customer lists on Google; custom, lookalike and broad on Meta; geo discipline for local clients; exclusions that stop you paying for people you already have."
  },
  {
    id: "p8",
    name: "Measurement",
    term: "long",
    goal: "The metric math, UTM discipline, conversion windows, attribution without religion, Looker Studio client dashboards, and troubleshooting both engines from raw numbers."
  },
  {
    id: "p9",
    name: "Scale & Pro Ops",
    term: "long",
    goal: "Bidding ladders, scaling rules, scripts and Editor, landing-page CRO, compliance, certifications, and the agency SOP that turns skill into revenue. Terminus: run paid for any SMB."
  }
];

const TASKS = [
  // ---------- PHASE 1: Foundations ----------
  { id: "t01", phase: "p1", type: "video", cost: "free",
    title: "How the Google Ads auction works",
    sub: "Ad Rank, not highest bid: what you pay is one rupee above the competitor below you, divided by quality. Deliverable: explain in three sentences why the top bidder does not always win, in words a client would repeat.",
    links: [{ label: "Watch: the auction explained", url: "https://www.youtube.com/results?search_query=how+the+google+ads+auction+works+official" }] },

  { id: "t02", phase: "p1", type: "video", cost: "free",
    title: "How the Meta ad auction works",
    sub: "Total value = bid + estimated action rates + quality. Meta is buying attention in a feed, Google is answering a question; the same dollar behaves differently on each. Deliverable: one notes page — what each engine rewards.",
    links: [{ label: "Watch: Meta auction mechanics", url: "https://www.youtube.com/results?search_query=how+facebook+ads+auction+works+total+value" }] },

  { id: "t03", phase: "p1", type: "video", cost: "free",
    title: "Intent vs interruption: the two-engine map",
    sub: "Search captures demand that already exists; social creates demand people did not know they had. Ben Heath's comparison is the mental model for every client conversation about where budget goes.",
    links: [{ label: "Watch: Google Ads vs Facebook Ads", url: "https://www.youtube.com/results?search_query=ben+heath+google+ads+vs+facebook+ads+which+is+better" }] },

  { id: "t04", phase: "p1", type: "docs", cost: "free",
    title: "The tool map on both platforms",
    sub: "Google: Ads, Keyword Planner, Ads Editor, Merchant Center, Skillshop. Meta: Business Suite, Business Manager, Ads Manager, Events Manager, Blueprint. Deliverable: a one-page diagram of what lives where.",
    links: [
      { label: "Open: Business Help Center", url: "https://www.facebook.com/business/help" },
      { label: "Open: Google Skillshop", url: "https://skillshop.withgoogle.com" }
    ] },

  { id: "t05", phase: "p1", type: "project", cost: "free",
    title: "Hands-on: create your Google Ads account",
    sub: "Create the account straight into Expert Mode and skip the smart campaign funnel — beginners lose months inside Smart mode without realizing. No campaign yet; just billing-ready scaffolding.",
    links: [{ label: "Open: create an account (Help)", url: "https://support.google.com/google-ads/search?q=create+google+ads+account+expert+mode" }] },

  { id: "t06", phase: "p1", type: "docs", cost: "free",
    title: "Google billing: thresholds, taxes, currencies",
    sub: "How automatic payments, thresholds and the primary payment method interact; why your currency choice is sticky and matters for INR spend on USD/AUD clients. Deliverable: your billing setup screenshotted for the ops file.",
    links: [{ label: "Open: billing basics (Help)", url: "https://support.google.com/google-ads/search?q=billing+payments+threshold" }] },

  { id: "t07", phase: "p1", type: "project", cost: "free",
    title: "Hands-on: Meta Business Manager + ad account",
    sub: "Create the Business Manager, add an ad account, connect a Page and an Instagram professional account, add yourself with full permissions. This container is what clients grant partner access to later.",
    links: [{ label: "Open: Business Manager", url: "https://business.facebook.com" },
      { label: "Open: Business Help Center", url: "https://www.facebook.com/business/help" }] },

  { id: "t08", phase: "p1", type: "docs", cost: "free",
    title: "Meta billing: payment methods and spend caps",
    sub: "Payment methods, account spending limit vs campaign daily budget, and why prepaid promotional balances behave oddly. Deliverable: set an account spend cap on the practice ad account as a seatbelt.",
    links: [{ label: "Open: billing on Meta (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t09", phase: "p1", type: "docs", cost: "free",
    title: "Google Ads policies: what gets accounts banned",
    sub: "Prohibited content, prohibited practices (circumventing systems is the account-killer), restricted categories. Deliverable: list the three policy areas most likely to touch local service businesses.",
    links: [{ label: "Open: Ads policies hub", url: "https://support.google.com/adspolicy" }] },

  { id: "t10", phase: "p1", type: "docs", cost: "free",
    title: "Meta advertising standards",
    sub: "Prohibited content, personal attributes (never call out who the user is), landing-page consistency. Deliverable: rewrite one non-compliant ad line into a compliant one and note which rule it broke.",
    links: [{ label: "Open: advertising standards", url: "https://www.facebook.com/policies/ads" }] },

  { id: "t11", phase: "p1", type: "video", cost: "free",
    title: "Operator math: CPC times CVR equals CPA",
    sub: "The funnel equations every buyer runs in their head: CPC x CVR = CPA, spend / conversions = CPA, revenue / spend = ROAS. Deliverable: solve five worked examples by hand until they are reflexes.",
    links: [{ label: "Watch: the metrics that matter", url: "https://www.youtube.com/results?search_query=google+ads+metrics+explained+cpc+ctr+cvr+cpa+roas" }] },

  { id: "t12", phase: "p1", type: "project", cost: "free",
    title: "Checkpoint: the practice business",
    sub: "Pick the business this line rides on — your own site, a friend's, or a volunteer client. Write the sandbox rules: daily budget cap, success metric, kill switches. Every later station lands on this business.",
    links: [{ label: "Open: Google Ads (login)", url: "https://ads.google.com" }] },

  // ---------- PHASE 2: Google Search Ads ----------
  { id: "t13", phase: "p2", type: "course", cost: "free",
    title: "Skillshop: Search certification, part 1",
    sub: "Google's own Search course, free, first half: how search campaigns are organized and found. Skillshop account created, progress noted. The certificate at the end is client-facing credibility.",
    links: [{ label: "Open: Google Skillshop", url: "https://skillshop.withgoogle.com" }] },

  { id: "t14", phase: "p2", type: "course", cost: "free",
    title: "Skillshop: Search certification, part 2 + exam",
    sub: "Finish the course path and sit the assessment. Pass mark is lenient; the point is the forced pass over every corner of the interface once, with a credential to pin.",
    links: [{ label: "Open: Google Skillshop", url: "https://skillshop.withgoogle.com" }] },

  { id: "t15", phase: "p2", type: "docs", cost: "free",
    title: "Account structure: campaigns, ad groups, ads",
    sub: "Campaign holds budget and settings; ad group holds one theme; ads answer that theme. The classic beginner error is one ad group stuffed with unrelated keywords. Deliverable: sketch a two-campaign structure for the practice business.",
    links: [{ label: "Open: campaign structure (Help)", url: "https://support.google.com/google-ads/search?q=campaign+ad+group+structure" }] },

  { id: "t16", phase: "p2", type: "docs", cost: "free",
    title: "Keyword match types",
    sub: "Broad, phrase, exact — what each actually matches in 2026, including close variants and smart broad matching. Deliverable: one example keyword per match type for the practice business, with the queries you expect each to catch.",
    links: [{ label: "Open: match types (Help)", url: "https://support.google.com/google-ads/search?q=keyword+match+types" }] },

  { id: "t17", phase: "p2", type: "video", cost: "free",
    title: "Negative keywords: the profit lever",
    sub: "Every rupee saved on an irrelevant click is margin. Negative keyword lists, match types for negatives, shared lists across campaigns. Deliverable: a starter negative list of 25 terms for the practice business.",
    links: [{ label: "Watch: negative keywords (Surfside PPC)", url: "https://www.youtube.com/results?search_query=surfside+ppc+negative+keywords" }] },

  { id: "t18", phase: "p2", type: "project", cost: "free",
    title: "Keyword Planner: mine and bucket 50 keywords",
    sub: "Seed with services and city names, read volumes and bid ranges, then bucket by intent: money terms, research terms, junk terms. Deliverable: the 50-row sheet with a chosen 15 to open the account with.",
    links: [{ label: "Open: Keyword Planner", url: "https://ads.google.com/home/tools/keyword-planner/" }] },

  { id: "t19", phase: "p2", type: "video", cost: "free",
    title: "Ad Rank and Quality Score decoded",
    sub: "Quality Score is the diagnostic, Ad Rank is the fight. Expected CTR, ad relevance, landing page experience — and which of the three you can actually move this week.",
    links: [{ label: "Watch: Quality Score (Ben Heath)", url: "https://www.youtube.com/results?search_query=ben+heath+quality+score+explained" }] },

  { id: "t20", phase: "p2", type: "docs", cost: "free",
    title: "Responsive search ads: 15 headlines, 4 descriptions",
    sub: "RSAs mix and match; you write parts, Google assembles. Pin only when legally required. Deliverable: a full RSA — 12+ distinct headlines covering pain, offer, proof, call — for the practice business.",
    links: [{ label: "Open: responsive search ads (Help)", url: "https://support.google.com/google-ads/search?q=responsive+search+ads" }] },

  { id: "t21", phase: "p2", type: "docs", cost: "free",
    title: "Ad assets: sitelinks, callouts, snippets, call",
    sub: "Assets add real estate and lift CTR for free. The four an SMB needs first: sitelinks, callouts, structured snippets, call asset. Deliverable: all four drafted for the practice campaign.",
    links: [{ label: "Open: assets (Help)", url: "https://support.google.com/google-ads/search?q=ad+assets" }] },

  { id: "t22", phase: "p2", type: "video", cost: "free",
    title: "Ad strength: read it, don't worship it",
    sub: "Ad strength is Google nudging you toward more mixing, not a performance metric. Watch the explainer, then note the one rule worth keeping: variety without keyword stuffing.",
    links: [{ label: "Watch: Ad strength explained", url: "https://www.youtube.com/results?search_query=google+ads+ad+strength+explained" }] },

  { id: "t23", phase: "p2", type: "project", cost: "free",
    title: "Build your first search campaign",
    sub: "Expert mode checklist: Search network only (untick Display), location = presence not interest, manual CPC with a small cap, 2 ad groups, the RSA and assets from earlier stations, negatives loaded. Pause before spend if unsure — structure first, money later.",
    links: [{ label: "Open: Google Ads", url: "https://ads.google.com" }] },

  { id: "t24", phase: "p2", type: "docs", cost: "free",
    title: "Search terms report: the weekly ritual",
    sub: "Where the money actually went, in the user's own words. Add negatives weekly, promote recurring winners to exact match. Deliverable: run the report on your first impressions and log the surprises.",
    links: [{ label: "Open: search terms (Help)", url: "https://support.google.com/google-ads/search?q=search+terms+report" }] },

  { id: "t25", phase: "p2", type: "project", cost: "free",
    title: "Checkpoint: first impressions, honest diagnosis",
    sub: "Enable CTR, average CPC, and Quality Score columns. Benchmarks: search CTR under 2 percent means relevance problems; QS under 5 means pay-more-or-fix. Deliverable: a five-line diagnosis of your own campaign, no excuses.",
    links: [{ label: "Open: Google Ads", url: "https://ads.google.com" }] },

  // ---------- PHASE 3: Beyond Search ----------
  { id: "t26", phase: "p3", type: "docs", cost: "free",
    title: "Display network anatomy",
    sub: "Millions of sites and apps, bought by Google, seen not searched. Display is remarketing-plus-branding, almost never cold conversion for SMBs. Deliverable: one paragraph on when you would and would not spend here.",
    links: [{ label: "Open: Display campaigns (Help)", url: "https://support.google.com/google-ads/search?q=display+network" }] },

  { id: "t27", phase: "p3", type: "docs", cost: "free",
    title: "Responsive display ads and image specs",
    sub: "One logo set, one image set, headlines and descriptions; Google assembles across sizes. Deliverable: an asset kit list (exact pixel sizes and file caps) your designer or Canva session can fill.",
    links: [{ label: "Open: display ad specs (Help)", url: "https://support.google.com/google-ads/search?q=responsive+display+ad+image+sizes" }] },

  { id: "t28", phase: "p3", type: "video", cost: "free",
    title: "Display without the money pit",
    sub: "Display burns budget on junk apps and AdSense farms unless you exclude them. Placement exclusions, content exclusions, bid ceilings. Deliverable: a display hygiene checklist you will reuse on every account.",
    links: [{ label: "Watch: display campaign mistakes", url: "https://www.youtube.com/results?search_query=google+display+ads+wasting+money+exclusions+placement" }] },

  { id: "t29", phase: "p3", type: "docs", cost: "free",
    title: "Video campaigns: skippable, bumper, in-feed",
    sub: "The formats and what each is for: skippable for full pitch, 6-second bumpers for recall, in-feed for intent capture. CPV mechanics instead of CPC.",
    links: [{ label: "Open: video campaigns (Help)", url: "https://support.google.com/google-ads/search?q=video+campaigns" }] },

  { id: "t30", phase: "p3", type: "project", cost: "free",
    title: "Write a 30-second YouTube ad script",
    sub: "Hook in five seconds (before the skip button arms), problem, proof, offer, call. Deliverable: a two-column script — visual and line — timed to the second, for the practice business.",
    links: [{ label: "Watch: YouTube ad script formula", url: "https://www.youtube.com/results?search_query=youtube+ad+script+5+second+hook+formula" }] },

  { id: "t31", phase: "p3", type: "docs", cost: "free",
    title: "Merchant Center: account and feed",
    sub: "Shopping runs on Merchant Center, not Ads: the product feed is the ad. Set up the account, understand feed fields and disapprovals. Only needed for clients who sell shippable products.",
    links: [{ label: "Open: Merchant Center", url: "https://merchants.google.com/" }] },

  { id: "t32", phase: "p3", type: "docs", cost: "free",
    title: "Standard Shopping campaigns",
    sub: "No keywords: you bid on products and queries follow the feed. Priority tiers, ROAS targets, feed quality as the real lever. Deliverable: note why feed title optimization is the Shopping equivalent of headline writing.",
    links: [{ label: "Open: Shopping campaigns (Help)", url: "https://support.google.com/google-ads/search?q=shopping+campaigns" }] },

  { id: "t33", phase: "p3", type: "video", cost: "free",
    title: "Performance Max, honestly explained",
    sub: "All inventory, all automation, minimal steering. Solutions 8 built their agency on PMax — take the tour of what it does well and where it leaks to brand search.",
    links: [{ label: "Watch: PMax explained (Solutions 8)", url: "https://www.youtube.com/results?search_query=solutions+8+performance+max+explained" }] },

  { id: "t34", phase: "p3", type: "docs", cost: "free",
    title: "PMax asset groups, brand controls, negatives",
    sub: "Asset groups are the campaign's real structure; brand controls and account-level negatives are your only guardrails. Deliverable: the client-conversation script for what PMax will and will not show you.",
    links: [{ label: "Open: Performance Max (Help)", url: "https://support.google.com/google-ads/search?q=performance+max" }] },

  { id: "t35", phase: "p3", type: "docs", cost: "free",
    title: "Demand Gen: the mid-funnel successor",
    sub: "Google's answer to social: YouTube, Discover, Gmail surfaces with lookalike-style segments. Where it fits between Search and PMax for an SMB budget.",
    links: [{ label: "Open: Demand Gen (Help)", url: "https://support.google.com/google-ads/search?q=demand+gen+campaigns" }] },

  { id: "t36", phase: "p3", type: "article", cost: "free",
    title: "Local Services Ads: pay per lead",
    sub: "Google screens providers and charges per lead, not per click — live in limited countries and verticals (check yours). Worth knowing even where unavailable, because competitors ask about it.",
    links: [{ label: "Open: Local Services Ads", url: "https://ads.google.com/home/local-services-ads/" }] },

  { id: "t37", phase: "p3", type: "project", cost: "free",
    title: "Checkpoint: channel plan for the practice business",
    sub: "Pick two surfaces for launch and defend the choice in notes: which intent pool, which budget floor, which success metric. Saying no to the other four with reasons is the deliverable.",
    links: [{ label: "Open: Google Ads", url: "https://ads.google.com" }] },

  // ---------- PHASE 4: Meta Foundations ----------
  { id: "t38", phase: "p4", type: "docs", cost: "free",
    title: "Meta Pixel: create and install",
    sub: "The Pixel is the browser-side listener that tells Meta who did what on the site. Create the dataset, install the base code (manual or via GTM), confirm it fires.",
    links: [{ label: "Open: Pixel get started", url: "https://developers.facebook.com/docs/meta-pixel/get-started" }] },

  { id: "t39", phase: "p4", type: "docs", cost: "free",
    title: "Events Manager: the tour",
    sub: "Datasets, event sources, the activity log. Events Manager is the cockpit for everything Meta knows about your site — learn to read it before you have to debug it.",
    links: [{ label: "Open: Events Manager (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t40", phase: "p4", type: "docs", cost: "free",
    title: "Standard, custom events and parameters",
    sub: "Nine standard events Meta understands natively; custom events and parameters for everything else. Deliverable: name the five events an SMB service business actually needs.",
    links: [{ label: "Open: Pixel reference", url: "https://developers.facebook.com/docs/meta-pixel/reference" }] },

  { id: "t41", phase: "p4", type: "video", cost: "free",
    title: "Conversions API: why pixel-only dies",
    sub: "iOS privacy changes, ad blockers, and browsers eating browser-side tracking. CAPI sends events server-to-server; the pixel becomes the fallback, not the foundation.",
    links: [{ label: "Watch: CAPI explained (Ben Heath)", url: "https://www.youtube.com/results?search_query=ben+heath+conversions+api+explained" }] },

  { id: "t42", phase: "p4", type: "docs", cost: "free",
    title: "CAPI setup paths",
    sub: "Direct code, GTM server-side, or partner integrations (Shopify, WordPress plugins, Supabase-edge DIY). For an agency without a backend team, the partner path is the honest start.",
    links: [{ label: "Open: CAPI get started", url: "https://developers.facebook.com/docs/marketing-api/conversions-api/get-started" }] },

  { id: "t43", phase: "p4", type: "docs", cost: "free",
    title: "Deduplication: event_id",
    sub: "Pixel and CAPI both firing the same purchase double-counts unless both carry the same event_id. Read the deduplication section, then check a live event stream for matching IDs — this number is what delivery optimizes against.",
    links: [{ label: "Open: CAPI docs (deduplication)", url: "https://developers.facebook.com/docs/marketing-api/conversions-api" }] },

  { id: "t44", phase: "p4", type: "docs", cost: "free",
    title: "Aggregated Event Measurement and domain verification",
    sub: "Post-iOS reality: verify the domain, rank up to eight conversion events per domain, accept delayed, aggregated reporting for iOS users. Deliverable: your event priority order for the practice business, with reasoning.",
    links: [{ label: "Open: Business Help (AEM)", url: "https://www.facebook.com/business/help" }] },

  { id: "t45", phase: "p4", type: "project", cost: "free",
    title: "Hands-on: Test Events debugger",
    sub: "Open Test Events, browse the practice site, and watch every event land with its parameters in real time. Screenshot five clean firings — this is your before-the-campaign evidence.",
    links: [{ label: "Open: Events Manager", url: "https://business.facebook.com/events_manager" }] },

  { id: "t46", phase: "p4", type: "docs", cost: "free",
    title: "GA4 to Google Ads linking",
    sub: "The bridge between engines: link GA4 to Google Ads, mark key events, import them as conversions. One source of truth for what a lead cost across platforms.",
    links: [{ label: "Open: link to Google Ads (Help)", url: "https://support.google.com/google-ads/search?q=link+google+analytics+import+conversions" }] },

  { id: "t47", phase: "p4", type: "project", cost: "free",
    title: "Google Tag Manager: first conversion tag",
    sub: "GTM is the tag layer every client site already uses. Create a container, install a conversion tag with a trigger, verify in Preview mode. Deliverable: one tag, fired and screenshotted.",
    links: [
      { label: "Open: Tag Manager", url: "https://tagmanager.google.com/" },
      { label: "Open: GTM Help", url: "https://support.google.com/tagmanager" }
    ] },

  { id: "t48", phase: "p4", type: "project", cost: "free",
    title: "Checkpoint: tracking health card",
    sub: "The pre-flight list before any Meta spend: pixel base fires, all key events verified, CAPI live with deduplication, domain verified, events ranked, GA4 importing. All green or no launch — this card becomes your agency SOP.",
    links: [{ label: "Open: Events Manager", url: "https://business.facebook.com/events_manager" }] },

  // ---------- PHASE 5: Meta Campaigns ----------
  { id: "t49", phase: "p5", type: "course", cost: "free",
    title: "Blueprint: choosing campaign objectives",
    sub: "Objectives tell the delivery system what to optimize for — and you get what you optimize for. Blueprint's free course on objectives is the foundation; traffic campaigns optimized for traffic are how beginners buy clicks that never convert.",
    links: [{ label: "Open: Meta Blueprint", url: "https://www.facebook.com/business/learn" }] },

  { id: "t50", phase: "p5", type: "docs", cost: "free",
    title: "Ads Manager: the full tour",
    sub: "Account, campaign, ad set, ad — and the columns that matter: amount spent, results, cost per result, reach, frequency. Deliverable: a labeled screenshot of your own Ads Manager for the ops file.",
    links: [{ label: "Open: Ads Manager (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t51", phase: "p5", type: "docs", cost: "free",
    title: "Advantage+ campaign budget",
    sub: "One budget at campaign level, Meta distributes across ad sets (the old CBO). When it beats ad-set budgets and when it strangles a test. Deliverable: your default choice for a two-ad-set launch, defended.",
    links: [{ label: "Open: campaign budget (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t52", phase: "p5", type: "docs", cost: "free",
    title: "Advantage+ audience vs original",
    sub: "Advantage+ audience lets Meta expand around your suggestions; original audiences pin it. The 2026 default is Advantage+ with strong exclusions — know both switches.",
    links: [{ label: "Open: Advantage+ audience (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t53", phase: "p5", type: "docs", cost: "free",
    title: "Advantage+ placements vs manual",
    sub: "Manual placements are for creative that only works on one surface; Advantage+ usually buys cheaper impressions everywhere. Deliverable: the three cases where you still go manual.",
    links: [{ label: "Open: placements (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t54", phase: "p5", type: "video", cost: "free",
    title: "Delivery: the optimization event is what you get",
    sub: "Meta finds more of whatever you told it to find — optimize for purchases and it finds purchasers; optimize for link clicks and it finds clickers. The single most expensive beginner misunderstanding on the platform.",
    links: [{ label: "Watch: optimization events (Ben Heath)", url: "https://www.youtube.com/results?search_query=ben+heath+meta+ads+optimization+event" }] },

  { id: "t55", phase: "p5", type: "docs", cost: "free",
    title: "Bid strategies: highest volume, cost cap, bid cap",
    sub: "Highest volume spends the budget unbounded; cost caps set the ceiling per result; bid caps set the price per impression-auction. When to leave the training wheels on and when to cap.",
    links: [{ label: "Open: bid strategies (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t56", phase: "p5", type: "docs", cost: "free",
    title: "Formats and specs: feed to reels",
    sub: "Single image, carousel, collection, and the vertical video that now wins the auction. Deliverable: a specs card — aspect ratios, safe zones, text caps — pinned above your desk.",
    links: [{ label: "Open: ad formats (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t57", phase: "p5", type: "project", cost: "free",
    title: "Build a conversions campaign",
    sub: "The full stack on the practice business: Sales objective, conversions optimization event from your verified pixel, Advantage+ audience with buyer exclusions, one ad set, three creatives from Canva-level assets, campaign budget at your sandbox cap.",
    links: [{ label: "Open: Ads Manager", url: "https://adsmanager.facebook.com" }] },

  { id: "t58", phase: "p5", type: "tool", cost: "free",
    title: "Meta Ad Library: competitor teardown",
    sub: "Every running ad of any advertiser, free. Pull the five longest-running ads of two competitors — longevity is the market voting for a winner. Deliverable: hook patterns and offers logged in your swipe file.",
    links: [{ label: "Open: Meta Ad Library", url: "https://www.facebook.com/ads/library/" }] },

  { id: "t59", phase: "p5", type: "video", cost: "free",
    title: "Boost post vs Ads Manager",
    sub: "The boost button is Ads Manager with two clicks and none of the controls. Understand exactly what boosting skips — pixel optimization, exclusions, placement control — so you can tell clients why it burned their money.",
    links: [{ label: "Watch: boost vs real campaign", url: "https://www.youtube.com/results?search_query=boost+post+vs+ads+manager" }] },

  { id: "t60", phase: "p5", type: "project", cost: "free",
    title: "Checkpoint: 1,000 impressions, read delivery",
    sub: "First impressions in: CPM, frequency, and whether the learning phase is collecting. Deliverable: five lines on what delivery is telling you and one change you would make — the daily review habit starts here.",
    links: [{ label: "Open: Ads Manager", url: "https://adsmanager.facebook.com" }] },

  // ---------- PHASE 6: Creative Studio ----------
  { id: "t61", phase: "p6", type: "video", cost: "free",
    title: "The three-second hook rule",
    sub: "Scroll stops in the first three seconds or never. Pattern interrupts, faces, motion, bold claims, native-looking footage. Deliverable: ten hooks for the practice business, three of which you can shoot today.",
    links: [{ label: "Watch: ad hooks that stop the scroll", url: "https://www.youtube.com/results?search_query=facebook+ads+hooks+stop+the+scroll" }] },

  { id: "t62", phase: "p6", type: "project", cost: "free",
    title: "Copy frameworks: PAS, AIDA, BAB",
    sub: "Problem-Agitate-Solve, Attention-Interest-Desire-Action, Before-After-Bridge. Write one primary text in each framework for the same offer; note which sounds most like the client's best customer.",
    links: [{ label: "Watch: ad copy frameworks", url: "https://www.youtube.com/results?search_query=ad+copy+frameworks+PAS+AIDA+examples" }] },

  { id: "t63", phase: "p6", type: "video", cost: "free",
    title: "UGC-style video with a phone",
    sub: "The winning Meta creative of this era looks like content, not commercials — filmed rough on a phone. Watch a full walkthrough, then shoot one 20-second talking-head clip for the practice business.",
    links: [{ label: "Watch: shoot UGC ads on a phone", url: "https://www.youtube.com/results?search_query=how+to+shoot+ugc+ads+with+phone+small+business" }] },

  { id: "t64", phase: "p6", type: "tool", cost: "free",
    title: "Canva: the 1:1 and 9:16 ad set",
    sub: "Free tier covers agency ad design. Set a brand kit for the practice business, export one 1080x1080 and one 1080x1920 from the same layout. Deliverable: both files in the swipe folder.",
    links: [{ label: "Open: Canva", url: "https://www.canva.com/" }] },

  { id: "t65", phase: "p6", type: "tool", cost: "free",
    title: "CapCut: a 20-second reel ad with captions",
    sub: "Cut your phone clip: trim, auto-captions, one text overlay, end card. Free tier, ten minutes of learning, every future video ad passes through it.",
    links: [{ label: "Open: CapCut", url: "https://www.capcut.com/" }] },

  { id: "t66", phase: "p6", type: "docs", cost: "free",
    title: "Meta creative best practices",
    sub: "Movement in the first seconds, safe zones for interface overlays, text limits, sound-off comprehension. Official guidance, one read, permanent checklist.",
    links: [{ label: "Open: creative guidance (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t67", phase: "p6", type: "docs", cost: "free",
    title: "Google RSA copy and keyword insertion",
    sub: "Search creative is text against intent: headlines that mirror the query, benefits not slogans, keyword insertion used once, carefully. Deliverable: rewrite your Phase 2 RSA with one CTR lesson from live data.",
    links: [{ label: "Open: keyword insertion (Help)", url: "https://support.google.com/google-ads/search?q=keyword+insertion" }] },

  { id: "t68", phase: "p6", type: "video", cost: "free",
    title: "Creative testing: one variable at a time",
    sub: "Test hooks against hooks, formats against formats — never two changes in one comparison, or you learn nothing. The post-ID testing structure buyers actually use.",
    links: [{ label: "Watch: creative testing (Ben Heath)", url: "https://www.youtube.com/results?search_query=ben+heath+creative+testing+framework" }] },

  { id: "t69", phase: "p6", type: "article", cost: "free",
    title: "Offer design for local SMBs",
    sub: "Creative sells the offer, not the business. Guarantees, urgency, bundled risk-reversal — why '10% off' dies and 'free quote in 24 hours' lives. Deliverable: three offers for the practice business, ranked.",
    links: [{ label: "Watch: offers that convert", url: "https://www.youtube.com/results?search_query=irresistible+offer+local+service+business+ads" }] },

  { id: "t70", phase: "p6", type: "project", cost: "free",
    title: "Checkpoint: ship a five-variant set",
    sub: "The full matrix for the practice business: two hooks x two formats plus one control, all from this phase's studio work. Loaded into the live campaign as the creative foundation Phase 9 will scale.",
    links: [{ label: "Open: Ads Manager", url: "https://adsmanager.facebook.com" }] },

  // ---------- PHASE 7: Audiences ----------
  { id: "t71", phase: "p7", type: "docs", cost: "free",
    title: "Google audience types",
    sub: "Affinity (lifestyle), in-market (actively shopping), custom segments (your own signal mix). Observing vs targeting — the difference between data collection and spend restriction.",
    links: [{ label: "Open: audience types (Help)", url: "https://support.google.com/google-ads/search?q=audience+targeting+types" }] },

  { id: "t72", phase: "p7", type: "docs", cost: "free",
    title: "Website visitors and Customer Match",
    sub: "RLSA: bid your site visitors differently; Customer Match: upload emails and let Google find them and lookalikes. The compliance minimums for uploading customer data, read once, followed forever.",
    links: [{ label: "Open: Customer Match (Help)", url: "https://support.google.com/google-ads/search?q=customer+match" }] },

  { id: "t73", phase: "p7", type: "docs", cost: "free",
    title: "Meta custom audiences",
    sub: "Website (pixel), app, engagement (video, IG, page, lead form), customer list. Every SMB has at least three of these already sitting unused. Deliverable: which three, for the practice business.",
    links: [{ label: "Open: custom audiences (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t74", phase: "p7", type: "docs", cost: "free",
    title: "Lookalike audiences",
    sub: "One to ten percent similarity from a source seed; smaller = closer, bigger = cheaper. In the broad-targeting era lookalikes still shine for cold starts with small seeds of real buyers.",
    links: [{ label: "Open: lookalikes (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t75", phase: "p7", type: "video", cost: "free",
    title: "The broad era: creative is the targeting",
    sub: "Advantage+ and modern delivery mean the algorithm targets; your creative decides who converts. Why buyers now spend audience time on exclusions and creative, not interest boxes.",
    links: [{ label: "Watch: broad targeting (Ben Heath)", url: "https://www.youtube.com/results?search_query=ben+heath+broad+targeting+facebook+ads" }] },

  { id: "t76", phase: "p7", type: "docs", cost: "free",
    title: "Geo discipline for local clients",
    sub: "Presence vs presence-or-interest (the setting that quietly spends your local client's money in the wrong city), radius sizing, location bid adjustments. This is the station your moving-company clients pay for.",
    links: [{ label: "Open: location targeting (Help)", url: "https://support.google.com/google-ads/search?q=location+targeting+presence" }] },

  { id: "t77", phase: "p7", type: "docs", cost: "free",
    title: "Exclusions and audience hygiene",
    sub: "Suppress recent buyers, quote-in-progress leads on Meta, converted users on Google. Paying to re-acquire someone you already have is the most common waste in SMB accounts.",
    links: [
      { label: "Open: exclusions (Meta Help)", url: "https://www.facebook.com/business/help" },
      { label: "Open: audience manager (Google Help)", url: "https://support.google.com/google-ads/search?q=audience+exclusion" }
    ] },

  { id: "t78", phase: "p7", type: "video", cost: "free",
    title: "Interests vs behaviors on Meta",
    sub: "What each signal actually is, how thin the taxonomy has become, and why stacking interests rarely beats broad plus strong creative anymore.",
    links: [{ label: "Watch: interest targeting reality", url: "https://www.youtube.com/results?search_query=facebook+ads+interest+targeting+vs+broad" }] },

  { id: "t79", phase: "p7", type: "tool", cost: "free",
    title: "Transparency Center and Ad Library sweep",
    sub: "Google's Transparency Center shows any advertiser's live formats, creatives, regions. Map two competitors end to end: surfaces, messaging, tempo of new creatives. Deliverable: the two-page intel brief.",
    links: [
      { label: "Open: Ads Transparency Center", url: "https://adstransparency.google.com/" },
      { label: "Open: Meta Ad Library", url: "https://www.facebook.com/ads/library/" }
    ] },

  { id: "t80", phase: "p7", type: "project", cost: "free",
    title: "Checkpoint: the audience map",
    sub: "One document, both engines, the practice business: every audience, its source, its use (target, observe, exclude), and refresh cadence. This artifact is reusable client scaffolding — your agency template.",
    links: [{ label: "Open: Audience Manager (Google Ads)", url: "https://ads.google.com" }] },

  // ---------- PHASE 8: Measurement ----------
  { id: "t81", phase: "p8", type: "article", cost: "free",
    title: "Metric math: CTR, CVR, CPA, ROAS, MER",
    sub: "Derive every core metric by hand from raw numbers, including MER (total revenue / total spend) — the platform-proof truth serum. Deliverable: one worked funnel for a hypothetical client with all metrics computed.",
    links: [{ label: "Watch: paid media metrics explained", url: "https://www.youtube.com/results?search_query=paid+ads+metrics+explained+cpa+roas+mer" }] },

  { id: "t82", phase: "p8", type: "tool", cost: "free",
    title: "UTM and naming discipline",
    sub: "A campaign naming convention plus strict UTMs is what makes any later analytics readable. Deliverable: the naming grammar (platform_objective_audience_date) and a UTM sheet for both practice campaigns.",
    links: [{ label: "Open: Campaign URL Builder", url: "https://ga-dev-tools.google/campaign-url-builder/" }] },

  { id: "t83", phase: "p8", type: "docs", cost: "free",
    title: "Google Ads conversion settings",
    sub: "Primary vs secondary conversions (primaries bid, secondaries report), conversion windows, values per conversion. Wrong primary = optimizing for the wrong action; this is the settings pass every account needs.",
    links: [{ label: "Open: conversion settings (Help)", url: "https://support.google.com/google-ads/search?q=conversion+primary+secondary+window" }] },

  { id: "t84", phase: "p8", type: "docs", cost: "free",
    title: "Meta attribution: 7-day click, 1-day view",
    sub: "Why Meta claims conversions Google will not, and how to compare platforms without double counting: same window, same source of truth, agreed with the client in advance.",
    links: [{ label: "Open: attribution settings (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t85", phase: "p8", type: "video", cost: "free",
    title: "Attribution: last click, data-driven, incrementality",
    sub: "Every model is a story about who gets credit; data-driven uses your account's own patterns; incrementality is the holdout-test truth. Enough theory to choose windows deliberately and explain them to a client.",
    links: [{ label: "Watch: attribution models for buyers", url: "https://www.youtube.com/results?search_query=attribution+models+data+driven+last+click+paid+ads" }] },

  { id: "t86", phase: "p8", type: "project", cost: "free",
    title: "Looker Studio: one-page client dashboard",
    sub: "Free, shareable, live: connect Google Ads and GA4 (Meta via connector), build the six-tile client view — spend, leads, CPL, trend, top campaign, one recommendation box. This page is a retainer deliverable.",
    links: [{ label: "Open: Looker Studio", url: "https://lookerstudio.google.com/" }] },

  { id: "t87", phase: "p8", type: "docs", cost: "free",
    title: "Auction Insights and saved columns",
    sub: "Auction Insights shows who you overlap with and who outranks you; custom columns combine metrics into your own KPIs. Deliverable: an overlap read on the practice campaign with one strategic note.",
    links: [{ label: "Open: Auction Insights (Help)", url: "https://support.google.com/google-ads/search?q=auction+insights" }] },

  { id: "t88", phase: "p8", type: "docs", cost: "free",
    title: "Meta reporting: breakdowns and creative reports",
    sub: "Breakdowns by age, placement, region; the creative report that ranks ads by cost per result with spend share. Deliverable: the three breakdowns you will pull every week, written into your review ritual.",
    links: [{ label: "Open: reporting (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t89", phase: "p8", type: "article", cost: "free",
    title: "Troubleshoot: the stall triage tree",
    sub: "No impressions (bid or budget or policy), impressions but no clicks (creative or relevance), clicks but no conversions (landing page or tracking or offer). Walk the tree on paper for both engines — it is the on-call skill of this trade.",
    links: [{ label: "Watch: why ads don't convert", url: "https://www.youtube.com/results?search_query=facebook+ads+not+converting+troubleshooting" }] },

  { id: "t90", phase: "p8", type: "project", cost: "free",
    title: "Checkpoint: weekly client report v1",
    sub: "One page: six numbers, one chart, one recommendation, next week's test. Built from the practice business's real data. This exact artifact, shipped weekly, is most of what an SMB client sees of your work.",
    links: [{ label: "Open: Looker Studio", url: "https://lookerstudio.google.com/" }] },

  // ---------- PHASE 9: Scale & Pro Ops ----------
  { id: "t91", phase: "p9", type: "video", cost: "free",
    title: "The bidding ladder",
    sub: "Manual CPC for control while learning, Max Clicks for volume, tCPA once conversion volume is steady, tROAS when values differ. When to climb and when climbing resets learning — the ladder every Google account climbs.",
    links: [{ label: "Watch: bidding strategies (Ben Heath)", url: "https://www.youtube.com/results?search_query=ben+heath+google+ads+bidding+strategies+explained" }] },

  { id: "t92", phase: "p9", type: "video", cost: "free",
    title: "Quality Score levers that move",
    sub: "Ad relevance moves with better ad-group tightness and copy; landing page experience with speed and message match; expected CTR follows both. Aaron Young's QS work is the definitive free treatment.",
    links: [{ label: "Watch: Quality Score (Aaron Young)", url: "https://www.youtube.com/results?search_query=aaron+young+quality+score" }] },

  { id: "t93", phase: "p9", type: "video", cost: "free",
    title: "Scaling Meta: vertical, horizontal, the 20% rule",
    sub: "Vertical = raise budgets about 20% per step to protect learning; horizontal = duplicate and widen. Why giant budget jumps reset the learning phase and quietly restart your risk.",
    links: [{ label: "Watch: scaling without reset", url: "https://www.youtube.com/results?search_query=scale+facebook+ads+20+rule+vertical+horizontal" }] },

  { id: "t94", phase: "p9", type: "docs", cost: "free",
    title: "Automated rules on both platforms",
    sub: "Budget caps, pause-on-spike, notify-on-anomaly — the cheap insurance layer. Deliverable: three rules live on the practice accounts, each with the exact trigger and action logged.",
    links: [
      { label: "Open: automated rules (Google Help)", url: "https://support.google.com/google-ads/search?q=automated+rules" },
      { label: "Open: automated rules (Meta Help)", url: "https://www.facebook.com/business/help" }
    ] },

  { id: "t95", phase: "p9", type: "docs", cost: "free",
    title: "Google Ads Scripts: your first script",
    sub: "JavaScript snippets that run on schedule inside your account — budget alerts, negative-keyword sync, QS reports. Install one of Nils Rooijmans' free scripts and schedule it weekly; read its code until it stops being magic.",
    links: [
      { label: "Open: Nils Rooijmans scripts", url: "https://nilsrooijmans.com/" },
      { label: "Open: Ads Scripts docs", url: "https://developers.google.com/google-ads/scripts" }
    ] },

  { id: "t96", phase: "p9", type: "tool", cost: "free",
    title: "Google Ads Editor: bulk operations",
    sub: "The free desktop app for mass edits: duplicate campaigns, find-replace across thousands of keywords, offline review, one push. The tool that makes multi-client work physically possible.",
    links: [{ label: "Open: Google Ads Editor", url: "https://ads.google.com/home/tools/ads-editor/" }] },

  { id: "t97", phase: "p9", type: "article", cost: "free",
    title: "Landing pages and CRO for paid traffic",
    sub: "Ad promise to page headline in one glance (message match), speed under three seconds on 4G, forms that ask as little as possible. Half of ad performance happens after the click.",
    links: [{ label: "Watch: landing page CRO basics", url: "https://www.youtube.com/results?search_query=landing+page+cro+paid+ads+basics" }] },

  { id: "t98", phase: "p9", type: "article", cost: "free",
    title: "Compliance deep-dive",
    sub: "Trademark use in ad copy and keywords, restricted verticals (credit, health, employment), Meta personal-attribute rules, data-processing minimums for customer lists. The lines that get agencies fired when crossed.",
    links: [
      { label: "Open: Google Ads policies", url: "https://support.google.com/adspolicy" },
      { label: "Open: Meta ad standards", url: "https://www.facebook.com/policies/ads" }
    ] },

  { id: "t99", phase: "p9", type: "course", cost: "paid",
    title: "Meta certification (optional, paid exam)",
    sub: "The Certified Media Buying Professional exam is the one paid credential in this line — about USD 99 to 150, discounted regularly. Free Blueprint study path first; only sit it when a client pipeline asks for paper.",
    links: [{ label: "Open: Meta certifications", url: "https://www.facebook.com/business/learn/certification" }] },

  { id: "t100", phase: "p9", type: "article", cost: "free",
    title: "Agency SOP: pricing and onboarding",
    sub: "Percentage of spend vs flat fee vs hybrid with performance bonus, and the kickoff SOP: access, tracking audit, audience map, creative plan, first-week report. Deliverable: your one-page rate card draft.",
    links: [{ label: "Watch: pricing ad management", url: "https://www.youtube.com/results?search_query=how+to+price+google+ads+management+agency" }] },

  { id: "t101", phase: "p9", type: "project", cost: "free",
    title: "Terminus capstone: 30 live days",
    sub: "Run the practice campaign for 30 real days at real budget: weekly report every week, one structured test per week, kills and scales logged, final retrospective with cost per result and three lessons. When this station completes, you run paid traffic."
  }
];

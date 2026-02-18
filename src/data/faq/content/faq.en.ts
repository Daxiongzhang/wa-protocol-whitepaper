import type { FAQContent } from '../../../types/content.types';

export const faqContent_en: FAQContent = {
    title: 'Q&A',
    subtitle: 'W/A Protocol: Executive Risk Summary & Full FAQ',
    backToHome: 'Back to Home',
    searchPlaceholder: 'Search questions or answers…',
    riskSummary: {
      title: '⚠️ Executive Risk Summary (Investment Committee)',
      items: [
        {
          label: 'What it is',
          text:
            'W/A is an all-on-chain Web4 protocol—not a company. It does not custody user assets, make discretionary decisions, or promise outcomes.'
        },
        {
          label: 'Returns profile',
          text:
            'There are no fixed, stable, or guaranteed returns. Any distribution is produced solely by predefined on-chain rules and user behavior.'
        },
        {
          label: 'Key risks',
          text:
            'Market volatility; protocol design/execution risk; user behavior and adoption risk; and regulatory/jurisdictional uncertainty.'
        },
        {
          label: 'Control & governance',
          text:
            'Core rules are immutable. There is no admin panel, no backdoor, and no “super admin” role that can override settlement.'
        },
        {
          label: 'Bottom line',
          text:
            'W/A replaces trust in people with deterministic code. Risk isn’t removed—it’s made explicit and enforced by the protocol.'
        }
      ]
    },
    disclaimer:
      '💡 For mechanism and rule explanation only. This is not a promise of returns. Parameters are subject to the on-chain contracts.',
    categories: {
      basic: 'Basics',
      revenue: 'Returns & Timing',
      organization: 'Growth & Network',
      risk: 'Risk & Trust',
      conclusion: 'Key Takeaways'
    },
    totalQuestions: 'Total {{count}} questions',
    noResults: 'No matching questions found',
    faqs: {
      basic: [
        {
          q: 'What is W/A?',
          a: 'An all-on-chain Web4 protocol that coordinates computing power and traffic, distributing value strictly through rules.'
        },
        {
          q: 'How is Web4 different from Web3?',
          a: 'Web3 secures ownership; Web4 focuses on large-scale coordination and automated execution.'
        },
        {
          q: 'What\'s the difference between WANT and XANT?',
          a: 'WANT is the ecosystem token and settlement unit. XANT is a “seed” credential used to ignite the computing engine.'
        },
        {
          q: 'Why emphasize “All-on-chain”?',
          a: 'Distribution and burns are executed on-chain—auditable, transparent, and tamper-resistant.'
        },
        {
          q: 'Is there any admin key or “super privilege”?',
          a: 'No. Core contracts run automatically and do not rely on human intervention.'
        },
        {
          q: 'What is a computing engine?',
          a: 'The basic instrument that produces WANT—effectively a credential for earning capacity.'
        },
        {
          q: 'Why does an engine need maintenance?',
          a: 'Maintenance keeps an engine active. If it\'s not maintained or it expires, it no longer qualifies for rewards.'
        },
        {
          q: 'How are maintenance fees calculated?',
          a: 'Each month, 1% of the WANT held/locked in the engine is consumed as maintenance.'
        },
        {
          q: 'What counts as “effective” computing power?',
          a: 'Only engines that are running, maintained, and not expired are counted as effective.'
        },
        {
          q: 'What is an Active Address?',
          a: 'An address that holds and runs at least one engine at or above the required tier.'
        },
        {
          q: 'Why not track registrations?',
          a: 'Registrations can be faked. Effective computing power has real cost—so the protocol measures real participation.'
        },
        {
          q: 'Is the system centrally operated?',
          a: 'No. Settlement and distribution are enforced by on-chain rules.'
        },
        {
          q: 'Is KYC required?',
          a: 'Not at the protocol level, but certain entry points may impose compliance requirements.'
        },
        {
          q: 'Can ordinary users participate?',
          a: 'Yes. You can start with smaller capacity or entry-level engines.'
        },
        {
          q: 'What\'s the difference between early and late participants?',
          a: 'Early participants build structure; later participants benefit more from efficiency and scale.'
        }
      ],
      revenue: [
        {
          q: 'Why are returns slow at the beginning?',
          a: 'Static returns follow a compounding curve (slow early, faster later). Dynamic returns typically provide earlier cash flow.'
        },
        {
          q: 'Is slow “static” a design flaw?',
          a: 'No. It\'s the nature of compounding: flat at first, amplified over time.'
        },
        {
          q: 'What counts as dynamic returns?',
          a: 'Network-growth rewards, star-tier differential rewards, and network-wide fee dividends.'
        },
        {
          q: 'Are dynamic returns paid daily?',
          a: 'Yes—so long as the network is valid and your capacity can carry the payout, settlement is daily.'
        },
        {
          q: 'Is this a pyramid scheme?',
          a: 'No. Rewards are based on effective addresses and contribution—not raw registration counts.'
        },
        {
          q: 'Why does my credited payout look low?',
          a: 'Most commonly: you hit the daily cap, or your capacity was insufficient to carry the full dynamic payout.'
        },
        {
          q: 'What is the daily dynamic cap?',
          a: 'A protocol rule that limits how much dynamic payout can be credited per day.'
        },
        {
          q: 'How is the cap calculated?',
          a: 'Daily static output × 1.5 × identity coefficient.'
        },
        {
          q: 'What is the identity coefficient?',
          a: 'A multiplier determined by the highest-tier engine you hold and actively run.'
        },
        {
          q: 'Why upgrade capacity?',
          a: 'Upgrading increases static output and raises the ceiling for how much dynamic payout you can carry.'
        },
        {
          q: 'Can I “top up” later to recover burned rewards?',
          a: 'No. This prevents after-the-fact arbitrage and keeps the rules fair.'
        },
        {
          q: 'Is “burn” the same as a loss or penalty?',
          a: 'It\'s not a manual penalty. Anything beyond your carrying capacity is automatically voided by rule.'
        },
        {
          q: 'Will burn increase over time?',
          a: 'It can—especially if network growth outpaces your capacity upgrades.'
        },
        {
          q: 'How do I reduce burn?',
          a: 'Upgrade capacity in step with network growth, keep engines active, and watch for cap prompts/alerts.'
        },
        {
          q: 'Can I focus on dynamic rewards only?',
          a: 'Yes, but a blended approach is typically more resilient long-term.'
        },
        {
          q: 'Can I focus on static rewards only?',
          a: 'Yes, but growth is slower and you may miss the leverage from dynamic rewards.'
        },
        {
          q: 'When does reinvestment make sense?',
          a: 'When your capacity is still small and the network is in a growth phase.'
        },
        {
          q: 'When does withdrawal make sense?',
          a: 'When it fits your personal cash-flow needs and risk preference.'
        },
        {
          q: 'Does the protocol encourage long-term holding?',
          a: 'Rules are generally friendlier to long-term participants, but nothing is mandatory.'
        },
        {
          q: 'Are returns stable?',
          a: 'No returns are promised. Outcomes depend on the rules and participant behavior.'
        }
      ],
      organization: [
        {
          q: 'What is the “20-generation network” cap?',
          a: 'The protocol only counts effective network depth up to 20 generations below an account.'
        },
        {
          q: 'Why cap the depth?',
          a: 'To prevent unlimited rank differentials from accumulating and destabilizing incentives.'
        },
        {
          q: 'What’s the benefit of building multiple lines?',
          a: 'It reduces single-line risk and improves your chances of reaching higher star tiers and capturing rank differentials.'
        },
        {
          q: 'What is a rank differential?',
          a: 'A rule-based allocation of the reward gap between different star tiers.'
        },
        {
          q: 'Is there a peer (same-rank) bonus?',
          a: 'If enabled by contract rules, it is typically limited to a small number of generations (often one).'
        },
        {
          q: 'What is “reverse-order” distribution?',
          a: 'A reward mechanism that distributes payouts in reverse order according to the on-chain rules.'
        },
        {
          q: 'How do I qualify for a star tier?',
          a: 'You must meet requirements on effective addresses, performance, and your own capacity.'
        },
        {
          q: 'Is a higher star tier always better?',
          a: 'Higher tiers come with higher responsibility and higher capacity requirements.'
        },
        {
          q: 'Do I have to do offline outreach?',
          a: 'Not necessarily. Online channels, content, and community growth can all work.'
        },
        {
          q: 'What is the Tier-1 (T1) engine for?',
          a: 'To lower the onboarding barrier and improve conversion for new users.'
        },
        {
          q: 'Can T1 be farmed?',
          a: 'It is designed to be costly to farm by keeping returns low and the cycle short.'
        },
        {
          q: 'How is an “effective direct referral” determined?',
          a: 'Whether the referred account actually runs an engine and becomes an effective address.'
        },
        {
          q: 'Can I gift engines to downlines?',
          a: 'Yes—so long as it stays within the protocol’s capacity/carrying rules.'
        },
        {
          q: 'Does a bigger organization automatically mean more profit?',
          a: 'Only if you upgrade your own capacity in step. Otherwise, excess rewards may be burned/voided.'
        },
        {
          q: 'Does a bigger network mean bigger pressure?',
          a: 'Yes. The responsibility to carry dynamic payouts grows with your network.'
        },
        {
          q: 'What matters most in growth?',
          a: 'Structure first, capacity second, scale last.'
        },
        {
          q: 'Do late joiners still have a chance?',
          a: 'Yes. In later phases, conversion efficiency can be higher.'
        },
        {
          q: 'Who has the advantage—whales or small players?',
          a: 'Whales have capital; smaller players often win on execution.'
        },
        {
          q: 'Does this work across regions?',
          a: 'Yes. An all-on-chain system is geography-agnostic.'
        },
        {
          q: 'Is there an official script/messaging guide?',
          a: 'Follow official disclosures and any academy guidelines.'
        },
        {
          q: 'Are there team subsidies?',
          a: 'If any, they are determined by incentive-pool rules and announcements.'
        },
        {
          q: 'How are rankings calculated?',
          a: 'They are computed automatically from on-chain data.'
        },
        {
          q: 'Where do incentives come from?',
          a: 'From a dedicated incentive pool; they do not reduce the main output.'
        },
        {
          q: 'How do you prevent cheating?',
          a: 'Through fund-correlation analysis, capacity verification, and on-chain traceability.'
        },
        {
          q: 'Where does burned WANT go?',
          a: 'It is burned on-chain by rule and does not go to any individual account.'
        }
      ],
      risk: [
        { q: 'Is the burn verifiable on-chain?', a: 'Yes. It is transparent and auditable on-chain.' },
        { q: 'How does the project benefit?', a: 'Through ecosystem growth and market share—not by hoarding tokens.' },
        { q: 'Can the rules be changed secretly?', a: 'Core rules are immutable once on-chain; changes must follow defined governance paths.' },
        { q: 'Can parameters be adjusted?', a: 'Only through governance or predetermined upgrade paths.' },
        { q: 'Is there rug-pull risk?', a: 'The design reduces human intervention risk, but it cannot remove market risk.' },
        { q: 'Has the contract been audited?', a: 'Refer to official disclosures.' },
        { q: 'Who sets the token price?', a: 'The market—supply and demand.' },
        { q: 'Will the team “control the price”?', a: 'The protocol does not promise or control prices.' },
        { q: 'Why have caps?', a: 'To protect system stability and prevent extreme behavior from breaking incentives.' },
        { q: 'Do caps limit earnings?', a: 'They limit overload payouts that exceed your carrying capacity.' },
        { q: 'What happens without caps?', a: 'It may feel good short-term, but it tends to collapse long-term.' },
        { q: 'Is there governance voting?', a: 'It will open when the governance module goes live.' },
        { q: 'Are the rules the same for everyone?', a: 'Yes. The rules are applied consistently.' },
        { q: 'Can settlement be manually overridden?', a: 'No. Settlement is rule-based and not dependent on manual operations.' },
        { q: 'Are withdrawals restricted?', a: 'They follow protocol rules and available liquidity conditions.' },
        { q: 'Why are there transaction fees?', a: 'To fund operations, incentives, and risk controls.' },
        { q: 'Is fee distribution transparent?', a: 'Yes. Distribution is rule-based and verifiable on-chain.' },
        { q: 'Can funds be misappropriated?', a: 'Core fund flows are executed by contracts under predefined rules.' },
        { q: 'How far can the protocol go?', a: 'It depends on rule execution and participant behavior.' },
        { q: 'Is failure possible?', a: 'Yes. Any market system carries risk.' },
        { q: 'Do you encourage rational participation?', a: 'Yes. The rules themselves are the risk disclosure.' },
        { q: 'Is this suitable for everyone?', a: 'No. It’s only suitable for people who understand the rules.' },
        { q: 'Why not promise the future?', a: 'Because outcomes are determined by the rules—not by promises.' },
        { q: 'One-sentence summary?', a: 'Replace promises with rules—and replace imagination with execution.' }
      ],
      conclusion: [
        { q: 'One core principle?', a: 'Network drives output; capacity determines what you can carry.' },
        { q: 'Core value?', a: 'Transparent rules and deterministic execution.' },
        { q: 'The most common mistake?', a: 'Growing the network without upgrading capacity.' },
        { q: 'The most stable strategy?', a: 'Static reinvestment + dynamic expansion.' },
        { q: 'When should you stop?', a: 'When you don’t understand the rules.' },
        { q: 'When should you accelerate?', a: 'When your capacity upgrades are ahead of your network growth.' },
        { q: 'What does the system dislike?', a: 'Speculation—and after-the-fact “fixes.”' },
        { q: 'What does the system reward?', a: 'Planning ahead and consistent execution.' },
        { q: 'What are you actually “selling”?', a: 'A set of executable rules—not a token narrative.' },
        { q: 'Evening chat summary?', a: 'No promises about the future—only rule execution.' },
        { q: 'What is W/A like?', a: 'An economic operating system that runs automatically.' },
        { q: 'What is a participant’s role?', a: 'To execute the rules—not to demand outcomes.' },
        { q: 'Where is long-termism?', a: 'The rules compress short-term thrills and reward long-term discipline.' },
        { q: 'What if someone hesitates?', a: 'It usually means they’re not ready to understand the rules yet.' },
        { q: 'Who makes the final call?', a: 'You do.' }
      ]
    }
};

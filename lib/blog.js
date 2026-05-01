/**
 * Blog post data — long-form content for SEO and lead nurturing.
 * Each entry generates a page at /[locale]/blog/[slug]
 *
 * Body is structured as an array of section objects so we can render
 * consistent typography without ever passing raw HTML to dangerouslySetInnerHTML.
 */

export const posts = [
  {
    slug: 'how-much-do-removals-cost-in-lisbon',
    publishedAt: '2026-04-01',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80',
    en: {
      title: 'How Much Do Removals Cost in Lisbon? A 2026 Guide',
      metaTitle: 'How Much Do Removals Cost in Lisbon? Complete 2026 Guide',
      metaDescription: 'Wondering what a removal company in Lisbon charges? We break down typical costs by property size, distance, and service type — with real examples.',
      excerpt: 'A clear, honest guide to what you can expect to pay for a removal in Lisbon — what affects the price, where companies sneak in fees, and how to compare quotes.',
      sections: [
        {
          heading: 'The honest answer first',
          body: 'There is no single price for a removal in Lisbon — and any company that quotes you over the phone without asking questions is either very cheap (and probably bad) or about to add charges later. The real price depends on five things: how much stuff you have, how far it\'s going, how easy the access is at both ends, what services you want included, and what time of year it is.',
        },
        {
          heading: 'What affects the price',
          body: 'Volume matters most. A studio apartment with a single van load is at one end of the scale; a four-bedroom villa with a full pack-and-unpack service is at the other. Distance is the second factor — moves within Lisbon are quick, while a Lisbon-to-Algarve move involves fuel, tolls, and a full day of crew time. Access is the third: a ground-floor apartment with parking outside takes a fraction of the time of a fifth-floor walk-up in Bairro Alto. Services are the fourth — packing alone can easily double a basic removal cost. Timing is the last: weekends, end-of-month, and summer are peak demand and prices reflect it.',
        },
        {
          heading: 'Typical price ranges',
          body: 'For a small apartment move within central Lisbon, expect quotes in the lower hundreds of euros. A two-bedroom move within Greater Lisbon typically lands in the mid-hundreds. Long-distance moves to Porto or the Algarve are usually a four-figure quote, and full international removals start higher again and depend heavily on volume. These are ballparks — every move is different and we always quote based on photos and a phone call.',
        },
        {
          heading: 'Watch for these hidden charges',
          body: 'Some companies advertise low headline rates and then add: stair surcharges (every flight beyond the first), packing material fees billed by the box, fuel and toll surcharges added at the end, weekend or evening surcharges, and minimum hour charges that round small jobs up significantly. Always ask "is this the total price?" before booking, and get the quote in writing.',
        },
        {
          heading: 'How to get a fair quote',
          body: 'Take a video walk-through of every room and send it. Mention the floor, whether there\'s a lift, and what parking access is like. Be honest about volume — overpacking quotes lead to undersized vans on the day. Get at least three quotes and compare like-for-like. The cheapest is rarely the best; the most expensive isn\'t always either.',
        },
      ],
      keywords: 'removal costs Lisbon, moving prices Lisbon, how much does it cost to move in Lisbon, removal quotes Lisbon',
    },
    pt: {
      title: 'Quanto Custa uma Mudança em Lisboa? Guia 2026',
      metaTitle: 'Quanto Custa uma Mudança em Lisboa? Guia Completo 2026',
      metaDescription: 'Quer saber quanto cobra uma empresa de mudanças em Lisboa? Explicamos os custos típicos por tamanho de casa, distância e tipo de serviço — com exemplos reais.',
      excerpt: 'Um guia claro e honesto sobre o que esperar pagar por uma mudança em Lisboa — o que afeta o preço, onde as empresas escondem taxas, e como comparar orçamentos.',
      sections: [
        {
          heading: 'A resposta honesta primeiro',
          body: 'Não há um preço único para uma mudança em Lisboa — e qualquer empresa que lhe dê um orçamento por telefone sem fazer perguntas é ou muito barata (e provavelmente má) ou está prestes a acrescentar taxas mais tarde. O preço real depende de cinco coisas: quanto tem, para onde vai, qual o acesso nas duas pontas, que serviços quer incluídos, e em que altura do ano é.',
        },
        {
          heading: 'O que afeta o preço',
          body: 'O volume é o que mais conta. Um estúdio com uma só carga de carrinha está numa ponta; uma moradia de quatro quartos com embalagem e desembalagem completa está na outra. A distância é o segundo fator — mudanças em Lisboa são rápidas, enquanto uma mudança Lisboa-Algarve envolve combustível, portagens, e um dia completo de equipa. O acesso é o terceiro: um rés-do-chão com estacionamento à frente leva uma fração do tempo de um quinto andar sem elevador no Bairro Alto. Os serviços são o quarto — a embalagem sozinha pode facilmente duplicar o custo de uma mudança básica. O timing é o último: fins de semana, fim de mês, e verão são de procura alta e os preços refletem isso.',
        },
        {
          heading: 'Faixas típicas de preço',
          body: 'Para uma mudança de pequeno apartamento no centro de Lisboa, espere orçamentos nas centenas baixas de euros. Uma mudança de T2 dentro da Grande Lisboa fica geralmente na média das centenas. Mudanças de longa distância para o Porto ou Algarve são geralmente orçamentos de quatro dígitos, e mudanças internacionais completas começam mais alto e dependem muito do volume. Estes são valores aproximados — cada mudança é diferente e damos sempre orçamento com base em fotos e numa chamada.',
        },
        {
          heading: 'Atenção a estas taxas escondidas',
          body: 'Algumas empresas anunciam preços baixos e depois acrescentam: sobretaxas de escadas (cada andar a partir do primeiro), taxas de material de embalagem cobradas por caixa, sobretaxas de combustível e portagens no final, sobretaxas de fim de semana ou noite, e mínimos de horas que arredondam significativamente trabalhos pequenos. Pergunte sempre "isto é o preço total?" antes de marcar, e peça o orçamento por escrito.',
        },
        {
          heading: 'Como obter um orçamento justo',
          body: 'Faça um vídeo a percorrer cada divisão e envie. Mencione o andar, se há elevador, e como é o acesso ao estacionamento. Seja honesto quanto ao volume — orçamentos com volume subdimensionado levam a carrinhas pequenas demais no dia. Peça pelo menos três orçamentos e compare iguais. O mais barato raramente é o melhor; o mais caro também nem sempre.',
        },
      ],
      keywords: 'custo mudanças Lisboa, preços mudanças Lisboa, quanto custa mudar em Lisboa, orçamentos mudanças Lisboa',
    },
  },
  {
    slug: 'best-time-to-move-in-portugal',
    publishedAt: '2026-04-08',
    image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1600&q=80',
    en: {
      title: 'When Is the Best Time to Move in Portugal?',
      metaTitle: 'Best Time of Year to Move in Portugal | Removals Lisbon',
      metaDescription: 'When is the best month to move in Portugal? We cover seasonal pricing, weather, demand, and the smart timing strategy for your removal.',
      excerpt: 'Timing your move can save you significant money and stress. Here\'s how the seasons, demand cycles, and Portuguese weather should shape your moving plan.',
      sections: [
        {
          heading: 'The cheapest months — and why',
          body: 'November to February are the cheapest months to move in Portugal. Demand drops sharply after the summer ends and the start-of-academic-year rush in September. Companies are happier to negotiate, weekday slots open up, and you can often get a good crew on short notice. The trade-off: it rains, especially in Lisbon and the north, and you need to plan for protecting belongings during loading.',
        },
        {
          heading: 'The most expensive months',
          body: 'June, July, and August are peak season. Expat families relocate before the school year, holiday-home owners rotate stays, students prepare for university, and the weather is reliable. Demand is high and so are prices. If you must move in summer, book at least six weeks ahead — earlier for the last weekend of any month.',
        },
        {
          heading: 'Avoid the end of the month',
          body: 'Across the entire year, the last weekend of every month is the busiest. Rental contracts in Portugal commonly start on the 1st, which pushes everyone to move on the 30th or 31st. If you have any flexibility, moving mid-month can shave significantly off your quote and gives you crews that aren\'t exhausted from a back-to-back week.',
        },
        {
          heading: 'Weekday vs weekend',
          body: 'Tuesday, Wednesday, and Thursday are the cheapest days of the week. Friday and Monday are intermediate. Saturday is the most expensive. Sunday is rarely available outside emergencies. Move midweek if you can take a day off — it\'s often cheaper than the difference in salary lost.',
        },
        {
          heading: 'The smart timing strategy',
          body: 'Aim for a Tuesday-to-Thursday in mid-November, late January, or mid-February. You\'ll save 20-30% versus a peak-season weekend, get a well-rested crew, and have your pick of slots. Just keep an eye on the weather forecast and have plastic sheeting on standby.',
        },
      ],
      keywords: 'best time to move Portugal, when to move Lisbon, moving season Portugal, cheap moving days Lisbon',
    },
    pt: {
      title: 'Qual a Melhor Altura para Mudar de Casa em Portugal?',
      metaTitle: 'Melhor Altura do Ano para Mudar em Portugal | Removals Lisbon',
      metaDescription: 'Qual o melhor mês para mudar de casa em Portugal? Explicamos preços sazonais, tempo, procura, e a estratégia inteligente para a sua mudança.',
      excerpt: 'Cronometrar a sua mudança pode poupar-lhe dinheiro e stress significativos. Eis como as estações, ciclos de procura e o tempo português devem moldar o seu plano de mudança.',
      sections: [
        {
          heading: 'Os meses mais baratos — e porquê',
          body: 'Novembro a fevereiro são os meses mais baratos para mudar de casa em Portugal. A procura cai fortemente após o fim do verão e a corrida do início do ano letivo em setembro. As empresas estão mais dispostas a negociar, abrem-se janelas de dias úteis, e consegue muitas vezes uma boa equipa em cima da hora. A contrapartida: chove, especialmente em Lisboa e no norte, e tem de planear a proteção dos bens durante a carga.',
        },
        {
          heading: 'Os meses mais caros',
          body: 'Junho, julho e agosto são a época alta. Famílias expatriadas mudam-se antes do ano letivo, donos de casas de férias rodam estadias, estudantes preparam-se para a universidade, e o tempo é fiável. A procura é alta e os preços também. Se tem mesmo de mudar no verão, reserve pelo menos com seis semanas de antecedência — mais cedo para o último fim de semana de qualquer mês.',
        },
        {
          heading: 'Evite o fim do mês',
          body: 'Em todo o ano, o último fim de semana de cada mês é o mais ocupado. Os contratos de arrendamento em Portugal começam normalmente no dia 1, o que empurra toda a gente para mudar no dia 30 ou 31. Se tem alguma flexibilidade, mudar a meio do mês pode reduzir significativamente o seu orçamento e dá-lhe equipas que não estão exaustas de uma semana enchente.',
        },
        {
          heading: 'Dias úteis vs fim de semana',
          body: 'Terça, quarta e quinta-feira são os dias mais baratos da semana. Sexta e segunda são intermédios. Sábado é o mais caro. Domingo raramente está disponível fora de emergências. Mude a meio da semana se puder tirar um dia de folga — muitas vezes é mais barato do que a diferença no salário perdido.',
        },
        {
          heading: 'A estratégia inteligente de timing',
          body: 'Aponte para uma terça a quinta-feira em meados de novembro, fim de janeiro ou meados de fevereiro. Vai poupar 20-30% comparado com um fim de semana de época alta, terá uma equipa descansada, e terá a escolha de horários. Só fique de olho na previsão do tempo e tenha plástico de proteção à mão.',
        },
      ],
      keywords: 'melhor altura mudar Portugal, quando mudar Lisboa, época mudanças Portugal, dias baratos mudanças Lisboa',
    },
  },
  {
    slug: 'lisbon-to-porto-moving-guide',
    publishedAt: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1555881400-69a4ce0eccc6?w=1600&q=80',
    en: {
      title: 'Moving from Lisbon to Porto: A Complete Guide',
      metaTitle: 'Moving from Lisbon to Porto: Complete Guide | Removals Lisbon',
      metaDescription: 'Everything you need to know about moving from Lisbon to Porto — costs, timing, neighbourhoods, what to expect on the journey, and how to plan.',
      excerpt: 'Thinking of moving from Lisbon to Porto? Here\'s the practical guide we wish we\'d had — covering routes, neighbourhoods, costs, and what to plan ahead.',
      sections: [
        {
          heading: 'Two cities, one country, very different rhythms',
          body: 'Lisbon and Porto are both Portuguese — but they feel like different countries on different days. Lisbon is sunnier, more international, more expensive, more chaotic. Porto is rainier, more compact, more traditionally Portuguese, more affordable. People who move from one to the other usually find both the change and the contrast easier than expected, but it does help to know what you\'re walking into.',
        },
        {
          heading: 'Choosing a Porto neighbourhood',
          body: 'If you liked Alfama in Lisbon, you\'ll probably like Ribeira or Sé in Porto — historic, atmospheric, narrow. If you preferred Príncipe Real, look at Foz do Douro or Boavista — leafy, residential, well-served. If you\'re young and want nightlife, the Cedofeita and Galerias de Paris area is your equivalent of Bairro Alto. If you have a family and want space, the Antas or Bonfim areas have larger apartments at better prices.',
        },
        {
          heading: 'The journey itself',
          body: 'The A1 motorway runs the entire length of the route. It\'s about 310 km and takes between three and a half and four hours depending on traffic and stops. Tolls add up to roughly €25 in a passenger car. The motorway is in good condition, has plenty of services for breaks, and is the best route by far compared to the older national roads.',
        },
        {
          heading: 'Logistics: what changes when you cross to Porto',
          body: 'You don\'t need to update your fiscal address with the AT immediately, but you should within 60 days. Update your electoral registration with your new freguesia. If you\'re registered with a Lisbon family doctor, you\'ll need to transfer to a Porto centro de saúde. Driving licence and citizen card don\'t need updating. Banks just need a phone call.',
        },
        {
          heading: 'A move done well takes one day',
          body: 'For most apartment-sized moves, Lisbon to Porto fits comfortably into a single day. We load between 8 and 10am in Lisbon, drive up the A1, and unload in Porto by 4 or 5pm. For larger family moves with packing, two days is more realistic. Booking with a company that runs the route regularly (like us) gets you a more efficient, better-priced move than going with someone unfamiliar.',
        },
      ],
      keywords: 'moving Lisbon to Porto, Lisbon to Porto guide, relocate Lisbon to Porto, Porto neighbourhoods, Lisbon vs Porto',
    },
    pt: {
      title: 'Mudar de Lisboa para o Porto: Guia Completo',
      metaTitle: 'Mudar de Lisboa para o Porto: Guia Completo | Removals Lisbon',
      metaDescription: 'Tudo o que precisa saber sobre mudar-se de Lisboa para o Porto — custos, timing, bairros, o que esperar da viagem, e como planear.',
      excerpt: 'A pensar mudar-se de Lisboa para o Porto? Eis o guia prático que gostávamos de ter tido — cobrindo rotas, bairros, custos, e o que planear com antecedência.',
      sections: [
        {
          heading: 'Duas cidades, um país, ritmos muito diferentes',
          body: 'Lisboa e Porto são ambas portuguesas — mas parecem países diferentes em dias diferentes. Lisboa é mais soalheira, mais internacional, mais cara, mais caótica. O Porto é mais chuvoso, mais compacto, mais tradicionalmente português, mais acessível. Quem se muda de uma para a outra costuma achar tanto a mudança como o contraste mais fáceis do que esperado, mas ajuda saber o que o espera.',
        },
        {
          heading: 'Escolher um bairro no Porto',
          body: 'Se gostou de Alfama em Lisboa, provavelmente vai gostar da Ribeira ou Sé no Porto — históricas, atmosféricas, estreitas. Se preferiu o Príncipe Real, veja a Foz do Douro ou Boavista — arborizados, residenciais, bem servidos. Se é jovem e quer vida noturna, a zona da Cedofeita e Galerias de Paris é o seu equivalente ao Bairro Alto. Se tem família e quer espaço, as Antas ou Bonfim têm apartamentos maiores a melhores preços.',
        },
        {
          heading: 'A viagem em si',
          body: 'A autoestrada A1 percorre todo o trajeto. São cerca de 310 km e leva entre três horas e meia e quatro dependendo do trânsito e paragens. As portagens somam cerca de €25 num carro ligeiro. A autoestrada está em bom estado, tem muitas áreas de serviço para pausas, e é de longe o melhor percurso comparado com as antigas estradas nacionais.',
        },
        {
          heading: 'Logística: o que muda ao mudar para o Porto',
          body: 'Não precisa de atualizar a morada fiscal na AT imediatamente, mas deve fazê-lo em 60 dias. Atualize o recenseamento eleitoral na nova freguesia. Se está inscrito num médico de família em Lisboa, precisa de transferir para um centro de saúde no Porto. Carta de condução e cartão de cidadão não precisam de atualização. Bancos precisam só de uma chamada.',
        },
        {
          heading: 'Uma mudança bem feita leva um dia',
          body: 'Para a maioria das mudanças de apartamento, Lisboa-Porto cabe confortavelmente num só dia. Carregamos entre as 8 e 10h em Lisboa, conduzimos pela A1, e descarregamos no Porto até às 16 ou 17h. Para mudanças familiares maiores com embalagem, dois dias é mais realista. Reservar com uma empresa que faz a rota regularmente (como nós) garante uma mudança mais eficiente e melhor preço do que alguém não familiarizado.',
        },
      ],
      keywords: 'mudar Lisboa para o Porto, guia mudança Lisboa Porto, relocar Lisboa Porto, bairros Porto, Lisboa vs Porto',
    },
  },
  {
    slug: 'how-to-dispose-of-old-mattress-lisbon',
    publishedAt: '2026-04-22',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80',
    en: {
      title: 'How to Dispose of an Old Mattress in Lisbon',
      metaTitle: 'How to Dispose of an Old Mattress in Lisbon | 4 Options',
      metaDescription: 'Got an old mattress to dispose of in Lisbon? Here are your four options — municipal collection, ecocentro, charity, or removal service. Pros and cons of each.',
      excerpt: 'You can\'t put a mattress in your normal bin, and you can\'t leave it on the street. Here are the four legitimate ways to dispose of one in Lisbon.',
      sections: [
        {
          heading: 'Why this is harder than it should be',
          body: 'A mattress is one of the most awkward household items to dispose of. It doesn\'t fit in a car, it can\'t go in the standard recycling, and leaving it on the kerb earns a fine. Lisbon has options, but each comes with caveats. Here are the four that actually work.',
        },
        {
          heading: 'Option 1: Municipal "monstros" collection',
          body: 'Câmara Municipal de Lisboa runs a free collection service called Recolha de Monstros for bulky household items. You book online or by phone (call 21 800 2435), and they collect on a scheduled day. Pros: free. Cons: waitlists can be one to three weeks, you have to leave the mattress on the street the night before (which means trouble if it rains), and rules vary by parish about exactly where to leave it.',
        },
        {
          heading: 'Option 2: Take it to an ecocentro',
          body: 'The Lisbon municipal ecocentros (recycling centres) accept mattresses if you bring them yourself. Closest options for most residents are the Olivais, Beato, or Lumiar ecocentros. Pros: same-day, free. Cons: you need a vehicle large enough to fit the mattress, you need to physically do it, and opening hours don\'t always suit working schedules.',
        },
        {
          heading: 'Option 3: Charity or social project',
          body: 'If your mattress is in genuinely good condition (no stains, no sag, less than five years old, with covers), some charities will accept it. ReFood and Operação Cisne occasionally collect, and Cáritas Diocesana sometimes redistributes for housing emergencies. Pros: your mattress goes to good use. Cons: most charities won\'t take used mattresses on hygiene grounds, and quality requirements are strict.',
        },
        {
          heading: 'Option 4: Use a removal service',
          body: 'For a fee, a removal company (like us) will come to your apartment, carry the mattress down — even from the fifth floor without a lift — and dispose of it correctly. Pros: no lifting, no waiting, no vehicle, no rain risk. Cons: not free. This is the right option if you\'re elderly, the mattress is in an awkward location, you don\'t have a car, or you simply don\'t have time to deal with the alternatives.',
        },
        {
          heading: 'Whatever you do, don\'t fly-tip',
          body: 'Leaving a mattress next to the bins or on a quiet street is illegal and gets a fine of up to several hundred euros if traced. Lisbon has cameras in many areas. Use one of the four options above instead.',
        },
      ],
      keywords: 'mattress disposal Lisbon, how to dispose of mattress Lisbon, monstros Lisboa, mattress recycling Lisbon, get rid of mattress Lisbon',
    },
    pt: {
      title: 'Como Eliminar um Colchão Velho em Lisboa',
      metaTitle: 'Como Eliminar um Colchão Velho em Lisboa | 4 Opções',
      metaDescription: 'Tem um colchão velho para deitar fora em Lisboa? Eis as quatro opções — recolha municipal, ecocentro, solidariedade, ou serviço de remoção. Vantagens e desvantagens.',
      excerpt: 'Não pode pôr um colchão no caixote normal, nem deixá-lo na rua. Eis as quatro formas legítimas de o eliminar em Lisboa.',
      sections: [
        {
          heading: 'Porque é mais difícil do que devia ser',
          body: 'Um colchão é um dos itens domésticos mais difíceis de deitar fora. Não cabe num carro, não vai para a reciclagem normal, e deixá-lo no passeio dá multa. Lisboa tem opções, mas cada uma com ressalvas. Eis as quatro que realmente funcionam.',
        },
        {
          heading: 'Opção 1: Recolha municipal de "monstros"',
          body: 'A Câmara Municipal de Lisboa tem um serviço gratuito chamado Recolha de Monstros para itens domésticos volumosos. Marca online ou por telefone (21 800 2435), e fazem a recolha num dia agendado. Vantagens: gratuito. Desvantagens: as listas de espera podem ser de uma a três semanas, tem de deixar o colchão na rua na noite anterior (problema se chover), e as regras variam por freguesia sobre exatamente onde deixar.',
        },
        {
          heading: 'Opção 2: Levar a um ecocentro',
          body: 'Os ecocentros municipais de Lisboa aceitam colchões se os levar lá. As opções mais próximas para a maioria dos residentes são os ecocentros dos Olivais, Beato ou Lumiar. Vantagens: no próprio dia, gratuito. Desvantagens: precisa de veículo grande o suficiente para o colchão, tem de o fazer fisicamente, e os horários nem sempre se adequam a horários de trabalho.',
        },
        {
          heading: 'Opção 3: Solidariedade ou projeto social',
          body: 'Se o colchão está em condição genuinamente boa (sem manchas, sem afundamento, menos de cinco anos, com proteção), algumas instituições aceitam-no. A ReFood e a Operação Cisne ocasionalmente recolhem, e a Cáritas Diocesana redistribui por vezes para emergências habitacionais. Vantagens: o seu colchão vai para bom uso. Desvantagens: a maioria das instituições não aceita colchões usados por motivos de higiene, e os requisitos de qualidade são rigorosos.',
        },
        {
          heading: 'Opção 4: Usar um serviço de remoção',
          body: 'Por um valor, uma empresa de mudanças (como nós) vai a sua casa, desce o colchão — mesmo do quinto andar sem elevador — e elimina-o corretamente. Vantagens: sem levantar pesos, sem esperar, sem veículo, sem risco de chuva. Desvantagens: não é gratuito. É a opção certa se for idoso, o colchão está em local complicado, não tem carro, ou simplesmente não tem tempo para lidar com as alternativas.',
        },
        {
          heading: 'Faça o que fizer, não despeje na rua',
          body: 'Deixar um colchão ao lado dos contentores ou numa rua sossegada é ilegal e dá multa até várias centenas de euros se for identificado. Lisboa tem câmaras em muitas zonas. Use uma das quatro opções acima.',
        },
      ],
      keywords: 'eliminar colchão Lisboa, como deitar fora colchão Lisboa, monstros Lisboa, reciclagem colchões Lisboa, livrar-se colchão Lisboa',
    },
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(locale) {
  return posts.map((p) => ({
    slug: p.slug,
    publishedAt: p.publishedAt,
    image: p.image,
    title: p[locale].title,
    excerpt: p[locale].excerpt,
  }));
}

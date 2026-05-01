/**
 * Service data for individual service landing pages.
 * Each entry generates a page at /[locale]/services/[slug]
 *
 * Order matters — this is the order services appear in the homepage,
 * services index, and navbar dropdown.
 */

export const services = [
  // ─── 1. House & Apartment Removals ─────────────────────────────────────
  {
    slug: 'house-moving',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
    en: {
      name: 'House & Apartment Removals',
      title: 'House & Apartment Removals in Lisbon',
      metaTitle: 'House & Apartment Removals in Lisbon | Removals Lisbon',
      metaDescription: 'Full-service house and apartment moving across Lisbon. Studios in Bairro Alto to family homes in Cascais. English-speaking, fully insured. Free quote.',
      lead: 'Moving house is one of life\'s most stressful events. Our job is to make sure yours isn\'t. Whether you\'re relocating across the street in Alfama or moving from a flat in Chiado to a family home in Cascais, we handle every part of your move with the care it deserves.',
      sections: [
        {
          title: 'What\'s included in our house moving service',
          body: 'Every house and apartment move in Lisbon includes door-to-door transport in our fully insured vans, careful loading and unloading by our trained team, protective blankets and straps for furniture, basic furniture disassembly and reassembly (beds, tables, wardrobes), and same-day completion for most local moves. We arrive on time with the right vehicle for the job — from a small van for a studio to a 7-tonne lorry for a four-bedroom house.',
        },
        {
          title: 'Lisbon\'s narrow streets, our specialty',
          body: 'Anyone who\'s tried to move in Lisbon knows the challenges: narrow medieval streets in Alfama, no parking in Bairro Alto, four-floor walk-ups in Graça, fragile wooden staircases in Príncipe Real. We do this every day. We know which streets need a smaller van, which buildings need a parking permit, and where the nearest loading bay is in every neighborhood. We\'ll do a free site visit before any bigger move so there are no surprises on the day.',
        },
        {
          title: 'Packing services available',
          body: 'Don\'t want to spend a weekend wrapping plates in newspaper? Add our packing service and our team will arrive the day before with all materials — boxes, bubble wrap, tape, blankets — and pack everything for you. We can also unpack at the other end and remove all the empty boxes.',
        },
        {
          title: 'Moving to Lisbon from abroad',
          body: 'Relocating to Lisbon from another part of Portugal or from abroad? We coordinate with international removal companies and handle the Lisbon side of your move — receiving deliveries, navigating local logistics, and getting your belongings safely into your new home.',
        },
      ],
      keywords: 'house moving Lisbon, apartment removals Lisbon, house removals Lisbon, residential moving Portugal, English-speaking movers Lisbon',
    },
    pt: {
      name: 'Mudanças de Casa e Apartamento',
      title: 'Mudanças de Casa e Apartamento em Lisboa',
      metaTitle: 'Mudanças de Casa e Apartamento em Lisboa | Removals Lisbon',
      metaDescription: 'Serviço completo de mudanças de casa e apartamento em Lisboa. Estúdios no Bairro Alto a moradias em Cascais. Equipa bilingue, totalmente segurada.',
      lead: 'Mudar de casa é considerado um dos eventos mais stressantes da vida. O nosso trabalho é garantir que a sua não o seja. Quer esteja a mudar-se ao virar da esquina em Alfama ou de um apartamento no Chiado para uma moradia familiar em Cascais, tratamos de cada detalhe da sua mudança com o cuidado que merece.',
      sections: [
        {
          title: 'O que está incluído no nosso serviço de mudanças',
          body: 'Cada mudança de casa ou apartamento em Lisboa inclui transporte porta a porta em carrinhas totalmente seguradas, carregamento e descarregamento cuidadoso pela nossa equipa formada, mantas e cintas de proteção para móveis, desmontagem e montagem básica de mobiliário (camas, mesas, roupeiros), e conclusão no mesmo dia para a maioria das mudanças locais. Chegamos a horas com o veículo certo — de uma carrinha pequena para um estúdio a um camião de 7 toneladas para uma moradia T4.',
        },
        {
          title: 'As ruas estreitas de Lisboa são a nossa especialidade',
          body: 'Quem já tentou mudar-se em Lisboa conhece os desafios: ruas medievais estreitas em Alfama, ausência de estacionamento no Bairro Alto, prédios sem elevador na Graça, escadas de madeira frágeis no Príncipe Real. Fazemos isto todos os dias. Sabemos que ruas precisam de uma carrinha mais pequena, que prédios precisam de licença de estacionamento, e onde fica a zona de cargas e descargas mais próxima em cada bairro. Fazemos uma visita técnica gratuita antes de mudanças maiores para que não haja surpresas no dia.',
        },
        {
          title: 'Serviço de embalagem disponível',
          body: 'Não quer passar um fim de semana a embrulhar pratos em jornal? Acrescente o nosso serviço de embalagem e a nossa equipa chega no dia anterior com todo o material — caixas, plástico bolha, fita-cola, mantas — e embala tudo por si. Também podemos desembalar no destino e levar todas as caixas vazias.',
        },
        {
          title: 'A mudar-se para Lisboa do estrangeiro',
          body: 'A relocar-se para Lisboa de outra parte de Portugal ou do estrangeiro? Coordenamos com empresas internacionais de mudanças e tratamos do lado lisboeta da sua mudança — receber entregas, navegar a logística local, e levar os seus pertences em segurança para a sua nova casa.',
        },
      ],
      keywords: 'mudanças de casa Lisboa, mudanças de apartamento Lisboa, mudanças residenciais Lisboa, empresa de mudanças Lisboa, mudanças domésticas Portugal',
    },
  },

  // ─── 2. Long-Distance Moves ────────────────────────────────────────────
  {
    slug: 'long-distance-moves',
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1600&q=80',
    en: {
      name: 'Long-Distance Moves',
      title: 'Long-Distance Moves Across Portugal',
      metaTitle: 'Lisbon to Porto, Algarve & More | Long-Distance Removals Portugal',
      metaDescription: 'Long-distance moving from Lisbon to Porto, Algarve, Coimbra, Braga, or anywhere in Portugal. Fixed pricing, fully insured, English-speaking team.',
      lead: 'Moving from Lisbon to a different part of Portugal is a much bigger undertaking than a local move. There\'s the distance, the planning, the worry about whether your belongings will arrive intact. We do long-distance moves from Lisbon every week — to Porto, the Algarve, Coimbra, Braga, Évora, Setúbal, and everywhere in between. Same trained team, same fully insured vans, same care from start to finish.',
      sections: [
        {
          title: 'How long-distance moves work',
          body: 'For most long-distance moves we complete the job in a single day with one of our larger lorries. We arrive in Lisbon in the morning, load carefully, and drive directly to your destination — no warehouse stops, no transferring between vehicles. For very large moves (4+ bedroom houses) we may use two vehicles or split the move across two days. We give you a fixed price quote before the move so you know exactly what you\'re paying.',
        },
        {
          title: 'Routes we cover',
          body: 'We move customers from Lisbon to anywhere in mainland Portugal. The most common routes are: Lisbon to Porto (around 3 hours), Lisbon to the Algarve — Faro, Lagos, Albufeira (around 3 hours), Lisbon to Coimbra (around 2 hours), Lisbon to Braga, Aveiro, Évora, and Setúbal. We also coordinate moves to and from the islands (Madeira and the Azores) via shipping partners.',
        },
        {
          title: 'What\'s included',
          body: 'Long-distance moves include door-to-door transport, full furniture protection, fuel and tolls, our trained team to load and unload, and full insurance for your belongings during transit. There are no hidden costs.',
        },
        {
          title: 'Planning your long-distance move',
          body: 'Long-distance moves benefit from extra planning. We recommend booking at least 2-3 weeks in advance during peak season (May to September). We\'ll do a video call or site visit to assess your inventory, give you a fixed quote, and lock in the date.',
        },
      ],
      keywords: 'Lisbon to Porto move, long distance removals Portugal, Lisbon to Algarve movers, intercity moving Portugal, mudanças Lisboa Porto',
    },
    pt: {
      name: 'Mudanças de Longa Distância',
      title: 'Mudanças de Longa Distância em Portugal',
      metaTitle: 'Mudanças Lisboa-Porto, Algarve e mais | Mudanças Longa Distância',
      metaDescription: 'Mudanças de longa distância de Lisboa para o Porto, Algarve, Coimbra, Braga ou qualquer lugar de Portugal. Preço fixo, totalmente seguradas, equipa bilingue.',
      lead: 'Mudar-se de Lisboa para outra parte de Portugal é um trabalho muito maior do que uma mudança local. Há a distância, o planeamento, a preocupação se os seus pertences chegarão intactos. Fazemos mudanças de longa distância a partir de Lisboa todas as semanas — para o Porto, Algarve, Coimbra, Braga, Évora, Setúbal e tudo o que está pelo meio. A mesma equipa formada, as mesmas carrinhas totalmente seguradas, o mesmo cuidado do início ao fim.',
      sections: [
        {
          title: 'Como funcionam as mudanças de longa distância',
          body: 'Para a maioria das mudanças de longa distância concluímos o trabalho num único dia com um dos nossos camiões maiores. Chegamos a Lisboa de manhã, carregamos com cuidado, e conduzimos diretamente para o seu destino — sem paragens em armazém, sem transferências entre veículos. Para mudanças muito grandes (casas T4+) podemos usar dois veículos ou dividir a mudança por dois dias. Damos-lhe um orçamento de preço fixo antes da mudança.',
        },
        {
          title: 'Rotas que cobrimos',
          body: 'Fazemos mudanças de Lisboa para qualquer parte do Portugal continental. As rotas mais comuns são: Lisboa-Porto (cerca de 3 horas), Lisboa-Algarve — Faro, Lagos, Albufeira (cerca de 3 horas), Lisboa-Coimbra (cerca de 2 horas), Lisboa-Braga, Aveiro, Évora e Setúbal. Também coordenamos mudanças de e para as ilhas (Madeira e Açores) através de parceiros de transporte marítimo.',
        },
        {
          title: 'O que está incluído',
          body: 'As mudanças de longa distância incluem transporte porta a porta, proteção total do mobiliário, combustível e portagens, a nossa equipa formada para carregar e descarregar, e seguro completo para os seus pertences durante o transporte. Não há custos escondidos.',
        },
        {
          title: 'Planear a sua mudança de longa distância',
          body: 'Mudanças de longa distância beneficiam de mais planeamento. Recomendamos reservar com pelo menos 2-3 semanas de antecedência durante a época alta (maio a setembro). Faremos uma videochamada ou visita técnica para avaliar o seu inventário, dar-lhe um orçamento fixo, e fixar a data.',
        },
      ],
      keywords: 'mudanças Lisboa Porto, mudanças longa distância Portugal, mudanças Lisboa Algarve, mudanças intercidades Portugal',
    },
  },

  // ─── 3. Furniture & Mattress Disposal ──────────────────────────────────
  {
    slug: 'furniture-mattress-disposal',
    icon: 'Sofa',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80',
    en: {
      name: 'Furniture & Mattress Disposal',
      title: 'Furniture & Mattress Disposal in Lisbon',
      metaTitle: 'Furniture & Mattress Disposal in Lisbon | Removals Lisbon',
      metaDescription: 'Old sofa, mattress, wardrobe or bulky furniture you can\'t get rid of? We collect, transport, and responsibly dispose of unwanted furniture across Lisbon.',
      lead: 'That sofa you\'ve been meaning to get rid of for months. The mattress propped against a wall. The wardrobe that doesn\'t fit in the new place. Lisbon makes furniture disposal hard — the câmara collection is unreliable and the ecocentros won\'t take household pieces without a vehicle. We collect old furniture and mattresses from anywhere in Lisbon, take them from any floor (including walk-ups), and dispose of them responsibly.',
      sections: [
        {
          title: 'What we remove',
          body: 'Sofas, armchairs, beds and mattresses (all sizes), wardrobes, chests of drawers, dining tables, desks, office chairs, bookshelves, kitchen units, garden furniture, large electrical items (fridges, washing machines, dishwashers, ovens) and TVs. If it\'s too big to put in a bin bag, we\'ll take it. For multiple items, we can bring a larger van and clear an entire room or apartment in a single visit.',
        },
        {
          title: 'How collection works',
          body: 'Send us a photo and a postcode. We give you a flat fee for collection — no hidden costs. We arrive at the scheduled time, carry everything down (no matter how many flights of stairs), and load it into our van. Most collections take 15-30 minutes. You don\'t have to lift a thing.',
        },
        {
          title: 'Responsible disposal',
          body: 'We don\'t fly-tip. Items in good condition are donated to local Lisbon charities and reuse centers. Items that can be recycled — wood, metal, electronics, mattresses — go to licensed recycling facilities. Mattresses in particular are sent to dedicated recycling: less than 5% of what comes out ends up in landfill, compared to 100% if you put it on the street.',
        },
        {
          title: 'Tenants moving out, end of tenancy clearance',
          body: 'Landlord requiring the property emptied? End of tenancy? Estate clearance? We do these all the time. We can clear an entire apartment of furniture and belongings in a single visit, leaving the place empty for the next tenant. We provide receipts and waste-handling documentation if your landlord or letting agent requires them.',
        },
      ],
      keywords: 'furniture removal Lisbon, mattress disposal Lisbon, old furniture collection Lisbon, sofa removal Lisbon, bulky waste removal Lisbon',
    },
    pt: {
      name: 'Remoção de Móveis e Colchões',
      title: 'Remoção de Móveis e Colchões em Lisboa',
      metaTitle: 'Remoção de Móveis e Colchões em Lisboa | Removals Lisbon',
      metaDescription: 'Sofá velho, colchão, roupeiro ou móveis volumosos que não consegue deitar fora? Recolhemos, transportamos e eliminamos mobiliário em Lisboa.',
      lead: 'Aquele sofá que tem andado a tentar deitar fora há meses. O colchão encostado a uma parede. O roupeiro que não cabe na casa nova. Lisboa torna a eliminação de móveis difícil — a recolha da câmara é pouco fiável e os ecocentros não aceitam peças domésticas sem veículo. Recolhemos móveis e colchões velhos em qualquer parte de Lisboa, levamo-los de qualquer andar (incluindo prédios sem elevador), e eliminamo-los de forma responsável.',
      sections: [
        {
          title: 'O que removemos',
          body: 'Sofás, poltronas, camas e colchões (todos os tamanhos), roupeiros, cómodas, mesas de jantar, secretárias, cadeiras de escritório, estantes, módulos de cozinha, mobiliário de jardim, eletrodomésticos grandes (frigoríficos, máquinas de lavar, máquinas de loiça, fornos) e televisões. Se é demasiado grande para um saco de lixo, levamos. Para vários itens, podemos trazer uma carrinha maior e esvaziar uma divisão ou apartamento inteiro numa única visita.',
        },
        {
          title: 'Como funciona a recolha',
          body: 'Envie-nos uma fotografia e o código postal. Damos-lhe um preço fixo para a recolha — sem custos escondidos. Chegamos à hora marcada, levamos tudo para baixo (sejam quantos forem os lances de escadas), e carregamos para a nossa carrinha. A maioria das recolhas demora 15-30 minutos. Não precisa de levantar nada.',
        },
        {
          title: 'Eliminação responsável',
          body: 'Não despejamos ilegalmente. Itens em bom estado são doados a instituições de caridade locais em Lisboa e centros de reutilização. Itens que podem ser reciclados — madeira, metal, eletrónica, colchões — vão para instalações de reciclagem licenciadas. Os colchões em particular são enviados para reciclagem dedicada: menos de 5% acaba em aterro, comparado com 100% se deixar na rua.',
        },
        {
          title: 'Inquilinos a sair, despejo de fim de arrendamento',
          body: 'Senhorio a exigir a propriedade esvaziada? Fim de arrendamento? Despejo de herança? Fazemos isto frequentemente. Podemos esvaziar um apartamento inteiro de móveis e pertences numa única visita, deixando o local vazio para o próximo inquilino. Fornecemos recibos e documentação de tratamento de resíduos se o seu senhorio ou agência imobiliária os exigir.',
        },
      ],
      keywords: 'remoção de móveis Lisboa, remoção de colchões Lisboa, recolha de mobiliário velho Lisboa, recolha de sofás Lisboa, eliminação de móveis Lisboa',
    },
  },

  // ─── 4. Junk & Clutter Clearance ───────────────────────────────────────
  {
    slug: 'junk-clearance',
    icon: 'Trash2',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    en: {
      name: 'Junk & Clutter Clearance',
      title: 'Junk Removal & House Clearance in Lisbon',
      metaTitle: 'Junk Removal Lisbon | House Clearance & Rubbish Disposal',
      metaDescription: 'Junk removal, house clearance, and rubbish disposal in Lisbon. Garage clear-outs, post-renovation debris, attic and basement clearance. Responsibly disposed.',
      lead: 'Sometimes you don\'t need a moving company — you need someone to make a pile of stuff disappear. Whether it\'s a garage you haven\'t opened in five years, the aftermath of a renovation, the contents of a deceased relative\'s home, or just the accumulated clutter of years living in the same place — we clear it all out. Single visit. Sorted, donated, recycled, disposed of properly.',
      sections: [
        {
          title: 'Types of clearance we do',
          body: 'Garage clearance — old tools, broken garden furniture, accumulated boxes. Attic and basement clearance — decades of stored items. Post-renovation clearance — building debris, old kitchen units, ripped-up flooring. Estate clearance — sensitive work for families dealing with a deceased relative\'s belongings. End of tenancy clearance — emptying an apartment for the next tenant. General decluttering — when you just want it all gone.',
        },
        {
          title: 'How a clearance works',
          body: 'Send us photos or video of what needs clearing. We give you a quote based on volume — typically a fraction, half, or full van load. We arrive on the day with the right vehicle and team, sort the items into "donate," "recycle," and "dispose," carry everything out, and leave the space clean. Most clearances take a single visit lasting 1-4 hours.',
        },
        {
          title: 'What we sort and donate',
          body: 'Useful items in good condition — clothes, books, working appliances, useable furniture, tools — are sorted and donated to local Lisbon charities and reuse centers. Recyclable items are separated and taken to licensed recycling facilities. Only what genuinely can\'t be saved goes to waste — and that goes through licensed waste handlers, not flytipped on the street.',
        },
        {
          title: 'Sensitive clearances',
          body: 'Estate clearance after a death is emotionally difficult. We do these with care, working at your pace, setting aside any items you want to keep, and handling personal effects respectfully. We can also work with executors and lawyers if you can\'t be present.',
        },
      ],
      keywords: 'junk removal Lisbon, house clearance Lisbon, rubbish removal Lisbon, garage clearance Lisbon, estate clearance Lisbon, post-renovation cleanup Lisbon',
    },
    pt: {
      name: 'Remoção de Entulho e Limpeza de Casa',
      title: 'Remoção de Entulho e Limpeza de Casa em Lisboa',
      metaTitle: 'Remoção de Entulho Lisboa | Limpeza de Casas e Despejo',
      metaDescription: 'Remoção de entulho, limpeza de casas e despejo em Lisboa. Limpeza de garagens, entulho pós-obra, sótãos e caves. Eliminação responsável.',
      lead: 'Por vezes não precisa de uma empresa de mudanças — precisa de alguém para fazer uma pilha de coisas desaparecer. Seja uma garagem que não abriu há cinco anos, as consequências de uma obra, o conteúdo da casa de um familiar falecido, ou apenas a desarrumação acumulada de anos a viver no mesmo sítio — esvaziamos tudo. Numa única visita. Separado, doado, reciclado, eliminado corretamente.',
      sections: [
        {
          title: 'Tipos de limpeza que fazemos',
          body: 'Limpeza de garagens — ferramentas velhas, mobiliário de jardim partido, caixas acumuladas. Limpeza de sótãos e caves — décadas de itens armazenados. Limpeza pós-obra — entulho de construção, módulos de cozinha velhos, pavimentos arrancados. Despejo de heranças — trabalho sensível para famílias a tratar dos pertences de um familiar falecido. Despejo de fim de arrendamento — esvaziar um apartamento para o próximo inquilino. Desarrumação geral — quando só quer que tudo desapareça.',
        },
        {
          title: 'Como funciona uma limpeza',
          body: 'Envie-nos fotografias ou vídeo do que precisa de ser despejado. Damos-lhe um orçamento baseado no volume — normalmente uma fração, metade, ou uma carrinha cheia. Chegamos no dia com o veículo e equipa certos, separamos os itens em "doar", "reciclar" e "eliminar", levamos tudo, e deixamos o espaço limpo. A maioria das limpezas demora uma única visita de 1 a 4 horas.',
        },
        {
          title: 'O que separamos e doamos',
          body: 'Itens úteis em bom estado — roupas, livros, eletrodomésticos a funcionar, mobiliário utilizável, ferramentas — são separados e doados a instituições de caridade e centros de reutilização em Lisboa. Itens recicláveis são separados e levados para instalações de reciclagem licenciadas. Apenas o que genuinamente não pode ser salvo vai para resíduos — através de operadores licenciados, não despejado na rua.',
        },
        {
          title: 'Limpezas sensíveis',
          body: 'Limpeza de heranças após uma morte é emocionalmente difícil. Fazemos estas com cuidado, trabalhando ao seu ritmo, separando quaisquer itens que queira manter, e tratando dos pertences pessoais com respeito. Também podemos trabalhar com cabeças de casal e advogados se não puder estar presente.',
        },
      ],
      keywords: 'remoção de entulho Lisboa, limpeza de casas Lisboa, remoção de lixo Lisboa, limpeza de garagens Lisboa, despejo heranças Lisboa, limpeza pós obra Lisboa',
    },
  },

  // ─── 5. Office Relocation ──────────────────────────────────────────────
  {
    slug: 'office-relocation',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    en: {
      name: 'Office Relocation',
      title: 'Office & Business Relocation in Lisbon',
      metaTitle: 'Office Relocation Lisbon | Commercial Moving & Business Removals',
      metaDescription: 'Professional office relocation in Lisbon. Minimal downtime, evening and weekend moves. From single offices to multi-floor headquarters.',
      lead: 'When a business moves, every hour of downtime costs money. Our office relocation service is built around that reality. We work evenings, weekends, and overnight when needed. We coordinate with your IT team. We label everything so it ends up in the right room at the new office. By Monday morning, your team is back at their desks and working.',
      sections: [
        {
          title: 'Office moves we handle',
          body: 'We handle office relocations of every size — from a small startup with a dozen desks to multi-floor headquarters with hundreds of staff. Common moves include startups upgrading from coworking to private offices in Marquês de Pombal or Avenida da Liberdade, established businesses moving to modern spaces in Parque das Nações, and companies expanding across multiple floors in central Lisbon.',
        },
        {
          title: 'IT and technology handling',
          body: 'Office moves involve much more than furniture. We carefully disconnect, label, transport, and reconnect IT equipment — desktops, monitors, servers, printers, network gear. We coordinate with your IT team on timing and can sequence the move so critical systems are offline for the shortest possible window. Heavy server room moves are handled by specialists.',
        },
        {
          title: 'Out-of-hours moves',
          body: 'Our standard recommendation for office moves is Friday evening to Sunday — load on Friday night, transport over the weekend, unload Sunday so your team starts Monday at the new location. We can also do single-night moves for smaller offices, or sequenced floor-by-floor moves to keep operations running.',
        },
        {
          title: 'What we provide',
          body: 'Free site visit and detailed quote, dedicated project manager for your move, professional crates and trolleys (no cardboard boxes for office moves), labeling system so everything ends up in the right place, furniture disassembly and reassembly, full insurance, and post-move waste removal.',
        },
      ],
      keywords: 'office relocation Lisbon, commercial moving Lisbon, business removals Portugal, office movers Lisbon, corporate relocation Lisbon',
    },
    pt: {
      name: 'Mudanças de Escritório',
      title: 'Mudanças de Escritório e Empresas em Lisboa',
      metaTitle: 'Mudanças de Escritório Lisboa | Empresa de Mudanças Comerciais',
      metaDescription: 'Mudanças profissionais de escritório em Lisboa. Tempo de inatividade mínimo, mudanças noturnas e ao fim de semana. Pequenos escritórios a sedes corporativas.',
      lead: 'Quando uma empresa se muda, cada hora de inatividade custa dinheiro. O nosso serviço de mudanças de escritório foi construído em torno dessa realidade. Trabalhamos à noite, ao fim de semana, e durante a madrugada quando necessário. Coordenamos com a sua equipa de TI. Etiquetamos tudo para que chegue à sala certa no novo escritório. Na segunda-feira de manhã, a sua equipa está de volta às secretárias e a trabalhar.',
      sections: [
        {
          title: 'Mudanças de escritório que tratamos',
          body: 'Tratamos de mudanças de escritório de todos os tamanhos — desde uma pequena startup com uma dúzia de secretárias a sedes de vários andares com centenas de funcionários. Mudanças comuns incluem startups a saírem de coworking para escritórios privados no Marquês de Pombal ou Avenida da Liberdade, empresas estabelecidas a mudarem-se para espaços modernos no Parque das Nações, e empresas em expansão em vários andares no centro de Lisboa.',
        },
        {
          title: 'Equipamento informático',
          body: 'As mudanças de escritório envolvem muito mais do que mobiliário. Desconectamos, etiquetamos, transportamos e reconectamos cuidadosamente o equipamento informático — computadores, monitores, servidores, impressoras, equipamento de rede. Coordenamos com a sua equipa de TI quanto ao timing e podemos sequenciar a mudança para que os sistemas críticos fiquem offline pelo menor período possível.',
        },
        {
          title: 'Mudanças fora de horário',
          body: 'A nossa recomendação padrão para mudanças de escritório é sexta à noite a domingo — carregar na sexta à noite, transportar durante o fim de semana, descarregar no domingo para que a sua equipa comece segunda-feira no novo local. Também podemos fazer mudanças numa única noite para escritórios mais pequenos, ou mudanças sequenciadas piso a piso.',
        },
        {
          title: 'O que oferecemos',
          body: 'Visita técnica grátis e orçamento detalhado, gestor de projeto dedicado, contentores e carrinhos profissionais (sem caixas de cartão para mudanças de escritório), sistema de etiquetagem para que tudo chegue ao sítio certo, desmontagem e montagem de mobiliário, seguro completo, e remoção de resíduos pós-mudança.',
        },
      ],
      keywords: 'mudanças de escritório Lisboa, mudanças comerciais Lisboa, mudanças empresariais Portugal, mudanças corporativas Lisboa',
    },
  },

  // ─── 6. Man with a Van ─────────────────────────────────────────────────
  {
    slug: 'man-with-a-van',
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=1600&q=80',
    en: {
      name: 'Man with a Van',
      title: 'Man with a Van Lisbon',
      metaTitle: 'Man with a Van Lisbon | Small Moves & Single-Item Delivery',
      metaDescription: 'Flexible man with a van service in Lisbon. Single items, small moves, IKEA pickups, Marketplace collections. Hourly rate, English-speaking.',
      lead: 'Sometimes you don\'t need a full removal — you just need a van and someone to help. Picked up a sofa on Marketplace? Bought a wardrobe at IKEA? Need to move a few boxes between apartments? Our man-with-a-van service is built for exactly these jobs. Hourly rate, no minimum charge, often available the same day.',
      sections: [
        {
          title: 'Common jobs we handle',
          body: 'IKEA pickups (we know the loading bay routine inside out), Marketplace and OLX collections (we don\'t mind sketchy addresses), single-item moves (a single piece of furniture from A to B), small flat-share moves (a couple of suitcases and boxes), gallery and antique pickups, and hourly bookings where you just need help for a few hours.',
        },
        {
          title: 'How it works',
          body: 'Tell us what you need to move and where it is. We give you an hourly rate quote (usually 2-hour minimum) and a same-day or next-day slot if possible. We arrive with a van sized for the job, help with loading and unloading, and you only pay for the time used.',
        },
        {
          title: 'Two-person service',
          body: 'For heavier items — sofas, wardrobes, fridges — book a two-person service. The second person makes lifting safer, faster, and means we can navigate stairs and tight spaces without damaging anything.',
        },
        {
          title: 'IKEA pickup and assembly',
          body: 'IKEA is in Alfragide, on the edge of Lisbon. If you don\'t have a car — or have a small car — getting your purchases home is a problem. We pick up from IKEA the same day or the next, deliver to your home anywhere in Lisbon, and can also assemble everything if you want. Often cheaper than IKEA\'s own delivery.',
        },
        {
          title: 'When to book a full removal instead',
          body: 'If you\'re moving an entire apartment or house, our standard removal service is more cost-effective and includes proper protection, packing, and a fixed quote. Man-with-a-van is for the in-between jobs — anything where a regular van and one or two pairs of hands will do.',
        },
      ],
      keywords: 'man with a van Lisbon, small move Lisbon, IKEA delivery Lisbon, single item delivery Lisbon, hourly van service Lisbon',
    },
    pt: {
      name: 'Carrinha com Motorista',
      title: 'Carrinha com Motorista em Lisboa',
      metaTitle: 'Carrinha com Motorista Lisboa | Pequenas Mudanças e Entregas',
      metaDescription: 'Serviço flexível de carrinha com motorista em Lisboa. Itens únicos, pequenas mudanças, recolhas IKEA, recolhas Marketplace. À hora, bilingue.',
      lead: 'Por vezes não precisa de uma mudança completa — só precisa de uma carrinha e de alguém para ajudar. Comprou um sofá no OLX? Comprou um roupeiro no IKEA? Precisa de mover algumas caixas entre apartamentos? O nosso serviço de carrinha com motorista foi feito exatamente para estes trabalhos. À hora, sem cobrança mínima, muitas vezes disponível no mesmo dia.',
      sections: [
        {
          title: 'Trabalhos comuns que fazemos',
          body: 'Recolhas no IKEA (conhecemos a rotina da zona de cargas), recolhas Marketplace e OLX (não nos importamos com moradas duvidosas), mudanças de item único (uma peça de mobiliário de A para B), pequenas mudanças partilhadas (duas malas e algumas caixas), recolhas em galerias e antiquários, e reservas à hora quando só precisa de ajuda por algumas horas.',
        },
        {
          title: 'Como funciona',
          body: 'Diga-nos o que precisa de mover e onde está. Damos-lhe um orçamento à hora (normalmente mínimo 2 horas) e uma janela no mesmo dia ou no dia seguinte se possível. Chegamos com uma carrinha do tamanho certo para o trabalho, ajudamos a carregar e descarregar, e só paga pelo tempo usado.',
        },
        {
          title: 'Serviço com duas pessoas',
          body: 'Para itens mais pesados — sofás, roupeiros, frigoríficos — reserve um serviço com duas pessoas. A segunda pessoa torna o transporte mais seguro, mais rápido, e significa que conseguimos navegar escadas e espaços apertados sem danificar nada.',
        },
        {
          title: 'Recolha e montagem IKEA',
          body: 'O IKEA fica em Alfragide, na periferia de Lisboa. Se não tem carro — ou tem um carro pequeno — levar as suas compras para casa é um problema. Recolhemos no IKEA no mesmo dia ou no dia seguinte, entregamos em sua casa em qualquer parte de Lisboa, e também podemos montar tudo se quiser. Frequentemente mais barato que a entrega do IKEA.',
        },
        {
          title: 'Quando reservar uma mudança completa',
          body: 'Se está a mudar um apartamento ou casa inteira, o nosso serviço de mudança padrão é mais económico e inclui proteção adequada, embalagem, e orçamento fixo. Carrinha com motorista é para trabalhos intermédios — tudo o que uma carrinha normal e um ou dois pares de mãos consigam tratar.',
        },
      ],
      keywords: 'carrinha com motorista Lisboa, pequena mudança Lisboa, entrega IKEA Lisboa, entrega de item Lisboa, serviço de carrinha à hora Lisboa',
    },
  },

  // ─── 7. Packing Services ───────────────────────────────────────────────
  {
    slug: 'packing-services',
    icon: 'Package',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1600&q=80',
    en: {
      name: 'Packing Services',
      title: 'Professional Packing Services in Lisbon',
      metaTitle: 'Packing Services Lisbon | Professional Movers Pack Your Home',
      metaDescription: 'Professional packing service for your move in Lisbon. Our team brings all materials, packs everything safely, and unpacks at the new home.',
      lead: 'Packing is the part of moving everyone underestimates. A two-bedroom apartment usually takes 30+ hours to pack properly. Add work, kids, and the rest of life — and the boxes don\'t get done. Our packing service handles all of it. We bring every material, pack everything room by room, label clearly so unpacking is easy, and at the other end we can unpack and remove all the empty boxes.',
      sections: [
        {
          title: 'Full packing service',
          body: 'Our team arrives the day before your move with all materials — boxes in multiple sizes, bubble wrap, packing paper, tape, and specialist boxes for wardrobes and pictures. We pack room by room, wrap fragile items individually, and label every box with its destination room and contents. By the time the moving van arrives the next morning, everything is ready to load.',
        },
        {
          title: 'Partial packing',
          body: 'Don\'t want us to touch the kitchen because you have a system? Want help only with the fragile items? We adapt the service to whatever you need. Common requests are kitchen-only, fragile-only, or pack-everything-except-personal-items.',
        },
        {
          title: 'Unpacking service',
          body: 'After the move, we can come to your new home and unpack everything — putting items in cupboards and drawers, hanging clothes in wardrobes, and removing all the empty boxes for recycling. This is the single best way to "land" in a new home without weeks of living out of boxes.',
        },
        {
          title: 'Specialist items',
          body: 'Pianos, artwork, antiques, glassware, and electronics need specialist packing. Our team is trained on all of these and we have specific materials for fragile and high-value items. For anything truly precious, we recommend a separate insurance valuation before the move.',
        },
      ],
      keywords: 'packing services Lisbon, professional packing Lisbon, moving boxes Lisbon, unpacking service Lisbon, fragile packing Lisbon',
    },
    pt: {
      name: 'Serviços de Embalagem',
      title: 'Serviços Profissionais de Embalagem em Lisboa',
      metaTitle: 'Serviços de Embalagem Lisboa | Empresa de Mudanças com Embalagem',
      metaDescription: 'Serviço profissional de embalagem para a sua mudança em Lisboa. A nossa equipa traz todos os materiais, embala tudo em segurança, e desembala na nova casa.',
      lead: 'Embalar é a parte da mudança que todos subestimam. Um apartamento T2 demora normalmente mais de 30 horas a embalar corretamente. Junte-lhe trabalho, filhos, e o resto da vida — e as caixas nunca ficam prontas. O nosso serviço de embalagem trata de tudo. Trazemos todos os materiais, embalamos divisão por divisão, etiquetamos claramente para que desembalar seja fácil, e no destino podemos desembalar e levar todas as caixas vazias.',
      sections: [
        {
          title: 'Serviço de embalagem completo',
          body: 'A nossa equipa chega no dia anterior à sua mudança com todos os materiais — caixas em vários tamanhos, plástico bolha, papel de embalagem, fita-cola, e caixas especiais para roupeiros e quadros. Embalamos divisão por divisão, embrulhamos itens frágeis individualmente, e etiquetamos cada caixa com a divisão de destino e conteúdo. Quando a carrinha de mudanças chega na manhã seguinte, está tudo pronto para carregar.',
        },
        {
          title: 'Embalagem parcial',
          body: 'Não quer que toquemos na cozinha porque tem um sistema? Quer ajuda só com itens frágeis? Adaptamos o serviço ao que precisar. Pedidos comuns são apenas cozinha, apenas frágeis, ou embalar tudo exceto itens pessoais.',
        },
        {
          title: 'Serviço de desembalagem',
          body: 'Após a mudança, podemos ir à sua nova casa e desembalar tudo — colocar itens em armários e gavetas, pendurar roupa nos roupeiros, e levar todas as caixas vazias para reciclagem. Esta é a melhor forma de "aterrar" numa casa nova sem semanas a viver entre caixas.',
        },
        {
          title: 'Itens especiais',
          body: 'Pianos, obras de arte, antiguidades, cristais e eletrónica precisam de embalagem especializada. A nossa equipa está formada em todos estes e temos materiais específicos para itens frágeis e de alto valor. Para qualquer coisa verdadeiramente preciosa, recomendamos uma avaliação separada de seguro antes da mudança.',
        },
      ],
      keywords: 'serviços de embalagem Lisboa, embalagem profissional Lisboa, caixas de mudança Lisboa, serviço de desembalagem Lisboa, embalagem frágeis Lisboa',
    },
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

<?php
// =============================================
//  PRODUTOS & BENEFÍCIOS — ModaBrasil
// =============================================

$beneficios = [
    'Renove seu guarda-roupa!',
    'Aproveite nossas ofertas especiais!',
    'Compre hoje e economize muito!',
];

$categorias = [

    // ── ROUPAS CASUAIS ──────────────────────────
    [
        'nome'     => 'Roupas Casuais',
        'icon'     => '👔',
        'produtos' => [
            [
                'nome'        => 'Camisas Sociais',
                'detalhe'     => '100% algodão, várias cores',
                'preco'       => 89.90,
                'preco_antigo'=> 119.90,
                'tag'         => 'OFERTA',
                'imagens'     => [
                    'assets/images/Camisas Sociais.jpg',
                    'assets/images/Camisas Sociais1.jpg',
                    'assets/images/Camisas Sociais2.jpg',
                ],
            ],
            [
                'nome'        => 'Polos Masculinas',
                'detalhe'     => 'Dry-fit, confortável e elegante',
                'preco'       => 69.90,
                'preco_antigo'=> null,
                'tag'         => '',
                'imagens'     => [
                    'assets/images/Polos Masculinas.jpg',
                    'assets/images/Polos Masculinas2.jpg',
                    'assets/images/Polos Masculinas3.jpg',
                ],
            ],
            [
                'nome'        => 'Poleras / Hoodies',
                'detalhe'     => 'Fleece premium, unissex',
                'preco'       => 129.90,
                'preco_antigo'=> 159.90,
                'tag'         => 'NOVO',
                'imagens'     => [
                    'assets/images/PolerasHoodies.jpg',
                    'assets/images/PolerasHoodies2.jpg',
                    'assets/images/PolerasHoodies3.jpg',
                ],
            ],
        ],
    ],

    // ── CALÇAS & BERMUDAS ────────────────────────
    [
        'nome'     => 'Calças & Bermudas',
        'icon'     => '👖',
        'produtos' => [
            [
                'nome'        => 'Calças Jeans',
                'detalhe'     => 'Denim resistente, corte slim',
                'preco'       => 149.90,
                'preco_antigo'=> 189.90,
                'tag'         => 'OFERTA',
                'imagens'     => [
                    'assets/images/Calças Jeans.jpg',
                    'assets/images/Calças Jeans1.jpg',
                    'assets/images/Calças Jeans2.jpg',
                ],
            ],
            [
                'nome'        => 'Calças de Linho',
                'detalhe'     => 'Leve e elegante para o verão',
                'preco'       => 119.90,
                'preco_antigo'=> null,
                'tag'         => '',
                'imagens'     => [
                    'assets/images/Calças de Linho.jpeg',
                    'assets/images/Calças de Linho1.jpg',
                    'assets/images/Calças de Linho2.jpg',
                ],
            ],
            [
                'nome'        => 'Bermudas Casuais',
                'detalhe'     => 'Algodão, perfeitas para o dia a dia',
                'preco'       => 59.90,
                'preco_antigo'=> 79.90,
                'tag'         => '',
                'imagens'     => [
                    'assets/images/Bermudas Casuais.webp',
                    'assets/images/Bermudas Casuais1.jpg',
                    'assets/images/Bermudas Casuais2.webp',
                ],
            ],
        ],
    ],

    // ── MEIAS & ACESSÓRIOS ───────────────────────
    [
        'nome'     => 'Meias & Acessórios',
        'icon'     => '🧦',
        'produtos' => [
            [
                'nome'        => 'Meias Cano Curto',
                'detalhe'     => 'Kit 6 pares – algodão antifungo',
                'preco'       => 34.90,
                'preco_antigo'=> 49.90,
                'tag'         => 'KIT',
                'imagens'     => [
                    'assets/images/Meias Cano Curto.jpg',
                    'assets/images/Meias Cano Curto1.png',
                    'assets/images/Meias Cano Curto2.webp',
                ],
            ],
            [
                'nome'        => 'Meias Esportivas',
                'detalhe'     => 'Compressão e amortecimento',
                'preco'       => 44.90,
                'preco_antigo'=> null,
                'tag'         => '',
                'imagens'     => [
                    'assets/images/Meias Esportivas.jpg',
                    'assets/images/Meias Esportivas.webp',
                    'assets/images/Meias Esportivas1.webp',
                ],
            ],
            [
                'nome'        => 'Meias Cano Alto',
                'detalhe'     => 'Estampas exclusivas ModaBrasil',
                'preco'       => 39.90,
                'preco_antigo'=> null,
                'tag'         => 'NOVO',
                'imagens'     => [
                    'assets/images/Meias Cano Alto.webp',
                    'assets/images/Meias Cano Alto1.jpg',
                    'assets/images/Meias Cano Alto2.webp',
                ],
            ],
        ],
    ],

    // ── BOLSAS & MOCHILAS ────────────────────────
    [
        'nome'     => 'Bolsas & Mochilas',
        'icon'     => '🎒',
        'produtos' => [
            [
                'nome'        => 'Mochila de Viagem',
                'detalhe'     => 'Capacidade 40L, compartimentos modulares',
                'preco'       => 189.90,
                'preco_antigo'=> 239.90,
                'tag'         => 'BEST SELLER',
                'imagens'     => [
                    'assets/images/Mochila de Viagem.webp',
                    'assets/images/Mochila de Viagem1.WEBP',
                    'assets/images/Mochila de Viagem2.jpg',
                ],
            ],
            [
                'nome'        => 'Bolsa Executiva',
                'detalhe'     => 'Couro sintético premium, estilo profissional',
                'preco'       => 149.90,
                'preco_antigo'=> null,
                'tag'         => '',
                'imagens'     => [
                    'assets/images/Bolsa Executiva.jpg',
                    'assets/images/Bolsa Executiva1.jpg',
                    'assets/images/Bolsa Executiva2.jpg',
                ],
            ],
            [
                'nome'        => 'Mochila Casual',
                'detalhe'     => 'Confortável e funcional para o dia a dia',
                'preco'       => 99.90,
                'preco_antigo'=> 129.90,
                'tag'         => 'OFERTA',
                'imagens'     => [
                    'assets/images/Mochila Casual.webp',
                    'assets/images/Mochila Casual1.jpg',
                    'assets/images/Mochila Casual2.webp',
                ],
            ],
        ],
    ],

];

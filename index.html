<?php
require_once 'includes/config.php';
require_once 'includes/produtos.php';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= SITE_NAME ?> – <?= SITE_SLOGAN ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<!-- HERO BANNER -->
<header class="hero">
    <div class="hero__bg-shapes">
        <span class="shape shape--1"></span>
        <span class="shape shape--2"></span>
        <span class="shape shape--3"></span>
    </div>

    <div class="container hero__inner">
        <div class="hero__text">
            <p class="hero__badge">✦ Nova Coleção <?= date('Y') ?> ✦</p>
            <h1 class="hero__title">
                <span class="line">Venha Agora</span>
                <span class="line accent">Para a Melhor</span>
                <span class="line">Loja de Moda!</span>
            </h1>
            <p class="hero__sub">Estilo, qualidade e preço justo para você!</p>
            <ul class="hero__benefits">
                <?php foreach ($beneficios as $b): ?>
                    <li>✔ <?= htmlspecialchars($b) ?></li>
                <?php endforeach; ?>
            </ul>
            <div class="hero__ctas">
                <a href="#produtos" class="btn btn--primary">Ver Produtos</a>
                <a href="#contato" class="btn btn--outline">Fale Conosco</a>
                <button type="button" class="btn btn--secondary" onclick="window.print()">Imprimir Diseño</button>
            </div>
        </div>
        <div class="hero__logo-block">
            <div class="logo-box">
                <span class="logo-brand"><?= SITE_NAME ?></span>
                <span class="logo-tag"><?= SITE_SLOGAN ?></span>
            </div>
            <?php if (!empty(SITE_URL)): ?>
            <p class="hero__url"><?= SITE_URL ?></p>
            <?php endif; ?>
        </div>
    </div>
</header>

<!-- PRODUTOS -->
<section class="produtos" id="produtos">
    <div class="container">
        <h2 class="section-title">
            <span>Nossos</span> Produtos
        </h2>

        <?php foreach ($categorias as $cat): ?>
        <div class="categoria">
            <div class="categoria__header">
                <span class="categoria__icon"><?= $cat['icon'] ?></span>
                <h3 class="categoria__nome"><?= htmlspecialchars($cat['nome']) ?></h3>
            </div>
            <div class="produtos__grid">
                <?php foreach ($cat['produtos'] as $p): ?>
                <div class="card" data-product="<?= htmlspecialchars($p['nome']) ?>">
                    <div class="card__badge"><?= $p['tag'] ?? '' ?></div>
                    <?php if (!empty($p['imagens'])): ?>
                    <div class="card__gallery" onclick="openModal(event, '<?= htmlspecialchars($p['nome']) ?>')">
                        <?php foreach ($p['imagens'] as $idx => $imagem): ?>
                        <img class="card__image<?= $idx === 0 ? ' card__image--active' : '' ?>" src="<?= htmlspecialchars($imagem) ?>" alt="<?= htmlspecialchars($p['nome']) ?>" loading="lazy">
                        <?php endforeach; ?>
                        <div class="card__gallery-indicator">
                            <?php for($i = 0; $i < count($p['imagens']); $i++): ?>
                            <span class="dot<?= $i === 0 ? ' active' : '' ?>"></span>
                            <?php endfor; ?>
                        </div>
                    </div>
                    <?php endif; ?>
                    <div class="card__body">
                        <h4 class="card__nome"><?= htmlspecialchars($p['nome']) ?></h4>
                        <p class="card__detalhe"><?= htmlspecialchars($p['detalhe']) ?></p>
                        <div class="card__preco">
                            <?php if (!empty($p['preco_antigo'])): ?>
                                <s class="card__preco--old">R$ <?= number_format($p['preco_antigo'], 2, ',', '.') ?></s>
                            <?php endif; ?>
                            <strong class="card__preco--atual">R$ <?= number_format($p['preco'], 2, ',', '.') ?></strong>
                        </div>
                    </div>
                    <a href="#contato" class="card__btn">Comprar Agora</a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- OFERTA ESPECIAL -->
<section class="oferta">
    <div class="container oferta__inner">
        <div class="oferta__text">
            <p class="oferta__kicker">⚡ Oferta Especial</p>
            <h2 class="oferta__titulo">Experimente! Sinta a qualidade.<br>Leve para casa hoje mesmo!</h2>
            <p class="oferta__desc">Compre qualquer 3 peças e ganhe <strong>10% de desconto</strong> na sua compra.</p>
            <a href="#contato" class="btn btn--primary">Aproveitar Oferta</a>
        </div>
        <div class="oferta__badge-wrap">
            <div class="oferta__badge">
                <span>10%</span>
                <small>DESCONTO</small>
            </div>
        </div>
    </div>
</section>

<!-- CONTATO -->
<section class="contato" id="contato">
    <div class="container contato__inner">
        <h2 class="section-title">Fale <span>Conosco</span></h2>
        <p class="contato__sub">Visite-nos ou entre em contato pelo WhatsApp!</p>
        <div class="contato__cards">
            <div class="info-card">
                <span>📍</span>
                <div>
                    <strong>Endereço</strong>
                    <p><?= ENDERECO ?></p>
                </div>
            </div>
            <div class="info-card">
                <span>📱</span>
                <div>
                    <strong>WhatsApp</strong>
                    <p><?= WHATSAPP ?></p>
                </div>
            </div>
            <div class="info-card">
                <span>🕐</span>
                <div>
                    <strong>Horário</strong>
                    <p><?= HORARIO ?></p>
                </div>
            </div>
        </div>
        <a href="https://wa.me/<?= WHATSAPP_NUM ?>" class="btn btn--whatsapp" target="_blank">
            💬 Chamar no WhatsApp
        </a>
    </div>
</section>

<!-- FOOTER -->
<footer class="footer">
    <div class="container footer__inner">
        <p class="footer__brand"><?= SITE_NAME ?></p>
        <p class="footer__copy">© <?= date('Y') ?> <?= SITE_NAME ?>. Todos os direitos reservados.</p>
        <?php if (!empty(SITE_URL)): ?>
        <p class="footer__url"><?= SITE_URL ?></p>
        <?php endif; ?>
    </div>
</footer>

<!-- MODAL DE GALERIA -->
<div id="galleryModal" class="modal">
    <div class="modal__content">
        <span class="modal__close" onclick="closeModal()">&times;</span>
        <div class="modal__gallery">
            <img id="modalImage" src="" alt="Imagem do produto">
            <div class="modal__controls">
                <button class="modal__btn modal__btn--prev" onclick="prevImage()">❮</button>
                <button class="modal__btn modal__btn--next" onclick="nextImage()">❯</button>
            </div>
            <div class="modal__dots" id="modalDots"></div>
        </div>
        <div class="modal__info">
            <h3 id="modalTitle"></h3>
        </div>
    </div>
</div>

<script src="assets/js/main.js"></script>
</body>
</html>

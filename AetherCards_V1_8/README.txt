AETHERCARDS V1.8 — Accueil, catalogue et interface téléphone
==========================================================

LANCER SUR PC
1. Décompresser AetherCards_V1_8.zip.
2. Ouvrir le dossier AetherCards_V1_8.
3. Double-cliquer sur index.html. Aucune installation n’est nécessaire.

NOUVEAUTÉS
- Accueil éditorial avec carrousel manuel de quatre boosters mis en avant.
- Catégories à accès rapide, éditions sélectionnées, catalogue premium.
- Catalogue : recherche instantanée, tri (prix/nom), filtres par univers et favoris persistants.
- Vue de détail des boosters avant ouverture.
- Historique des trois dernières ouvertures et progression par univers.
- Collection : recherche et tri instantanés sans perdre le focus du clavier.
- Interface mobile : en-tête compact, barre de navigation inférieure, menu Plus, filtres horizontaux tactiles.
- Ouverture adaptée au téléphone : cartes à faire défiler horizontalement et bouton pour révéler la suivante.
- Modes clair/sombre. Les 8 emballages et les deux dos de cartes restent inclus.
- Ordre de rareté C → R → SR → LEG → S+ maintenu.
- Le défaut de grille en haut/bas des boosters, corrigé dans V1.7, ne réapparaît pas.

UTILISER SUR TÉLÉPHONE
Le même site s'adapte aux écrans mobiles Android et iPhone. Le fichier local sur ton PC
ne devient pas automatiquement un lien sur ton téléphone.
Pour y accéder depuis n'importe quel appareil, mets en ligne le contenu du dossier
sur un hébergeur de site statique en HTTPS, par exemple GitHub Pages.
Étapes générales : créer un dépôt GitHub, déposer les fichiers (avec le dossier assets)
à sa racine, activer Settings → Pages → Deploy from a branch → main/(root), puis ouvrir
l'adresse HTTPS publiée sur le téléphone.
Sur iPhone : Safari → Partager → Sur l'écran d'accueil. Sur Android : menu du navigateur
→ Ajouter à l'écran d'accueil, quand l'hébergement et le navigateur le permettent.
Une fois hébergé en HTTPS, la page fournit un manifeste d’application et un cache
service worker pour faciliter l’ajout à l’écran d’accueil et permettre de consulter
le site après une première visite, même hors connexion. Le fonctionnement dépend
du navigateur et des règles d’installation de l’appareil. Ce n’est pas une app native.
Sur PC avec index.html ouvert directement (file://), aucun service worker n’est utilisé.

DONNÉES
Les crédits et les collections restent enregistrés dans le localStorage du navigateur,
sans compte en ligne et sans synchronisation entre PC et téléphone. Le nom de clé de
sauvegarde de la V1.6 a été conservé pour compatibilité si même origine locale.

LIMITES
Prototype 100 % virtuel, sans paiement réel ni comptes. Les cartes affichent encore
des illustrations symboliques. L'espace 18+ ne comporte pas d'illustration explicite
et utilise une déclaration de majorité insuffisante pour un site public.
Les fonctionnalités de TCG et les événements ne sont pas encore actifs.

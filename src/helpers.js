export function formatPrice(cents) {
   return (cents / 100).toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR'
   });
}

export function rando(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
   return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
}

export function getFunName() {
   const adjectives = [
      'adorable',
      'magnifique',
      'propre',
      'terne',
      'elegant',
      'fantaisie',
      'glamour',
      'beau',
      'long',
      'superbe',
      'demode',
      'plaine',
      'pittoresque',
      'pétillante',
      'moche',
      'disgracieux',
      'colerique',
      'perplexe',
      'maladroit',
      'defaitiste',
      'genant',
      'feroce',
      'grincheux',
      'sans espoir',
      'jaloux',
      'fainenant',
      'mysterieux',
      'nerveux',
      'odieux',
      'paniqueur',
      'repoussant',
      'peureux',
      'irreflechi',
      'crispe',
      'inquiet'
   ];

   const nouns = [
      'femme',
      'homme',
      'enfants',
      'dent',
      'pied',
      'gens',
      'feuilles',
      'souris',
      'oies',
      'moitiés',
      'couteaux',
      'epouses',
      'vies',
      'elfes',
      'pains',
      'patates',
      'tomates',
      'cactus',
      'foyers',
      'champignons',
      'noyaux',
      'programmes',
      'analyses',
      'diagnostiques',
      'oasis',
      'theses',
      'crises',
      'phenomenes',
      'criteres',
      'donnees'
   ];

   return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}

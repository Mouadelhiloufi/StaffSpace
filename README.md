# Workforce Management — Interactive Floor Plan

Projet web permettant de gérer des employés, leurs rôles, leurs expériences et leur affectation dans différentes zones d’un bâtiment via une interface dynamique, moderne et responsive.  
Développé avec **HTML**, **JavaScript**, **TailwindCSS**, et une organisation professionnelle des ressources.

---

## 1. Fonctionnalités

### 1.1 Interface & Design
- Interface intuitive et fluide.
- Palette de couleurs cohérente avec icônes simples.
- Version Desktop et Mobile.
- Design moderne utilisant TailwindCSS (Flexbox, Grid, forms arrondies, boutons colorés).
- Animations CSS légères.

### 1.2 Structure générale
- Sidebar affichant les employés non assignés ("Unassigned Staff").
- Bouton "Add New Worker".
- Plan d’étage contenant 6 zones :
  - Salle de conférence  
  - Réception  
  - Salle des serveurs  
  - Salle de sécurité  
  - Salle du personnel  
  - Salle d’archives  

---

## 2. Modale d'ajout d'employé

Champs inclus :
- Nom  
- Rôle  
- Photo (URL)  
- Email  
- Téléphone  
- Expériences professionnelles (formulaire dynamique)

Fonctionnalités :
- Prévisualisation de la photo.
- Validation des champs via REGEX.
- Vérification que la date de début < date de fin pour chaque expérience.

---

## 3. Gestion des zones et restrictions

### 3.1 Règles d'accès

| Zone               | Rôles autorisés                    |
|--------------------|------------------------------------|
| Réception          | Réceptionnistes                    |
| Salle des serveurs | Techniciens IT                     |
| Salle de sécurité  | Agents de sécurité                 |
| Manager            | Accès complet                      |
| Nettoyage          | Partout sauf Salle d’archives      |
| Autres rôles       | Accès libre sauf zones restreintes |

### 3.2 Interaction

- Ajout d’un employé via un bouton "+" dans chaque zone.
- Suppression d’un employé via un bouton "X" (retour dans "Unassigned Staff").
- Zones obligatoires vides affichées en rouge pâle (sauf Salle de conférence et Salle du personnel).
- Limitation du nombre d’employés par zone.

---

## 4. Profil détaillé

Cliquer sur un employé permet d’afficher :
- Photo grand format  
- Nom, rôle  
- Email, téléphone  
- Expériences professionnelles  
- Localisation actuelle dans le bâtiment  

---

## 5. Responsive & Accessibilité

- Interface responsive pour tous types d’écrans.
- Testé sur Desktop et Mobile.

---

## 6. Validation du code

- Validation HTML et CSS via le W3C Validator.

---

## 7. Déploiement

- Déploiement possible sur GitHub Pages ou Vercel.

---

## 8. Gestion du projet (Scrum)

- Organisation des User Stories via Trello, Jira ou GitHub Projects.
- Gestion des branches Git (optionnel).
- Présentation finale incluant la démonstration des fonctionnalités.

---

## 9. Structure du projet


.
├── index.html
├── .gitignore
└── ressources/
    ├── css/
    │   
    ├── images/
    │   └── ...                    
    └── js/
        └── script.js             

# 📊 Configuration Google Analytics 4

## ✅ Étapes de configuration

### 1. **Créer un compte Google Analytics**
   - Va sur [Google Analytics](https://analytics.google.com)
   - Clique sur "Commencer"
   - Connecte-toi avec ton compte Google (crée-le si nécessaire)

### 2. **Créer une nouvelle propriété**
   - Clique sur "Admin" (roue dentée en bas)
   - Clique sur "Créer une propriété"
   - Remplis les infos :
     - **Nom de la propriété** : "Mon Portfolio"
     - **Zone horaire** : Sélectionne ta région
     - **Devise** : EUR ou USD selon tes préférences
   - Clique sur "Créer une propriété"

### 3. **Obtenir ton ID Google Analytics**
   - Tu verras une page "Installer Google Analytics"
   - Cherche le **Measurement ID** (commence par `G-`)
   - C'est cet ID que tu dois utiliser

### 4. **Ajouter l'ID dans ton projet**
   
   **Option A : Développement local**
   ```bash
   # Édite le fichier .env.local
   REACT_APP_GA_ID=G-XXXXXXXXXX
   ```
   (Remplace `G-XXXXXXXXXX` par ton ID réel)

   **Option B : Vercel (Production)**
   - Va sur ton dashboard Vercel
   - Clique sur ton projet
   - Onglet "Settings" → "Environment Variables"
   - Ajoute la variable :
     ```
     REACT_APP_GA_ID = G-XXXXXXXXXX
     ```
   - Redéploie (`npm run build && git push`)

### 5. **Vérifier que ça fonctionne**
   ```bash
   # Redémarre ton serveur local
   npm run dev
   ```
   - Ouvre ta page dans le navigateur
   - Ouvre la console (F12 → Console)
   - Si tu vois : `Google Analytics initialized with ID: G-XXXXXXXXXX` → ✅ C'est bon !

### 6. **Voir les données**
   - Va dans Google Analytics
   - Clique sur "Accueil" ou "Rapports en temps réel"
   - **Attends 24-48h** pour les premières données complètes
   - En temps réel tu verras tes propres visites immédiatement

---

## 📈 Que surveiller dans Google Analytics ?

1. **Accueil** 
   - Nombre de visiteurs
   - Sources de trafic
   - Appareils utilisés

2. **Rapports > Acquisition**
   - D'où viennent tes visiteurs
   - Résultats de recherche Google, réseaux sociaux, etc.

3. **Rapports > Engagement**
   - Pages les plus visitées
   - Temps passé sur chaque page
   - Taux de rebond

4. **Rapports > Conversions**
   - Clics sur tes liens
   - Visites du formulaire de contact

---

## 🚀 Déploiement avec Vercel

**Important** : N'oublie pas de redéployer après avoir ajouté l'ID GA dans les environment variables de Vercel.

```bash
# Redéploiement
npm run build
git add .
git commit -m "Add Google Analytics GA ID"
git push
```

---

## 🔒 Sécurité

- **N'expose JAMAIS ton ID GA en public** (mais c'est pas grave, l'ID GA n'est pas secret)
- Le fichier `.env.local` est dans `.gitignore`, donc il n'est jamais pushé
- Pour Vercel, utilise les Environment Variables (pas le code source)

---

## ❓ Dépannage

**Problème** : Google Analytics n'enregistre pas les données
- Solution 1 : Vérifier que l'ID GA est correct (format `G-XXXXXXXXXX`)
- Solution 2 : Attendre 24-48h (les données mettent du temps à remonter)
- Solution 3 : Redémarrer le serveur local

**Problème** : L'ID n'est pas trouvé en environnement
- Solution : Vérifier que `.env.local` est bien à la racine du projet
- Solution : Redémarrer `npm run dev`

---

## 📚 Ressources

- [Google Analytics Docs](https://support.google.com/analytics/answer/9306384)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9744165)

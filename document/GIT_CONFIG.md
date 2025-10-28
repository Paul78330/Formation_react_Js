# Documentation de la configuration Git

Ce document décrit les actions Git effectuées dans ce projet et les scripts fournis.

## Contexte
Le dépôt contient plusieurs dossiers qui étaient initialement des dépôts Git imbriqués (gitlinks, mode 160000). L'objectif a été de :

- Committer les changements dans chaque sous-dépôt imbriqué.
- Ajouter les pointeurs (gitlinks) dans le dépôt parent et créer un commit initial.
- Fournir un script PowerShell pour automatiser ces opérations.

## Fichiers importants
- `.gitignore` : règles pour ignorer `node_modules` et autres fichiers.
- `.scripts/commit_subrepos.ps1` : script PowerShell qui :
  - détecte les gitlinks (mode 160000) indexés par Git,
  - entre dans chaque sous-dépôt contenant un `.git`, exécute `git add .` puis `git commit -m "Update: commit changes in <path>"`,
  - retourne à la racine, `git add <path>` pour chaque sous-dépôt committé,
  - propose d'amender le dernier commit du parent ou de créer un nouveau commit.

## Commandes exécutées lors de la session
1. Exécution du script pour committer automatiquement les sous-dépôts :
```powershell
powershell -ExecutionPolicy Bypass -File .\.scripts\commit_subrepos.ps1 -AutoCommit -AmendParent
```
2. Comme le dépôt parent n'avait pas de commit initial, le script a ajouté les pointeurs et j'ai créé manuellement le commit initial :
```bash
git add .
git commit -m "Initial import: add project files and subrepo pointers"
```

## Remotes
Le dépôt local n'avait pas de remote configuré initialement.

## Conseils
- Si vous souhaitez pousser vers GitHub, ajoutez un remote `origin` et poussez :
```bash
git remote add origin https://github.com/Paul78330/Formation_react_Js.git
git push -u origin main
```

- Si vous collaborez et modifiez l'historique (amend, rebase), préférez `--force-with-lease` pour pousser :
```bash
git push --force-with-lease origin main
```

- Le script commit des modifications automatiquement avec des messages génériques. Si vous préférez des messages spécifiques, vous pouvez éditer les commits dans chaque sous-dépôt (ex: `git commit --amend` ou `git rebase -i`).

## Remarques
- Certains chemins apparaissent comme gitlinks mais n'ont pas de `.git` (ex: "Copie"). Ils doivent être gérés manuellement.
- Les avertissements LF/CRLF sont normaux sur Windows. Configurez `core.autocrlf` si nécessaire.

---
Document generated on 2025-10-28.

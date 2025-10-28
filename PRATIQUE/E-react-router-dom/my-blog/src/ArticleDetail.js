import React from 'react';
import { useParams } from 'react-router-dom'; // Importation du hook useParams de react-router-dom pour accéder aux paramètres de l'URL.

const articles = [
  { id: 1, title: 'Article 1', content: 'Content of Article 1' },
  { id: 2, title: 'Article 2', content: 'Content of Article 2' },
  { id: 3, title: 'Article 3', content: 'Content of Article 3' },
];

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
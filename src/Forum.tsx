import React, { useState } from 'react';
import { ethers } from 'ethers';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: Comment[];
}

interface Topic {
  id: number;
  title: string;
  author: string;
  posts: Post[];
}

const initialTopics: Topic[] = [
  {
    id: 1,
    title: 'Bienvenida al Foro',
    author: 'Admin',
    posts: [
      {
        id: 1,
        author: 'Admin',
        content: '¡Bienvenidos al foro de Fork Forest! Presentate y comparte tus ideas.',
        likes: 0,
        comments: []
      }
    ]
  },
  {
    id: 2,
    title: 'Ideas para nuevos proyectos',
    author: 'María',
    posts: []
  }
];

function Forum() {
  const [user, setUser] = useState<string>("");
  const [ensName, setEnsName] = useState<string>("");
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [newTopic, setNewTopic] = useState<string>("");
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [newPost, setNewPost] = useState<string>("");
  const [newComment, setNewComment] = useState<{[postId:number]: string}>({});
  const [connecting, setConnecting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const connectWallet = async () => {
    setConnecting(true);
    setError("");
    try {
      if (!(window as any).ethereum) {
        setError('MetaMask no está instalado.');
        setConnecting(false);
        return;
      }
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      if (accounts && accounts.length > 0) {
        setUser(accounts[0]);
        // ENS reverse lookup
        try {
          const ens = await provider.lookupAddress(accounts[0]);
          setEnsName(ens || "");
        } catch (ensErr) {
          setEnsName("");
        }
      }
    } catch (err: any) {
      setError('Error al conectar la wallet.');
    }
    setConnecting(false);
  };



  const handleCreateTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTopic.trim() && user) {
      setTopics([
        ...topics,
        {
          id: Date.now(),
          title: newTopic.trim(),
          author: user,
          posts: []
        }
      ]);
      setNewTopic("");
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newPost.trim() || selectedTopicId === null) return;
    setTopics(prevTopics => prevTopics.map(topic =>
      topic.id === selectedTopicId
        ? {
            ...topic,
            posts: [
              ...topic.posts,
              {
                id: Date.now(),
                author: user,
                content: newPost.trim(),
                likes: 0,
                comments: []
              }
            ]
          }
        : topic
    ));
    setNewPost("");
  };

  const handleLikePost = (topicId: number, postId: number) => {
    setTopics(prevTopics => prevTopics.map(topic =>
      topic.id === topicId
        ? {
            ...topic,
            posts: topic.posts.map(post =>
              post.id === postId
                ? { ...post, likes: post.likes + 1 }
                : post
            )
          }
        : topic
    ));
  };

  const handleAddComment = (e: React.FormEvent, topicId: number, postId: number) => {
    e.preventDefault();
    if (!user || !newComment[postId] || !newComment[postId].trim()) return;
    setTopics(prevTopics => prevTopics.map(topic =>
      topic.id === topicId
        ? {
            ...topic,
            posts: topic.posts.map(post =>
              post.id === postId
                ? {
                    ...post,
                    comments: [
                      ...post.comments,
                      {
                        id: Date.now(),
                        author: user,
                        content: newComment[postId].trim()
                      }
                    ]
                  }
                : post
            )
          }
        : topic
    ));
    setNewComment(prev => ({ ...prev, [postId]: "" }));
  };


  return (
    <div className="min-h-screen bg-earth-green-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-earth-green-800 mb-4">Foro de Fork Forest</h1>
      {!user ? (
        <div className="mb-8 flex flex-col items-center">
          <button
            onClick={connectWallet}
            disabled={connecting}
            className="bg-earth-green-600 text-white px-6 py-2 rounded hover:bg-earth-green-700 transition mb-2"
          >
            {connecting ? 'Conectando...' : 'Conectar con MetaMask'}
          </button>
          {error && <span className="text-red-600 text-sm mt-2">{error}</span>}
        </div>
      ) : (
        <div className="w-full max-w-xl">
          <div className="mb-8">
            <div className="mb-2 text-sm text-earth-green-700">
              Conectado como: 
              <span className="font-mono">
                {ensName ? (
                  <>
                    {ensName} <span title={user} className="text-xs text-earth-green-400">({user.slice(0,6)}...{user.slice(-4)})</span>
                  </>
                ) : user}
              </span>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-earth-green-700">Temas</h2>
            {selectedTopicId !== null && (
              <button
                className="mb-4 text-xs text-earth-green-600 hover:underline bg-earth-green-100 px-2 py-1 rounded"
                onClick={() => setSelectedTopicId(null)}
              >
                ← Volver a todos los temas
              </button>
            )}
            <ul className="bg-white rounded shadow divide-y divide-earth-green-100">
              {topics.map(topic => (
                <li key={topic.id} className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setSelectedTopicId(topic.id)}>
                    <span className="font-medium text-earth-green-900">{topic.title}</span>
                    <span className="text-sm text-earth-green-500">por {topic.author}</span>
                  </div>
                  {/* Mostrar los posteos si este tema está seleccionado */}
                  {selectedTopicId === topic.id && (
                    <div className="mt-4 bg-earth-green-50 p-2 rounded">

                      <h3 className="font-semibold mb-2 text-earth-green-700">Posteos</h3>
                      <ul className="mb-2">
                        {topic.posts.length === 0 && (
                          <li className="text-earth-green-400 text-sm">No hay posteos aún.</li>
                        )}
                        {topic.posts.map(post => (
                          <li key={post.id} className="mb-4 bg-white rounded shadow p-3">
                            <div className="flex justify-between items-center">
                              <span className="text-earth-green-800 font-semibold">{post.author}</span>
                              <button className="text-xs text-earth-green-600 hover:underline" onClick={() => handleLikePost(topic.id, post.id)}>
                                👍 {post.likes}
                              </button>
                            </div>
                            <div className="mb-2 text-earth-green-900">{post.content}</div>
                            <div className="ml-2">
                              <h4 className="text-xs text-earth-green-700 mb-1">Comentarios:</h4>
                              <ul>
                                {post.comments.map(comment => (
                                  <li key={comment.id} className="text-xs mb-1">
                                    <span className="font-bold text-earth-green-800">{comment.author}: </span>{comment.content}
                                  </li>
                                ))}
                                {post.comments.length === 0 && (
                                  <li className="text-xs text-earth-green-400">Sin comentarios.</li>
                                )}
                              </ul>
                              <form className="flex gap-1 mt-1" onSubmit={e => handleAddComment(e, topic.id, post.id)}>
                                <input
                                  className="px-2 py-1 rounded border border-earth-green-200 text-xs flex-1"
                                  value={newComment[post.id] || ""}
                                  onChange={e => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                                  placeholder="Agregar comentario"
                                />
                                <button type="submit" className="text-xs bg-earth-green-500 text-white rounded px-2 py-1">Comentar</button>
                              </form>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <form onSubmit={handleCreatePost} className="flex gap-2 mt-2">
                        <input
                          className="flex-1 px-2 py-1 rounded border border-earth-green-200"
                          value={newPost}
                          onChange={e => setNewPost(e.target.value)}
                          placeholder="Escribe un posteo..."
                        />
                        <button type="submit" className="bg-earth-green-600 text-white px-4 py-1 rounded">Postear</button>
                      </form>
                    </div>
                  )}
                </li>
              ))}
              {topics.length === 0 && (
                <li className="p-4 text-earth-green-400 text-center">No hay temas aún.</li>
              )}
            </ul>
          </div>
          <form onSubmit={handleCreateTopic} className="bg-white rounded shadow p-4 flex flex-col gap-2">
            <label className="font-medium text-earth-green-800">Crear nuevo tema:</label>
            <input
              className="px-4 py-2 rounded border border-earth-green-200 focus:outline-none focus:ring-2 focus:ring-earth-green-400"
              value={newTopic}
              onChange={e => setNewTopic(e.target.value)}
              placeholder="Título del tema"
              required
            />
            <button type="submit" className="bg-earth-green-600 text-white px-6 py-2 rounded hover:bg-earth-green-700 transition">Crear Tema</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Forum;

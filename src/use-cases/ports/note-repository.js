const noteRepository = {
  add: (noteData) => Promise.resolve(noteData),
  findAllNotesFrom: (userId) => Promise.resolve(userId),
  findById: (noteId) => Promise.resolve({ noteId }),
  remove: (noteId) => Promise.resolve(noteId),
  updateTitle: (noteId, newTitle) => Promise.resolve({ noteId, newTitle }),
  updateContent: (noteId, newContent) => Promise.resolve({ noteId, newContent }),
};

module.exports = noteRepository;


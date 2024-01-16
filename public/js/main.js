/**
 * An AlpineJS application to store notes with tags in a JSON array in local storage
 * using the Alpine Persist plugin.
 */

// Use Alpine reusable data

document.addEventListener('alpine:init', () => {
    Alpine.data('app', function() {
        return {
            notes: this.$persist([
                // {
                //     id: 1,
                //     title: 'My first note',
                //     body: 'This is the body of my first note',
                //     tags: ['first', 'note'],
                //     created_at: '2021-01-01T00:00:00.000Z',
                //     modified_at: '2021-01-01T00:00:00.000Z'
                // }
            ]),

            archivedNotes: this.$persist([]),

            searchTerm: '',
            filteredNotes: [],

            tags: this.$persist([]),

            currentNote: {
                id: 0,
                title: '',
                body: '',
                tags: [],
                created_at: '',
                modified_at: ''
            },
            nextId: this.$persist(1),
            editor: null,

            fileOpen: false,
            fileHandle: null,

            init() {
                console.log('Initing')

                this.newEditor()

                setInterval(this.maybeSaveFile.bind(this), 5000);
            },

            newEditor() {
                if (this.editor) {
                    this.editor.toTextArea();
                }
                this.editor = new EasyMDE({
                    element: this.$refs.editor,
                    initialValue: this.currentNote.body
                })
                this.editor.codemirror.on('change', () => {
                    this.currentNote.body = this.editor.value()
                    this.saveCurrentNote()
                })
            },

            saveCurrentNote() {
                // Derive the title from the first line of the body
                let lines = this.currentNote.body.split('\n')
                this.currentNote.title = this.makeTitle(lines[0])

                // TODO: Only set this is content has changed?
                this.currentNote.modified_at = new Date().toISOString()
                let note = this.notes.find(note => note.id === this.currentNote.id)
                if (note) {
                    this.notes.splice(this.notes.indexOf(note), 1, this.currentNote)
                } else {
                    this.notes.push(this.currentNote)
                    this.nextId++;
                }
            },

            makeTitle(line) {
                return line.replace(/^#+\s*/, '')
            },

            newNote() {
                this.currentNote = {
                    id: this.nextId,
                    title: '# A new note',
                    body: '# A new note',
                    tags: [],
                    created_at: new Date().toISOString(),
                    modified_at: new Date().toISOString()
                }
                this.newEditor()
            },

            openNote(id) {
                this.currentNote = this.notes.find(note => note.id === id)
                this.newEditor()
            },

            archiveNote() {
                let note = this.notes.find(note => note.id === this.currentNote.id)
                if (note) {
                    this.notes.splice(this.notes.indexOf(note), 1)
                    this.archivedNotes.push(note)
                    this.saveFile()
                    this.newNote()
                }
            },

            /**
             * Search
             */

            searchNotes() {
                console.log('Searching for ' + this.searchTerm)
                if (this.searchTerm.length > 0) {
                    const searchTermLower = this.searchTerm.toLowerCase();

                    this.filteredNotes = this.notes.filter(note =>
                            note.title.toLowerCase().includes(searchTermLower) ||
                            note.body.toLowerCase().includes(searchTermLower)
                    )
                } else {
                    this.filteredNotes = this.notes
                }
            },

            /**
             * File handling
             */

            isFileOpen() {
                return this.fileHandle !== null
            },

            async newFile() {
                const options = {
                    types: [
                        {
                            description: 'JSON',
                            accept: {
                                'application/json': ['.json']
                            }
                        }
                    ],
                };
                this.fileHandle = await window.showSaveFilePicker(options);
                this.tags = []
                this.nextId = 1
                this.notes = []
                this.filteredNotes = []
                this.archiveNotes = []
                this.searchTerm = ''
                await this.saveFile()
            },

            async openFile() {
                const pickerOptions = {
                    types: [
                        {
                            description: 'JSON',
                            accept: {
                                'application/json': ['.json']
                            }
                        }
                    ],
                };
                // open file picker
                [this.fileHandle] = await window.showOpenFilePicker( pickerOptions );

                if (this.fileHandle.kind === 'file') {
                    const file = await this.fileHandle.getFile();
                    const fileContent = await file.text();
                    const data = JSON.parse(fileContent);
                    this.extractSaveData(data);
                }
            },

            extractSaveData(data) {
                this.tags = data.tags
                this.nextId = data.nextId
                this.notes = data.notes
                this.filteredNotes = this.notes
                // Archived notes added so needs a default
                this.archivedNotes = data?.archivedNotes ?? []
                this.searchTerm = ''
            },

            makeSaveData() {
                return {
                    tags: this.tags,
                    nextId: this.nextId,
                    notes: this.notes,
                    archivedNotes: this.archivedNotes
                }
            },

            async saveFile() {
                const writable = await this.fileHandle.createWritable();
                const dataToSave = this.makeSaveData();
                await writable.write(JSON.stringify(dataToSave, null, 2));
                await writable.close();
            },

            async maybeSaveFile() {
                if (this.isFileOpen()) {
                    await this.saveFile()
                }
            },

        }
    })
})

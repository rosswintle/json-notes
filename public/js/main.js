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

            init() {
                console.log('Initing')

                this.newEditor()
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
            }
        }
    })
})

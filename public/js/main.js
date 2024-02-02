/**
 * An AlpineJS application to store notes with tags in a JSON array in local storage
 * using the Alpine Persist plugin.
*/

const defaultNotes = [
    {
      "id": 1,
      "title": "📝 What is this?",
      "body": "# 📝 What is this?\n\nJSON Notes is a note-taking application! It is:\n\n- simple\n- private - it saves data to local files and that is all\n- markdown-based, for quick note-taking.\n\n**JSON Notes works best in Chrome**, Edge and other Chromium-based browsers, but it's also perfectly usable in Safari and Firefox.\n\nIt does not (yet) work well on mobile devices.\n\nIt was made by [Ross Wintle](https://rw.omg.lol/) and is free and open-source on [GitHub](https://github.com/rosswintle/json-notes).",
      "tags": [
        "StarterKit"
      ],
      "created_at": 1700000000000,
      "modified_at": 1700000001000
    },
    {
        "id": 2,
        "title": "🪩 Instructions for Chrome/Chromium Browsers",
        "body": "# 🪩 Instructions for Chrome/Chromium Browsers\n\n_(There isn't a Google emoji. This was shiny and round. The closest I could get)_\n\n`JSON: Notes` is a simple note taking application that runs in a web browser and saves your files to local disk.\n\nIt's completely private and the aim is to be minimalistic. Create notes. Edit notes. Save notes. Search notes. Archive notes. And that's about it.\n\n### Creating a new notes file\n\nTo get started click the `New File` button.\n\nThis will open the file selector. Find a suitable directory and give you file a name ending in `.json` (all notes are stored in simple JSON files).\n\nYou will get a new notes file!\n\nAfter a few seconds you will be prompted for permission to save to this file, which you should allow.\n\n### Writing new notes\n\nClick the `New Note` button and you will get a shiny new note!\n\nNotes can be written using plain text, or [Markdown](https://www.markdownguide.org/basic-syntax/), which is a simple text-formatting notation that is easy to learn.\n\nThe buttons in the editor toolbar give you some help with Markdown.\n\nThe first line of your note is used as a title.\n\n### Saving notes (Auto-save!)\n\nYour notes are auto-saved every few seconds. You can see the last save time in the left-hand sidebar.\n\nYou do not need to do anything to save your notes.\n\nIt's recommended to backup your notes file from time to time. (This may be automated in future).\n\n### Loading a notes file\n\nWhen the browser closes, or the page \"unloads\" from memory you will need to re-open your notes.\n\nClick the `Open File` button and choose the file to open and your notes will be loaded!\n\n### Archiving notes\n\nYou can archive notes by clicking the `Archive` button. This gets them out of the way, but does not delete them.\n\nAt some point I will make it possible to see your archived notes.\n\nNotes can not currently be deleted.\n\n## Geeky technical bit\n\nThe Chrome/Chromium version is able to use a [Filesystem API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) that doesn't exist or is not complete in other browsers.\n\nIn particular this allows the web page to write to local files, and this enables the auto-saving feature.",
        "tags": [
            "StarterKit"
          ],
        "created_at": 1700000000000,
        "modified_at": 1700000002000
    },
    {
        "id": 3,
        "title": "🧭🦊 Instructions for Safari/Firefox",
        "body": "# 🧭🦊 Instructions for Safari/Firefox\n\n`JSON: Notes` is a simple note taking application that runs in a web browser and saves your files to local disk.\n\nIt's completely private and the aim is to be minimalistic. Create notes. Edit notes. Save notes. Search notes. Archive notes. And that's about it.\n\n### Creating a new notes file\n\nIn Safari and Firefox, your notes are stored in the browser, and then you save them to a local file from time to time to back them up.\n\nSo I recommend you just archive these instructions once you are happy (or keep them around for reference!) and start making notes!\n\n### Writing new notes\n\nClick the `New Note` button and you will get a shiny new note!\n\nNotes can be written using plain text, or [Markdown](https://www.markdownguide.org/basic-syntax/), which is a simple text-formatting notation that is easy to learn.\n\nThe buttons in the editor toolbar give you some help with Markdown.\n\nThe first line of your note is used as a title.\n\n### Saving notes\n\nYour notes are saved in memory as you type.\n\nIt's recommended that you save your notes occasionally to a file for safety. Perhaps once a day at least!\n\nThis is slightly clumsy in Safari and Firefox as the browser isn't allowed to write files to disk. So you have to do it manually. 🤷\n\nTo save your notes to a file, click \"Save\".\n\nWhat happens next depends on your browser settings:\n\n- If your browser is set to download files to a set location, your notes will be saved there.\n- If your browser is set to ask you where to save downloaded files, you will be asked where to save them.\n\nNotes are saved to `.json` files.\n\nYou can see the last save time in the left-hand sidebar.\n\nIt's also recommended to backup your notes file from time to time to a safe location. Especially if your notes are important.\n\n### Loading a notes file\n\nIf you want to load a saved notes file into the browser, click the `Import` button. Choose the file to open, and then click the `Open` button. Your notes will be loaded!\n\n### Archiving notes\n\nYou can archive notes by clicking the `Archive` button. This gets them out of the way, but does not delete them.\n\nAt some point I will make it possible to see your archived notes.\n\nNotes can not currently be deleted.\n\n## Geeky technical bit\n\nUnlike the Chrome/Chromium, Safari and Firefox are not able to use the [Filesystem API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) and so it can't auto-save files for you, or prompt you for file locations.\n\nThe application detects this and \"falls back\" to the manual-save approach explained here. It's not perfect. But it works OK.",
        "tags": [
            "StarterKit"
          ],
        "created_at": 1700000000000,
        "modified_at": 1700000003000
    },
    {
        "id": 4,
        "title": "👋 Say Hello, or Thank you",
        "body": "# 👋 Say Hello, or Thank you\n\nIf you like this and use it I'd love to know. [Find me](https://rw.omg.lol/), and say hello! Or [buy me a coffee](https://ko-fi.com/magicroundabout/).\n\nIt it _genuinely_ delightful when someone connects to tell you they are using the software you made. I guarantee it will make my day.\n",
        "tags": [
            "StarterKit"
          ],
        "created_at": 1700000000000,
        "modified_at": 1700000004000
    },
    {
        "id": 5,
        "title": "⚠️ Limitations and disclaimers",
        "body": "# ⚠️ Limitations and disclaimers\n\nThis little application:\n\n- **Is used entirely at your own risk.** I made it for me and use it for my own notes. So it should work. But if you lose all your notes I am not liable.\n- **Does not handle images or media.** Sorry - just your writing!\n- **Does not sync notes using any cloud technology.** This is by design. But you could save to a cloud drive like Dropbox to achieve this.\n- **Does not work on mobile devices.** Yet. Maybe one day.\n- **Has no support.** But if you open an issue on [GitHub](https://github.com/rosswintle/json-notes) I might answer and help.\n- **Don't mention accessibilty.** I really want it to be good, but I made this for me in a few hours. I'll try one day to make it better.\n\nI also don't know how many notes you can store. I worked out it's about 2,500 pages of text. Which is quite a lot. I don't know what happens when you run out of space!",
        "tags": [
            "StarterKit"
          ],
        "created_at": 1700000000000,
        "modified_at": 1700000005000
    }
  ]


// Use Alpine reusable data

document.addEventListener('alpine:init', () => {
    Alpine.data('app', function() {
        return {
            notes: this.$persist(defaultNotes),

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

            fileHandle: null,
            unsavedNotes: false,
            lastSave: null,

            isImporting: false,
            importedFileName: '',

            init() {
                console.log('Initing')

                // If the browser supports the Filesystem API, we'll set the default notes and wait for a file
                // to be opened. Otherwise, it's safe to use stored notes and then wait for a save.
                if (this.browserHasFilesystemApi()) {
                    this.notes = defaultNotes;
                    this.nextId = defaultNotes.length + 1;
                }
                this.filteredNotes = this.notes

                this.newEditor()

                setInterval(this.maybeSaveFile.bind(this), 5000);

                // Add the onbeforeunload event handler for unsaved notes
                window.addEventListener('beforeunload', this.alertForUnsavedNotes.bind(this));
            },

            alertForUnsavedNotes(event) {
                if (this.unsavedNotes) {
                    event.preventDefault();
                    return '';
                }
            },

            newEditor() {
                if (this.editor) {
                    this.editor.toTextArea();
                }
                this.editor = new EasyMDE({
                    element: this.$refs.editor,
                    initialValue: this.currentNote.body,
                    spellChecker: false,
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

                // TODO: Only set this if content has changed?
                this.currentNote.modified_at = new Date().getTime()

                // TODO: Remove temporary conversion at some point
                if (typeof(this.currentNote.created_at) === 'string') {
                    this.currentNote.created_at = this.convertIsoDateToTimestamp(this.currentNote.created_at)
                }

                let note = this.notes.find(note => note.id === this.currentNote.id)
                if (note) {
                    this.notes.splice(this.notes.indexOf(note), 1, this.currentNote)
                } else {
                    this.notes.unshift(this.currentNote)
                    this.nextId++;
                }
                // Set the unsaved notes flag
                this.unsavedNotes = true;
                this.searchNotes()
            },

            // TODO: Remove temporary conversion function at some point
            convertIsoDateToTimestamp(isoDate) {
                return new Date(isoDate).getTime()
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
                    created_at: new Date().getTime(),
                    modified_at: new Date().getTime()
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
                this.unsavedNotes = true;
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
            browserHasFilesystemApi() {
                return window.showSaveFilePicker !== undefined
            },

            isFileOpen() {
                return this.fileHandle !== null
            },

            async newFile() {
                if (this.unsavedNotes) {
                    alert('You have unsaved notes!');
                    return;
                }

                if (this.browserHasFilesystemApi()) {
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
                }

                this.tags = []
                this.nextId = 1
                this.notes = []
                this.filteredNotes = []
                this.archiveNotes = []
                this.searchTerm = ''
                await this.saveFile()
            },

            async openFile() {
                // Save (if needed) and close the current file (doesn't actually close it)
                await this.maybeSaveFile()
                this.fileHandle = null

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
                    // TODO: Note data structure migrations?
                }
            },

            extractSaveData(data) {
                this.tags = data.tags
                this.nextId = data.nextId
                this.notes = this.sortNotesByModifiedDate(data.notes)
                this.filteredNotes = this.notes
                // Archived notes added so needs a default
                this.archivedNotes = this.sortNotesByModifiedDate(data?.archivedNotes ?? [])
                this.searchTerm = ''
            },

            sortNotesByModifiedDate(notes) {
                return notes.sort((a, b) => {
                    if (a.modified_at < b.modified_at) {
                        return 1
                    }
                    if (a.modified_at > b.modified_at) {
                        return -1
                    }
                    return 0
                })
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
                if (! this.browserHasFilesystemApi()) {
                    return;
                }
                const writable = await this.fileHandle.createWritable();
                const dataToSave = this.makeSaveData();
                await writable.write(JSON.stringify(dataToSave, null, 2));
                await writable.close();
                this.unsavedNotes = false;
                this.lastSave = new Date().getTime(); // Convert to Unix timestamp
            },

            async maybeSaveFile() {
                if (this.isFileOpen()) {
                    await this.saveFile()
                }
            },

            /*
             * File functions for import/export without filesystem APIs
             */
            async importFile() {
                if (this.unsavedNotes) {
                    alert('You have unsaved notes!');
                    return;
                }

                const importFile = document.getElementById('importFileInput').files[0];
                if (importFile) {
                    this.importedFileName = importFile.name;
                    const fileContent = await importFile.text();
                    const data = JSON.parse(fileContent);
                    this.extractSaveData(data);
                    // TODO: Error checking
                    this.isImporting = false;
                }
            },

            /*
             * Export the notes to a JSON file.
             */
            async exportFile() {
                const dataToSave = this.makeSaveData();
                const blob = new Blob([JSON.stringify(dataToSave, null, 2)], {type: 'application/json'});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = this.importedFileName ?? 'notes.json';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                this.unsavedNotes = false;
                this.lastSave = new Date().getTime(); // Convert to Unix timestamp
            }
        }
    })
})

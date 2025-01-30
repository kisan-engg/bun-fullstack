const headers = {
    'Content-Type': 'application/json',
};

const _fetchNotes = async (): Promise<Response> => {
    const response = await fetch("api/notes", { method: 'GET', headers: headers })
    return await response.json();
}
export const getIt = async(): Promise<any> => {
    return new Promise((resolve, reject) => {    
        _fetchNotes().then(resolve).catch(reject);
    })
}

const _addNote = async (noteInfo: NoteInfo): Promise<Response> => {
    const response = await fetch("/api/notes",
        { method: "POST", headers: headers, body: JSON.stringify(noteInfo) });
    return await response.json();
}
export const postIt = async(noteInfo: NoteInfo): Promise<any> => {
    return new Promise((resolve, reject) => {    
        _addNote(noteInfo).then(resolve).catch(reject);
    })
}

const _deleteNote = async (index: number): Promise<Response> => {
    const response = await fetch("/api/notes/" + index,
        { method: "DELETE", headers: headers });
    return await response.json();
}
export const deleteIt = async(index: number): Promise<any> => {
    return new Promise((resolve, reject) => {    
        _deleteNote(index).then(resolve).catch(reject);
    })
}

const _updateNote = async (index: number, noteInfo: NoteInfo): Promise<Response> => {
    const response = await fetch("/api/notes/" + index,
        { method: "PATCH", headers: headers, body: JSON.stringify(noteInfo) });
    return await response.json();
}
export const updateIt = async(index: number, noteInfo: NoteInfo): Promise<any> => {
    return new Promise((resolve, reject) => {    
        _updateNote(index, noteInfo).then(resolve).catch(reject);
    })
}

let activeNote: Partial<NoteInfo>;

export const setActive = (noteInfo: Partial<NoteInfo>) => {
    activeNote = noteInfo;
}

export const getActive = (): Partial<NoteInfo> => {
    return activeNote;
}

export type NoteInfo = {
    subject: string;
    text: string;
    timestamp: number;
}
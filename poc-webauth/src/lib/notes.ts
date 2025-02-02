import { _fetchNotes, _addNote, _deleteNote, _updateNote } from "./requests";

export type NoteInfo = {
    id: number,
    subject: string;
    text: string;
    author: string;
    timestamp: Date;
}
/* 
export type AddNoteInfo = Omit<NoteInfo, "author" | "timestamp" | "id">

export type UpdateNoteInfo = Omit<NoteInfo, "author" | "timestamp">
*/
export type NoteOperationInfo = {
    note: NoteInfo;
    index: number;
}

export const Notebook = () => {

    const _getIt = async (): Promise<any> => {
        return new Promise((resolve, reject) => {
            _fetchNotes().then(resolve).catch(reject);
        })
    }
    const _postIt = async (noteInfo: Partial<NoteInfo>): Promise<any> => {
        return new Promise((resolve, reject) => {
            _addNote(noteInfo).then(resolve).catch(reject);
        })
    }
    const _deleteIt = async (index: number): Promise<any> => {
        return new Promise((resolve, reject) => {
            _deleteNote(index).then(resolve).catch(reject);
        })
    }
    const updateIt = async (note: NoteInfo): Promise<any> => {
        return new Promise((resolve, reject) => {
            _updateNote(note).then(resolve).catch(reject);
        })
    }
    return {
        get: _getIt,
        add: async (noteInfo: Partial<NoteInfo>) => _postIt(noteInfo),
        delete: async (index: number) => _deleteIt(index),
        udpate: async (note: NoteInfo) => updateIt(note),
    }
}

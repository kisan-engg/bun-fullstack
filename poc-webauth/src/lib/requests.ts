import type { NoteInfo } from "./notes";

const headers = {
  'Content-Type': 'application/json',
};

export const _fetchNotes = async (): Promise<Response> => {
  const response = await fetch("api/notes", { method: 'GET', headers: headers })
  return await response.json();
}
export const _addNote = async ({subject, text}: Partial<NoteInfo>): Promise<Response> => {
  const response = await fetch("/api/notes",
      { method: "POST", headers: headers, body: JSON.stringify({subject, text}) });
  return await response.json();
}
export const _deleteNote = async (index: number): Promise<Response> => {
  const response = await fetch("/api/notes/" + index,
      { method: "DELETE", headers: headers });
  return await response.json();
}
export const _updateNote = async ({id, subject, text}: NoteInfo): Promise<Response> => {
  const response = await fetch("/api/notes/" + id,
      { method: "PATCH", headers: headers, body: JSON.stringify({subject, text}) });
  return await response.json();
}


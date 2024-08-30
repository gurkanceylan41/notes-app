import { useOutletContext } from "react-router-dom";
import { Note, NoteData, Tag } from "../types";
import { Container } from "react-bootstrap";
import Form from "../components/form";

type Props = {
  handleSubmit: (id: string, updatedData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const Edit = ({ handleSubmit, createTag, availableTags }: Props) => {
  const note = useOutletContext<Note>();

  return (
    <Container className="py-5 mx-auto">
      <h2>Notu Düzenle</h2>

      <Form
        handleSubmit={(updatedData) => handleSubmit(note.id, updatedData)}
        createTag={createTag}
        availableTags={availableTags}
        title={note.title}
        tags={note.tags}
        markdown={note.markdown}
      />
    </Container>
  );
};

export default Edit;

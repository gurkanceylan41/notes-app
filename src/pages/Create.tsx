import { Container } from "react-bootstrap";
import CustomForm from "../components/form";
import { NoteData, Tag } from "../types";

export type CreateProps = {
  handleSubmit: (noteData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const Create = ({ handleSubmit, createTag, availableTags }: CreateProps) => {
  return (
    <Container className="p-5">
      <h2>Yeni Not Oluştur</h2>
      <CustomForm
        createTag={createTag}
        handleSubmit={handleSubmit}
        availableTags={availableTags}
      />
    </Container>
  );
};

export default Create;

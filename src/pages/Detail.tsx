import { Badge, Button, Col, Container, Row, Stack } from "react-bootstrap";
import { Link, useOutletContext } from "react-router-dom";
import { Note } from "../types";
import Markdown from "react-markdown";

type Props = {
  deleteNote: (id: string) => void;
};
const Detail = ({ deleteNote }: Props) => {
  const note = useOutletContext<Note>();
  return (
    <Container className="mx-auto py-5 align-items-center ">
      <Row>
        <Col>
          <h1>{note.title}</h1>

          <Stack gap={2} direction="horizontal" className="flex-wrap ">
            {note.tags.map((tag, i) => (
              <Badge key={i}>{tag.label}</Badge>
            ))}
          </Stack>
        </Col>

        <Col>
          <Stack
            gap={2}
            direction="horizontal"
            className="justify-content-end mt-2"
          >
            <Link to={"/"}>
              <Button variant="secondary">Geri</Button>
            </Link>
            <Link to={"edit"}>
              <Button>Düzenle</Button>
            </Link>
            <Button onClick={() => deleteNote(note.id)} variant="danger">
              Sil
            </Button>
          </Stack>
        </Col>
      </Row>

      <Markdown className="mt-5">{note.markdown}</Markdown>
    </Container>
  );
};

export default Detail;

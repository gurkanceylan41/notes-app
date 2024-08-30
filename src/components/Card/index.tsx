import { Badge, Card, CardBody, Stack } from "react-bootstrap";
import { Note } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  note: Note;
};

const CustomCard = ({ note }: Props) => {
  return (
    <Link to={`/note/${note.id}`}>
      <Card className="note_card">
        <CardBody>
          <Stack
            gap={2}
            className="align-items-center h-100 justify-content-between "
          >
            <span className="fw-bold text-nowrap">{note.title}</span>

            <Stack
              gap={2}
              direction="horizontal"
              className="justify-content-center"
            >
              {note.tags.map((tag, i) => (
                <Badge key={i}>{tag.label}</Badge>
              ))}
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CustomCard;

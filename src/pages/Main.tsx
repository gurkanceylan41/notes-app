import { Link } from "react-router-dom";
import { Note, Tag } from "../types";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  Row,
  Stack,
} from "react-bootstrap";
import Card from "../components/Card";
import reactSelect from "react-select";
import ReactSelect from "react-select";
import { useMemo, useState } from "react";

type Props = {
  availableTags: Tag[];
  notes: Note[];
};

const Main = ({ notes, availableTags }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [selectedTags, setselectedTags] = useState<Tag[]>([]);

  /*  
  1) Not başlıgı 1. inputta aratılan metni içermelidir. Note'un başlıgının küçük harfe çevrilmiş hali aratılan metnin küçük harfe çevrilmiş halini içeriyorsa koşul sağlanır
  &&
  2) 2. input ile seçilen etiketler note'un içersindeki etiketler ile birebir eşleşmelidir. seçilen etiketler dizisindeki her bir etiket için note'a ait etiketler arasında eşleşme kontrolü yapıcaz */
  const filtredNotes = useMemo(
    () =>
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLocaleLowerCase()) &&
          selectedTags.every((s_tag) =>
            note.tags.some((note_tag) => note_tag.value === s_tag.value)
          )
      ),
    [query, selectedTags]
  );

  /* every: Dizideki tüm öğelerin belirtilen koşulu sağlaması durumunda true döner. Aksi takdirde, ilk koşulu sağlamayan öğeyi bulduğunda false döner.

some: Dizideki en az bir öğenin belirtilen koşulu sağlaması durumunda true döner. Aksi takdirde, tüm öğeler koşulu sağlamıyorsa false döner.
*/

  return (
    <Container className="m-auto py-5">
      {/* Üst kısım */}
      <Stack direction="horizontal" className="justify-content-between mb-3">
        <div className="d-flex gap-3 align-items-center">
          <img width={45} src="/logo.png" alt="logo" />
          <h1>Notlar</h1>
        </div>

        <Link to={"/new"}>
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* Form Alanı */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <FormLabel>Başlıga Göre Ara</FormLabel>
              <FormControl onChange={(e) => setQuery(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <FormLabel>Başlıga Göre Ara</FormLabel>
              <ReactSelect
                onChange={(all_tags) => setselectedTags(all_tags as Tag[])}
                className="text-black"
                options={availableTags}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Not Listesi */}
      <Row xs={1} sm={2} lg={3} xl={4} className="mt-4 g-4">
        {filtredNotes.map((note) => (
          <Col key={note.id}>
            <Card note={note} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;

import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { Tag } from "../../types";
import { v4 } from "uuid";
import { CreateProps } from "../../pages/Create";

const CustomForm = ({
  createTag,
  handleSubmit,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: CreateProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  const handleForm = (e: FormEvent) => {
    e.preventDefault();

    //inputlardaki verilere eriş
    const title = inputRef.current?.value || "";
    const markdown = textRef.current?.value || "";

    handleSubmit({
      title,
      markdown,
      tags: selectedTags,
    });
    navigate("/");
  };

  return (
    <Form onSubmit={handleForm} className="my-4">
      {/*  */}
      {/* Başlık + Etiket inputu */}
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Başlık</Form.Label>
            <Form.Control defaultValue={title} ref={inputRef} />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Etiketler</Form.Label>
            <ReactSelect
              options={availableTags}
              // etiket nesenesi oluştur
              onChange={(allTags) => setSelectedTags(allTags as Tag[])}
              value={selectedTags}
              onCreateOption={(text: string) => {
                const newTag: Tag = { label: text, value: v4() };
                //locale kaydet
                createTag(newTag);
                // Seçili etiketler state'ine ekle
                setSelectedTags([...selectedTags, newTag]);
              }}
              isMulti
              className="text-black"
            />
          </Form.Group>
        </Col>
      </Row>

      {/* İçerik */}
      <Form.Group className="mt-4">
        <Form.Label>İçerik (Markdown destekler)</Form.Label>
        <Form.Control
          defaultValue={markdown}
          ref={textRef}
          as={"textarea"}
          style={{ minHeight: "300px", maxHeight: "500px" }}
        />
      </Form.Group>

      {/* Butonlar */}
      <Stack
        direction="horizontal"
        gap={4}
        className="justify-content-end mt-5"
      >
        <Link to={".."}>
          <Button type="button" variant="secondary">
            Geri
          </Button>
        </Link>

        <Button type="submit">Kaydet</Button>
      </Stack>
    </Form>
  );
};

export default CustomForm;

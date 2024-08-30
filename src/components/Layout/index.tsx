import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../../types";
type Props = {
  notes: Note[];
};
const Layout = ({ notes }: Props) => {
  //url'deki id al
  const { id } = useParams();

  //notes dizisindeki elemanı ara
  const found = notes.find((i) => i.id === id);

  //Bulamazsak anasayfaya yönlendir
  if (!found) return <Navigate to={"/"} replace />;

  // parent route içerisinde alt route'u renderla
  // note verisini alt route'a gönder
  return <Outlet context={found} />;
};

export default Layout;

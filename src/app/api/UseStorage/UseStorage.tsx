import { useState } from "react";
import { projectStorage } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch } from "react-redux";
import { URLS } from "../../../state/setUrl";

export const UseStorage = () => {
  const { user } = useAuth();
  const [error, setError] = useState<null | string>(null);
  const [filePath, setFilePath] = useState<string>("");
  const dispatch = useDispatch();

  const uploadImage = async (file: any) => {
    setFilePath(`covers/${user}/${file.name}`);
    const storageRef = ref(projectStorage, `covers/${user}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    try {
      await uploadTask.on(
        "state_changed",
        (snapshot) => {
          //   const prog = Math.round(
          //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          //   );
          //   setProgress(prog);
        },
        (err: any) => console.log(err),
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((url) =>
            dispatch({ type: URLS.GET_URL, payload: url })
          );
        }
      );
    } catch (err: any) {
      setError(err);
    }
  };
  return { filePath, error, uploadImage };
};

export default UseStorage;

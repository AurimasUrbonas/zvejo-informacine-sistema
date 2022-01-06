import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { auth } from "../../../config/firebase";
import { IUrlLink } from "../../../state/setUrl";
import { IFishingDashboard } from "./types/fishingDashboard";

export const FishingDashboards = () => {
  const store = useSelector((url: { url: IUrlLink }) => url.url.urlLink);
  const handleFishingDashboard = async (
    kada: string,
    kur: string,
    kokia: string,
    user: string
  ) => {
    const postsRef = collection(auth.getFirestore(), "dienorastis");
    try {
      let data = {
        kada: kada,
        kur: kur,
        kokia: kokia,
        url: store,
        user: user,
      } as IFishingDashboard;
      await addDoc(postsRef, data);
    } catch (error: any) {
      console.log(error);
    }
  };
  return { handleFishingDashboard };
};
export default FishingDashboards;

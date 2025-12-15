import { useEffect} from "preact/hooks";
import { ensurePreactDevtools } from "../utils/devtools";

export default function ClientDevBoot() {
    useEffect(() => {
        void ensurePreactDevtools();
    }, []);

    // Nothing to render
    return null;
}
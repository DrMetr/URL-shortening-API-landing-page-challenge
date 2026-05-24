import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import styles from "./linkShorter.module.css";
import LinkInput from "../../components/linkShortener/LinkInput";
import LinkList from "../../components/linkShortener/LinkList";

const LinkShorter = () => {
  const [items, setItems] = useState([]);

  const mutation = useMutation({
    mutationFn: async (url) => {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ url: url }),
        mode: "no-cors",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }
      const data = await response.json();
      return data.result_url;
    },
    onError: (error) => {
      setItems([
        ...items,
        { original: `Sorry, an error occured`, shortened: null },
      ]);
    },
    onSuccess: (shortened, original) => {
      setItems([...items, { original: original, shortened: shortened }]);
    },
  });

  const addItem = (url) => {
    if (!url || url.trim() === "") return;
    mutation.mutate(url.trim());
  };

  return (
    <section className={styles.section}>
      <LinkInput onClick={addItem} onAdd={addItem} />
      <LinkList items={items} />
    </section>
  );
};

export default LinkShorter;

{
  /*const { data, refetch } = useQuery(
    "myKey",
    (item) => {
      fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );*/
}

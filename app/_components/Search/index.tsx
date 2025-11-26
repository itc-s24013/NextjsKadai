"use client";

import Image from "next/image";
import styles from "./index.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { defaultConfig } from "next/dist/server/config-shared";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/menu/search?${params.toString()}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.search}>
        <Image
          src="/search.png"
          alt="検索"
          width={25}
          height={25}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          className={styles.searchInput}
          defaultValue={searchParams.get("q") ?? undefined}
        />
      </label>
    </form>
  );
}

export default function Search() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}

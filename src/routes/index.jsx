import { Link } from "@solidjs/router";
// import { createQuery } from "@tanstack/solid-query";
import get from "lodash/get";
import { createSignal, onMount, Show } from "solid-js";
import Counter from "~/components/Counter";

/** @type {import('solid-js').ParentComponent} */
const BrowserOnly = (props) => {
  const [visible, setVisible] = createSignal(false);
  onMount(() => {
    setVisible(true);
  });

  return <Show when={visible()}>{props.children}</Show>;
};

const QueryX = () => {
  // const query = createQuery(
  //   () => ["todos"],
  //   () => Promise.resolve("hello world" + Math.random()),
  //   {
  //     // suspense: false,
  //     // enabled: false,
  //   }
  // );

  const query = {
    data: "hello",
  };

  return <pre>{query.data}</pre>;
};

export default function Home() {
  // const query = {};

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <BrowserOnly>
        <QueryX />
      </BrowserOnly>
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
        {get({ a: { b: { c: "123" } } }, "a.b.c")}
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <Link
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </Link>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <Link href="/about" class="text-sky-600 hover:underline">
          About Page
        </Link>{" "}
      </p>
    </main>
  );
}

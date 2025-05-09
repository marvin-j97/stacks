import createActionMode from "./actionBaseMode";
import { Signal } from "@preact/signals";

import { invoke } from "@tauri-apps/api/tauri";

import { Stack } from "../types";
import { Modes } from "./types";

const setContentType = createActionMode(
  (_stack: Stack) => "Set content type",
  (_stack: Stack, availOptions: Signal<string[]>) => {
    availOptions.value = [
      "Plain Text",
      "Markdown",
      "Nushell",
      "Shell",
      "C",
      "C++",
      "CSS",
      "Diff",
      "Erlang",
      "Go",
      "Graphviz",
      "HTML",
      "Haskell",
      "Java",
      "JSON",
      "JavaScript",
      "Lisp",
      "Lua",
      "Makefile",
      "MATLAB",
      "OCaml",
      "Objective-C",
      "PHP",
      "Perl",
      "Python",
      "R",
      "Regular Expression",
      "reStructuredText",
      "Ruby",
      "Rust",
      "SQL",
      "XML",
      "YAML",
    ];
  },
  (stack: Stack, modes: Modes, content_type: string) => {
    console.log(`Content type set to: ${content_type}`);
    const item = stack.selected();
    if (!item) return;
    invoke("store_set_content_type", {
      hash: item.hash,
      contentType: content_type,
    });
    modes.deactivate();
  },
);

export default setContentType;

import React from "react";
import { NumberInputProps, PatchEvent, set } from "sanity";
import { TextInput } from "@sanity/ui";

export default function PriorityInput({
  value,
  onChange,
  readOnly,
}: NumberInputProps) {
  return (
    <TextInput
      type="number"
      step={0.1}
      min={0}
      max={1}
      readOnly={readOnly}
      value={value?.toString() ?? ""}
      onChange={(e) => {
        const newValue = parseFloat(e.currentTarget.value);
        if (!isNaN(newValue)) {
          onChange(PatchEvent.from(set(newValue)));
        }
      }}
    />
  );
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form } from "@base-ui/react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const items = [
  { label: "SELECT", value: "select" },
  { label: "INSERT", value: "insert" },
  { label: "UPDATE", value: "update" },
  { label: "DELETE", value: "delete" },
];

export function CardContentLeft() {
  const listFields = ["id", "nome", "cpf", "cidade"]
  const listCondition = ["ativo = true", "and cidade = 'Curitiba'"]
  const [fields, setFields] = useState(listFields.map((e) => `${e}\n`).join(""))
  const [condition, setCondition] = useState(listCondition.map((e) => `${e}\n`).join(""));

  return (
    <Form className="flex flex-col gap-5 text-[#E4E4E7]">
      <Field>
        <FieldLabel htmlFor="select-query-types">Query Types</FieldLabel>
        <Select defaultValue={items[0].label} id="select-query-types">
          <SelectTrigger className="w-full py-6 px-4 text-lg">
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="bg-[#18181B] text-[#E4E4E7]">
            <SelectGroup>
              <SelectLabel>Query Types</SelectLabel>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.label}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-table">Table</FieldLabel>
        <Input
          id="input-table"
          type="text"
          placeholder="usuarios"
          className="w-full py-6 px-4 placeholder:text-lg text-lg"
        ></Input>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-fields">Fields</FieldLabel>
        <Textarea
          id="input-fields"
          type="text"
          value={fields}
          onChange={(e) => setFields(e.target.value)}
          className="w-full py-4 px-4 placeholder:text-lg text-lg bg-[#18181B]"
        >
        </Textarea>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-codition">Condition</FieldLabel>
        <Textarea
          id="input-codition"
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="w-full py-4 px-4 placeholder:text-lg text-lg bg-[#18181B]"
        >
        </Textarea>
      </Field>

      <div className="w-full grid grid-cols-2 gap-2">
        <Button className="bg-[#3B82F6] w-full cursor-pointer">Gerar SQL</Button>
        <Button className="bg-[#18181B] border border-white w-full cursor-pointer">Limpar</Button>
      </div>
    </Form>
  );
}

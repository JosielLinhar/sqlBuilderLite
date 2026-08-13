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
import { useContext } from "react";
import { TextoContext } from "../Context";

const items = [
  { label: "SELECT", value: "select" },
  { label: "INSERT", value: "insert" },
  { label: "UPDATE", value: "update" },
  { label: "DELETE", value: "delete" },
];

export function CardContentLeft() {
  const {                                                                                   
    table,
    setTable,
    fields,
    setFields,
    queryType,
    setQueryType,
    condition,
    setCondition,
    setFormatedSql,
  } = useContext(TextoContext);

  function GenerateSql() {
    if (queryType === "update") {
      setFormatedSql(
        `${queryType} ${table}\nset ${fields.split("\n")}\nwhere ${condition}`
      );
      return;
    } else if (queryType === "insert") {
      setFormatedSql(
        `${queryType} into ${table} (${fields.split("\n")})\nvalues (${condition})`
      );
      return;
    } else if (queryType === "delete") {
      setFormatedSql(`${queryType} from ${table}\nwhere ${condition}`);
      return;
    }
    setFormatedSql(`${queryType} ${fields.split("\n")}\nfrom ${table}\nwhere ${condition}`);
  }

  function ClearInfo() {
    setTable("");
    setFields("");
    setQueryType("");
    setCondition("");
  }

  return (
    <Form className="flex flex-col gap-5 text-[#E4E4E7]">
      <Field>
        <FieldLabel htmlFor="select-query-types">Query Types</FieldLabel>
        <Select
          defaultValue={items[0].label}
          id="select-query-types"
          onValueChange={(e) => setQueryType(e)}
        >
          <SelectTrigger className="w-full py-6 px-4 text-lg border border-[#27272A]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="bg-[#18181B] text-[#E4E4E7]">
            <SelectGroup>
              <SelectLabel>Query Types</SelectLabel>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
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
          value={table}
          onChange={(e) => setTable(e.target.value)}
          className="w-full py-6 px-4 placeholder:text-lg text-lg border border-[#27272A]"
        ></Input>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-fields">Fields</FieldLabel>
        <Textarea
          id="input-fields"
          type="text"
          value={fields}
          placeholder={`id\nnome\ncpf\nscidade`}
          onChange={(e) => setFields(e.target.value)}
          className="w-full py-4 px-4 placeholder:text-lg text-lg bg-[#18181B] border border-[#27272A]"
        ></Textarea>
      </Field>

      <Field>
        <FieldLabel htmlFor="input-codition">Condition</FieldLabel>
        <Textarea
          id="input-codition"
          type="text"
          value={condition}
          placeholder={`ativo = true\nand cidade = 'Curitiba'`}
          onChange={(e) => setCondition(e.target.value)}
          className="w-full py-4 px-4 text-lg placeholder:text-lg bg-[#18181B] border border-[#27272A]"
        ></Textarea>
      </Field>

      <div className="w-full grid grid-cols-2 gap-2">
        <Button
          className="bg-[#3B82F6] w-full cursor-pointer border border-[#27272A]"
          onClick={() => GenerateSql()}
        >
          Gerar SQL
        </Button>
        <Button
          className="bg-[#18181B] border border-[#27272A] w-full cursor-pointer"
          onClick={() => ClearInfo()}
        >
          Limpar
        </Button>
      </div>
    </Form>
  );
}

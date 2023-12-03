import { chakra } from "@chakra-ui/system"
import { useState } from "react"
import { InputSearch, InputSearchOptionProps } from "../src"
import { states } from "../tests/mock"

export default {
  title: "Components / Forms / InputSearch",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="560px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
}

export const Basic = () => {
  const [results, setResults] = useState<InputSearchOptionProps[]>([])

  const handleChange = (query: string) => {
    setResults(
      query.length === 0
        ? []
        : states.filter(({ label }) => label.indexOf(query) !== -1),
    )
  }
  return (
    <>
      <InputSearch
        name="state"
        placeholder="Search for state"
        options={results}
        onQueryChange={handleChange}
      />
    </>
  )
}

export const DisplayResult = () => {
  const [value, setValue] = useState<string | undefined>()
  const [results, setResults] = useState<InputSearchOptionProps[]>([])

  const handleSelect = (result: InputSearchOptionProps) =>
    setValue(result.label)

  const handleChange = (query: string) => {
    setResults(
      query.length === 0
        ? []
        : states.filter(({ label }) => label.indexOf(query) !== -1),
    )
  }
  return (
    <>
      <chakra.div marginBottom={10} mt="2" fontSize="sm" color="gray.500">
        Selected state: {value}
      </chakra.div>
      <InputSearch
        placeholder="Search for state"
        options={results}
        onQueryChange={handleChange}
        onResultSelect={handleSelect}
      />
    </>
  )
}

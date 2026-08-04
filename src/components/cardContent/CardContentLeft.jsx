export function CardContentLeft() {
  return (
    <form className="flex flex-col">
      <label htmlFor="queryType" className="text-sm">Query Type</label>
      <select name="queryType" id="queryType" className="w-full border border-[#18181B] rounded-sm p-2 bg-transparent">
        <option value="select">SELECT</option>
        <option value="select">INSERT</option>
        <option value="select">UPDATE</option>
        <option value="select">DELETE</option>
      </select>
    </form>
  )
}
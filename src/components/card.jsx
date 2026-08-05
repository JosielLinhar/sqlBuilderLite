export function Card(props) {
  return (
    <div className="w-full bg-[#18181B] border border-[#27272A] rounded-lg my-5 p-5">
      <h1 className="text-2xl font-semibold mb-2">{props.title}</h1>
      <div>
        {props.cardContent}
      </div>
    </div>
  )
}
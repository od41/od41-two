export default function ProjectDetails({ client, date, platform, role, method }) {
  return (
    <div className="">
      {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
      <div className="text-lg font-bold"><span>Client:</span> {client}</div>
      <div className="text-lg font-bold">Date: {date}</div>
      <div className="text-lg font-bold">Platform: {platform}</div>
      <div className="text-lg font-bold">Role: {role}</div>
      <div className="text-lg font-bold">Method(s): {method}</div>
    </div>
  )
}

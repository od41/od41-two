export default function ProjectDetails({ client, date, platform, role, method }) {
  return (
    <div className="flex flex-column md:flex-row">
      {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
      <div className="w-2/4">
        <div className="mb-2">
          <h5 className="font-display text-lg font-bold">Role</h5>
          <p className="font-body text-lg">{role}</p>
        </div>
        <div className="mb-2">
          <h5 className="font-display text-lg font-bold">Date</h5>
          <p className="font-body text-lg">{date}</p>
        </div>
        <div className="mb-2">
          <h5 className="font-display text-lg font-bold">Platform</h5>
          <p className="font-body text-lg">{platform}</p>
        </div>
      </div>

      <div className="w-2/4">
        <div className="mb-2">
          <h5 className="font-display text-lg font-bold">Client</h5>
          <p className="font-body text-lg">{client}</p>
        </div>
        <div className="mb-2">
          <h5 className="font-display text-lg font-bold">Methods &amp; Tools</h5>
          <p className="font-body text-lg">{method}</p>
        </div>
      </div>
    </div>
  );
}

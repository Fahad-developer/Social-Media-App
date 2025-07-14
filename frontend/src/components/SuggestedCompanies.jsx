export default function SuggestedCompanies({ companies }) {
  return (
    <aside className="p-4 space-y-2 border-r border-gray-200">
      <h2 className="font-bold mb-2">Suggested Companies</h2>
      {companies.map((c) => (
        <div key={c.id} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
          <img src={c.logo} alt={c.name} className="w-10 h-10 rounded-full" />
          <span>{c.name}</span>
        </div>
      ))}
    </aside>
  );
}

export default function SuggestedProducts({ products }) {
  return (
    <aside className="p-4 space-y-2 border-l border-gray-200">
      <h2 className="font-bold mb-2">Suggested Products</h2>
      {products.map((p) => (
        <div key={p.id} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
          <img src={p.image} alt={p.title} className="w-10 h-10 rounded" />
          <span>{p.title}</span>
        </div>
      ))}
    </aside>
  );
}

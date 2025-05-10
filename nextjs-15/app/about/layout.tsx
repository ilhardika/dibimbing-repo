export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is only for the about page
  return (
    <div>
      <div className="border-b border-red-500">AboutLayout</div>
      {children}
    </div>
  );
}

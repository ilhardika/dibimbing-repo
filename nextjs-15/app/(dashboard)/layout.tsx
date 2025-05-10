export default function DashboardLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b border-blue-200">Dashboard Layouts</div>
      {children}
    </>
  );
}

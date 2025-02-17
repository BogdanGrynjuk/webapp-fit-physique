export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>This is Header</header>
      <main>{children}</main>
    </>
  );
}

export const metadata = {
  title: 'RVSH',
  description: 'Roadside assistance platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K11EWHMG2Z"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K11EWHMG2Z');
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
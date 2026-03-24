import { Providers } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { aeonik, cn, generateMetadata, inter, dmSans, dmSerifDisplay, spaceGrotesk, manrope, neueMontreal } from "@/utils";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar">
      <body
        className={cn(
          "min-h-screen text-foreground antialiased overflow-x-hidden",
          aeonik.variable,
          inter.variable,
          dmSans.variable,
          dmSerifDisplay.variable,
          spaceGrotesk.variable,
          manrope.variable,
          neueMontreal.variable
        )}
      >
        <WebGLShader />
        <Providers>
          <Toaster richColors theme="dark" position="top-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}

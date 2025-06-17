// app/(trip-reports)/layout.tsx
import { Provider } from "@/provider/Provider";
import './trip-report.css';

export const metadata = {
  title: 'Trip Report',
  description: 'Vehicle trip report details',
}

export default function TripReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="trip-report-body">
      <Provider>
        {children}
        </Provider >
      </body>
    </html>
  );
}
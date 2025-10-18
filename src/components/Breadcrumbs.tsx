"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const filteredSegments = segments.filter((s) => isNaN(Number(s)));

  const crumbs = [
    { name: "Home", href: "/", isLast: filteredSegments.length === 0 },
    ...filteredSegments.map((segment, i) => {
      const href = "/" + filteredSegments.slice(0, i + 1).join("/");
      const isLast = i === filteredSegments.length - 1;

      const label = segment
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");

      return { name: label, href, isLast };
    }),
  ];

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <BreadcrumbItem key={crumb.href}>
            {crumb.isLast ? (
              <span className="text-gray-400">{crumb.name}</span>
            ) : (
              <BreadcrumbLink asChild>
                <Link
                  href={crumb.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {crumb.name}
                </Link>
              </BreadcrumbLink>
            )}
            {index < crumbs.length - 1 && (
              <BreadcrumbSeparator className="text-gray-400" />
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

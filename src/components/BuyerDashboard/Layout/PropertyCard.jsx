import React from "react";
import { Heart, Share2 } from "lucide-react";

function Button({ variant, size, className, children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded";
  const variantStyles = {
    ghost: "bg-transparent hover:bg-gray-100",
  };
  const sizeStyles = {
    icon: "p-2",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className }) {
  return <div className={`border rounded-lg shadow ${className}`}>{children}</div>;
}

function CardHeader({ children, className }) {
  return <div className={`border-b ${className}`}>{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function CardFooter({ children, className }) {
  return <div className={`border-t ${className}`}>{children}</div>;
}

function Avatar({ children, className }) {
  return (
    <div className={`relative rounded-full overflow-hidden bg-gray-200 ${className}`}>
      {children}
    </div>
  );
}

function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}

function AvatarFallback({ children }) {
  return (
    <div className="flex h-full w-full items-center justify-center text-sm font-medium text-gray-500">
      {children}
    </div>
  );
}

export function PropertyCard({
  title,
  price,
  priceType = "total",
  location,
  image,
  agent,
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
          <span className="absolute left-2 top-2 rounded bg-white px-2 py-1 text-xs">
            For Sale
          </span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          {priceType === "monthly" && (
            <span className="text-sm text-gray-500">/month</span>
          )}
        </div>
        <p className="text-sm text-gray-500">{location}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={agent.image} alt={agent.name} />
            <AvatarFallback>{agent.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-500">{agent.name}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

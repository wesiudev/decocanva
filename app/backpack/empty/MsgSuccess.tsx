import Link from "next/link";

export const Msg = () => (
  <div className="font-sans">
    <span>New image has been saved in your</span>
    <Link href="/backpack">
      <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent text-underline">
        {" "}
        Backpack
      </strong>
    </Link>
  </div>
);

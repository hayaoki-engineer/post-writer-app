import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href={"/"}>xをフォローする</Link>
          <h1>Post Writer</h1>
          <p>
            このアプリはNext.js
            AppRouterで作られたものです。ユーザーは自由に投稿をポストできます。
          </p>
        </div>
      </section>
    </>
  );
}
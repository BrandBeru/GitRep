import BreadcrumbsPath from "@common/Breadcrumbs";
import FilesList from "@common/FilesList";
import Nav from "@common/Nav";

export default function RepositoryInfo({name}:{name:string}) {
  return (
    <>
      <Nav name={name} />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <FilesList />
      </div>
    </>
  );
}

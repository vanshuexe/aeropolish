import PageShell from "../../components/PageShell";
import Content from "../../components/pages/CatalogsPage";
import data from "../../lib/data";
import site from "../../config/site";
import home from "../../config/home";
export const metadata = { title: "Catalogs" };
export default function Page() {
  const props = { catalogs: data.getCatalogs() };
  return (
    <PageShell active="" behavior="" headerTheme="" hideFooter={false}>
      <Content {...props} />
    </PageShell>
  );
}

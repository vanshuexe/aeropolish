import PageShell from "../../components/PageShell";
import Content from "../../components/pages/ColorTrendsPage";
import data from "../../lib/data";
import site from "../../config/site";
import home from "../../config/home";
export const metadata = { title: "Color Trends" };
export default function Page() {
  const props = {
    catalog: data.getCatalogs().find((c) => /trend/i.test(c.title)),
  };
  return (
    <PageShell active="colors" behavior="" headerTheme="" hideFooter={false}>
      <Content {...props} />
    </PageShell>
  );
}

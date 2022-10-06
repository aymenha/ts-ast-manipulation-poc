import { Project } from "ts-morph";

const testdata = [
  {
    id: "divider",
    type: "Divider",
    trackLabel: "divider_create_website",
    value: {},
  },
  {
    id: "shop_teaser",
    type: "TeaserSplit",
    trackLabel: "shop_teaser_create_shop",
    secondaryTrackLabel: "shop_teaser_how_to_create",
    value: {
      image: {
        TeaserSplit: "../../images/shared/shop-related/shop_section.jpg",
      },
    },
  },
  {
    id: "examples_title",
    type: "HeadlineCopy",
    value: {},
  },
];

const project = new Project();

async function run(project: Project) {
  const sourcefile = project.addSourceFileAtPath("./test.ts");
  const blocklistDec = sourcefile.getVariableDeclaration("blockslist");
  if (!blocklistDec) throw `No "blockslist" declaration is found`;

  blocklistDec
    .set({
      initializer: JSON.stringify(testdata),
    })
    .formatText();

  await project.save();
}

run(project);

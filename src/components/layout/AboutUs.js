
import SectionHeader from "./SectionHeader";

export default function AboutUs() {
  

  return (
    <section className="my-24 scroll-mt-24" id="about">
      <SectionHeader subHeader={"Our Story"} mainHeader={"About us"} />
      <div className="text-gray-600 mt-7">
        <div className="grid grid-cols-5">
          <div className="cursor-pointer shadow-md shadow-black/25 hover:shadow-lg hover:shadow-black/50 bg-gradient-to-r from-fuchsia-200 to-blue-200 space-y-4 col-span-3 mt-10 place-items-start p-7 rounded border border-gray-400">
            <h3 className="text-3xl text-black">Who We Are</h3>
            <p className="text-left">
              Pizza guru is here to help you cook delicious meals with less
              stress and more joy. We offer recipes and cooking advice for home
              cooks, by home cooks. Helping create “kitchen wins” is what we’re
              all about.
            </p>
            <p className="text-left">
              Pizza guru was founded in 2003 by Elise Bauer as a home cooking
              blog to record her favorite family recipes. Today, Simply Recipes
              has grown into a trusted resource for home cooks with more than
              3,000 tested recipes, guides, and meal plans, drawing over 15
              million readers each month from around the world. We’re supported
              by a diverse group of recipe developers, food writers, recipe and
              product testers, photographers, and other creative professionals.
            </p>
          </div>
        </div>
        <div className="col-span-2">

        </div>

        <div className="grid grid-cols-5">
          <div className="col-span-2"></div>

          <div className="cursor-pointer shadow-md shadow-black/25 hover:shadow-lg hover:shadow-black/50 bg-gradient-to-r from-fuchsia-200 to-blue-200 space-y-4 col-span-3 mt-10 place-items-start p-7 rounded border border-gray-400 text-right">
            <h3 className="text-3xl text-black">Our History</h3>
            <p className="">
              Elise Bauer was a busy Silicon Valley executive when she became
              sick with a flu that wouldn’t go away in 2001. In 2003, Elise
              moved home with her parents and lived with them for several years,
              recovering from chronic fatigue and documenting her parents’
              cooking on Simply Recipes. (Here’s more of that story.) Over the
              years, what started as a small blog grew to reach millions of
              readers every month! In 2020, Simply Recipes was acquired by
              Dotdash Meredith, a New York-based media company.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="cursor-pointer shadow-md shadow-black/25 hover:shadow-lg hover:shadow-black/50 bg-gradient-to-r from-fuchsia-200 to-blue-200 space-y-4 col-span-3 mt-10 place-items-start p-7 rounded border border-gray-400">
            <h3 className="text-3xl text-black">
              Recipe Development & Testing
            </h3>
            <p className="text-left">
              Our recipes primarily use fresh, unprocessed ingredients but we
              also believe there is a time and a place for canned, frozen, and
              other prepared ingredients. We believe in a diet that includes a
              wide variety of foods: real butter and cream, extra virgin olive
              oil, eggs, lots of fruits and vegetables, and protein from meat,
              fish, beans, and cheese. Plus cake for dessert.
            </p>
            <p className="text-left">
              There are three things we think about when deciding if a recipe is
              good enough to go on Simply Recipes:
            </p>
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-5">
          <div className="col-span-2"></div>
          <div className="cursor-pointer shadow-md shadow-black/25 hover:shadow-lg hover:shadow-black/50 bg-gradient-to-r from-fuchsia-200 to-blue-200 space-y-4 col-span-3 mt-10 place-items-start p-7 rounded border border-gray-400 text-right">
            <h3 className="text-3xl text-black">Diversity & Inclusion</h3>
            <p className="">
              Everyone is welcome at the Simply Recipes table: people of all
              races, religions, genders, sexual orientations, ages, backgrounds,
              and abilities. We strive to be a resource for every home cook, and
              we consciously work to make this inclusion felt in every part of
              the site, from the individuals we hire to the recipes we share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

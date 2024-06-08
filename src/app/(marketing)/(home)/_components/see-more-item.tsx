type Props = {};

export const SeeMoreItem = ({}: Props) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg">
        <video className="aspect-video w-full" controls>
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <div className="p-4">
          <h3 className="text-xl font-bold">
            Présentation de l&apos;entreprise
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Découvrez notre histoire et notre vision pour l&apos;avenir.
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg">
        <video className="aspect-video w-full" controls>
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>
        <div className="p-4">
          <h3 className="text-xl font-bold">Nos produits phares</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Découvrez nos produits les plus populaires.
          </p>
        </div>
      </div>
    </>
  );
};

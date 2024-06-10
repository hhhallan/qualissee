const MentionsLegalesPage = () => {
  return (
    <>
      <h1 className="mb-6 text-center text-3xl font-bold">Mentions Légales</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Informations Générales</h2>
        <p className="mb-2">
          <strong>Qualissee</strong>
        </p>
        <p className="mb-2">Adresse : 123 Rue Fictive, 75001 Paris, France</p>
        <p className="mb-2">Téléphone : +33 1 23 45 67 89</p>
        <p className="mb-2">Email : contact@qualissee.com</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Directeur de la publication
        </h2>
        <p className="mb-2">Jean Dupont, CEO</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Hébergement</h2>
        <p className="mb-2">Nom de l&apos;hébergeur : Hosting Company</p>
        <p className="mb-2">
          Adresse de l&apos;hébergeur : 456 Avenue Imaginaire, 75002 Paris,
          France
        </p>
        <p className="mb-2">
          Téléphone de l&apos;hébergeur : +33 1 98 76 54 32
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Propriété Intellectuelle
        </h2>
        <p className="mb-2">
          Le contenu du site (textes, images, graphismes, logo, etc.) est la
          propriété de Qualissee et est protégé par les lois françaises et
          internationales relatives à la propriété intellectuelle.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Collecte des Informations
        </h2>
        <p className="mb-2">
          Nous collectons des informations lorsque vous vous inscrivez sur notre
          site, vous abonnez à notre newsletter ou remplissez un formulaire. Les
          informations recueillies incluent votre nom, votre adresse e-mail et
          votre numéro de téléphone.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Utilisation des Informations
        </h2>
        <p className="mb-2">
          Les informations recueillies sont utilisées pour personnaliser votre
          expérience, améliorer notre site, améliorer le service client et vous
          contacter par e-mail.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Protection des Informations
        </h2>
        <p className="mb-2">
          Nous mettons en œuvre des mesures de sécurité pour préserver la
          sécurité de vos informations personnelles. Vos informations sont
          contenues derrière des réseaux sécurisés et accessibles uniquement à
          des personnes ayant des droits d’accès spéciaux à ces systèmes.
        </p>
      </section>
    </>
  );
};

export default MentionsLegalesPage;

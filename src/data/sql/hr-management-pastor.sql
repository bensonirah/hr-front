CREATE TABLE "Pasteur"
(
    "PasteurId"             uuid DEFAULT uuid_generate_v4(),
    "FirstName"             varchar(255) NOT NULL,
    "LastName"              varchar(255) NOT NULL,
    "AdresseId"             uuid         NOT NULL,
    "FemmeId"               uuid         NOT NULL,
    "FormationId"           uuid         NOT NULL,
    "FiangonanaNanolotraId" uuid         NOT NULL,
    "FiangonanaNiavianaId"  uuid         NOT NULL,
    "SinodeId"              uuid         NOT NULL,
    CONSTRAINT "pk_Pasteur" PRIMARY KEY ("PasteurId")
);

CREATE TABLE "Adresse"
(
    "AdresseId" uuid DEFAULT uuid_generate_v4(),
    "Name"      varchar(255) NOT NULL,
    CONSTRAINT "pk_Adresse" PRIMARY KEY ("AdresseId")
);

CREATE TABLE "Enfant"
(
    "EnfantId"  uuid DEFAULT uuid_generate_v4(),
    "FirstName" varchar(255) NOT NULL,
    "LastName"  varchar(255) NOT NULL,
    "PasteurId" uuid         NOT NULL,
    CONSTRAINT "pk_Enfant" PRIMARY KEY ("EnfantId")
);

CREATE TABLE "Femme"
(
    "FemmeId"   uuid DEFAULT uuid_generate_v4(),
    "FirstName" varchar(255) NOT NULL,
    "Lastname"  varchar(255) NOT NULL,
    CONSTRAINT "pk_Femme" PRIMARY KEY ("FemmeId")
);

CREATE TABLE "Formation"
(
    "FormationId" uuid     DEFAULT uuid_generate_v4(),
    "Promotion"   varchar(255)                  NOT NULL,
    "DateDebut"   dateTime DEFAULT getutcdate() NOT NULL,
    "DateFin"     dateTime DEFAULT getutcdate() NOT NULL,
    CONSTRAINT "pk_Formation" PRIMARY KEY ("FormationId"),
    CONSTRAINT "uc_Formation_Promotion" UNIQUE ("Promotion")
);

CREATE TABLE "Competance"
(
    "CompetanceId" uuid DEFAULT uuid_generate_v4(),
    "Libelle"      varchar(255) NOT NULL,
    "PasteurId"    uuid         NOT NULL,
    CONSTRAINT "pk_Competance" PRIMARY KEY ("CompetanceId")
);

CREATE TABLE "Fiangonana"
(
    "FiangonanaId" uuid DEFAULT uuid_generate_v4(),
    "Libelle"      varchar(255) NOT NULL,
    CONSTRAINT "pk_Fiangonana" PRIMARY KEY ("FiangonanaId"),
    CONSTRAINT "uc_Fiangonana_Libelle" UNIQUE ("Libelle")
);

CREATE TABLE "Sinode"
(
    "SinodeId" uuid DEFAULT uuid_generate_v4(),
    "Libelle"  varchar(255) NOT NULL,
    CONSTRAINT "pk_Sinode" PRIMARY KEY ("SinodeId")
);

ALTER TABLE "Pasteur"
    ADD CONSTRAINT "fk_Pasteur_AdresseId" FOREIGN KEY ("AdresseId")
        REFERENCES "Adresse" ("AdresseId");

ALTER TABLE "Pasteur"
    ADD CONSTRAINT "fk_Pasteur_FemmeId" FOREIGN KEY ("FemmeId")
        REFERENCES "Femme" ("FemmeId");

ALTER TABLE "Pasteur"
    ADD CONSTRAINT "fk_Pasteur_FormationId" FOREIGN KEY ("FormationId")
        REFERENCES "Formation" ("FormationId");

ALTER TABLE "Pasteur"
    ADD CONSTRAINT "fk_Pasteur_FiangonanaNanolotraId" FOREIGN KEY ("FiangonanaNanolotraId")
        REFERENCES "Fiangonana" ("FiangonanaId");

ALTER TABLE "Pasteur"
    ADD CONSTRAINT "fk_Pasteur_FiangonanaNiavianaId" FOREIGN KEY ("FiangonanaNiavianaId")
        REFERENCES "Fiangonana" ("FiangonanaId");

ALTER TABLE "Pasteur"
    ADD CONSTRAINT "fk_Pasteur_SinodeId" FOREIGN KEY ("SinodeId")
        REFERENCES "Sinode" ("SinodeId");

ALTER TABLE "Enfant"
    ADD CONSTRAINT "fk_Enfant_PasteurId" FOREIGN KEY ("PasteurId")
        REFERENCES "Pasteur" ("PasteurId");

ALTER TABLE "Competance"
    ADD CONSTRAINT "fk_Competance_PasteurId" FOREIGN KEY ("PasteurId")
        REFERENCES "Pasteur" ("PasteurId");


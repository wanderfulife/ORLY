// 🚉 THIAIS-ORLY STATION SURVEY QUESTIONNAIRE
// Based on "Questionnaire des entrants en gares de Thiais - Orly et Pont-de-Rungis"

export const templateSurveyQuestions = [
    // 📍 Survey period selection (work station equivalent)
    
    // 🗺️ Location selection
    {
        id: "LOCALISATION",
        text: "Localisation :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Pont de Rungis Aéroport d'Orly", next: "PERIODE" },
            { id: 2, text: "Thiais - Orly", next: "PERIODE" }
        ]
    },
    
    {
        id: "PERIODE",
        text: "Période d'enquête :",
        type: 'singleChoice',
        options: [
            { id: 1, text: "6h-10h", next: "Q1" },
            { id: 2, text: "10h-18h00", next: "Q1" }
        ]
    },
 // 🚗 Q1. Transport mode to station
    {
        id: "Q1",
        text: "Q1. Avec quel moyen de déplacement êtes-vous venu en gare ce matin ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q3" },
            { id: 2, text: "En bus/car", next: "Q3" },
            { id: 3, text: "Au volant d'une voiture", next: "Q2" },
            { id: 4, text: "Vous vous êtes fait déposer en voiture", next: "Q3" },
            { id: 5, text: "En vélo", next: "Q3" },
            { id: 6, text: "En moto/scooter", next: "Q3" },
            { id: 7, text: "En trottinette", next: "Q3" },
            { id: 8, text: "En taxi", next: "Q3" },
            { id: 9, text: "Autre", next: "Q1_AUTRE" }
        ]
    },

    // 📝 Transport other specification
    {
        id: "Q1_AUTRE",
        text: "Autre. Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "..........",
        next: "Q3"
    },

    // 🅿️ Q2. Parking location (conditional on driving)
    {
        id: "Q2",
        text: "Q2. Où est garée votre voiture ?",
        type: 'singleChoice',
        condition: "Q1 == 3",
        options: [
            { id: 1, text: "Rue du Docteur Marie (rue qui mène à la gare RER)", next: "Q3" },
            { id: 2, text: "Dans une rue de la cité jardin (quartier pavillonnaire à côté de la gare)", next: "Q3" },
            { id: 3, text: "Voirie de la zone d'activité, au sud de la voie ferrée", next: "Q3" },
            { id: 4, text: "Voirie de la zone d'activité, au nord de la voie ferrée", next: "Q3" },
            { id: 5, text: "Autre", next: "Q2_AUTRE" }
        ],
    },

    // 📝 Parking other specification
    {
        id: "Q2_AUTRE",
        text: "Autre ? préciser sa localisation :",
        type: 'freeText',
        freeTextPlaceholder: "..........",
        next: "Q3"
    },

    // 🏘️ Q3. Origin commune
    {
        id: "Q3",
        text: "Q3. De quelle commune êtes-vous parti ce matin ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Athis-Mons", next: "Q4" },
            { id: 2, text: "Chevilly-Larue", next: "Q4" },
            { id: 3, text: "Chilly-Mazarin", next: "Q4" },
            { id: 4, text: "Choisy-le-Roi", next: "Q4" },
            { id: 5, text: "Fresnes", next: "Q4" },
            { id: 6, text: "Juvisy-sur-Orge", next: "Q4" },
            { id: 7, text: "Morangis", next: "Q4" },
            { id: 8, text: "Orly", next: "Q4" },
            { id: 9, text: "Rungis", next: "Q4" },
            { id: 10, text: "Savigny-sur-Orge", next: "Q4" },
            { id: 11, text: "Thiais", next: "Q4" },
            { id: 12, text: "Villeneuve-le-Roi", next: "Q4" },
            { id: 13, text: "Wissous", next: "Q4" },
            { id: 14, text: "Autre", next: "Q3_AUTRE" }
        ]
    },

    // 📝 Commune other specification
    {
        id: "Q3_AUTRE",
        text: "Autre. Préciser :",
        type: 'commune',
        next: "Q4"
    },

    // ⏱️ Q4. Travel time
    {
        id: "Q4",
        text: "Q4. Combien de temps vous faut-il pour venir en gare depuis votre domicile ?",
        type: 'freeText',
        freeTextPlaceholder: "......h......min",
        validation: "time",
        next: "Q5"
    },

    // 🎯 Q5. Direction
    {
        id: "Q5",
        text: "Q5. Dans quelle direction prenez-vous le Métro/RER ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Aéroport d'Orly", next: "Q6" },
            { id: 2, text: "Massy - Palaiseau", next: "Q6" },
            { id: 3, text: "Paris", next: "Q6" }
        ]
    },

    // 🎯 Q6. Purpose of trip
    {
        id: "Q6",
        text: "Q6. Pour quel motif prenez-vous le Métro/RER ce matin ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Lieu de travail", next: "Q7" },
            { id: 2, text: "Lieu d'études", next: "Q7" },
            { id: 3, text: "Course, démarche administrative, loisir...", next: "Q7" },
            { id: 4, text: "Autre", next: "Q6_AUTRE" }
        ]
    },

    // 📝 Purpose other specification
    {
        id: "Q6_AUTRE",
        text: "Autre motif. Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "..........",
        next: "Q7"
    },

    // 📅 Q7. Frequency
    {
        id: "Q7",
        text: "Q7. À quelle fréquence venez-vous à cette gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours ou presque", next: "Q8" },
            { id: 2, text: "2 ou 3 fois par semaine", next: "Q8" },
            { id: 3, text: "2 ou 3 fois par mois", next: "Q8" },
            { id: 4, text: "Moins souvent", next: "Q8" }
        ]
    },

    // 💬 Q8. Comments
    {
        id: "Q8",
        text: "Q8. Autres observations ou commentaires :",
        type: 'freeText',
        freeTextPlaceholder: "........",
        next: "end"
    }
];
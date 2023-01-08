export default {
  character: {
    name: 'Cabot Snoodlepuff',
    level: 6,
    ancestry: {
      name: 'Gnome'
    },
    class: {
      name: 'Rogue'
    },
    health: [
      {
        label: 'Health points',
        value: 34,
        max: 100,
        color: 'red',
      },
      {
        label: 'Health points',
        value: 8,
        max: 10,
        color: 'blue',
      },
    ],
    abilityScores: [
      {
        name: 'Constitution',
        value: 16,
        proficient: true,
      },
      {
        name: 'Dexterity',
        value: 16,
        proficient: true,
      },
      {
        name: 'Charisma',
        value: 16,
        proficient: false,
      },
      {
        name: 'Wisdom',
        value: 16,
        proficient: false,
      },
      {
        name: 'Intelligence',
        value: 16,
        proficient: false,
      },
      {
        name: 'Strength',
        value: 16,
        proficient: true,
      },
    ]
  }
}

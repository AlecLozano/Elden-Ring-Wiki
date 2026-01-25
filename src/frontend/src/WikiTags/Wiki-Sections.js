import { User } from "lucide-react";

const tags = [
    {
        "name": "Characters",
        "children": undefined,
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/NPC.png`
    },
    {
        "name": "Bosses",
        "children": undefined,
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/BossIcon.png`
    },
    {
        "name": "Classes",
        "children": undefined,
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/ClassesIcon.png`
    },
    {
        "name": "Armaments",
        "children": [
            {
                "name": "Shields",
                "children": undefined
            },
            {
                "name": "Weapons",
                "children": undefined
            },
            {
                "name": "Ammo",
                "children": undefined
            }
        ],
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/ArmamentsIcon.png`

    },
    {
        "name": "Sorceries",
        "children": [
            {
                "name": "sorcery types",
                "children": undefined
            }
        ],
        "Icon": undefined
    },
    {
        "name": "Incantations",
        "children": [
            {
                "name": "Incant types",
                "children": undefined
            }
        ],
        "Icon": undefined
    },
    {
        "name": "Locations",
        "children": undefined,
        "Icon": undefined
    },
    {
        "name": "Armors",
        "children": undefined,
        "Icon": undefined
    },
    {
        "name": "Items",
        "children": undefined,
        "Icon": undefined
    },
    {
        "name": "Spirit Ashes",
        "children": undefined,
        "Icon": undefined
    },
    {
        "name": "Ashes of War",
        "children": undefined,
        "Icon": undefined
    }
];

export default tags;
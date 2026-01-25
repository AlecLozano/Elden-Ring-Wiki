import { User } from "lucide-react";

const tags = [
    {
        "name": "Characters",
        "children": null,
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/NPC.png`
    },
    {
        "name": "Bosses",
        "children": null,
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/BossIcon.png`
    },
    {
        "name": "Classes",
        "children": null,
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/ClassesIcon.png`
    },
    {
        "name": "Armaments",
        "children": [
            {
                "name": "Shields",
                "children": null
            },
            {
                "name": "Weapons",
                "children": null
            },
            {
                "name": "Ammo",
                "children": null
            }
        ],
        "Icon":  `${process.env.PUBLIC_URL}/Assets/Home Icons/ArmamentsIcon.png`

    },
    {
        "name": "Sorceries",
        "children": [
            {
                "name": "sorcery types",
                "children": null
            }
        ],
        "Icon": null
    },
    {
        "name": "Incantations",
        "children": [
            {
                "name": "Incant types",
                "children": null
            }
        ],
        "Icon": null
    },
    {
        "name": "Locations",
        "children": null,
        "Icon": null
    },
    {
        "name": "Armors",
        "children": null,
        "Icon": null
    },
    {
        "name": "Items",
        "children": null,
        "Icon": null
    },
    {
        "name": "Spirit Ashes",
        "children": null,
        "Icon": null
    },
    {
        "name": "Ashes of War",
        "children": null,
        "Icon": null
    }
];

export default tags;
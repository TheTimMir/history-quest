import { AssetsManifest } from "@drincs/pixi-vn";

// Імпортуємо зображення фонів
import bgDniproBoat from "../assets/backgrounds/dnipro_boat.png";
import bgDniproBaptism from "../assets/backgrounds/dniproBaptism.png";
import bgKyivArrival from "../assets/backgrounds/kyiv_arrival.png";
import bgKyivMeeting from "../assets/backgrounds/kyiv_meeting.png";
import bgKyivTriumph from "../assets/backgrounds/kyiv_triumph.png";
import bgKyivPaganHills from "../assets/backgrounds/kyivPaganHills.png";
import bgLiubechHearthCouncil from "../assets/backgrounds/liubechHearthCouncil.png";
import bgLiubechMap from "../assets/backgrounds/liubechMap.png";
import bgLiubechNightDnipro from "../assets/backgrounds/liubechNightDnipro.png";
import bgLiubechOathCross from "../assets/backgrounds/liubechOathCross.png";
import bgLiubechRoadsWinter from "../assets/backgrounds/liubechRoadsWinter.png";
import bgNovgorod from "../assets/backgrounds/novgorod.png";
import bgPerunDragged from "../assets/backgrounds/perunDragged.png";
import bgScriptorium from "../assets/backgrounds/scriptorium.png";
import bgVolodymyrHall from "../assets/backgrounds/volodymyrHall.png";

import ihorStanding from "../assets/characters/ihor/standing1.png";
import ihorAndOleg from "../assets/characters/ihor_and_oleg.png";

// Опціонально: UI елементи
//import parchment from "./ui/parchment.png"; // Пергамент

const manifest: AssetsManifest = {
    bundles: [
        {
            name: "ihor",
            assets: [
                {
                    alias: "ihorStanding",
                    src: ihorStanding,
                },
                {
                    alias: "ihorAndOleg",
                    src: ihorAndOleg,
                },
            ],
        },
        // Bundle для фонів - завантажуємо на старті
        {
            name: "bg",
            assets: [
                {
                    alias: "novgorodTable",
                    src: bgNovgorod,
                },
                {
                    alias: "kyivArrival",
                    src: bgKyivArrival,
                },
                {
                    alias: "kyivMeeting",
                    src: bgKyivMeeting,
                },
                {
                    alias: "kyivTriumph",
                    src: bgKyivTriumph,
                },
                {
                    alias: "dniproBoat",
                    src: bgDniproBoat,
                },
                { alias: "kyivPaganHills", src: bgKyivPaganHills },
                { alias: "volodymyrHall", src: bgVolodymyrHall },
                { alias: "perunDragged", src: bgPerunDragged },
                { alias: "dniproBaptism", src: bgDniproBaptism },
                { alias: "scriptorium", src: bgScriptorium },
                { alias: "liubechRoadsWinter", src: bgLiubechRoadsWinter },
                { alias: "liubechHearthCouncil", src: bgLiubechHearthCouncil },
                { alias: "liubechOathCross", src: bgLiubechOathCross },
                { alias: "liubechMap", src: bgLiubechMap },
                { alias: "liubechNightDnipro", src: bgLiubechNightDnipro },
            ],
        },
    ],
};
export default manifest;

import { AssetsManifest } from "@drincs/pixi-vn";

// Імпортуємо зображення фонів
import bgCossackChyhyryn1648 from "../assets/backgrounds/cossackChyhyryn1648.png";
import bgCossackDiplomaticDesk from "../assets/backgrounds/cossackDiplomaticDesk.png";
import bgCossackPereiaslavZboriv from "../assets/backgrounds/cossackPereiaslavZboriv.png";
import bgCossackPolishCampCouncil from "../assets/backgrounds/cossackPolishCampCouncil.png";
import bgCossackTatarCamp from "../assets/backgrounds/cossackTatarCamp.png";
import bgDniproBoat from "../assets/backgrounds/dnipro_boat.png";
import bgDniproBaptism from "../assets/backgrounds/dniproBaptism.png";
import bgHalych1340_CasimirCouncil from "../assets/backgrounds/halych1340_CasimirCouncil.png";
import bgHalych1340_DedkoCouncil from "../assets/backgrounds/halych1340_DedkoCouncil.png";
import bgHalych1340_LubartClaim from "../assets/backgrounds/halych1340_LubartClaim.png";
import bgHalych1340_LvivMagdeburg from "../assets/backgrounds/halych1340_LvivMagdeburg.png";
import bgHalych1340_PartitionBorder from "../assets/backgrounds/halych1340_PartitionBorder.png";
import bgHalychBoyarHall from "../assets/backgrounds/halychBoyarHall.png";
import bgHalychCoronationDorohychyn from "../assets/backgrounds/halychCoronationDorohychyn.png";
import bgHalychCouncilPushback from "../assets/backgrounds/halychCouncilPushback.png";
import bgHalychCourtDebate from "../assets/backgrounds/halychCourtDebate.png";
import bgHalychDniesterBanks from "../assets/backgrounds/halychDniesterBanks.png";
import bgHalychEnvoysMap from "../assets/backgrounds/halychEnvoysMap.png";
import bgHalychFortressesLviv from "../assets/backgrounds/halychFortressesLviv.png";
import bgHalychFrontierNight from "../assets/backgrounds/halychFrontierNight.png";
import bgHalychLetterLyon from "../assets/backgrounds/halychLetterLyon.png";
import bgHalychRomanProclaims from "../assets/backgrounds/halychRomanProclaims.png";
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
                { alias: "halychBoyarHall", src: bgHalychBoyarHall },
                { alias: "halychEnvoysMap", src: bgHalychEnvoysMap },
                { alias: "halychRomanProclaims", src: bgHalychRomanProclaims },
                { alias: "halychCouncilPushback", src: bgHalychCouncilPushback },
                { alias: "halychDniesterBanks", src: bgHalychDniesterBanks },
                { alias: "halychLetterLyon", src: bgHalychLetterLyon },
                { alias: "halychCourtDebate", src: bgHalychCourtDebate },
                { alias: "halychCoronationDorohychyn", src: bgHalychCoronationDorohychyn },
                { alias: "halychFortressesLviv", src: bgHalychFortressesLviv },
                { alias: "halychFrontierNight", src: bgHalychFrontierNight },
                { alias: "halych1340_DedkoCouncil", src: bgHalych1340_DedkoCouncil },
                { alias: "halych1340_CasimirCouncil", src: bgHalych1340_CasimirCouncil },
                { alias: "halych1340_LubartClaim", src: bgHalych1340_LubartClaim },
                { alias: "halych1340_LvivMagdeburg", src: bgHalych1340_LvivMagdeburg },
                { alias: "halych1340_PartitionBorder", src: bgHalych1340_PartitionBorder },
                { alias: "cossackChyhyryn1648", src: bgCossackChyhyryn1648 },
                { alias: "cossackTatarCamp", src: bgCossackTatarCamp },
                { alias: "cossackPolishCampCouncil", src: bgCossackPolishCampCouncil },
                { alias: "cossackPereiaslavZboriv", src: bgCossackPereiaslavZboriv },
                { alias: "cossackDiplomaticDesk", src: bgCossackDiplomaticDesk },
            ],
        },
    ],
};
export default manifest;

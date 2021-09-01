const presence = new Presence({
    clientId: "856464238720712715"
});
const browsingStamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", async () => {
    const presenceData = {
        state: "tyrolium.fr",
        startTimestamp: browsingStamp,
    };
    if (document.location.pathname == "/") {
        presenceData.details = "Home";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/ServerMC/")) {
        presenceData.details = "Home - TyroServ";
        presenceData.largeImageKey = "server";
        presenceData.smallImageKey = "logo";
        presenceData.smallImageText = "Tyrolium";
    }
    else if (document.location.pathname.includes("/Wonderlium/")) {
        presenceData.details = "Home - Wonderlium";
        presenceData.largeImageKey = "wonderlium";
        presenceData.smallImageKey = "logo";
        presenceData.smallImageText = "Tyrolium";
    }
    else if (document.location.pathname.includes("/Contenu/Image/")) {
        presenceData.details = "Watching Picture";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/Contenu/Php/api/")) {
        presenceData.details = "Api Panel";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/Contenu/")) {
        presenceData.details = "Watching Files Hosted";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/Download/")) {
        presenceData.details = "Watching files of Download";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/dev/")) {
        presenceData.details = "Developpeur Panel";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/s-update-discord/")) {
        presenceData.details = "AdminPanel - TyroDiscordRCPSwitch";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/s-update-launch/")) {
        presenceData.details = "AdminPanel - TyroLauncher";
        presenceData.largeImageKey = "logo";
    }
    else if (document.location.pathname.includes("/s-update-mc/")) {
        presenceData.details = "AdminPanel - TyroServ";
        presenceData.largeImageKey = "logo";
    }
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }
});

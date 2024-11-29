// Toggle Creator Information
document.getElementById("creatorBtn").addEventListener("click", () => {
    const creatorInfo = document.getElementById("creatorInfo");
    if (creatorInfo.style.display === "none") {
        creatorInfo.style.display = "block";
    } else {
        creatorInfo.style.display = "none";
    }
});

// Toggle Social Media Section
document.getElementById("showSocialBtn").addEventListener("click", () => {
    const socialSection = document.getElementById("socialMedia");
    if (socialSection.style.display === "none") {
        socialSection.style.display = "block";
    } else {
        socialSection.style.display = "none";
    }
});

// Toggle TCA Information
document.getElementById("tcaBtn").addEventListener("click", () => {
    const tcaInfo = document.getElementById("tcaInfo");
    if (tcaInfo.style.display === "none") {
        tcaInfo.style.display = "block";
    } else {
        tcaInfo.style.display = "none";
    }
});

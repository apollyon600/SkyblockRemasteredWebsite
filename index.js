const items = require('minecraft-data')("1.8.8");
let clipboardForJava = "";
const colors = {
    "0": "#000000",
    "1": "#0000AA",
    "2": "#00AA00",
    "3": "#00AAAA",
    "4": "#AA0000",
    "5": "#AA00AA",
    "6": "#FFAA00",
    "7": "#AAAAAA",
    "8": "#555555",
    "9": "#5555FF",
    "a": "#55FF55",
    "b": "#55FFFF",
    "c": "#FF5555",
    "d": "#FF55FF",
    "e": "#FFFF55",
    "f": "#FFFFFF"
};

const types = ['Right Click', 'Sneak', 'Passive'];
const ability = ['Item Ability', 'Full Set Bonus', 'Piece Bonus'];

class FunctionStructure {
    constructor() {}

    e() {

        // Lines for the initilization of the code. (Defining what material and name it is.)
        let material = items.items[document.getElementById("itemIDField")
            .value];
        let amount = document.getElementById("itemAmountField")
            .value || 1;
        let itemName = document.getElementById("itemName")
            .innerHTML.toUpperCase()
            .replace(/ +/g, "_")
            .replace(/&[0-9a-zA-Z]/g, "")
            .replace(/<BR>/g, "");

        let displayName = document.getElementById("itemNameField")
            .value;

        let itemDamage = document.getElementById("itemDamageField")
            .value;
        let itemStrength = document.getElementById("itemStrengthField")
            .value;
        let itemCritDamage = document.getElementById("itemCritDamageField")
            .value;
        let itemCritChance = document.getElementById("itemCritChanceField")
            .value;
        let itemAttackSpeed = document.getElementById("itemAttackSpeedField")
            .value;
        let itemSeaCreatureChance = document.getElementById("itemSeaCreatureChanceField")
            .value;
        let itemHealth = document.getElementById("itemHealthField")
            .value;
        let itemDefense = document.getElementById("itemDefenseField")
            .value;
        let itemSpeed = document.getElementById("itemSpeedField")
            .value;
        let itemIntelligence = document.getElementById("itemIntelligenceField")
            .value;
        let itemTrueDefense = document.getElementById("itemTrueDefenseField")
            .value;
        let itemMagicFind = document.getElementById("itemMagicFindField")
            .value;
        let itemPetLuck = document.getElementById("itemPetLuckField")
            .value;

        let abilityNameA = document.getElementById("abilityNameA")
            .value;
        let abilityDescA = document.getElementById("abilityDescA")
            .value;
        let abilityCostA = document.getElementById("abilityCostA")
            .value;
        let abilityCooldownA = document.getElementById("abilityCooldownA")
            .value;
        let abilityUsageA = document.getElementById("abilityUsageA")
            .innerHTML;
        let abilityTypeA = document.getElementById("abilityTypeA")
            .innerHTML;  

        let abilityNameB = document.getElementById("abilityNameB")
            .value;
        let abilityDescB = document.getElementById("abilityDescB")
            .value;
        let abilityCostB = document.getElementById("abilityCostB")
            .value;
        let abilityCooldownB = document.getElementById("abilityCooldownB")
            .value;
        let abilityUsageB = document.getElementById("abilityUsageA")
            .innerHTML;
        let abilityTypeB = document.getElementById("abilityTypeA")
            .innerHTML; 

        let abilityNameC = document.getElementById("abilityNameC")
            .value;
        let abilityDescC = document.getElementById("abilityDescC")
            .value;
        let abilityCostC = document.getElementById("abilityCostC")
            .value;
        let abilityCooldownC = document.getElementById("abilityCooldownC")
            .value;
        let abilityUsageC = document.getElementById("abilityUsageA")
            .innerHTML;
        let abilityTypeC = document.getElementById("abilityTypeA")
            .innerHTML; 

        let itemDescription = document.getElementById("itemDescriptionField")
            .innerHTML;
        let isReforgeable = document.getElementById("isReforgeable")
            .checked;
        let isRecomb = document.getElementById("isRecomb")
            .checked;
        let itemRarity = document.getElementById("itemRarityField")
        let itemType = document.getElementById("itemType")
            .innerHTML;
        let recomb2 = document.getElementById("recomb2")
            .innerHTML;
        let itemTypeField = document.getElementById("itemTypeField");
        let isRecipe = document.getElementById("isRecipe").checked;
            
        let codeString = ``;
        if (material && itemName && displayName) {
            codeString += `public ItemStack ${itemName} = Utils.addLore(new ItemStack(Material.${material.name.toUpperCase()}), `;
        }

        if (displayName) codeString += `"${displayName}", `;

        if (isRecipe) codeString += `"&eRight-click to view recipes!", `;

        if (itemDamage ||
            itemStrength ||
            itemCritDamage ||
            itemCritChance ||
            itemAttackSpeed ||
            itemSeaCreatureChance ||
            itemHealth ||
            itemDefense ||
            itemSpeed ||
            itemIntelligence ||
            itemTrueDefense ||
            itemMagicFind ||
            itemPetLuck ||
            abilityNameA ||
            abilityDescA ||
            abilityCostA ||
            abilityCooldownA ||
            abilityUsageA ||
            abilityTypeA ||
            abilityNameB ||
            abilityDescB ||
            abilityCostB ||
            abilityCooldownB ||
            abilityUsageB ||
            abilityTypeB ||
            abilityNameC ||
            abilityDescC ||
            abilityCostC ||
            abilityCooldownC ||
            abilityUsageC ||
            abilityTypeC ||
            itemDescription ||
            isReforgeable ||
            recomb1 ||
            itemRarity ||
            itemType ||
            recomb2) codeString += `" ", `;

        if (itemDamage.length != 0) codeString += `"&7Damage: &c+${itemDamage}", `;
        if (itemStrength.length != 0) codeString += `"&7Strength: &c+${itemStrength}", `;
        if (itemCritDamage.length != 0) codeString += `"&7Crit Damage: &c+${itemCritDamage}%", `;
        if (itemCritChance.length != 0) codeString += `"&7Crit Chance: &c+${itemCritChance}%", `;
        if (itemAttackSpeed.length != 0) codeString += `"&7Bonus Attack Speed: &c+${itemAttackSpeed}%", `;
        if (itemSeaCreatureChance.length != 0) codeString += `"&7Sea Creature Chance: &c+${itemSeaCreatureChance}%", `;

        if (itemDamage.length != 0 ||
            itemStrength.length != 0 ||
            itemCritDamage.length != 0 ||
            itemCritChance.length != 0 ||
            itemAttackSpeed.length != 0 ||
            itemSeaCreatureChance.length != 0) codeString += `" ", `;

        if (itemHealth.length != 0) codeString += `"&7Health: &a+${itemHealth}", `;
        if (itemDefense.length != 0) codeString += `"&7Defense: &a+${itemDefense}", `;
        if (itemSpeed.length != 0) codeString += `"&7Speed: &a+${itemSpeed}", `;
        if (itemIntelligence.length != 0) codeString += `"&7Intelligence: &a+${itemIntelligence}", `;
        if (itemTrueDefense.length != 0) codeString += `"&7True Defense: &a+${itemTrueDefense}", `;
        if (itemMagicFind.length != 0) codeString += `"&7Magic Find: &a+${itemMagicFind}", `;
        if (itemPetLuck.length != 0) codeString += `"&7Pet Luck: &a+${itemPetLuck}", `;

        if (itemHealth.length != 0 ||
            itemDefense.length != 0 ||
            itemSpeed.length != 0 ||
            itemIntelligence.length != 0 ||
            itemTrueDefense.length != 0 ||
            itemMagicFind.length != 0 ||
            itemPetLuck.length != 0) codeString += `" ", `;

        if (abilityNameA.length != 0) codeString += `"&6${abilityUsageA}: ${abilityNameA} &e&l${abilityTypeA}", `;
        if (abilityDescA.length != 0) codeString += `"${abilityDescA}", `;
        if (abilityCostA.length != 0) codeString += `"&8Mana Cost: &3${abilityCostA}", `;
        if (abilityCooldownA.length != 0) codeString += `"&8Cooldown: &a${abilityCooldownA}s", `;

        if (abilityNameB.length != 0) codeString += `"&6${abilityUsageB}: ${abilityNameB} &e&l${abilityTypeB}", `;
        if (abilityDescB.length != 0) codeString += `"${abilityDescB}", `;
        if (abilityCostB.length != 0) codeString += `"&8Mana Cost: &3${abilityCostB}", `;
        if (abilityCooldownB.length != 0) codeString += `"&8Cooldown: &a${abilityCooldownB}s", `;

        if (abilityNameC.length != 0) codeString += `"&6${abilityUsageC}: ${abilityNameC} &e&l${abilityTypeC}", `;
        if (abilityDescC.length != 0) codeString += `"${abilityDescC}", `;
        if (abilityCostC.length != 0) codeString += `"&8Mana Cost: &3${abilityCostC}", `;
        if (abilityCooldownC.length != 0) codeString += `"&8Cooldown: &a${abilityCooldownC}s", `;

        if (abilityNameA ||
            abilityDescA ||
            abilityCostA ||
            abilityCooldownA ||
            abilityNameB ||
            abilityDescB ||
            abilityCostB ||
            abilityCooldownB ||
            abilityNameC ||
            abilityDescC ||
            abilityCostC ||
            abilityCooldownC) codeString += `" ", `

        if (itemDescription.length != 0) {
            let lores = itemDescription.split("\\n");
            if (lores.length != 0) {
                for (const lore in lores) {
                    codeString += `"${lores[lore]}", `
                }
            }
        }

        if (isReforgeable) codeString += `"&8This item can be reforged!", `

        let rarity = itemRarity.options[itemRarity.value].text.toLowerCase();
        let type = itemTypeField.options[itemTypeField.value].text.toUpperCase();
        let color = rarity == "common" ? "&f" : rarity == "uncommon" ? "&a" : rarity == "rare" ? "&9" : rarity == "epic" ? "&5" : rarity == "legendary" ? "&6" : rarity == "mythic" ? "&d" : rarity == "special" || rarity == "very special" ? "&c" : "&b";

        if (isRecomb && rarity && type) codeString += `"${color}&k&la&r${color}&l ${rarity.toUpperCase()}${type == "OTHER" ? "" : ` ${type}`} ${color}&l&ka&r"`;
        else codeString += `"${color}&l${rarity.toUpperCase()}${type == "OTHER" ? "" : ` ${type}`}"`;

        codeString += `);`

        if (codeString.length != 0) document.getElementById("javaCode")
            .innerHTML = codeString;

        clipboardForJava = `\`\`\`java\n${codeString}\`\`\``;
    }

    copyJavaCode() {
        func.copyToClipboard(clipboardForJava.replace(/<br>/g, "\\n"));
        document.getElementById("copyJavaCode").innerHTML = "Copied!";
        setTimeout(function () { document.getElementById("copyJavaCode").innerHTML = "Copy to Clipboard"; }, 1000);
    }

    copyToClipboard(text) {
        var input = document.body.appendChild(document.createElement("input"));
        input.value = text;
        input.focus();
        input.select();
        document.execCommand('copy');
        input.parentNode.removeChild(input);
    }

    a() {

        let itemName = document.getElementById("itemNameField")
            .value;

        if (itemName.length != 0) {
            document.getElementById("itemName")
                .style.visibility = 'visible';
            document.getElementById("itemName")
                .innerHTML = func.optimize(colors, itemName, false);
        } else {
            document.getElementById("itemName")
                .style.visibility = 'hidden';
            document.getElementById("itemName")
                .innerHTML = "";
        }

        let itemDescription = document.getElementById("itemDescriptionField")
            .value;

        if (itemDescription.length != 0) {
            document.getElementById("itemDescription")
                .style.visibility = 'visible';
            document.getElementById("itemDescription")
                .innerHTML = func.optimize(colors, itemDescription, true);
        } else {
            document.getElementById("itemDescription")
                .style.visibility = 'hidden';
            document.getElementById("itemDescription")
                .innerHTML = "";
        }

        if (itemDescription.length != 0) document.getElementById("break3").innerHTML = "<br>";
        else document.getElementById("break3").innerHTML = "";

        let itemDamage = document.getElementById("itemDamageField")
            .value;

        if (itemDamage.length != 0) {
            document.getElementById("itemDamage")
                .style.visibility = 'visible';
            document.getElementById("itemDamage")
                .innerHTML = func.optimize(colors, `&7Damage: &c${itemDamage < 0 ? "" : itemDamage == -0 ? "" : "+"}${itemDamage.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemDamage")
                .style.visibility = 'hidden';
            document.getElementById("itemDamage")
                .innerHTML = "";
        }

        let itemStrength = document.getElementById("itemStrengthField")
            .value;

        if (itemStrength.length != 0) {
            document.getElementById("itemStrength")
                .style.visibility = 'visible';
            document.getElementById("itemStrength")
                .innerHTML = func.optimize(colors, `&7Strength: &c${itemStrength < 0 ? "" : itemStrength == -0 ? "" : "+"}${itemStrength.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemStrength")
                .style.visibility = 'hidden';
            document.getElementById("itemStrength")
                .innerHTML = "";
        }

        let itemCritDamage = document.getElementById("itemCritDamageField")
            .value;

        if (itemCritDamage.length != 0) {
            document.getElementById("itemCritDamage")
                .style.visibility = 'visible';
            document.getElementById("itemCritDamage")
                .innerHTML = func.optimize(colors, `&7Crit Damage: &c${itemCritDamage < 0 ? "" : itemCritDamage == -0 ? "" : "+"}${itemCritDamage.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%`, true);
        } else {
            document.getElementById("itemCritDamage")
                .style.visibility = 'hidden';
            document.getElementById("itemCritDamage")
                .innerHTML = "";
        }        

        let itemCritChance = document.getElementById("itemCritChanceField")
            .value;

        if (itemCritChance.length != 0) {
            document.getElementById("itemCritChance")
                .style.visibility = 'visible';
            document.getElementById("itemCritChance")
                .innerHTML = func.optimize(colors, `&7Crit Chance: &c${itemCritChance < 0 ? "" : itemCritChance == -0 ? "" : "+"}${itemCritChance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%`, true);
        } else {
            document.getElementById("itemCritChance")
                .style.visibility = 'hidden';
            document.getElementById("itemCritChance")
                .innerHTML = "";
        }

        let itemAttackSpeed = document.getElementById("itemAttackSpeedField")
            .value;

        if (itemAttackSpeed.length != 0) {
            document.getElementById("itemAttackSpeed")
                .style.visibility = 'visible';
            document.getElementById("itemAttackSpeed")
                .innerHTML = func.optimize(colors, `&7Bonus Attack Speed: &c${itemAttackSpeed < 0 ? "" : itemAttackSpeed == -0 ? "" : "+"}${itemAttackSpeed.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%`, true);
        } else {
            document.getElementById("itemAttackSpeed")
                .style.visibility = 'hidden';
            document.getElementById("itemAttackSpeed")
                .innerHTML = "";
        }

        let itemSeaCreatureChance = document.getElementById("itemSeaCreatureChanceField")
            .value;

        if (itemSeaCreatureChance.length != 0) {
            document.getElementById("itemSeaCreatureChance")
                .style.visibility = 'visible';
            document.getElementById("itemSeaCreatureChance")
                .innerHTML = func.optimize(colors, `&7Sea Creature Chance: &c${itemSeaCreatureChance < 0 ? "" : itemSeaCreatureChance == -0 ? "" : "+"}${itemSeaCreatureChance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemSeaCreatureChance")
                .style.visibility = 'hidden';
            document.getElementById("itemSeaCreatureChance")
                .innerHTML = "";
        }

        // Break
        if (itemDamage.length != 0 ||
            itemStrength.length != 0 ||
            itemCritChance.length != 0 ||
            itemCritDamage.length != 0 ||
            itemAttackSpeed.length != 0 ||
            itemSeaCreatureChance.length != 0) document.getElementById("break1").innerHTML = "<br>";
        else document.getElementById("break1").innerHTML = "";    

        let itemHealth = document.getElementById("itemHealthField")
            .value;

        if (itemHealth.length != 0) {
            document.getElementById("itemHealth")
                .style.visibility = 'visible';
            document.getElementById("itemHealth")
                .innerHTML = func.optimize(colors, `&7Health: &a${itemHealth < 0 ? "" : itemHealth == -0 ? "" : "+"}${itemHealth.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemHealth")
                .style.visibility = 'hidden';
            document.getElementById("itemHealth")
                .innerHTML = "";
        }

        let itemDefense = document.getElementById("itemDefenseField")
            .value;

        if (itemDefense.length != 0) {
            document.getElementById("itemDefense")
                .style.visibility = 'visible';
            document.getElementById("itemDefense")
                .innerHTML = func.optimize(colors, `&7Defense: &a${itemDefense < 0 ? "" : itemDefense == -0 ? "" : "+"}${itemDefense.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemDefense")
                .style.visibility = 'hidden';
            document.getElementById("itemDefense")
                .innerHTML = "";
        }

        let itemSpeed = document.getElementById("itemSpeedField")
            .value;

        if (itemSpeed.length != 0) {
            document.getElementById("itemSpeed")
                .style.visibility = 'visible';
            document.getElementById("itemSpeed")
                .innerHTML = func.optimize(colors, `&7Speed: &a${itemSpeed < 0 ? "" : itemSpeed == -0 ? "" : "+"}${itemSpeed.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemSpeed")
                .style.visibility = 'hidden';
            document.getElementById("itemSpeed")
                .innerHTML = "";
        }

        let itemIntelligence = document.getElementById("itemIntelligenceField")
            .value;

        if (itemIntelligence.length != 0) {
            document.getElementById("itemIntelligence")
                .style.visibility = 'visible';
            document.getElementById("itemIntelligence")
                .innerHTML = func.optimize(colors, `&7Intelligence: &a${itemIntelligence < 0 ? "" : itemIntelligence == -0 ? "" : "+"}${itemIntelligence.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemIntelligence")
                .style.visibility = 'hidden';
            document.getElementById("itemIntelligence")
                .innerHTML = "";
        }

        let itemTrueDefense = document.getElementById("itemTrueDefenseField")
            .value;

        if (itemTrueDefense.length != 0) {
            document.getElementById("itemTrueDefense")
                .style.visibility = 'visible';
            document.getElementById("itemTrueDefense")
                .innerHTML = func.optimize(colors, `&7True Defense: &a${itemTrueDefense < 0 ? "" : itemTrueDefense == -0 ? "" : "+"}${itemTrueDefense.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemTrueDefense")
                .style.visibility = 'hidden';
            document.getElementById("itemTrueDefense")
                .innerHTML = "";
        }

        if (document.getElementById("isRecipe").checked) {
            document.getElementById("itemRecipe").style.visibility = "visible";
            document.getElementById("itemRecipe").innerHTML = func.optimize(colors, `&eRight-click to view recipes!<br>`, true);
        } else {
            document.getElementById('itemRecipe').style.visibility = "hidden";
            document.getElementById('itemRecipe').innerHTML = "";
        }

        let itemMagicFind = document.getElementById("itemMagicFindField")
            .value;

        if (itemMagicFind.length != 0) {
            document.getElementById("itemMagicFind")
                .style.visibility = 'visible';
            document.getElementById("itemMagicFind")
                .innerHTML = func.optimize(colors, `&7Magic Find: &a${itemMagicFind < 0 ? "" : itemMagicFind == -0 ? "" : "+"}${itemMagicFind.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemMagicFind")
                .style.visibility = 'hidden';
            document.getElementById("itemMagicFind")
                .innerHTML = "";
        }        

        let itemPetLuck = document.getElementById("itemPetLuckField")
            .value;

        if (itemPetLuck.length != 0) {
            document.getElementById("itemPetLuck")
                .style.visibility = 'visible';
            document.getElementById("itemPetLuck")
                .innerHTML = func.optimize(colors, `&7Pet Luck: &a${itemPetLuck < 0 ? "" : itemPetLuck == -0 ? "" : "+"}${itemPetLuck.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true);
        } else {
            document.getElementById("itemPetLuck")
                .style.visibility = 'hidden';
            document.getElementById("itemPetLuck")
                .innerHTML = "";
        }

        if (itemHealth.length != 0 ||
            itemDefense.length != 0 ||
            itemSpeed.length != 0 ||
            itemIntelligence.length != 0 ||
            itemTrueDefense.length != 0 ||
            itemMagicFind.length != 0 ||
            itemPetLuck.length != 0) document.getElementById("break2").innerHTML = "<br>";
        else document.getElementById("break2").innerHTML = "";
    }

    b() {

        let isRecomb = document.getElementById("isRecomb")
            .checked;
        let isReforgeable = document.getElementById("isReforgeable")
            .checked;

        if (isReforgeable) {
            document.getElementById("itemReforgeable")
                .style.visibility = 'visible';
            document.getElementById("itemReforgeable")
                .innerHTML = document.getElementById("itemReforgeable")
                .innerHTML = func.optimize(colors, "&8This item can be reforged!", true);
        } else {
            document.getElementById("itemReforgeable")
                .style.visibility = 'hidden';
            document.getElementById("itemReforgeable")
                .innerHTML = "";
        }

        let itemRarity = document.getElementById("itemRarityField");
        let rarity = "Rarity ";
        switch (itemRarity.options[itemRarity.value].text.toLowerCase()) {
            case "common":
                rarity = "<b>COMMON</b>";
                break;
            case "uncommon":
                rarity = "<b><span style=\"color: #55FF55\">UNCOMMON</b>";
                break;
            case "rare":
                rarity = "<b><span style=\"color: #5555FF\">RARE</b>";
                break;
            case "epic":
                rarity = "<b><span style=\"color: #AA00AA\">EPIC</b>";
                break;
            case "legendary":
                rarity = "<b><span style=\"color: #FFAA00\">LEGENDARY</b>";
                break;
            case "mythic":
                rarity = "<b><span style=\"color: #FF55FF\">MYTHIC</b>";    
                break;
            case "special":
                rarity = "<b><span style=\"color: #FF5555\">SPECIAL</b>";
                break;
            case "very special":
                rarity = "<b><span style=\"color: #FF5555\">VERY SPECIAL</b>";
                break;
            case "celestial":
                rarity = "<b><span style=\"color: #55FFFF\">CELESTIAL</b>";
                break;
        }

        if (rarity.length != 0) document.getElementById("itemRarity")
            .innerHTML = rarity + " ";

        let itemType = document.getElementById("itemTypeField");
        let type = "Type";
        switch (itemType.options[itemType.value].text.toLowerCase()) {
            case "sword":
                type = "<b>SWORD</b>";
                break;
            case "bow":
                type = "<b>BOW</b>";
                break;
            case "rod":
                type = "<b>ROD</b>";
                break;
            case "helmet":
                type = "<b>HELMET</b>";
                break;
            case "chestplate":
                type = "<b>CHESTPLATE</b>";
                break;
            case "leggings":
                type = "<b>LEGGINGS</b>";
                break;
            case "boots":
                type = "<b>BOOTS</b>";
                break;
            case "accessory":
                type = "<b>ACCESSORY</b>";
                break;
            case "pickaxe":
                type = "<b>PICKAXE</b>";
                break;
            case "axe":
                type = "<b>AXE</b>";
                break;
            case "shovel":
                type = "<b>SHOVEL</b>";
                break;
            case "hoe":
                type = "<b>HOE</b>";
                break;
            case "shears":
                type = "<b>SHEARS</b>";
                break;
            case "brewing ingredient":
                type = "<b>BREWING INGREDIENT</b>";
                break;
            case "other":
                type = "<b><b>";
                break;
        }

        if (type.length != 0) document.getElementById("itemType")
            .innerHTML = func.getColor(itemRarity.options[itemRarity.value].text.toLowerCase(), type);

        if (isRecomb) {
            document.getElementById("recomb1")
                .innerHTML = func.getColor(itemRarity.options[itemRarity.value].text.toLowerCase(), func.c() + " ");
            document.getElementById("recomb2")
                .innerHTML = func.getColor(itemRarity.options[itemRarity.value].text.toLowerCase(), " " + func.c());
        } else {
            document.getElementById("recomb1")
                .innerHTML = "";
            document.getElementById("recomb2")
                .innerHTML = "";
        }
    }

    c() {
        let array = "1234567890abcdefghijklmnopqrstuvwxyz~!@#$%^&*()-=_+{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ🍆mmLoL".split("");
        return array[Math.floor(Math.random() * array.length)];
    }

    getColor(color, str) {
        return `<span style=\"color: #${color.toLowerCase() == "common" ? "FFFFFF" : color.toLowerCase() == "uncommon" ? "55FF55" : color.toLowerCase() == "rare" ? "5555FF" : color.toLowerCase() == "epic" ? "AA00AA" : color.toLowerCase() == "legendary" ? "FFAA00" : color.toLowerCase() == "mythic" ? "FF55FF" : color.toLowerCase() == "special" || color.toLowerCase() == "very special" ? "FF5555" : "55FFFF"}\">` + str + "</span>"
    }

    optimize(colors, text, type) {

        if (type) text = text.replace(/\\n/g, '<br>');

        let output = "";

        const parts = text.split("&");

        if (parts.length == 1)
            return text + "<br>";

        for (const part of parts) {
            const color = part.substring(0, 1);
            const content = part.substring(1);

            if (colors[color] != null) {
                output += `<span style=\"color: ${colors[color]}\">${content}</span>`;
            } else if (color == "l") {
                output += `<b>${content}</b>`;
            } else if (color == "k") {
                for (const letter of content.split("")) { output += func.c(); };
            } else if (color == "o") {
                output += `<i>${content}</i>`;
            } else if (color == "n") {
                output += `<u>${content}</u>`;
            } else output += part.replace(color, "");
        }
        return output + "<br>";
    }

    switchAbilityUsageA() {
        let abil = document.getElementById("abilityUsageA")
            .innerHTML;
        let index = ability.indexOf(abil);
        document.getElementById("abilityUsageA")
            .innerHTML = ability[index + 1 >= ability.length ? 0 : index + 1];
    }

    switchAbilityUsageB() {
        let abil = document.getElementById("abilityUsageB")
            .innerHTML;
        let index = ability.indexOf(abil);
        document.getElementById("abilityUsageB")
            .innerHTML = ability[index + 1 >= ability.length ? 0 : index + 1];
    }

    switchAbilityUsageC() {
        let abil = document.getElementById("abilityUsageC")
            .innerHTML;
        let index = ability.indexOf(abil);
        document.getElementById("abilityUsageC")
            .innerHTML = ability[index + 1 >= ability.length ? 0 : index + 1];
    }

    switchAbilityTypeA() {
        let abil = document.getElementById("abilityTypeA")
            .innerHTML;
        let index = types.indexOf(abil);
        document.getElementById("abilityTypeA")
            .innerHTML = types[index + 1 >= ability.length ? 0 : index + 1];
    }

    switchAbilityTypeB() {
        let abil = document.getElementById("abilityTypeB")
            .innerHTML;
        let index = types.indexOf(abil);
        document.getElementById("abilityTypeB")
            .innerHTML = types[index + 1 >= ability.length ? 0 : index + 1];
    }

    switchAbilityTypeC() {
        let abil = document.getElementById("abilityTypeC")
            .innerHTML;
        let index = types.indexOf(abil);
        document.getElementById("abilityTypeC")
            .innerHTML = types[index + 1 >= ability.length ? 0 : index + 1];
    }

    d() {

        // The display text

        let itemNameA = document.getElementById("itemNameA");
        let itemDescA = document.getElementById("itemDescA");
        let itemCostA = document.getElementById("itemCostA");
        let itemCooldownA = document.getElementById("itemCooldownA");

        let itemNameB = document.getElementById("itemNameB");
        let itemDescB = document.getElementById("itemDescB");
        let itemCostB = document.getElementById("itemCostB");
        let itemCooldownB = document.getElementById("itemCooldownB");

        let itemNameC = document.getElementById("itemNameC");
        let itemDescC = document.getElementById("itemDescC");
        let itemCostC = document.getElementById("itemCostC");
        let itemCooldownC = document.getElementById("itemCooldownC");

        // All field entries

        let itemUsageA = document.getElementById("abilityTypeA");
        let itemTypeA = document.getElementById("abilityUsageA");
        let abilityNameA = document.getElementById("abilityNameA");
        let abilityDescA = document.getElementById("abilityDescA");
        let abilityCostA = document.getElementById("abilityCostA");
        let abilityCooldownA = document.getElementById("abilityCooldownA");

        let itemUsageB = document.getElementById("abilityTypeB");
        let itemTypeB = document.getElementById("abilityUsageB");
        let abilityNameB = document.getElementById("abilityNameB");
        let abilityDescB = document.getElementById("abilityDescB");
        let abilityCostB = document.getElementById("abilityCostB");
        let abilityCooldownB = document.getElementById("abilityCooldownB");

        let itemUsageC = document.getElementById("abilityTypeC");
        let itemTypeC = document.getElementById("abilityUsageC");
        let abilityNameC = document.getElementById("abilityNameC");
        let abilityDescC = document.getElementById("abilityDescC");
        let abilityCostC = document.getElementById("abilityCostC");
        let abilityCooldownC = document.getElementById("abilityCooldownC");

        if (abilityNameA.value.length != 0) itemNameA.innerHTML = func.optimize(colors, `&6${itemTypeA.innerHTML}: ${abilityNameA.value} &e${itemUsageA.innerHTML.toUpperCase() == "PASSIVE" ? "" : itemUsageA.innerHTML.toUpperCase()}`, false);
        else itemNameA.innerHTML = "";
        if (abilityDescA.value.length != 0) itemDescA.innerHTML = func.optimize(colors, abilityDescA.value, true);
        else itemDescA.innerHTML = "";
        if (abilityCostA.value.length != 0) itemCostA.innerHTML = func.optimize(colors, `&8Mana Cost: &3${abilityCostA.value}`, false);
        else itemCostA.innerHTML = "";
        if (abilityCooldownA.value.length != 0) itemCooldownA.innerHTML = func.optimize(colors, `&8Cooldown: &a${abilityCooldownA.value}s`, false)
        else itemCooldownA.innerHTML = "";

        if (abilityNameA.value.length != 0 ||
            abilityDescA.value.length != 0 ||
            abilityCostA.value.length != 0 ||
            abilityCooldownA.value.length != 0) document.getElementById("break4").innerHTML = "<br>";
        else document.getElementById("break4").innerHTML = "";    

        if (abilityNameB.value.length != 0) itemNameB.innerHTML = func.optimize(colors, `&6${itemTypeB.innerHTML}: ${abilityNameB.value} &e${itemUsageB.innerHTML.toUpperCase() == "PASSIVE" ? "" : itemUsageB.innerHTML.toUpperCase()}`, false);
        else itemNameB.innerHTML = "";
        if (abilityDescB.value.length != 0) itemDescB.innerHTML = func.optimize(colors, abilityDescB.value, true);
        else itemDescB.innerHTML = "";
        if (abilityCostB.value.length != 0) itemCostB.innerHTML = func.optimize(colors, `&8Mana Cost: &3${abilityCostB.value}`, false);
        else itemCostB.innerHTML = "";
        if (abilityCooldownB.value.length != 0) itemCooldownB.innerHTML = func.optimize(colors, `&8Cooldown: &a${abilityCooldownB.value}s`, false)
        else itemCooldownB.innerHTML = "";

        if (abilityNameB.value.length != 0 ||
            abilityDescB.value.length != 0 ||
            abilityCostB.value.length != 0 ||
            abilityCooldownB.value.length != 0) document.getElementById("break5").innerHTML = "<br>";
        else document.getElementById("break5").innerHTML = "";

        if (abilityNameC.value.length != 0) itemNameC.innerHTML = func.optimize(colors, `&6${itemTypeC.innerHTML}: ${abilityNameC.value} &e${itemUsageC.innerHTML.toUpperCase() == "PASSIVE" ? "" : itemUsageC.innerHTML.toUpperCase()}`, false);
        else itemNameC.innerHTML = "";
        if (abilityDescC.value.length != 0) itemDescC.innerHTML = func.optimize(colors, abilityDescC.value, true);
        else itemDescC.innerHTML = "";
        if (abilityCostC.value.length != 0) itemCostC.innerHTML = func.optimize(colors, `&8Mana Cost: &3${abilityCostC.value}`, false);
        else itemCostC.innerHTML = "";
        if (abilityCooldownC.value.length != 0) itemCooldownC.innerHTML = func.optimize(colors, `&8Cooldown: &a${abilityCooldownC.value}s`, false)
        else itemCooldownC.innerHTML = "";

        if (abilityNameC.value.length != 0 ||
            abilityDescC.value.length != 0 ||
            abilityCostC.value.length != 0 ||
            abilityCooldownC.value.length != 0) document.getElementById("break6").innerHTML = "<br>";
        else document.getElementById("break6").innerHTML = "";    

        
    }
}

global.functions = FunctionStructure;

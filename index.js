const items = require("minecraft-data")("1.8.8");
let clipboardForJava = "";
const colors = {
        0: "#000000",
        1: "#0000AA",
        2: "#00AA00",
        3: "#00AAAA",
        4: "#AA0000",
        5: "#AA00AA",
        6: "#FFAA00",
        7: "#AAAAAA",
        8: "#555555",
        9: "#5555FF",
        a: "#55FF55",
        b: "#55FFFF",
        c: "#FF5555",
        d: "#FF55FF",
        e: "#FFFF55",
        f: "#FFFFFF"
    },
    types = ["Right Click", "Sneak", "Passive"],
    ability = ["Item Ability", "Full Set Bonus", "Piece Bonus"];
class FunctionStructure {
    constructor() {}
    e() {
        let e = items.items[document.getElementById("itemIDField")
                .value],
            t = document.getElementById("itemAmountField")
            .value || 1,
            n = document.getElementById("itemName")
            .innerHTML.toUpperCase()
            .replace(/ +/g, "_")
            .replace(/&[0-9a-zA-Z]/g, "")
            .replace(/<BR>/g, ""),
            l = document.getElementById("itemNameField")
            .value,
            i = document.getElementById("itemDamageField")
            .value,
            d = document.getElementById("itemStrengthField")
            .value,
            m = document.getElementById("itemCritDamageField")
            .value,
            a = document.getElementById("itemCritChanceField")
            .value,
            o = document.getElementById("itemAttackSpeedField")
            .value,
            c = document.getElementById("itemSeaCreatureChanceField")
            .value,
            r = document.getElementById("itemHealthField")
            .value,
            g = document.getElementById("itemDefenseField")
            .value,
            y = document.getElementById("itemSpeedField")
            .value,
            s = document.getElementById("itemIntelligenceField")
            .value,
            u = document.getElementById("itemTrueDefenseField")
            .value,
            b = document.getElementById("itemMagicFindField")
            .value,
            B = document.getElementById("itemPetLuckField")
            .value,
            E = document.getElementById("abilityNameA")
            .value,
            h = document.getElementById("abilityDescA")
            .value,
            I = document.getElementById("abilityCostA")
            .value,
            p = document.getElementById("abilityCooldownA")
            .value,
            T = document.getElementById("abilityUsageA")
            .innerHTML,
            v = document.getElementById("abilityTypeA")
            .innerHTML,
            L = document.getElementById("abilityNameB")
            .value,
            C = document.getElementById("abilityDescB")
            .value,
            M = document.getElementById("abilityCostB")
            .value,
            H = document.getElementById("abilityCooldownB")
            .value,
            F = document.getElementById("abilityUsageA")
            .innerHTML,
            $ = document.getElementById("abilityTypeA")
            .innerHTML,
            A = document.getElementById("abilityNameC")
            .value,
            f = document.getElementById("abilityDescC")
            .value,
            k = document.getElementById("abilityCostC")
            .value,
            S = document.getElementById("abilityCooldownC")
            .value,
            U = document.getElementById("abilityUsageA")
            .innerHTML,
            D = document.getElementById("abilityTypeA")
            .innerHTML,
            w = document.getElementById("itemDescriptionField")
            .innerHTML,
            z = document.getElementById("isReforgeable")
            .checked,
            N = document.getElementById("isRecomb")
            .checked,
            R = document.getElementById("itemRarityField"),
            O = document.getElementById("itemType")
            .innerHTML,
            P = document.getElementById("recomb2")
            .innerHTML,
            x = document.getElementById("itemTypeField"),
            G = R.options[R.value].text.toLowerCase(),
            J = x.options[x.value].text.toUpperCase(),
            W = "common" == G ? "&f" : "uncommon" == G ? "&a" : "rare" == G ? "&9" : "epic" == G ? "&5" : "legendary" == G ? "&6" : "mythic" == G ? "&d" : "special" == G || "very special" == G ? "&c" : "&b",
            V = "";
        if (e && n && l && (V += `public ItemStack ${n} = Utils.addLore(new ItemStack(Material.${e.name.toUpperCase()}), `), W.length != 0 && l.length != 0 && (V += `"${W}${l}", `, 0 != i.length && (V += `"&7Damage: &c+${i}", `), 0 != d.length && (V += `"&7Strength: &c+${d}", `), 0 != m.length && (V += `"&7Crit Damage: &c+${m}%", `), 0 != a.length && (V += `"&7Crit Chance: &c+${a}%", `), 0 != o.length && (V += `"&7Bonus Attack Speed: &c+${o}%", `), 0 != c.length && (V += `"&7Sea Creature Chance: &c+${c}%", `), 0 == i.length && 0 == d.length && 0 == m.length && 0 == a.length && 0 == o.length && 0 == c.length || (V += '" ", '), 0 != r.length && (V += `"&7Health: &a+${r}", `), 0 != g.length && (V += `"&7Defense: &a+${g}", `), 0 != y.length && (V += `"&7Speed: &a+${y}", `), 0 != s.length && (V += `"&7Intelligence: &a+${s}", `), 0 != u.length && (V += `"&7True Defense: &a+${u}", `), 0 != b.length && (V += `"&7Magic Find: &a+${b}", `), 0 != B.length && (V += `"&7Pet Luck: &a+${B}", `), 0 == r.length && 0 == g.length && 0 == y.length && 0 == s.length && 0 == u.length && 0 == b.length && 0 == B.length || (V += '" ", '), 0 != E.length && (V += `"&6${T}: ${E} &e&l${v}", `), 0 != h.length && (V += `"${h}", `), 0 != I.length && (V += `"&8Mana Cost: &3${I}", `), 0 != p.length && (V += `"&8Cooldown: &a${p}s", `), 0 != L.length && (V += `"&6${F}: ${L} &e&l${$}", `), 0 != C.length && (V += `"${C}", `), 0 != M.length && (V += `"&8Mana Cost: &3${M}", `), 0 != H.length && (V += `"&8Cooldown: &a${H}s", `), 0 != A.length && (V += `"&6${U}: ${A} &e&l${D}", `), 0 != f.length && (V += `"${f}", `), 0 != k.length && (V += `"&8Mana Cost: &3${k}", `), 0 != S.length && (V += `"&8Cooldown: &a${S}s", `), (E || h || I || p || L || C || M || H || A || f || k || S) && (V += '" ", '), 0 != w.length)) {
            let e = w.split("\\n");
            if (0 != e.length)
                for (const t in e) V += `"${e[t]}", `
        }
        z && (V += '"&8This item can be reforged!", '), V += N && G && J ? `"${W}&k&la&r${W}&l ${G.toUpperCase()} ${J.toUpperCase()} ${W}&l&ka&r", ` : `"${W}&l${G.toUpperCase()} ${J.toUpperCase()}", " ",`, (V += ")"), (document.getElementById("javaCode")
                .innerHTML = V), clipboardForJava = V
    }
    copyJavaCode() {
        func.copyStringWithNewLineToClipBoard(clipboardForJava.replace(/<br>/g, "\r\n")), document.getElementById("copyJavaCode")
            .innerHTML = "Copied!", setTimeout(function() {
                document.getElementById("copyJavaCode")
                    .innerHTML = "Copy to Clipboard"
            }, 1e3)
    }
    copyStringWithNewLineToClipBoard(e) {
        const t = document.createElement("textarea");
        t.innerHTML = e;
        const n = document.getElementById("ignore-this");
        n.appendChild(t), t.select(), document.execCommand("copy"), n.removeChild(t)
    }
    a() {
        let e = document.getElementById("itemNameField")
            .value;
        0 != e.length ? (document.getElementById("itemName")
            .style.visibility = "visible", document.getElementById("itemName")
            .innerHTML = func.optimize(colors, e, !1)) : (document.getElementById("itemName")
            .style.visibility = "hidden", document.getElementById("itemName")
            .innerHTML = "");
        let t = document.getElementById("itemDescriptionField")
            .value;
        0 != t.length ? (document.getElementById("itemDescription")
                .style.visibility = "visible", document.getElementById("itemDescription")
                .innerHTML = func.optimize(colors, t, !0)) : (document.getElementById("itemDescription")
                .style.visibility = "hidden", document.getElementById("itemDescription")
                .innerHTML = ""), 0 != t.length ? document.getElementById("break3")
            .innerHTML = "<br>" : document.getElementById("break3")
            .innerHTML = "";
        let n = document.getElementById("itemDamageField")
            .value;
        0 != n.length ? (document.getElementById("itemDamage")
            .style.visibility = "visible", document.getElementById("itemDamage")
            .innerHTML = func.optimize(colors, `&7Damage: &c${n<0?"":-0==n?"":"+"}${n.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemDamage")
            .style.visibility = "hidden", document.getElementById("itemDamage")
            .innerHTML = "");
        let l = document.getElementById("itemStrengthField")
            .value;
        0 != l.length ? (document.getElementById("itemStrength")
            .style.visibility = "visible", document.getElementById("itemStrength")
            .innerHTML = func.optimize(colors, `&7Strength: &c${l<0?"":-0==l?"":"+"}${l.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemStrength")
            .style.visibility = "hidden", document.getElementById("itemStrength")
            .innerHTML = "");
        let i = document.getElementById("itemCritDamageField")
            .value;
        0 != i.length ? (document.getElementById("itemCritDamage")
            .style.visibility = "visible", document.getElementById("itemCritDamage")
            .innerHTML = func.optimize(colors, `&7Crit Damage: &c${i<0?"":-0==i?"":"+"}${i.replace(/\B(?=(\d{3})+(?!\d))/g,",")}%`, !0)) : (document.getElementById("itemCritDamage")
            .style.visibility = "hidden", document.getElementById("itemCritDamage")
            .innerHTML = "");
        let d = document.getElementById("itemCritChanceField")
            .value;
        0 != d.length ? (document.getElementById("itemCritChance")
            .style.visibility = "visible", document.getElementById("itemCritChance")
            .innerHTML = func.optimize(colors, `&7Crit Chance: &c${d<0?"":-0==d?"":"+"}${d.replace(/\B(?=(\d{3})+(?!\d))/g,",")}%`, !0)) : (document.getElementById("itemCritChance")
            .style.visibility = "hidden", document.getElementById("itemCritChance")
            .innerHTML = "");
        let m = document.getElementById("itemAttackSpeedField")
            .value;
        0 != m.length ? (document.getElementById("itemAttackSpeed")
            .style.visibility = "visible", document.getElementById("itemAttackSpeed")
            .innerHTML = func.optimize(colors, `&7Bonus Attack Speed: &c${m<0?"":-0==m?"":"+"}${m.replace(/\B(?=(\d{3})+(?!\d))/g,",")}%`, !0)) : (document.getElementById("itemAttackSpeed")
            .style.visibility = "hidden", document.getElementById("itemAttackSpeed")
            .innerHTML = "");
        let a = document.getElementById("itemSeaCreatureChanceField")
            .value;
        0 != a.length ? (document.getElementById("itemSeaCreatureChance")
                .style.visibility = "visible", document.getElementById("itemSeaCreatureChance")
                .innerHTML = func.optimize(colors, `&7Sea Creature Chance: &c${a<0?"":-0==a?"":"+"}${a.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemSeaCreatureChance")
                .style.visibility = "hidden", document.getElementById("itemSeaCreatureChance")
                .innerHTML = ""), 0 != n.length || 0 != l.length || 0 != d.length || 0 != i.length || 0 != m.length || 0 != a.length ? document.getElementById("break1")
            .innerHTML = "<br>" : document.getElementById("break1")
            .innerHTML = "";
        let o = document.getElementById("itemHealthField")
            .value;
        0 != o.length ? (document.getElementById("itemHealth")
            .style.visibility = "visible", document.getElementById("itemHealth")
            .innerHTML = func.optimize(colors, `&7Health: &a${o<0?"":-0==o?"":"+"}${o.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemHealth")
            .style.visibility = "hidden", document.getElementById("itemHealth")
            .innerHTML = "");
        let c = document.getElementById("itemDefenseField")
            .value;
        0 != c.length ? (document.getElementById("itemDefense")
            .style.visibility = "visible", document.getElementById("itemDefense")
            .innerHTML = func.optimize(colors, `&7Defense: &a${c<0?"":-0==c?"":"+"}${c.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemDefense")
            .style.visibility = "hidden", document.getElementById("itemDefense")
            .innerHTML = "");
        let r = document.getElementById("itemSpeedField")
            .value;
        0 != r.length ? (document.getElementById("itemSpeed")
            .style.visibility = "visible", document.getElementById("itemSpeed")
            .innerHTML = func.optimize(colors, `&7Speed: &a${r<0?"":-0==r?"":"+"}${r.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemSpeed")
            .style.visibility = "hidden", document.getElementById("itemSpeed")
            .innerHTML = "");
        let g = document.getElementById("itemIntelligenceField")
            .value;
        0 != g.length ? (document.getElementById("itemIntelligence")
            .style.visibility = "visible", document.getElementById("itemIntelligence")
            .innerHTML = func.optimize(colors, `&7Intelligence: &a${g<0?"":-0==g?"":"+"}${g.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemIntelligence")
            .style.visibility = "hidden", document.getElementById("itemIntelligence")
            .innerHTML = "");
        let y = document.getElementById("itemTrueDefenseField")
            .value;
        0 != y.length ? (document.getElementById("itemTrueDefense")
            .style.visibility = "visible", document.getElementById("itemTrueDefense")
            .innerHTML = func.optimize(colors, `&7True Defense: &a${y<0?"":-0==y?"":"+"}${y.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemTrueDefense")
            .style.visibility = "hidden", document.getElementById("itemTrueDefense")
            .innerHTML = "");
        let s = document.getElementById("itemMagicFindField")
            .value;
        0 != s.length ? (document.getElementById("itemMagicFind")
            .style.visibility = "visible", document.getElementById("itemMagicFind")
            .innerHTML = func.optimize(colors, `&7Magic Find: &a${s<0?"":-0==s?"":"+"}${s.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemMagicFind")
            .style.visibility = "hidden", document.getElementById("itemMagicFind")
            .innerHTML = "");
        let u = document.getElementById("itemPetLuckField")
            .value;
        0 != u.length ? (document.getElementById("itemPetLuck")
                .style.visibility = "visible", document.getElementById("itemPetLuck")
                .innerHTML = func.optimize(colors, `&7Pet Luck: &a${u<0?"":-0==u?"":"+"}${u.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`, !0)) : (document.getElementById("itemPetLuck")
                .style.visibility = "hidden", document.getElementById("itemPetLuck")
                .innerHTML = ""), 0 != o.length || 0 != c.length || 0 != r.length || 0 != g.length || 0 != y.length || 0 != s.length || 0 != u.length ? document.getElementById("break2")
            .innerHTML = "<br>" : document.getElementById("break2")
            .innerHTML = ""
    }
    b() {
        let e = document.getElementById("isRecomb")
            .checked;
        document.getElementById("isReforgeable")
            .checked ? (document.getElementById("itemReforgeable")
                .style.visibility = "visible", document.getElementById("itemReforgeable")
                .innerHTML = document.getElementById("itemReforgeable")
                .innerHTML = func.optimize(colors, "&8This item can be reforged!", !0)) : (document.getElementById("itemReforgeable")
                .style.visibility = "hidden", document.getElementById("itemReforgeable")
                .innerHTML = "");
        let t = document.getElementById("itemRarityField"),
            n = "Rarity ";
        switch (t.options[t.value].text.toLowerCase()) {
            case "common":
                n = "<b>COMMON</b>";
                break;
            case "uncommon":
                n = '<b><span style="color: #55FF55">UNCOMMON</b>';
                break;
            case "rare":
                n = '<b><span style="color: #5555FF">RARE</b>';
                break;
            case "epic":
                n = '<b><span style="color: #AA00AA">EPIC</b>';
                break;
            case "legendary":
                n = '<b><span style="color: #FFAA00">LEGENDARY</b>';
                break;
            case "mythic":
                n = '<b><span style="color: #FF55FF">MYTHIC</b>';
                break;
            case "special":
                n = '<b><span style="color: #FF5555">SPECIAL</b>';
                break;
            case "very special":
                n = '<b><span style="color: #FF5555">VERY SPECIAL</b>';
                break;
            case "celestial":
                n = '<b><span style="color: #55FFFF">CELESTIAL</b>'
        }
        0 != n.length && (document.getElementById("itemRarity")
            .innerHTML = n + " ");
        let l = document.getElementById("itemTypeField"),
            i = "Type";
        switch (l.options[l.value].text.toLowerCase()) {
            case "sword":
                i = "<b>SWORD</b>";
                break;
            case "bow":
                i = "<b>BOW</b>";
                break;
            case "rod":
                i = "<b>ROD</b>";
                break;
            case "helmet":
                i = "<b>HELMET</b>";
                break;
            case "chestplate":
                i = "<b>CHESTPLATE</b>";
                break;
            case "leggings":
                i = "<b>LEGGINGS</b>";
                break;
            case "boots":
                i = "<b>BOOTS</b>";
                break;
            case "accessory":
                i = "<b>ACCESSORY</b>";
                break;
            case "pickaxe":
                i = "<b>PICKAXE</b>";
                break;
            case "axe":
                i = "<b>AXE</b>";
                break;
            case "shovel":
                i = "<b>SHOVEL</b>";
                break;
            case "hoe":
                i = "<b>HOE</b>";
                break;
            case "shears":
                i = "<b>SHEARS</b>";
                break;
            case "brewing ingredient":
                i = "<b>BREWING INGREDIENT</b>";
                break;
            case "other":
                i = ""
        }
        0 != i.length && (document.getElementById("itemType")
            .innerHTML = func.getColor(t.options[t.value].text.toLowerCase(), i)), e ? (document.getElementById("recomb1")
            .innerHTML = func.getColor(t.options[t.value].text.toLowerCase(), func.c() + " "), document.getElementById("recomb2")
            .innerHTML = func.getColor(t.options[t.value].text.toLowerCase(), " " + func.c())) : (document.getElementById("recomb1")
            .innerHTML = "", document.getElementById("recomb2")
            .innerHTML = "")
    }
    c() {
        let e = "1234567890abcdefghijklmnopqrstuvwxyz~!@#$%^&*()-=_+{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ🍆".split("");
        return e[Math.floor(Math.random() * e.length)]
    }
    getColor(e, t) {
        return `<span style="color: #${"common"==e.toLowerCase()?"FFFFFF":"uncommon"==e.toLowerCase()?"55FF55":"rare"==e.toLowerCase()?"5555FF":"epic"==e.toLowerCase()?"AA00AA":"legendary"==e.toLowerCase()?"FFAA00":"mythic"==e.toLowerCase()?"FF55FF":"special"==e.toLowerCase()||"very special"==e.toLowerCase()?"FF5555":"55FFFF"}">` + t + "</span>"
    }
    optimize(e, t, n) {
        n && (t = t.replace(/\\n/g, "<br>"));
        let l = "";
        const i = t.split("&");
        if (1 == i.length) return t + "<br>";
        for (const t of i) {
            const n = t.substring(0, 1),
                i = t.substring(1);
            if (null != e[n]) l += `<span style="color: ${e[n]}">${i}</span>`;
            else if ("l" == n) l += `<b>${i}</b>`;
            else if ("k" == n)
                for (const e of i.split("")) l += func.c();
            else l += "o" == n ? `<i>${i}</i>` : "n" == n ? `<u>${i}</u>` : t.replace(n, "")
        }
        return l + "<br>"
    }
    switchAbilityUsageA() {
        let e = document.getElementById("abilityUsageA")
            .innerHTML,
            t = ability.indexOf(e);
        document.getElementById("abilityUsageA")
            .innerHTML = ability[t + 1 >= ability.length ? 0 : t + 1]
    }
    switchAbilityUsageB() {
        let e = document.getElementById("abilityUsageB")
            .innerHTML,
            t = ability.indexOf(e);
        document.getElementById("abilityUsageB")
            .innerHTML = ability[t + 1 >= ability.length ? 0 : t + 1]
    }
    switchAbilityUsageC() {
        let e = document.getElementById("abilityUsageC")
            .innerHTML,
            t = ability.indexOf(e);
        document.getElementById("abilityUsageC")
            .innerHTML = ability[t + 1 >= ability.length ? 0 : t + 1]
    }
    switchAbilityTypeA() {
        let e = document.getElementById("abilityTypeA")
            .innerHTML,
            t = types.indexOf(e);
        document.getElementById("abilityTypeA")
            .innerHTML = types[t + 1 >= ability.length ? 0 : t + 1]
    }
    switchAbilityTypeB() {
        let e = document.getElementById("abilityTypeB")
            .innerHTML,
            t = types.indexOf(e);
        document.getElementById("abilityTypeB")
            .innerHTML = types[t + 1 >= ability.length ? 0 : t + 1]
    }
    switchAbilityTypeC() {
        let e = document.getElementById("abilityTypeC")
            .innerHTML,
            t = types.indexOf(e);
        document.getElementById("abilityTypeC")
            .innerHTML = types[t + 1 >= ability.length ? 0 : t + 1]
    }
    d() {
        let e = document.getElementById("itemNameA"),
            t = document.getElementById("itemDescA"),
            n = document.getElementById("itemCostA"),
            l = document.getElementById("itemCooldownA"),
            i = document.getElementById("itemNameB"),
            d = document.getElementById("itemDescB"),
            m = document.getElementById("itemCostB"),
            a = document.getElementById("itemCooldownB"),
            o = document.getElementById("itemNameC"),
            c = document.getElementById("itemDescC"),
            r = document.getElementById("itemCostC"),
            g = document.getElementById("itemCooldownC"),
            y = document.getElementById("abilityTypeA"),
            s = document.getElementById("abilityUsageA"),
            u = document.getElementById("abilityNameA"),
            b = document.getElementById("abilityDescA"),
            B = document.getElementById("abilityCostA"),
            E = document.getElementById("abilityCooldownA"),
            h = document.getElementById("abilityTypeB"),
            I = document.getElementById("abilityUsageB"),
            p = document.getElementById("abilityNameB"),
            T = document.getElementById("abilityDescB"),
            v = document.getElementById("abilityCostB"),
            L = document.getElementById("abilityCooldownB"),
            C = document.getElementById("abilityTypeC"),
            M = document.getElementById("abilityUsageC"),
            H = document.getElementById("abilityNameC"),
            F = document.getElementById("abilityDescC"),
            $ = document.getElementById("abilityCostC"),
            A = document.getElementById("abilityCooldownC");
        0 != u.value.length ? e.innerHTML = func.optimize(colors, `&6${s.innerHTML}: ${u.value} &e${"PASSIVE"==y.innerHTML.toUpperCase()?"":y.innerHTML.toUpperCase()}`, !1) : e.innerHTML = "", 0 != b.value.length ? t.innerHTML = func.optimize(colors, b.value, !0) : t.innerHTML = "", 0 != B.value.length ? n.innerHTML = func.optimize(colors, `&8Mana Cost: &3${B.value}`, !1) : n.innerHTML = "", 0 != E.value.length ? l.innerHTML = func.optimize(colors, `&8Cooldown: &a${E.value}s`, !1) : l.innerHTML = "", 0 != u.value.length || 0 != b.value.length || 0 != B.value.length || 0 != E.value.length ? document.getElementById("break4")
            .innerHTML = "<br>" : document.getElementById("break4")
            .innerHTML = "", 0 != p.value.length ? i.innerHTML = func.optimize(colors, `&6${I.innerHTML}: ${p.value} &e${"PASSIVE"==h.innerHTML.toUpperCase()?"":h.innerHTML.toUpperCase()}`, !1) : i.innerHTML = "", 0 != T.value.length ? d.innerHTML = func.optimize(colors, T.value, !0) : d.innerHTML = "", 0 != v.value.length ? m.innerHTML = func.optimize(colors, `&8Mana Cost: &3${v.value}`, !1) : m.innerHTML = "", 0 != L.value.length ? a.innerHTML = func.optimize(colors, `&8Cooldown: &a${L.value}s`, !1) : a.innerHTML = "", 0 != p.value.length || 0 != T.value.length || 0 != v.value.length || 0 != L.value.length ? document.getElementById("break5")
            .innerHTML = "<br>" : document.getElementById("break5")
            .innerHTML = "", 0 != H.value.length ? o.innerHTML = func.optimize(colors, `&6${M.innerHTML}: ${H.value} &e${"PASSIVE"==C.innerHTML.toUpperCase()?"":C.innerHTML.toUpperCase()}`, !1) : o.innerHTML = "", 0 != F.value.length ? c.innerHTML = func.optimize(colors, F.value, !0) : c.innerHTML = "", 0 != $.value.length ? r.innerHTML = func.optimize(colors, `&8Mana Cost: &3${$.value}`, !1) : r.innerHTML = "", 0 != A.value.length ? g.innerHTML = func.optimize(colors, `&8Cooldown: &a${A.value}s`, !1) : g.innerHTML = "", 0 != H.value.length || 0 != F.value.length || 0 != $.value.length || 0 != A.value.length ? document.getElementById("break6")
            .innerHTML = "<br>" : document.getElementById("break6")
            .innerHTML = ""
    }
}
global.functions = FunctionStructure;
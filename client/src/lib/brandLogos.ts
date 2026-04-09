import marelliLogo from "@assets/image_1775641394433.png";
import sachsLogo from "@assets/image_1775645082561.png";
import pierburgLogo from "@assets/image_1775645658529.png";
import snrLogo from "@assets/image_1775646456486.png";
import contitechLogo from "@assets/image_1775646531584.png";
import knLogo from "@assets/image_1775647760267.png";
import purfluxLogo from "@assets/image_1775647824718.png";
import hifiFilterLogo from "@assets/image_1775647976008.png";
import donaldsonLogo from "@assets/image_1775651340765.png";
import filtronLogo from "@assets/image_1775648857294.png";
import parkerLogo from "@assets/image_1775651494735.png";
import kybLogo from "@assets/image_1775651723100.png";
import nuralLogo from "@assets/image_1775653162129.png";
import kolbenschmidtLogo from "@assets/image_1775653561995.png";
import hengstLogo from "@assets/image_1775653755025.png";
import neoveloLogo from "@assets/image_1775560940186.png";

export { neoveloLogo };

export const getBrandDomain = (brandName: string): string | undefined => {
  const domainMap: Record<string, string> = {
    Brembo: "brembo.com",
    Textar: "textar.com",
    Ferodo: "ferodo.com",
    Bosch: "bosch.com",
    TRW: "trwaftermarket.com",
    ATE: "ate-brakes.com",
    Delphi: "delphiautoparts.com",
    Jurid: "jurid.com",
    Zimmermann: "otto-zimmermann.de",
    Budweg: "budweg.com",
    Hella: "hella.com",
    Castrol: "castrol.com",
    "Liqui Moly": "liqui-moly.com",
    Motul: "motul.com",
    Pierburg: "ms-motorservice.com",
    Frenkit: "frenkit.es",
    Autofren: "autofrenseinsa.com",
    Febi: "febi.com",
    Mann: "mann-filter.com",
    Mahle: "mahle.com",
    Hengst: "hengst.com",
    Filtron: "filtron.eu",
    Purflux: "purflux.com",
    Donaldson: "donaldson.com",
    "Hifi Filter": "hifi-filter.com",
    Parker: "parker.com",
    "K&N": "knfilters.com",
    Pipercross: "pipercross.com",
    Mobil: "mobil.com",
    "Victor Reinz": "victorreinz.com",
    Elring: "elring.com",
    Ajusa: "ajusa.es",
    "Nüral": "drivparts.com",
    Goetze: "drivparts.com",
    Glyco: "drivparts.com",
    Payen: "dana.com",
    AE: "drivparts.com",
    INA: "repxpert.com.tr",
    FAG: "repxpert.com.tr",
    LuK: "repxpert.com.tr",
    Vitesco: "repxpert.com.tr",
    Gates: "gates.com",
    Dayco: "dayco.com",
    SKF: "skf.com",
    Kolbenschmidt: "ms-motorservice.com",
    Lemförder: "aftermarket.zf.com",
    SNR: "ntn-snr.com",
    Meyle: "meyle.com",
    Bilstein: "bilstein.com",
    Sachs: "aftermarket.zf.com",
    MAPA: "mapa.com.tr",
    KYB: "kyb.com",
    Monroe: "monroe.com",
    Eibach: "eibach.com",
    Lesjöfors: "lesjoforsab.com",
    Valeo: "valeo.com",
    "Magneti Marelli": "marelli.com",
    "Van Wezel": "vanwezel.be",
    Klokkerholm: "klokkerholm.com",
    TYC: "tyc-europe.com",
    Alkar: "alkar.es",
    NGK: "ngkntk.com",
    Denso: "denso.com",
    Beru: "beru.com",
    Nissens: "nissens.com",
    Hepu: "hepu.de",
    Graf: "metelligroup.it",
    Dolz: "idolz.com",
    Bosal: "bosal.com",
    Walker: "walkerexhaust.com",
    Garrett: "garrettmotion.com",
    BorgWarner: "borgwarner.com",
    ZF: "zf.com",
    GKN: "gknautomotive.com",
    VDO: "vdo.com",
    Corteco: "corteco.com",
    Varta: "varta-automotive.com",
    Exide: "exidegroup.com",
    Contitech: "contitech.de",
    Continental: "continental.com",
  };
  return domainMap[brandName];
};

export const getBrandLogoCandidates = (brandName: string): string[] => {
  const brandLogoOverrides: Record<string, string> = {
    NeoVelo: neoveloLogo,
    LuK: "https://www.repxpert.com.tr/assets/images/brands/luk-logo.svg",
    INA: "https://www.repxpert.com.tr/assets/images/brands/ina-logo.svg",
    FAG: "https://www.repxpert.com.tr/assets/images/brands/fag-logo.svg",
    Vitesco: "https://www.repxpert.com.tr/assets/images/brands/vitesco-logo.svg",
    Bosch: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bosch-logo.svg",
    TRW: "https://commons.wikimedia.org/wiki/Special:Redirect/file/TRW_logo.svg",
    ATE: "https://www.ate-brakes.com/img/logo_ate.png",
    Castrol: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Castrol_logo_2023.svg",
    Motul: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Motul_logo.svg",
    Valeo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Valeo_Logo.svg",
    Hella: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hella-logo.svg",
    "Magneti Marelli": marelliLogo,
    NGK: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ngk_logo.svg",
    TYC: "https://images.seeklogo.com/logo-png/61/1/tyc-logo-png_seeklogo-617739.png",
    Denso: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Denso_logo.svg",
    Varta: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Varta-logo-2021.svg",
    Exide: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Exide_Logo.svg",
    Budweg: "https://www.budweg.com/hubfs/budweg-logo.png",
    Autofren: "https://www.autofrenseinsa.com/themes/custom/autofren/logo.svg",
    Brembo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brembo_logo_(2022).svg",
    Textar: "https://textar.com/wp-content/uploads/2021/09/Textar_Logo_UZ_black.svg",
    Ferodo: "https://www.ferodo.com/content/loc-emea/loc-eu/fmmp-ferodo/en_GB/_jcr_content/page-nav/site_nav/logo-image.img.png/Ferodo%20Logo-1635556089357.png",
    Mahle: "https://www.mahle.com/media/system_files/img/mahle_logo_2020.png",
    Mann: "https://www.mann-filter.com/us-en/_jcr_content/mainBrandLogo.coreimg.svg/1762774610821/logo.svg",
    Hengst: hengstLogo,
    Filtron: filtronLogo,
    Purflux: purfluxLogo,
    Donaldson: donaldsonLogo,
    "Hifi Filter": hifiFilterLogo,
    Parker: parkerLogo,
    "K&N": knLogo,
    Delphi: "https://www.delphiautoparts.com/ResourcePackages/Delphi/dist/a1d6c1389a3f6b5a43bd.svg",
    "Nüral": nuralLogo,
    Goetze: "https://cdn.worldvectorlogo.com/logos/goetze.svg",
    Glyco: "https://cdn.worldvectorlogo.com/logos/glyco.svg",
    Payen: "https://cdn.worldvectorlogo.com/logos/payen.svg",
    AE: "https://www.drivparts.com/content/dam/marketing/emea/fmmp/brands/brands-navi/ae.png",
    Kolbenschmidt: kolbenschmidtLogo,
    Febi: "https://cdn.worldvectorlogo.com/logos/febi-bilstein.svg",
    Sachs: sachsLogo,
    MAPA: "https://www.mapa.com.tr/wp-content/themes/mapa/assets/theme//images/mapa_logo.png",
    Monroe: "https://www.monroe.com/content/dam/marketing/North-America/monroe/homepage/monroe-logo.png",
    KYB: kybLogo,
    Garrett: "https://www.garrettmotion.com/wp-content/themes/garrettmotion/images/logo.svg",
    Pierburg: pierburgLogo,
    Bosal: "https://cdn.worldvectorlogo.com/logos/bosal.svg",
    Walker: "https://cdn.worldvectorlogo.com/logos/walker-mufflers.svg",
    SNR: snrLogo,
    Nissens: "https://powerful-wisdom-ab8ee1c7df.media.strapiapp.com/logo_1_1_6ae8158e28.svg",
    Graf: "https://www.metelligroup.it/images/2.png",
    Dolz: "https://www.idolz.com/wp-content/uploads/2021/03/dolz-2021-retina.png",
    "Liqui Moly": "https://www.liqui-moly.com/_Resources/Persistent/2/5/8/e/258e7ce972cde7f6b6ef260ef66bc9508e8eb6dc/liqui-moly-logo.svg",
    Lemförder: "https://wp.logos-download.com/wp-content/uploads/2021/01/LEMFORDER_Logo.svg?dl",
    Contitech: contitechLogo,
    Beru: "https://www.beru.com/assets/img/logo.svg",
    SKF: "https://commons.wikimedia.org/wiki/Special:Redirect/file/SKF-Logo.svg",
    Gates: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gates_Corporation_logo.svg",
    Bilstein: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bilstein_logo.svg",
    Meyle: "https://commons.wikimedia.org/wiki/Special:Redirect/file/MEYLE_logo.svg",
    Dayco: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dayco_logo.svg",
    Continental: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Continental_Automotive_logo.svg",
  };

  const domain = getBrandDomain(brandName);
  const candidates = [
    brandLogoOverrides[brandName],
    domain
      ? `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=256`
      : null,
  ].filter((value): value is string => Boolean(value));

  return Array.from(new Set(candidates));
};

export const getBrandLogo = (brandName: string): string =>
  getBrandLogoCandidates(brandName)[0] ?? "";

// Keep policy titles aligned with their published pages; policy URLs stay stable.
export const privacyPolicies = [
  { name: "Before & After Studio", path: "privacy/before-after-studio/" },
  { name: "Cursed Gem Mosaics", path: "privacy/cursed-gem-mosaics/" },
  { name: "IndexPilot", path: "privacy/indexpilot/" },
  { name: "SpinReel", path: "spinreel/privacy/" },
].sort((a, b) => a.name.localeCompare(b.name, "en"));

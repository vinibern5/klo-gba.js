export default {
  rom: {
    tilemap: [0x1B27FC, 0x1B36F3],
    oam: [0xE2B90, 0xE2F59],
  },
  tilemap: {
    height: 60,
    width: 420,
    scheme: [
      {
        name: 'grass',
        ids: [0x7D, 0x80, 0x81, 0x82, 0x8E, 0x8F, 0x90],
      },
      {
        name: 'rock',
        ids: [0x54, 0x53, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x5D, 0x60, 0x61, 0x62, 0x63, 0x64, 0x6B, 0x6D, 0x6E, 0x6F, 0x77, 0x7A, 0x7B, 0x7C, 0x7E, 0x7F, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8A, 0x8B, 0x8C, 0x8D, 0x91, 0xAB, 0xB0, 0xB1, 0xB3, 0xBD],
      },
      {
        name: 'darkRock',
        ids: [0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x48, 0x4A, 0x4B, 0x4C, 0x4D, 0x4E, 0x4F, 0x51, 0x5B, 0x5E, 0x95, 0x96, 0x97, 0x9C, 0x9E, 0x9F, 0xA0, 0xA1, 0xA2, 0xA3, 0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB7, 0xB8, 0xB9, 0xBA, 0xBB, 0xC2],
      },
      {
        name: 'wood',
        ids: [0x52, 0x94, 0x98, 0x99, 0x9A, 0x9B, 0x9D, 0xA4, 0xA5],
      },
      {
        name: 'bridgeRope',
        ids: [0x04, 0x05, 0x0B, 0x0C, 0x11, 0x13, 0x14, 0x21],
      },
      {
        name: 'board',
        ids: [0x10, 0x12, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x1B, 0x1C, 0x37, 0x38, 0x39, 0x3A],
      },
      {
        name: 'spike',
        ids: [0x3D],
      },
    ],
  },
}
import {
  BLACK_MARKET,
  CARAVANSARY,
  FABRIC_WAREHOUSE,
  FRUIT_WAREHOUSE,
  GEMSTONE_DEALER,
  GREAT_MOSQUE,
  LARGE_MARKET,
  SMALL_MARKET,
  SMALL_MOSQUE,
  SPICE_WAREHOUSE,
  TEA_HOUSE,
  WAINWRIGHT
} from '../react/Modal/location_types';

export function mapCoordToLocation(coords) {
  const coordsMap = {
    '0,0': GREAT_MOSQUE,
    '1,0': FRUIT_WAREHOUSE,
    '2,0': CARAVANSARY,
    '3,0': LARGE_MARKET,
    '0,1': FABRIC_WAREHOUSE,
    '1,1': SPICE_WAREHOUSE,
    '2,1': SMALL_MARKET,
    '3,1': WAINWRIGHT,
    '0,2': SMALL_MOSQUE,
    '1,2': BLACK_MARKET,
    '2,2': TEA_HOUSE,
    '3,2': GEMSTONE_DEALER
  };

  return coordsMap[coords];
}
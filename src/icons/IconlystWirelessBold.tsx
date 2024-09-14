import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.737 7.482C16.603 2.537 8.76 2.094 3.095 6.428c-.78.595-1.153 1.474-1.028 2.412a2.92 2.92 0 0 0 1.763 2.288c.869.353 1.819.206 2.588-.399 2.953-2.24 6.897-2.439 10.045-.505.549.34.25.893.185 1.001-.133.216-.425.535-.885.26-2.967-1.859-6.885-1.382-9.317 1.132a1 1 0 1 0 1.437 1.391c1.78-1.84 4.648-2.187 6.833-.818 1.478.888 2.95.208 3.64-.926.693-1.137.63-2.835-.846-3.743-3.858-2.37-8.686-2.129-12.315.625-.282.223-.483.182-.612.13a.94.94 0 0 1-.533-.7c-.03-.223.052-.4.259-.559 4.875-3.729 11.62-3.35 16.04.905a1 1 0 1 0 1.387-1.44M12.522 18.24a1 1 0 0 1-.7.307 1 1 0 0 1-.723-.288.98.98 0 0 1-.304-.691c-.005-.27.095-.527.279-.719a1.001 1.001 0 0 1 1.421-.027.995.995 0 0 1 .027 1.418m1.362-2.857a3.002 3.002 0 0 0-5.088 2.229c.018.8.345 1.544.918 2.09a3 3 0 0 0 2.087.845l.058-.001a2.98 2.98 0 0 0 2.105-.921 3.01 3.01 0 0 0-.08-4.241z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessBold;

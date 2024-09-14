import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery4Bold = ({
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
      d="M11.8 7.265a.3.3 0 0 0 .3-.3v-4.15a.3.3 0 0 0-.3-.3H7.747c-1.352 0-2.55.814-3.051 2.075L3.85 6.7q-.037.09-.07.181a.29.29 0 0 0 .278.384zM13.6 6.965a.3.3 0 0 0 .3.3h7.752a.288.288 0 0 0 .277-.383l-.074-.194-.849-2.109a3.27 3.27 0 0 0-3.049-2.064H13.9a.3.3 0 0 0-.3.3zM10.95 17.235H7.956a.75.75 0 0 1 0-1.5h2.996a.75.75 0 0 1 0 1.5m-7.285-8.47a.297.297 0 0 0-.299.28 4 4 0 0 0-.004.179l-.012 7.69c-.008 2.846 1.467 4.55 3.945 4.56l11.13.01c1.12 0 2.03-.337 2.703-1.005.786-.782 1.204-2 1.208-3.523l.014-7.71q0-.102-.005-.202a.295.295 0 0 0-.297-.28z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery4Bold;

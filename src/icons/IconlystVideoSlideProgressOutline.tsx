import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlideProgressOutline = ({
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
      d="M2.334 7.924c0-2.64 2.14-4.78 4.778-4.78h9.943a4.78 4.78 0 0 1 4.779 4.78v8.156a4.78 4.78 0 0 1-4.78 4.78H7.113a4.78 4.78 0 0 1-4.778-4.78zm4.778-3.28a3.28 3.28 0 0 0-3.278 3.28v8.156a3.28 3.28 0 0 0 3.278 3.28h9.943a3.28 3.28 0 0 0 3.279-3.28V7.924a3.28 3.28 0 0 0-3.28-3.28z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.315 14.79a.75.75 0 0 1 .75.75v.19h6.266a.75.75 0 0 1 0 1.5h-6.268a.75.75 0 0 1-1.499-.04v-1.65a.75.75 0 0 1 .75-.75M6.086 16.48a.75.75 0 0 1 .75-.75h1.181a.75.75 0 0 1 0 1.5H6.836a.75.75 0 0 1-.75-.75M11.135 8.501a12.5 12.5 0 0 0 0 2.667c.019.132.068.158.071.16.006.003.078.042.254-.026a6.5 6.5 0 0 0 1.9-1.193c.138-.128.157-.23.157-.28s-.022-.15-.155-.27l-.004-.003a6.3 6.3 0 0 0-1.905-1.194l-.007-.003c-.133-.056-.208-.03-.231-.019a.1.1 0 0 0-.038.036.3.3 0 0 0-.042.125m.89-1.526c-.488-.204-1.037-.21-1.508.037-.483.254-.795.729-.87 1.3l-.002.014a14 14 0 0 0 0 3.005l.002.016c.067.537.344 1.019.823 1.288.475.268 1.033.262 1.542.062l.006-.003a8 8 0 0 0 2.35-1.475l.005-.004c.402-.37.647-.858.644-1.393-.003-.534-.252-1.015-.646-1.373a7.8 7.8 0 0 0-2.346-1.474"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlideProgressOutline;

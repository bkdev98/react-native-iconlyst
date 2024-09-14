import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallAmericanFootballLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.344 10.657-3.036 3.036M14.047 3.394l6.559 6.558M3.318 14.123l6.56 6.559M20.976 7.864c.097-1.408-.068-3.005-.951-3.89-.879-.878-2.471-1.048-3.893-.949A14.12 14.12 0 0 0 3.026 16.17c-.095 1.418.072 2.98.931 3.846.875.882 2.454 1.055 3.869.961a14.12 14.12 0 0 0 13.15-13.113"
    />
  </Svg>
);
export default IconlystBallAmericanFootballLight;

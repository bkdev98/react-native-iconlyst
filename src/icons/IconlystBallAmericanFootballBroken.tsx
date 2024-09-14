import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallAmericanFootballBroken = ({
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
      d="m13.344 10.656-3.036 3.036M14.047 3.395l6.559 6.558M3.318 14.123l6.56 6.559M7.826 6.476a14.1 14.1 0 0 1 8.306-3.45c1.422-.1 3.014.07 3.893.949.883.884 1.048 2.481.95 3.889a14.12 14.12 0 0 1-13.15 13.113c-1.414.094-2.993-.08-3.868-.961-.859-.867-1.026-2.428-.931-3.846a14.1 14.1 0 0 1 2.278-6.8"
    />
  </Svg>
);
export default IconlystBallAmericanFootballBroken;

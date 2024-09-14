import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodMusicBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.687 7.14c0-1.287-.621-2.474-1.546-3.322-.924-.848-2.17-1.372-3.445-1.314h-.002c-1.34.069-2.53.741-3.294 1.754-.31.412-.461.92-.461 1.426v2.378c0 .504.148 1.011.46 1.424a4.7 4.7 0 0 0 3.74 1.845h.884v6.095c0 1.014.819 1.837 1.832 1.837a1.835 1.835 0 0 0 1.832-1.837zm-5.604-1.655c.42 0 .761.341.761.762v1.386a.761.761 0 1 1-1.522 0V6.247c0-.42.34-.762.761-.762"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.819 5.073a.969.969 0 0 0-1.869.358v1.957a2.287 2.287 0 1 0 1.931 2.09 1 1 0 0 0 .006-.109V7.588q.176.061.372.101a.969.969 0 0 0 .387-1.898 1.1 1.1 0 0 1-.629-.403 1.6 1.6 0 0 1-.195-.309zM9.635 10.254a.97.97 0 0 1 1.079.6v.002l.014.032q.023.05.075.15c.073.135.186.321.345.515.318.39.783.775 1.44.909a.969.969 0 0 1-.386 1.899 4.2 4.2 0 0 1-1.422-.57v4.05a1 1 0 0 1-.006.108q.006.097.006.196a3.355 3.355 0 1 1-1.938-3.043v-3.895c0-.467.334-.868.793-.953"
    />
  </Svg>
);
export default IconlystAirpodMusicBold;

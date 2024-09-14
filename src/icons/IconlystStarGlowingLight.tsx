import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGlowingLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.521 19.439 1-1M18.52 19.416l-1-1M5.498 6.438l1 1M18.5 6.416l-1.002 1M12 20.916v1M12 3.916v1M4.045 12.916H3M21 12.916h-1.045"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.463 9.608.766 1.532a.52.52 0 0 0 .389.28l1.716.246a.508.508 0 0 1 .286.87l-1.241 1.191a.5.5 0 0 0-.15.452l.295 1.683a.516.516 0 0 1-.75.537l-1.532-.795a.53.53 0 0 0-.482 0l-1.533.795a.516.516 0 0 1-.75-.537l.293-1.683a.5.5 0 0 0-.148-.452L8.38 12.536a.51.51 0 0 1 .286-.87l1.716-.246a.52.52 0 0 0 .389-.279l.768-1.533a.521.521 0 0 1 .924 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarGlowingLight;

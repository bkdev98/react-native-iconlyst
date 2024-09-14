import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusScanTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 8.752V7.175a3.893 3.893 0 0 1 3.893-3.892h1.289M21.498 15.815v1.577a3.893 3.893 0 0 1-3.893 3.891h-1.289M21.502 8.752V7.175a3.89 3.89 0 0 0-3.893-3.892h-1.257M3.5 15.815v1.577a3.893 3.893 0 0 0 3.893 3.891H8.65"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.864 16.684h-.73a2.49 2.49 0 0 1-2.49-2.491v-1.65a2.49 2.49 0 0 1 2.49-2.49h.73a2.49 2.49 0 0 1 2.49 2.49v1.65a2.49 2.49 0 0 1-2.49 2.49"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.527 8.396.121.713a1.9 1.9 0 0 0 1.18 1.454l1.3.508M9.645 12.543c-.886-.067-1.768-.153-2.793.259M7.527 16.93l.124-.714a1.9 1.9 0 0 1 1.177-1.45l.837-.323M15.34 14.443l.829.323a1.93 1.93 0 0 1 1.186 1.45l.115.713M15.356 12.543c.885-.067 1.768-.153 2.792.259M17.472 8.396l-.122.713a1.91 1.91 0 0 1-1.178 1.454l-1.3.508M10.844 10.42V9.293a1.658 1.658 0 1 1 3.315 0v1.127"
    />
  </Svg>
);
export default IconlystVirusScanTwoTone;

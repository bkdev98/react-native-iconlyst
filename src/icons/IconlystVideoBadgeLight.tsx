import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBadgeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.789 20.206-1.421-1.421a2.16 2.16 0 0 0-1.526-.632H7.774a3.94 3.94 0 0 1-3.94-3.94V7.3a3.94 3.94 0 0 1 3.94-3.94h10.121a3.94 3.94 0 0 1 3.939 3.94v6.915a3.94 3.94 0 0 1-3.939 3.94h-1.068c-.572 0-1.12.226-1.526.63l-1.422 1.422a1.476 1.476 0 0 1-2.09 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.315 11.827a9.5 9.5 0 0 1-2.78 1.745c-.899.354-1.65-.087-1.762-.973a17.4 17.4 0 0 1 0-3.719c.121-.92.95-1.31 1.761-.969a9.3 9.3 0 0 1 2.781 1.746c.693.627.709 1.519 0 2.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoBadgeLight;

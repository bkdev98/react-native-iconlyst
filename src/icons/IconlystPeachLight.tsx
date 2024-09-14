import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeachLight = ({
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
      d="M12.585 3c1.112 1.135.998 3.25.419 4.32"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.772 3.07c-.297 1.572-1.172 3.134-2.57 3.607-.863.292-1.999.587-2.87-.14 1.212-3.709 3.938-3.284 5.44-3.467"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.889 7.251c-1.077-1.279-4.372-1.75-6.625 0-4.324 3.334-2.405 10.49 2.433 11.905.887.358.98 1.445 2.03 1.684 4.737.993 9.018-2.785 9.39-7.46.373-4.198-3.18-7.17-6.622-6.204-2.054.576-3.26 2.129-3.688 4.16"
    />
  </Svg>
);
export default IconlystPeachLight;

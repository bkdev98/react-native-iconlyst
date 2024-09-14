import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailLightcurved = ({
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
      d="M11.985 21.606c2.334 0 7.672-2.322 7.672-8.727 0-6.404.278-6.905-.338-7.521S15.494 2.75 11.985 2.75 5.266 4.74 4.65 5.358c-.616.616-.338 1.117-.338 7.52 0 6.406 5.338 8.728 7.673 8.728"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.864 13.825-3.759-3.758M10.105 13.825l3.76-3.758"
    />
  </Svg>
);
export default IconlystShieldFailLightcurved;

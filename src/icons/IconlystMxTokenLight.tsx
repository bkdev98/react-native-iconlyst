import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMxTokenLight = ({
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
      d="M16.739 16.604a2.3 2.3 0 0 0 1.953 1.082H4.778c-1.368 0-2.222-1.482-1.536-2.666L7.776 7.2a1.776 1.776 0 0 1 3.04-.053z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.22 9.379 1.368-2.188a1.775 1.775 0 0 1 3.04.048l4.063 6.997c.882 1.536-.227 3.45-2 3.45"
    />
  </Svg>
);
export default IconlystMxTokenLight;

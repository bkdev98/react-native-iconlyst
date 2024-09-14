import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostProgressBroken = ({
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
      d="M11.235 20.068H5.748a2.898 2.898 0 1 1 0-5.797h14.203a2.899 2.899 0 0 1 0 5.797h-5.487M6.871 17.169h1.155m4.261 0h1.155m4.26 0h1.155"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.544 11.52V5.954a2.026 2.026 0 0 1 2.03-2.022l8.576.02a2.026 2.026 0 0 1 2.021 2.03l-.016 8.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.835 6.935.012 2.366-1.989-.648-2.001.66-.005-5.36"
    />
  </Svg>
);
export default IconlystPostProgressBroken;

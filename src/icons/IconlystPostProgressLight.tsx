import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostProgressLight = ({
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
      d="M5.748 20.068h14.203a2.898 2.898 0 1 0 0-5.797H5.748a2.899 2.899 0 0 0 0 5.797M6.871 17.169h1.155m4.261 0h1.155m4.26 0h1.155"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.527 14.272.017-8.318a2.026 2.026 0 0 1 2.03-2.022l8.576.02a2.026 2.026 0 0 1 2.02 2.03l-.016 8.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.835 3.935.012 5.367-1.989-.65-2.001.66-.005-5.36"
    />
  </Svg>
);
export default IconlystPostProgressLight;

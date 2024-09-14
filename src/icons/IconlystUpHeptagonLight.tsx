import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpHeptagonLight = ({
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
      d="M12.002 8.129v7.742m0-7.742-3.02 3.031m3.02-3.031 3.018 3.031"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.89 3.415 5.724 5.902A2.56 2.56 0 0 0 4.34 7.638l-1.275 5.59c-.175.759.007 1.556.494 2.165l3.574 4.481a2.56 2.56 0 0 0 2.001.965h5.732a2.56 2.56 0 0 0 2.001-.965l3.575-4.481c.485-.61.667-1.406.494-2.166L19.66 7.638a2.56 2.56 0 0 0-1.385-1.736L13.11 3.415a2.56 2.56 0 0 0-2.22 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpHeptagonLight;

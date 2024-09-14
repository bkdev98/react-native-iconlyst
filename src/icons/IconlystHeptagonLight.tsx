import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeptagonLight = ({
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
      d="M10.89 3.414 5.724 5.901A2.56 2.56 0 0 0 4.34 7.638l-1.275 5.589c-.175.76.007 1.556.494 2.165l3.574 4.482a2.56 2.56 0 0 0 2.001.964h5.732a2.56 2.56 0 0 0 2.001-.964l3.575-4.482c.485-.609.667-1.405.494-2.165l-1.276-5.59a2.56 2.56 0 0 0-1.385-1.736L13.11 3.414a2.56 2.56 0 0 0-2.22 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeptagonLight;

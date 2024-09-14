import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImacOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 6.227a3.757 3.757 0 0 1 3.757-3.756h11.987A3.757 3.757 0 0 1 22 6.227v7.5a3.757 3.757 0 0 1-3.756 3.758H6.257A3.76 3.76 0 0 1 2.5 13.728zm3.757-2.256A2.257 2.257 0 0 0 4 6.227v7.5a2.26 2.26 0 0 0 2.257 2.258h11.987a2.257 2.257 0 0 0 2.256-2.257v-7.5a2.257 2.257 0 0 0-2.256-2.257z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.976 16.083a.75.75 0 0 1 1.023.28l1.608 2.82c.595 1.055-.166 2.376-1.39 2.376H9.287a1.594 1.594 0 0 1-1.388-2.388l.002-.003 1.625-2.809a.75.75 0 1 1 1.298.751L9.2 19.917c-.037.065.007.142.086.142h5.932a.1.1 0 0 0 .045-.01.1.1 0 0 0 .035-.037.1.1 0 0 0 .014-.048.1.1 0 0 0-.011-.042l-1.605-2.816a.75.75 0 0 1 .28-1.023M2.5 12.676a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImacOutline;

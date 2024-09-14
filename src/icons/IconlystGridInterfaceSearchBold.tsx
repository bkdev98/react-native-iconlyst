import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceSearchBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.677 13.624H5.073a2.7 2.7 0 0 0-2.698 2.698v2.604a2.7 2.7 0 0 0 2.698 2.698h2.604a2.7 2.7 0 0 0 2.698-2.698v-2.604a2.7 2.7 0 0 0-2.698-2.698M18.677 13.624h-2.604a2.7 2.7 0 0 0-2.698 2.698v2.604a2.7 2.7 0 0 0 2.698 2.698h2.604a2.7 2.7 0 0 0 2.698-2.698v-2.604a2.7 2.7 0 0 0-2.698-2.698M7.677 2.624H5.073a2.7 2.7 0 0 0-2.698 2.698v2.604a2.7 2.7 0 0 0 2.698 2.698h2.604a2.7 2.7 0 0 0 2.698-2.698V5.322a2.7 2.7 0 0 0-2.698-2.698M18.658 7.907c-.892.893-2.45.893-3.341 0a2.367 2.367 0 0 1 0-3.341 2.36 2.36 0 0 1 1.67-.69c.606 0 1.21.23 1.67.69.448.446.693 1.04.693 1.67s-.245 1.225-.692 1.67m2.748 1.687-1.208-1.208c.424-.63.652-1.373.652-2.15a3.83 3.83 0 0 0-1.131-2.73 3.867 3.867 0 0 0-5.463 0 3.87 3.87 0 0 0 0 5.462c1.278 1.278 3.413 1.464 4.88.479l1.209 1.208a.748.748 0 0 0 1.061 0 .75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceSearchBold;

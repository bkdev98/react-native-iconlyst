import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThorchainLight = ({
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
      d="M4.537 19.86 12.002 12l4.725 4.565-11.462 4.387c-.67.256-1.221-.572-.728-1.092M19.463 4.14 11.996 12 7.273 7.435l11.462-4.387c.67-.256 1.222.572.728 1.092"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThorchainLight;

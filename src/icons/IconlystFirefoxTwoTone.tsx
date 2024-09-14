import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFirefoxTwoTone = ({
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
      d="M4.084 7.91A8.938 8.938 0 1 0 16.82 4.533c-1.95-1.216-4.895-1.61-6.453-1.013"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.964 9.563c-1.743-1.558-.8-5.342.109-6.127.085.89.58 1.2 1.103 1.673.874-.273 1.304-.28 1.854 0 .814-.903 1.682-2.337 2.61-2.078C9.565 4.76 10.57 6.738 12 7.175c-.168.968-1.473 1.9-2.74 2.667-1.288.932-.718 1.838 0 2.219.942.502 3.868-1.145 4.795.195-1.686.101-1.716 1.716-4.237 2.865 2.505.95 4.314.458 5.42-.338 1.951-1.51 2.859-3.517 2.859-5.519-.014-1.388.193-2.676-1.251-4.717"
    />
  </Svg>
);
export default IconlystFirefoxTwoTone;

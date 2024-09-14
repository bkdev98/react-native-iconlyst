import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVenomLight = ({
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.375 14.738l-.968.968m3.02.55-.587 1.237M15.679 14.738l.968.968m-3.02.55.587 1.237"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.203 13.89c.795 2.004 2.64 3.403 4.792 3.403s4.006-1.399 4.8-3.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.96 11.47c1.26.736 3.23-.46 2.642-1.153C9.83 9.405 7.45 8.211 7.3 8.328c-.38.293-.351 2.55.662 3.142M16.04 11.47c-1.259.736-3.229-.46-2.641-1.153.773-.912 3.152-2.106 3.303-1.989.38.293.351 2.55-.662 3.142"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVenomLight;

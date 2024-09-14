import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVenomTwoTone = ({
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
      d="M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.875 14.738-.968.968m3.02.55-.587 1.237M16.179 14.738l.968.968m-3.02.55.587 1.237M7.703 13.89c.795 2.004 2.64 3.403 4.792 3.403s4.006-1.399 4.8-3.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.46 11.47c1.26.736 3.23-.46 2.642-1.153C10.33 9.405 7.95 8.211 7.8 8.328c-.38.293-.351 2.55.662 3.142M16.54 11.47c-1.259.736-3.229-.46-2.641-1.153.773-.912 3.152-2.106 3.303-1.989.38.293.351 2.55-.662 3.142"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVenomTwoTone;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVenomBroken = ({
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
      d="M12.25 3a9 9 0 1 0 3.076.54M8.626 14.738l-.969.968m3.02.55-.586 1.237M15.928 14.738l.968.968m-3.02.55.587 1.237"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.454 13.893c.795 2.003 2.64 3.402 4.792 3.402s4.005-1.4 4.8-3.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.21 11.47c1.26.736 3.23-.46 2.642-1.153C10.08 9.405 7.7 8.211 7.55 8.328c-.38.293-.351 2.55.662 3.142M16.29 11.47c-1.259.736-3.229-.46-2.641-1.153.773-.912 3.152-2.106 3.303-1.989.38.293.351 2.55-.662 3.142"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVenomBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven1Broken = ({
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
      d="M12.285 21h3.808a3.99 3.99 0 0 0 3.99-3.99V6.99A3.99 3.99 0 0 0 16.093 3H7.907a3.99 3.99 0 0 0-3.989 3.99v10.02A3.99 3.99 0 0 0 7.908 21h.947M8.235 6.03h-.01M15.785 6.03h-.01M12.01 6.03H12M20.083 8.481H3.918"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.11 11.33c1.559 0 2.133.874 2.133 2.471v1.837c.004 1.598-.574 2.467-2.133 2.467H8.893c-1.554 0-2.133-.869-2.133-2.467v-1.796c0-1.623.579-2.512 2.133-2.512H12"
    />
  </Svg>
);
export default IconlystOven1Broken;

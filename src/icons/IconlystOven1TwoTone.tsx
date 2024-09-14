import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven1TwoTone = ({
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
      d="M16.593 3H8.407a3.99 3.99 0 0 0-3.989 3.99v10.02A3.99 3.99 0 0 0 8.408 21h8.185a3.99 3.99 0 0 0 3.99-3.99V6.99A3.99 3.99 0 0 0 16.593 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.735 6.03h-.01M16.285 6.03h-.01M12.51 6.03h-.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.583 8.481H4.418"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.61 18.105H9.393c-1.554 0-2.133-.869-2.133-2.467v-1.796c0-1.623.579-2.512 2.133-2.512h6.217c1.559 0 2.133.874 2.133 2.471v1.837c.004 1.598-.574 2.467-2.133 2.467"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOven1TwoTone;

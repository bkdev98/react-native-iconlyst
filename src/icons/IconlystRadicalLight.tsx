import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadicalLight = ({
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
      d="M21 4.974h-5.083a3.79 3.79 0 0 0-3.651 2.765L9.267 18.373c-.237.839-1.41.88-1.706.06l-1.985-5.51A3.53 3.53 0 0 0 3 10.673M16.445 12.852 21 19.027M21 12.852l-4.555 6.175"
    />
  </Svg>
);
export default IconlystRadicalLight;

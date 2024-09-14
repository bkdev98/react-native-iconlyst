import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapHoldLight = ({
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
      d="M17.594 12.69c.904 2.44.014 5.669-1.57 7.252-2.02 2.021-7.668 2.175-9.517-.125-1.173-1.459-2.085-3.23-2.66-4.816-.308-.851.144-1.769.99-2.093a1.735 1.735 0 0 1 2.05.636l1.135 1.647V6.087a1.587 1.587 0 0 1 3.174-.024l.063 4.106c2.22.212 5.437.097 6.335 2.521"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.87 9.5C6.785 8.86 6.05 7.639 6.05 6.237c0-2.064 1.593-3.737 3.558-3.737s3.558 1.673 3.558 3.737c0 1.38-.712 2.584-1.77 3.232M17.75 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.75 5.258v.741l.64.518"
    />
  </Svg>
);
export default IconlystTapHoldLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIgtvBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.192 14.865-3.944 1.12a.76.76 0 0 1-.658-.123.75.75 0 0 1-.297-.6v-1.646l-3.095.784a.746.746 0 0 1-.91-.543.75.75 0 0 1 .541-.91l4.03-1.02a.75.75 0 0 1 .934.726v1.617l2.99-.848a.751.751 0 0 1 .41 1.443m-.476-9.083h-2.24L14.98 4.14a.748.748 0 1 0-1.105-1.013L12 5.172l-1.877-2.046a.75.75 0 0 0-1.06-.046.75.75 0 0 0-.046 1.06l1.507 1.642H8.282c-2.82 0-4.716 1.981-4.716 4.932v6.489c0 2.948 1.896 4.93 4.716 4.93h7.433c2.823 0 4.718-1.982 4.718-4.93v-6.49c0-2.95-1.895-4.93-4.717-4.93"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIgtvBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIgtvBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.716 5.274h-2.24L14.98 3.63a.748.748 0 1 0-1.105-1.013L12 4.664l-1.877-2.046a.75.75 0 0 0-1.06-.046.75.75 0 0 0-.046 1.059l1.507 1.643H8.282c-2.82 0-4.716 1.98-4.716 4.93v6.49c0 2.949 1.896 4.93 4.716 4.93h7.433c2.823 0 4.718-1.981 4.718-4.93v-6.49c0-2.95-1.895-4.93-4.717-4.93"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.248 15.476 3.944-1.12a.751.751 0 0 0-.41-1.443l-2.989.849v-1.618a.75.75 0 0 0-.935-.726l-4.029 1.02a.75.75 0 0 0-.542.91.746.746 0 0 0 .911.543l3.095-.783v1.646a.75.75 0 0 0 .955.722"
    />
  </Svg>
);
export default IconlystIgtvBulk;

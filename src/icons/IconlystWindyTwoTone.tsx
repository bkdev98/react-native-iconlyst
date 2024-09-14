import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindyTwoTone = ({
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
      d="M3.114 10.402c.96-1.39 4-3.911 8.474-2.88"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.892 4.066c.772.32 2.843.747 4.95-.118"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.943 19.617c.602.236 2.107.388 3.309-.896"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.904 9.156a2.643 2.643 0 0 1 2.643-2.643c2.877 0 3.504 3.882 1.021 4.974-1.655.728-4.065.122-4.859-.135C7.664 9.068 4.292 13.52 3.592 15.656"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.744 16.988c0 1.953 2.271 2.186 3.118 1.05.656-.881.243-2.1-.605-2.667-2.4-1.608-6.309-1.4-8.61.245"
    />
  </Svg>
);
export default IconlystWindyTwoTone;

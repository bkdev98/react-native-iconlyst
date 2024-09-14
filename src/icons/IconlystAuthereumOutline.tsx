import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAuthereumOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.939 3.274a.75.75 0 0 1-.489.941L5.5 5.466v5.118c0 2.542 1.331 4.483 2.938 6.007.802.761 1.656 1.401 2.42 1.95l.436.309c.336.238.658.466.935.678.28-.212.603-.44.94-.678l.441-.31c.769-.549 1.628-1.19 2.435-1.95C17.662 15.065 19 13.124 19 10.584V5.467l-3.975-1.251a.75.75 0 1 1 .45-1.431l4.5 1.416a.75.75 0 0 1 .525.716v5.667c0 3.126-1.662 5.434-3.426 7.097-.883.833-1.81 1.52-2.594 2.08l-.505.358c-.56.394-.977.688-1.237.93a.75.75 0 0 1-1.023-.002c-.259-.242-.673-.536-1.23-.931q-.234-.166-.5-.357c-.78-.558-1.7-1.246-2.58-2.08C5.653 16.017 4 13.709 4 10.585V4.917a.75.75 0 0 1 .524-.715l4.473-1.417a.75.75 0 0 1 .942.489"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 9.834a.75.75 0 0 1 .663.4l2.25 4.25a.75.75 0 0 1-.263.985l-2.25 1.416a.75.75 0 0 1-.8 0L9.6 15.47a.75.75 0 0 1-.263-.986l2.25-4.25a.75.75 0 0 1 .663-.399M10.99 14.57l1.261.794 1.262-.794-1.262-2.383z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.75a.75.75 0 0 1 .663.4l4.5 8.5a.75.75 0 0 1-1.326.7L12.25 5.104l-3.837 7.248a.75.75 0 0 1-1.326-.702l4.5-8.5a.75.75 0 0 1 .663-.399"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAuthereumOutline;

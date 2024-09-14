import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiveTvTwoTone = ({
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
      d="M17.306 20.796H7.363a4.03 4.03 0 0 1-4.029-4.03V11.31a4.03 4.03 0 0 1 4.03-4.029h9.942a4.03 4.03 0 0 1 4.028 4.03v5.456a4.03 4.03 0 0 1-4.028 4.029"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.536 15.18a8.8 8.8 0 0 1-2.563 1.609c-.827.326-1.52-.08-1.622-.896a16 16 0 0 1 0-3.427c.111-.847.875-1.207 1.622-.892a8.6 8.6 0 0 1 2.563 1.607c.637.58.653 1.4 0 2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.887 3.207-4.553 4.075-4.438-4.075"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLiveTvTwoTone;

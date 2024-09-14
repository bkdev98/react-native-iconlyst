import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLastFmSquareTwoTone = ({
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
      d="M21 9.163c-.414-2.54-4.113-2.902-5.384-1.126-.79 1.103-.495 2.8.776 3.384 1.701.781 4.608.22 4.608 2.918 0 2.494-2.361 2.928-4.104 2.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.438 15.582c-1.074.979-2.541 1.202-3.46 1.202-2.406 0-3.978-2.07-3.978-4.759s1.761-4.904 4.168-4.904c1.203 0 2.482.58 3.27 1.46 2.27 2.535 2.684 7.81 6.458 8.41"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLastFmSquareTwoTone;

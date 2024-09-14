import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse5Light = ({
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
      d="M18.697 14.703C18.697 18.18 15.7 21 12.002 21s-6.695-2.818-6.695-6.294l-.002-5.409C5.304 5.82 8.302 3 12 3c3.696 0 6.694 2.818 6.695 6.295zM12.002 7.271v2.9M14.901 10.172H9.1"
    />
  </Svg>
);
export default IconlystMouse5Light;

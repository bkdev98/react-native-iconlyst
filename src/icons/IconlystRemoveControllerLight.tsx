import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveControllerLight = ({
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
      d="M5.692 18.3a3.7 3.7 0 0 1-1.17-.234c-1.331-.54-1.547-1.971-1.52-3.285-.009-.288.243-7.072 3.041-8.538.567-.252 2.115-1.133 4.103.054 1.457.863 2.07 1.016 3.707 0 1.763-1.098 3.292-.423 3.959-.117M8.003 9.73v2.868m1.434-1.434H6.568M20.026 3.97 3.97 20.029M19.8 8.563c1.071 2.52 1.197 6.01 1.197 6.217.028 1.314-.188 2.745-1.52 3.285-1.25.458-2.277.224-2.942-.28-.729-.54-.81-1.196-1.854-1.78-.404-.225-1.097-.378-1.88-.441M16.002 12.609v-.01M17.438 11.175v-.01"
    />
  </Svg>
);
export default IconlystRemoveControllerLight;

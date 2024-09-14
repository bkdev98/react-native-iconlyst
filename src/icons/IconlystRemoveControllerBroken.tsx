import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveControllerBroken = ({
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
      d="M5.692 18.3a3.7 3.7 0 0 1-1.17-.234c-1.331-.54-1.547-1.971-1.52-3.285M17.811 6.18c-.666-.306-2.196-.98-3.959.117-1.637 1.016-2.249.863-3.706 0-1.989-1.187-3.537-.306-4.103-.054-1.454.762-2.22 2.96-2.62 4.936M8.003 9.73v2.868m1.434-1.434H6.568M20.026 3.97 3.97 20.029M19.8 8.563c1.071 2.52 1.197 6.01 1.197 6.217.028 1.314-.188 2.745-1.52 3.285-1.25.458-2.277.224-2.942-.28-.729-.54-.81-1.196-1.854-1.78-.404-.225-1.097-.378-1.88-.441M16.002 12.609v-.01M17.438 11.175v-.01"
    />
  </Svg>
);
export default IconlystRemoveControllerBroken;

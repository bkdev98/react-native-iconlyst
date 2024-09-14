import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordOutlinecurved = ({
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
      d="M9.087 10.898a1.102 1.102 0 1 0 .002 0zM6.485 12a2.6 2.6 0 0 1 2.602-2.602h.003A2.602 2.602 0 1 1 6.485 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.192 12a.75.75 0 0 1 .75-.75h6.318a.75.75 0 0 1 .75.75v1.852a.75.75 0 0 1-1.5 0V12.75h-5.568a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.432 11.25a.75.75 0 0 1 .75.75v1.852a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.554 5.304C4.331 6.527 3.75 8.574 3.75 12c0 3.427.581 5.473 1.804 6.696S8.824 20.5 12.25 20.5c3.427 0 5.473-.58 6.696-1.804 1.223-1.223 1.804-3.269 1.804-6.696s-.581-5.473-1.804-6.696S15.676 3.5 12.25 3.5c-3.427 0-5.473.581-6.696 1.804m-1.06-1.06C6.16 2.575 8.74 2 12.25 2s6.089.576 7.757 2.243C21.674 5.911 22.25 8.49 22.25 12s-.576 6.089-2.243 7.757C18.339 21.425 15.76 22 12.25 22s-6.089-.575-7.757-2.243S2.25 15.51 2.25 12s.576-6.089 2.243-7.757"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordOutlinecurved;

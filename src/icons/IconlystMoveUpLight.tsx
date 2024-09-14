import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoveUpLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.5 6.466a1.7 1.7 0 0 1 1.7-1.7h2.6a1.7 1.7 0 0 1 1.7 1.7v2.6a1.7 1.7 0 0 1-1.7 1.7h-2.6a1.7 1.7 0 0 1-1.7-1.7zM14.5 16.466a1.7 1.7 0 0 1 1.7-1.7h2.6a1.7 1.7 0 0 1 1.7 1.7v2.6a1.7 1.7 0 0 1-1.7 1.7h-2.6a1.7 1.7 0 0 1-1.7-1.7zM10.5 20.14A6 6 0 0 1 6.257 9.897c1.32-1.32 2.923-2.01 5.132-2.143"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.896 6.309 2.53 1.44-1.44 2.53"
    />
  </Svg>
);
export default IconlystMoveUpLight;

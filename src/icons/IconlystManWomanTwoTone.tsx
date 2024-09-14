import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManWomanTwoTone = ({
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
      d="M8.584 20.422v-4.843m-1.982 3h3.941m-5.57-4.473a5.028 5.028 0 1 1 7.11-7.11 5.028 5.028 0 0 1-7.11 7.11"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 3.578h3m0 0v3m0-3L18.101 6.98M9.5 10.551a5.029 5.029 0 1 1 10.058 0 5.029 5.029 0 0 1-10.058 0"
    />
  </Svg>
);
export default IconlystManWomanTwoTone;

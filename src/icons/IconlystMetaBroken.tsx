import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaBroken = ({
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
      d="M14.41 7.56c.746-.765 1.694-1.346 2.802-1.248 2.332.207 3.621 2.637 4.144 4.694.393 1.55.608 3.335.081 4.883-.42 1.237-1.547 2.123-2.886 1.705-1.148-.36-2.028-1.396-2.698-2.345-1.576-2.235-2.517-4.852-4.19-7.023-.807-1.058-1.962-2.039-3.374-1.914-2.113.188-3.37 2.199-3.976 4.105"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 9.814c-1.074 1.787-1.9 3.729-3.103 5.435-.67.95-1.55 1.985-2.698 2.344-1.339.419-2.466-.468-2.886-1.704-.27-.792-.345-1.646-.302-2.5"
    />
  </Svg>
);
export default IconlystMetaBroken;

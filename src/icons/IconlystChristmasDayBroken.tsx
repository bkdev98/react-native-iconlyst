import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasDayBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.912 3.615v3.223M8.087 3.615v3.223M7.929 5.103h-.407c-2.633 0-4.277 1.466-4.277 4.16v8.114c0 2.738 1.644 4.238 4.277 4.238h8.956c2.64 0 4.277-1.475 4.277-4.17V9.262c.006-2.056-.945-3.397-2.568-3.917M10.654 5.102h4.711"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.89c.894 1.781 1.897 3.407 3.063 4.774h-1.409q.817 1.663 1.966 2.901H8.38q1.149-1.238 1.966-2.9h-1.41a20 20 0 0 0 1.722-2.371M11.998 17.565v3.553M18.043 15.878l.01.01M6.52 11.898l.578-.577M17.094 10.174l-.694.694"
    />
  </Svg>
);
export default IconlystChristmasDayBroken;

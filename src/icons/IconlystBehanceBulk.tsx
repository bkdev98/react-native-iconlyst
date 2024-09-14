import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBehanceBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.117 13.71h-3.104a1.44 1.44 0 0 0 2.302.385.75.75 0 0 1 1.053 1.068 2.936 2.936 0 0 1-5.001-2.084v-.36a2.853 2.853 0 0 1 2.851-2.85 2.853 2.853 0 0 1 2.85 2.85c0 .564-.427.99-.95.99m-3.15-1.5c.202-.492.687-.84 1.25-.84.559 0 1.039.34 1.244.84z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.004 8.01h2.426a.75.75 0 0 1 0 1.5h-2.426a.75.75 0 0 1 0-1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.906 13.59a2.365 2.365 0 0 1-2.366 2.36H7.005c-.592 0-1.074-.48-1.074-1.07V9.06a1.077 1.077 0 0 1 1.074-1.072H9.54a2.366 2.366 0 0 1 2.366 2.361 2.36 2.36 0 0 1-.64 1.62c.397.424.64.994.64 1.62M7.432 9.488H9.54a.864.864 0 1 1 0 1.73H7.432zm0 3.23H9.54a.87.87 0 0 1 .866.87c0 .475-.388.86-.866.86H7.432z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBehanceBulk;

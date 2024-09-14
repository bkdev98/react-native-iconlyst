import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatLeftOutline = ({
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
      d="M5.676 4.777c.889-.953 2.152-1.484 3.637-1.484h7.457c1.489 0 2.753.53 3.64 1.484.884.948 1.339 2.253 1.339 3.71v7.027c0 1.457-.455 2.761-1.338 3.71-.889.953-2.153 1.483-3.642 1.483H9.313c-1.488 0-2.752-.53-3.64-1.484-.883-.948-1.338-2.252-1.338-3.71a.75.75 0 0 1 1.5 0c0 1.148.355 2.065.935 2.688.575.617 1.425 1.006 2.543 1.006h7.456c1.119 0 1.97-.39 2.544-1.006.58-.623.936-1.54.936-2.687V8.487c0-1.147-.356-2.064-.936-2.687-.575-.618-1.425-1.007-2.543-1.007H9.313c-1.113 0-1.964.39-2.54 1.007-.581.624-.938 1.54-.938 2.687v3.627a.75.75 0 0 1-1.5 0V8.487c0-1.458.458-2.762 1.341-3.71"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.47 9.477a.75.75 0 0 1 1.06 0l1.575 1.575L6.668 9.49a.75.75 0 0 1 1.06 1.06l-2.093 2.094a.75.75 0 0 1-1.06 0L2.47 10.538a.75.75 0 0 1 0-1.06M14.244 8.526a.75.75 0 0 1 .382.654v5.638a.75.75 0 0 1-1.5 0v-4.307l-.53.32a.75.75 0 0 1-.777-1.282l1.668-1.01a.75.75 0 0 1 .757-.013"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeatLeftOutline;

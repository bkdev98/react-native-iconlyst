import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 3.869a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.818 8.47a.75.75 0 0 1 .319.478l.65 3.28a.75.75 0 0 1-1.472.291l-.504-2.543-2.543.504a.75.75 0 1 1-.292-1.471l3.279-.65a.75.75 0 0 1 .563.112"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.818 8.471a.75.75 0 0 1 .206 1.04l-4.162 6.22a.75.75 0 0 1-1.04.206l-2.68-1.793L5.63 17.54a.75.75 0 0 1-1.206-.892l2.938-3.971a.75.75 0 0 1 1.02-.177l2.65 1.773 3.745-5.596a.75.75 0 0 1 1.04-.206"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpGraphCircleOutline;

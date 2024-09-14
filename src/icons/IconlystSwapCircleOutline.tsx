import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapCircleOutline = ({
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
      d="M8.021 15.625a.75.75 0 0 1 0-1.06l1.453-1.453a.75.75 0 1 1 1.06 1.06l-.922.923.923.922a.75.75 0 1 1-1.06 1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.802 15.095a.75.75 0 0 1 .75-.75h4.91a1.24 1.24 0 0 0 1.238-1.238v-.9a.75.75 0 0 1 1.5 0v.9a2.74 2.74 0 0 1-2.738 2.738h-4.91a.75.75 0 0 1-.75-.75M15.98 8.375a.75.75 0 0 1 0 1.06l-1.454 1.454a.75.75 0 1 1-1.06-1.061l.922-.923-.922-.922a.75.75 0 1 1 1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.199 8.906a.75.75 0 0 1-.75.75h-4.91A1.24 1.24 0 0 0 9.3 10.894v.901a.75.75 0 0 1-1.5 0v-.9a2.74 2.74 0 0 1 2.738-2.739h4.91a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapCircleOutline;

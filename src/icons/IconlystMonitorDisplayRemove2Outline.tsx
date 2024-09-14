import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemove2Outline = ({
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
      d="M2.5 7.801a4.66 4.66 0 0 1 4.66-4.66h7.037a.75.75 0 1 1 0 1.5H7.161A3.16 3.16 0 0 0 4 7.8v5.296a3.16 3.16 0 0 0 3.16 3.16h9.651a3.16 3.16 0 0 0 3.16-3.16v-2.682a.75.75 0 0 1 1.5 0v2.682a4.66 4.66 0 0 1-4.66 4.66h-9.65a4.66 4.66 0 0 1-4.661-4.66z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.864 2.66a.75.75 0 0 1 1.06 0l1.398 1.396L20.72 2.66a.75.75 0 0 1 1.061 1.06l-1.397 1.398 1.397 1.397a.75.75 0 1 1-1.06 1.06l-1.398-1.396-1.397 1.397a.75.75 0 0 1-1.06-1.06l1.396-1.398-1.397-1.397a.75.75 0 0 1 0-1.06M6.436 20.81a.75.75 0 0 1 .75-.75h9.597a.75.75 0 0 1 0 1.5H7.186a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.052 16.268a.75.75 0 0 1 .62.86l-.62 3.802a.75.75 0 0 1-1.48-.241l.62-3.802a.75.75 0 0 1 .86-.62M13.919 16.268a.75.75 0 0 1 .86.62l.62 3.801a.75.75 0 0 1-1.481.241l-.62-3.802a.75.75 0 0 1 .62-.86"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemove2Outline;

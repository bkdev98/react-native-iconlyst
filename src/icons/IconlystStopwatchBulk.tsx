import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchBulk = ({
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
      d="M12.57 5.305c-4.5 0-8.16 3.66-8.16 8.16s3.66 8.16 8.16 8.16 8.16-3.66 8.16-8.16-3.66-8.16-8.16-8.16"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.676 3.875h-4.208a.75.75 0 0 1 0-1.5h4.208a.75.75 0 0 1 0 1.5m1.354 7.15-2.94 2.94c-.14.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.94-2.94c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchBulk;

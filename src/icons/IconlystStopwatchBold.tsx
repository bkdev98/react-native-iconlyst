import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchBold = ({
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
      d="m15.46 11.025-2.94 2.94c-.14.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.94-2.94c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06M12 5.305c-4.5 0-8.16 3.66-8.16 8.16s3.66 8.16 8.16 8.16 8.16-3.66 8.16-8.16-3.66-8.16-8.16-8.16M9.898 3.875h4.208a.75.75 0 0 0 0-1.5H9.898a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchBold;

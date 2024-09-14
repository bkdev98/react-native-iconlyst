import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGroovesharkCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M5.07 14.65c-.74 0-1.47-.22-2.05-.81-.49-.48-.77-1.16-.77-1.86 0-.41.34-.75.75-.75s.75.34.75.75c0 .3.12.59.33.8.77.77 2.4.17 3.26-.48 1.31-.98 1.64-2.44 1.07-4.72-.05-.19-.02-.4.08-.57s.27-.29.46-.34c2.57-.64 5.19.57 6.37 2.93l.06.13c1.06 2.11 1.83 3.39 3.66 3.39.63 0 1.14-.51 1.14-1.14 0-.41.34-.75.75-.75s.75.34.75.75c0 1.46-1.18 2.64-2.64 2.64-2.89 0-4.06-2.34-5.01-4.21l-.06-.13a4.07 4.07 0 0 0-3.95-2.26c.26 1.42.38 3.84-1.81 5.49-.78.59-2 1.15-3.17 1.15z"
    />
  </Svg>
);
export default IconlystGroovesharkCircleOutline;

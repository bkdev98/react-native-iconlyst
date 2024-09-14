import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.581 4.01c-8.726.082-8.726 1.814-8.726 6.466 2.661 0 2.661 4.114 0 4.114 0 4.768 0 6.47 9.395 6.47s9.395-1.702 9.395-6.47c-2.661 0-2.661-4.114 0-4.114 0-4.313 0-6.117-6.956-6.421"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.147 13.373c.141-.586 1.278-.82 1.103-1.503s-1.439-.243-1.846-.628c-.406-.386-.47-1.476-1.154-1.476s-.748 1.09-1.154 1.476c-.407.384-1.67-.056-1.846.627-.175.684.962.918 1.103 1.504.14.586-.554 1.41.04 1.822.593.409 1.232-.518 1.857-.518s1.264.927 1.858.518"
    />
  </Svg>
);
export default IconlystTicketStarBrokencurved;

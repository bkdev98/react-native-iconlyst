import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStrikethroughBold = ({
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
      d="M16.236 12.75h-1.301c.3.427.511.962.511 1.67 0 1.748-1.545 3.17-3.444 3.17s-3.446-1.422-3.446-3.17a.75.75 0 0 1 1.5 0c0 .921.873 1.67 1.946 1.67s1.944-.749 1.944-1.67c0-.792-.395-1.209-1.588-1.67H7.767a.75.75 0 0 1 0-1.5h8.469a.75.75 0 0 1 0 1.5m-4.235-6.34c1.394 0 2.604.792 3.082 2.018a.75.75 0 0 1-1.399.545c-.255-.656-.9-1.063-1.683-1.063-1.04 0-1.795.702-1.795 1.67-.001.103.011.206.033.287a.75.75 0 0 1-1.449.387 2.6 2.6 0 0 1-.084-.679c0-1.803 1.417-3.165 3.295-3.165m4.216-3.91H7.783C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStrikethroughBold;

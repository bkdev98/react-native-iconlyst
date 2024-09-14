import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTapBold = ({
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
      d="M9.488 6.182v2.716a3.18 3.18 0 0 1-1.285-2.559c0-1.73 1.323-3.138 2.95-3.138s2.95 1.408 2.95 3.138c0 1.01-.478 1.939-1.238 2.525l-.042-2.708a1.668 1.668 0 0 0-3.335.026m10.057 6.937c-.903-2.437-4.035-2.432-6.347-2.622a.8.8 0 0 0 .245-.09c1.38-.843 2.236-2.403 2.236-4.068 0-2.6-2.03-4.714-4.526-4.714S6.627 3.74 6.627 6.339c0 1.698.882 3.27 2.302 4.107a.8.8 0 0 0 .4.11c.055 0 .104-.031.159-.043v5.234l-1.193-1.732a1.824 1.824 0 0 0-2.153-.667c-.888.34-1.364 1.305-1.04 2.199.604 1.667 1.562 3.527 2.795 5.06 1.943 2.416 7.876 2.255 10 .131 1.663-1.664 2.597-5.055 1.648-7.619"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.729 9.279a.79.79 0 0 0 .356-1.056 4.16 4.16 0 0 1-.434-1.865c0-.654.145-1.282.434-1.864a.79.79 0 0 0-.356-1.056.786.786 0 0 0-1.056.358 5.7 5.7 0 0 0-.598 2.562c0 .9.2 1.762.598 2.564a.79.79 0 0 0 1.056.357M16.487 9.279a.786.786 0 0 0 1.056-.357c.396-.8.596-1.662.596-2.564 0-.9-.2-1.763-.596-2.562a.789.789 0 0 0-1.412.699 4.16 4.16 0 0 1 .432 1.863c0 .657-.145 1.284-.432 1.865a.79.79 0 0 0 .356 1.056"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleTapBold;

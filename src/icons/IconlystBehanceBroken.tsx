import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBehanceBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.345 11.972h2.288m0 0a1.574 1.574 0 0 0 0-3.148H8.165a.314.314 0 0 0-.315.314v5.668c0 .173.14.314.315.314h2.468a1.574 1.574 0 0 0 0-3.148M14.98 8.846h2.362M14.117 12.935v.113a2.129 2.129 0 0 0 3.627 1.51m.267-1.622h-3.894v-.23a2.045 2.045 0 1 1 4.09 0v.034a.196.196 0 0 1-.196.196"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-5.344 8.226"
    />
  </Svg>
);
export default IconlystBehanceBroken;

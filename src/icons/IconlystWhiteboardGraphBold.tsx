import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteboardGraphBold = ({
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
      d="m16.994 9.58-3.14 3.14a.75.75 0 0 1-1.06-.001l-1.552-1.557-2.174 2.178a.75.75 0 0 1-1.06.002.75.75 0 0 1-.002-1.061l2.705-2.711a.75.75 0 0 1 1.062 0l1.552 1.558 2.608-2.609a.75.75 0 1 1 1.061 1.061m.146-5.46h-3.89V3a.75.75 0 0 0-1.5 0v1.12H7.86A4.265 4.265 0 0 0 3.6 8.38v5.09a4.265 4.265 0 0 0 4.26 4.26h3.128l-2.695 2.745a.749.749 0 1 0 1.07 1.05l3.138-3.195 3.137 3.195c.146.15.34.225.535.225a.749.749 0 0 0 .535-1.275l-2.694-2.745h3.126a4.266 4.266 0 0 0 4.261-4.26V8.38a4.266 4.266 0 0 0-4.26-4.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWhiteboardGraphBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPerviousCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0M8.445 9.01v5.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.99 10.923a9.3 9.3 0 0 1 2.734-1.733c.884-.352 1.623.087 1.732.965.133 1.295.13 2.534 0 3.692-.118.913-.934 1.3-1.732.962a9.1 9.1 0 0 1-2.735-1.733c-.68-.623-.696-1.507 0-2.154"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPerviousCircleLight;

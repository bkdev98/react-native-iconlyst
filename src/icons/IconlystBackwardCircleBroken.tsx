import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackwardCircleBroken = ({
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
      d="M11.954 10.923A9.3 9.3 0 0 1 14.69 9.19c.884-.352 1.623.087 1.732.965.133 1.295.13 2.534 0 3.692-.118.913-.934 1.3-1.732.962a9.1 9.1 0 0 1-2.735-1.733c-.68-.623-.696-1.507 0-2.154"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.9 15.22s-1.74-1.14-2.455-1.986a1.88 1.88 0 0 1 0-2.47c.678-.79 2.454-1.987 2.454-1.987"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21a9 9 0 1 1 3.399-.664"
    />
  </Svg>
);
export default IconlystBackwardCircleBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlack2Light = ({
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
      d="M6.15 12H8.4v2.25a2.25 2.25 0 0 1-2.25 2.25v0a2.25 2.25 0 0 1-2.25-2.25v0A2.25 2.25 0 0 1 6.15 12M12 6.148v2.25H9.75a2.25 2.25 0 0 1-2.25-2.25v0a2.25 2.25 0 0 1 2.25-2.25v0A2.25 2.25 0 0 1 12 6.148M17.85 12H15.6V9.75a2.25 2.25 0 0 1 2.25-2.25v0a2.25 2.25 0 0 1 2.25 2.25v0A2.25 2.25 0 0 1 17.85 12M12 17.852v-2.25h2.25a2.25 2.25 0 0 1 2.25 2.25v0a2.25 2.25 0 0 1-2.25 2.25v0a2.25 2.25 0 0 1-2.25-2.25M12 13.8a1.8 1.8 0 0 1 1.8-1.8h5.4a1.8 1.8 0 0 1 0 3.6h-5.4M10.2 12a1.8 1.8 0 0 1 1.8 1.8v5.4a1.8 1.8 0 0 1-3.6 0v-5.4M13.8 12a1.8 1.8 0 0 1-1.8-1.8V4.8a1.8 1.8 0 0 1 3.6 0v5.4M12 10.198a1.8 1.8 0 0 1-1.8 1.8H4.8a1.8 1.8 0 1 1 0-3.6h5.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlack2Light;

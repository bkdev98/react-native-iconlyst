import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircelAiLight = ({
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
      d="M20.59 12.327A8.673 8.673 0 1 1 7.08 5.128"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.654 19.881c.17-1.32 1.342-2.784 4.256-2.784 2.945 0 4.11 1.473 4.273 2.808"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.388 12.295a2.468 2.468 0 1 1-4.937 0 2.468 2.468 0 0 1 4.937 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.995 4.207.1.273a3.76 3.76 0 0 0 2.223 2.225l.272.101-.273.101a3.76 3.76 0 0 0-2.221 2.225l-.101.274-.101-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225zM12.684 2.964a1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178 1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179"
    />
  </Svg>
);
export default IconlystUserCircelAiLight;

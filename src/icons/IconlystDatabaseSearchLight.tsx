import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSearchLight = ({
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
      strokeWidth={1.5}
      d="M11.06 8.937c4.047 0 7.328-1.323 7.328-2.956 0-1.632-3.28-2.956-7.327-2.956S3.733 4.35 3.733 5.981c0 1.633 3.28 2.956 7.328 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.837 19.544 1.43 1.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.288 17.658a2.666 2.666 0 0 0 4.548 1.886c.48-.49.777-1.15.777-1.886a2.663 2.663 0 1 0-5.325 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.733 11.763v5.824s0 2.913 7.358 2.913"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.388 11.762V5.938M3.733 5.938v5.824s0 2.912 7.358 2.912"
    />
  </Svg>
);
export default IconlystDatabaseSearchLight;

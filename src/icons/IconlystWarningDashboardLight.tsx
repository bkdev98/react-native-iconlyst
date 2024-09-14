import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWarningDashboardLight = ({
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
      d="m13.994 7.66 3.047 5.416a2 2 0 0 1-1.744 2.983H9.204a2 2 0 0 1-1.744-2.983l3.047-5.416a2.001 2.001 0 0 1 3.487 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21.004A9.004 9.004 0 0 1 3.246 12v0a9.004 9.004 0 0 1 9.004-9.004v0A9.004 9.004 0 0 1 21.254 12v0a9.004 9.004 0 0 1-9.004 9.004"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 11.466V9.441M12.25 13.602v-.01"
    />
  </Svg>
);
export default IconlystWarningDashboardLight;

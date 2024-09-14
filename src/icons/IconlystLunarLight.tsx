import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLunarLight = ({
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
      strokeWidth={1.5}
      d="M12.435 20.416a8.71 8.71 0 0 1-8.677-7.968M16.91 18.773c.23.784-.597 1.716-1.846 2.08-1.248.365-2.446.025-2.675-.759-.23-.784.597-1.716 1.845-2.08 1.249-.366 2.447-.026 2.676.759Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.36 15.543c-.304.435-.828 1.662-.5 3.093M10.255 17.669c.497.206 1.616.969 2.118 2.372M19.52 6.977c.567-.59.265-1.797-.673-2.698s-2.158-1.154-2.724-.564-.264 1.797.674 2.698 2.158 1.154 2.724.564Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.427 10.049c-.068-.526.035-1.857.988-2.974M13.11 4.879c.536.047 1.881-.112 2.975-1.125M4.191 12.463c-.805-.142-1.274-1.295-1.048-2.576s1.06-2.205 1.865-2.063S6.282 9.119 6.057 10.4s-1.061 2.204-1.866 2.063Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.888 14.297c-.256-.465-1.124-1.479-2.553-1.818M8.129 6.984c-.405.355-1.585 1.02-3.066.849M15.984 3.754A8.7 8.7 0 0 0 12.434 3a8.71 8.71 0 0 0-7.712 4.662M19.677 6.872a8.67 8.67 0 0 1 1.465 4.836 8.7 8.7 0 0 1-4.054 7.362"
    />
    <Circle
      cx={11.314}
      cy={11.047}
      r={1.341}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m15.828 12.977.01-.006"
    />
  </Svg>
);
export default IconlystLunarLight;

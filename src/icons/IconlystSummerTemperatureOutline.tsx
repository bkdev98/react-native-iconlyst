import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSummerTemperatureOutline = ({
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
      d="M9.469 3.75A2.25 2.25 0 0 0 7.219 6v6.022a.75.75 0 0 1-.298.599c-1.033.78-1.702 2-1.702 3.379a4.25 4.25 0 0 0 8.5 0c0-1.38-.669-2.598-1.702-3.38a.75.75 0 0 1-.297-.598V6a2.25 2.25 0 0 0-2.251-2.25M5.719 6a3.75 3.75 0 1 1 7.5 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 0 1-11.5 0c0-1.743.786-3.287 2-4.335z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.467 15.276a.724.724 0 1 0-.001 1.449.724.724 0 0 0 0-1.449M7.242 16a2.224 2.224 0 1 1 4.449.001A2.224 2.224 0 0 1 7.242 16"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.467 9.731a.75.75 0 0 1 .75.75v4.046a.75.75 0 0 1-1.5 0V10.48a.75.75 0 0 1 .75-.75M15.209 2.45a.75.75 0 0 1 .75.75v.846a.75.75 0 0 1-1.5 0V3.2a.75.75 0 0 1 .75-.75m4.456 1.846a.75.75 0 0 1 0 1.06l-.599.599a.75.75 0 1 1-1.06-1.061l.598-.598a.75.75 0 0 1 1.06 0m-.501 4.456a.75.75 0 0 1 .75-.75h.846a.75.75 0 1 1 0 1.5h-.846a.75.75 0 0 1-.75-.75m-1.158 2.796a.75.75 0 0 1 1.06 0l.599.598a.75.75 0 1 1-1.061 1.061l-.598-.598a.75.75 0 0 1 0-1.06M14.645 6.528a.75.75 0 0 1 .75-.75 2.965 2.965 0 0 1 .835 5.812.75.75 0 1 1-.422-1.44 1.467 1.467 0 0 0-.413-2.872.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSummerTemperatureOutline;

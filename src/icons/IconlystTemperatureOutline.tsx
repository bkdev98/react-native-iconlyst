import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTemperatureOutline = ({
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
      d="M10.226 3.75A2.25 2.25 0 0 0 7.976 6v6.022a.75.75 0 0 1-.298.599c-1.033.78-1.702 2-1.702 3.379a4.25 4.25 0 0 0 8.5 0c0-1.38-.669-2.598-1.702-3.38a.75.75 0 0 1-.298-.598V6a2.25 2.25 0 0 0-2.25-2.25M6.476 6a3.75 3.75 0 1 1 7.5 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 1 1-11.5 0c0-1.743.786-3.287 2-4.335zM17.992 3.68a.75.75 0 0 1 .75.75v2.563a.75.75 0 0 1-1.5 0V4.43a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.963 5.71a.75.75 0 0 1 .75-.75h2.563a.75.75 0 0 1 0 1.5h-2.563a.75.75 0 0 1-.75-.75M15.963 10.21a.75.75 0 0 1 .75-.75h2.563a.75.75 0 1 1 0 1.5h-2.563a.75.75 0 0 1-.75-.75M10.226 15.273a.724.724 0 1 0 0 1.448.724.724 0 0 0 0-1.448m-2.224.724a2.224 2.224 0 1 1 4.447 0 2.224 2.224 0 0 1-4.447 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.227 6.977a.75.75 0 0 1 .75.75v6.799a.75.75 0 0 1-1.5 0v-6.8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTemperatureOutline;

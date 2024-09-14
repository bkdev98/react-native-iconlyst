import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunTemperatureOutline = ({
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
      d="M8.578 3.75A2.25 2.25 0 0 0 6.328 6v6.022a.75.75 0 0 1-.297.599c-1.033.78-1.703 2-1.703 3.379a4.25 4.25 0 0 0 8.5 0c0-1.38-.668-2.598-1.701-3.38a.75.75 0 0 1-.298-.598V6a2.25 2.25 0 0 0-2.25-2.25M4.828 6a3.75 3.75 0 1 1 7.5 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 0 1-11.5 0c0-1.743.787-3.287 2-4.335z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.578 15.276a.724.724 0 1 0 0 1.448.724.724 0 0 0 0-1.448M6.354 16a2.224 2.224 0 1 1 4.448 0 2.224 2.224 0 0 1-4.448 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.578 7.25a.75.75 0 0 1 .75.75v6.527a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M16.975 7.43a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5m-1.75.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.93 2.582a.75.75 0 0 1 .484.762 2.623 2.623 0 0 0 2.32 2.818.75.75 0 0 1 .237 1.423 2.623 2.623 0 0 0-1.28 3.417.75.75 0 0 1-1.113.917 2.623 2.623 0 0 0-3.6.6.75.75 0 0 1-1.351-.505 2.6 2.6 0 0 0-.55-1.83.75.75 0 0 1 1.18-.925c.301.384.535.823.686 1.297a4.14 4.14 0 0 1 3.03-.506 4.14 4.14 0 0 1 1.077-2.876 4.14 4.14 0 0 1-1.952-2.371 4.14 4.14 0 0 1-3.03.505 4.1 4.1 0 0 1-.292 1.62.75.75 0 1 1-1.394-.555c.25-.629.258-1.35-.032-2.017a.75.75 0 0 1 1.113-.917 2.624 2.624 0 0 0 3.6-.6.75.75 0 0 1 .866-.257"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunTemperatureOutline;

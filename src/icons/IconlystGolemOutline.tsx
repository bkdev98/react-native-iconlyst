import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGolemOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.521 9.267a2.622 2.622 0 1 1 5.244 0 2.622 2.622 0 0 1-5.244 0m2.621-1.122a1.122 1.122 0 1 0 .002 2.243 1.122 1.122 0 0 0-.002-2.243M9.521 15.188a2.622 2.622 0 1 1 5.244 0 2.622 2.622 0 0 1-5.244 0m2.621-1.122a1.122 1.122 0 1 0 .002 2.244 1.122 1.122 0 0 0-.002-2.244"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.72 6.373a.75.75 0 0 1 .076 1.058l-.823.95a.75.75 0 0 1-1.134-.983l.824-.95a.75.75 0 0 1 1.058-.075M12.143 10.389a.75.75 0 0 1 .75.75v2.178a.75.75 0 0 1-1.5 0V11.14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGolemOutline;

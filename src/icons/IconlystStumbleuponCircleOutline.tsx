import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStumbleuponCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 8.215a.917.917 0 0 0-.917.917v5a2.417 2.417 0 1 1-4.833 0v-1.667a.75.75 0 0 1 1.5 0v1.667a.917.917 0 1 0 1.833 0v-5a2.417 2.417 0 1 1 4.834 0v.833a.75.75 0 1 1-1.5 0v-.833A.917.917 0 0 0 12 8.215"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.667 11.715a.75.75 0 0 1 .75.75v1.667a.917.917 0 1 0 1.833 0v-1.667a.75.75 0 0 1 1.5 0v1.667a2.417 2.417 0 1 1-4.833 0v-1.667a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStumbleuponCircleOutline;
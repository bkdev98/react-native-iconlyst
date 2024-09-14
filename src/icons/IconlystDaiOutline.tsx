import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDaiOutline = ({
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
      d="M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12m9.75-8.25A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.752 8.018a.75.75 0 0 1 .75-.75h3.186A4.694 4.694 0 0 1 17.421 12a4.694 4.694 0 0 1-4.733 4.732H9.502a.75.75 0 0 1-.75-.75zm1.5.75v6.465h2.436a3.194 3.194 0 0 0 3.233-3.232 3.194 3.194 0 0 0-3.233-3.233z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.22 13.205a.75.75 0 0 1 .75-.75h9.664a.75.75 0 0 1 0 1.5H7.971a.75.75 0 0 1-.75-.75M7.22 10.795a.75.75 0 0 1 .75-.75h9.664a.75.75 0 0 1 0 1.5H7.971a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDaiOutline;

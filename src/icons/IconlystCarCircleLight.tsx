import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCircleLight = ({
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
      d="M21.25 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9M14.519 12.932h.568M9.414 12.932h.568"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.08 10.525c3.426.486 6.903.486 10.33 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.082 15.778a.575.575 0 0 0 .574.577h1.385a.575.575 0 0 0 .575-.575v-.235c0-.318.257-.575.574-.575h4.116c.318 0 .575.257.575.575v.235c0 .318.257.575.575.575h1.39a.575.575 0 0 0 .574-.575v-3.004c0-.466-.149-.92-.424-1.296l-.67-.899a1 1 0 0 1-.128-.245l-.603-1.675c-.151-.431-.544-.76-.994-.833a15 15 0 0 0-4.696 0 1.29 1.29 0 0 0-.988.833l-.603 1.675a1 1 0 0 1-.129.234l-.68.938c-.27.372-.415.82-.414 1.279z"
    />
  </Svg>
);
export default IconlystCarCircleLight;

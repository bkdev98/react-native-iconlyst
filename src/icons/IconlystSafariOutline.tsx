import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafariOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v1.35a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m0 16.65a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.35a.75.75 0 0 1 .75-.75M2.25 12a.75.75 0 0 1 .75-.75h1.35a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m16.65 0a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-1.35a.75.75 0 0 1-.75-.75M9.48 9.481a.75.75 0 0 1 1.061 0l3.978 3.979a.75.75 0 1 1-1.06 1.06L9.48 10.542a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.423 7.302A1.01 1.01 0 0 1 16.7 8.579l-1.748 5.243a1.79 1.79 0 0 1-1.13 1.13l-5.244 1.749A1.01 1.01 0 0 1 7.3 15.424l1.748-5.244a1.79 1.79 0 0 1 1.13-1.13zm-.457 1.733-4.312 1.438a.29.29 0 0 0-.182.182l-1.438 4.312 4.313-1.437a.29.29 0 0 0 .182-.182zM8.34 15.988v.001zl7.647-7.647h.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSafariOutline;

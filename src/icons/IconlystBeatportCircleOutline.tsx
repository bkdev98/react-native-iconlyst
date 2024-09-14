import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeatportCircleOutline = ({
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
      d="M17.14 9.357a.75.75 0 0 1 .96.45c.22.605.339 1.256.339 1.934 0 .81-.17 1.582-.477 2.28a.75.75 0 0 1-1.373-.602c.225-.513.35-1.08.35-1.678 0-.5-.088-.98-.249-1.423a.75.75 0 0 1 .45-.96M6.861 9.357a.75.75 0 0 1 .45.96c-.16.444-.248.923-.248 1.424 0 .598.125 1.165.35 1.678a.75.75 0 0 1-1.374.602 5.7 5.7 0 0 1-.476-2.28c0-.678.119-1.33.338-1.934a.75.75 0 0 1 .96-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.9 9.842a2.688 2.688 0 1 0-3.8 3.8.75.75 0 1 1-1.061 1.061 4.188 4.188 0 1 1 5.922 0 .75.75 0 1 1-1.06-1.06 2.69 2.69 0 0 0 0-3.801"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBeatportCircleOutline;

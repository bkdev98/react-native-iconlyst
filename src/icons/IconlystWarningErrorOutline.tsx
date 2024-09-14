import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWarningErrorOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.4a5.101 5.101 0 1 0 0 10.203 5.101 5.101 0 0 0 0-10.202m-6.602 5.102a6.601 6.601 0 1 1 13.203 0 6.601 6.601 0 0 1-13.203 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.35 5.663c.296.29.3.765.01 1.061a8.246 8.246 0 0 0 0 11.552.75.75 0 1 1-1.07 1.05 9.746 9.746 0 0 1 0-13.653.75.75 0 0 1 1.06-.01M18.15 5.663a.75.75 0 0 1 1.06.01 9.746 9.746 0 0 1 0 13.654.75.75 0 1 1-1.07-1.051 8.246 8.246 0 0 0 0-11.552.75.75 0 0 1 .01-1.06M10.37 10.62a.75.75 0 0 1 1.06 0l2.7 2.7a.75.75 0 0 1-1.06 1.06l-2.7-2.7a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.13 10.62a.75.75 0 0 1 0 1.06l-2.7 2.7a.75.75 0 1 1-1.06-1.06l2.7-2.7a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWarningErrorOutline;

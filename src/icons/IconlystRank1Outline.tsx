import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRank1Outline = ({
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
      d="M2.5 15.737a2.253 2.253 0 0 1 2.253-2.253H9.25a.75.75 0 0 1 0 1.5H4.753a.753.753 0 0 0-.753.753v3.746c0 .413.341.753.753.753h14.993c.413 0 .754-.34.754-.753v-1.746a.754.754 0 0 0-.754-.753H15.25a.75.75 0 0 1 0-1.5h4.496A2.254 2.254 0 0 1 22 17.737v1.746a2.26 2.26 0 0 1-2.254 2.253H4.753A2.26 2.26 0 0 1 2.5 19.483zM8.5 4.098c0-1.011.82-1.832 1.832-1.832h3.835c1.012 0 1.833.82 1.833 1.832v1.928c0 1.012-.821 1.833-1.833 1.833h-3.835A1.83 1.83 0 0 1 8.5 6.026zm1.832-.332a.33.33 0 0 0-.332.332v1.928c0 .184.149.333.332.333h3.835c.184 0 .333-.15.333-.333V4.098a.333.333 0 0 0-.333-.332z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.753 11.734a.76.76 0 0 0-.753.753v8.498a.75.75 0 0 1-1.5 0v-8.498a2.26 2.26 0 0 1 2.253-2.253h2.994A2.253 2.253 0 0 1 16 12.487v8.498a.75.75 0 0 1-1.5 0v-8.498a.753.753 0 0 0-.753-.753z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRank1Outline;

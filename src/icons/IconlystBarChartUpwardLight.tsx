import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartUpwardLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.052 21.118c.857 0 1.552-.695 1.552-1.552v-2.482a1.552 1.552 0 1 0-3.104 0v2.482c0 .857.695 1.552 1.552 1.552M12.5 21.118c.857 0 1.551-.695 1.551-1.552v-6.207a1.552 1.552 0 1 0-3.104 0v6.207c0 .857.695 1.552 1.552 1.552M19.948 21.118c.857 0 1.552-.694 1.552-1.552V4.67a1.552 1.552 0 1 0-3.104 0v14.896c0 .858.694 1.552 1.552 1.552"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 11.187 8.069-8.069m0 0v4.345m0-4.345H7.225"
    />
  </Svg>
);
export default IconlystBarChartUpwardLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartHouseDownOutline = ({
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
      d="M13.898 4.367a2.21 2.21 0 0 0-2.796 0l-5.574 4.54a2.22 2.22 0 0 0-.815 1.717v7.173a2.57 2.57 0 0 0 2.571 2.572h10.432a2.57 2.57 0 0 0 2.572-2.572v-7.174a2.22 2.22 0 0 0-.816-1.716zm.947-1.163a3.71 3.71 0 0 0-4.69 0L4.58 7.744a3.72 3.72 0 0 0-1.368 2.88v7.173a4.07 4.07 0 0 0 4.071 4.072h10.432a4.07 4.07 0 0 0 4.072-4.072v-7.174a3.72 3.72 0 0 0-1.368-2.879z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.275 13.829c.4.108.637.52.53.92l-.613 2.271a.75.75 0 0 1-.92.53L13 16.937a.75.75 0 1 1 .39-1.448l1.549.417.417-1.548a.75.75 0 0 1 .92-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.548 10.356a.75.75 0 0 1 1.024.276l1.14 1.985 1.755-1.01a.75.75 0 0 1 1.024.276l2.628 4.568a.75.75 0 0 1-1.3.748l-2.254-3.918-1.754 1.01a.75.75 0 0 1-1.024-.276L8.272 11.38a.75.75 0 0 1 .276-1.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartHouseDownOutline;

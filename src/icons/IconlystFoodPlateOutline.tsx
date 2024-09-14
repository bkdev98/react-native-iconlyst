import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoodPlateOutline = ({
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
      d="M13.943 7.126q.21-.098.433-.171l1.546-2.943a.75.75 0 0 1 1.012-.32c.367.2.508.65.316 1.02l-1.084 2.056a4.22 4.22 0 0 1 3.674 3.384h.385c1.057 0 1.89.93 1.763 1.98a10.19 10.19 0 0 1-5.166 7.68c-.713.4-1.513.58-2.304.58H9.985c-.794 0-1.596-.18-2.31-.58a10.19 10.19 0 0 1-5.162-7.68 1.78 1.78 0 0 1 1.764-1.98H5.1a4.82 4.82 0 0 1 4.81-4.61c.827 0 1.604.21 2.284.58l-.31-1.46a.744.744 0 0 1 .576-.89c.406-.09.805.17.89.58zm.777 3.026h3.576a2.72 2.72 0 0 0-3.912-1.569 4.8 4.8 0 0 1 .336 1.57m-8.117 0a3.32 3.32 0 0 1 3.307-3.11c1.226 0 2.3.67 2.874 1.67l.002.01c.142.242.254.51.33.795q.08.307.102.635h-4.09c.169-.258.423-.456.723-.55a.74.74 0 0 0 .494-.93.75.75 0 0 0-.937-.5 2.86 2.86 0 0 0-1.904 1.98zm13.896 1.81a.28.28 0 0 0-.274-.31H4.277a.275.275 0 0 0-.274.3 8.68 8.68 0 0 0 4.4 6.55c.472.26 1.017.39 1.582.39h4.533a3.24 3.24 0 0 0 1.575-.39 8.7 8.7 0 0 0 4.287-5.816q.075-.357.119-.724"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFoodPlateOutline;

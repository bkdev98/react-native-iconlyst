import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewOutline = ({
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
      d="M3.25 4.44A.75.75 0 0 1 4 3.69h15.56a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75M3.25 19.06a.75.75 0 0 1 .75-.75h15.56a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75M11.142 12.531v.87h1.845a.75.75 0 0 1 0 1.5h-2.595a.75.75 0 0 1-.75-.75v-4.74a.75.75 0 0 1 .75-.75h2.595a.75.75 0 0 1 0 1.5h-1.845v.87h1.371a.75.75 0 0 1 0 1.5zM4.16 15.084a.75.75 0 0 1-.75-.75V9.545a.75.75 0 0 1 1.346-.453l2.18 2.874V9.41a.75.75 0 1 1 1.5 0v4.785a.751.751 0 0 1-1.35.453L4.91 11.776v2.558a.75.75 0 0 1-.75.75M14.898 8.672a.75.75 0 0 1 .872.605l.44 2.44.628-1.324a.75.75 0 0 1 1.355 0l.628 1.326.441-2.442a.75.75 0 1 1 1.476.266l-.856 4.741a.75.75 0 0 1-1.416.188l-.95-2.006-.951 2.006a.75.75 0 0 1-1.416-.188l-.856-4.74a.75.75 0 0 1 .605-.872"
    />
  </Svg>
);
export default IconlystNewOutline;

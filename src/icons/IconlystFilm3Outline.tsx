import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm3Outline = ({
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
      d="M3.91 3.926c.932-1 2.26-1.559 3.823-1.559h9.033c1.567 0 2.895.558 3.827 1.56C21.52 4.922 22 6.294 22 7.829v8.338c0 1.536-.48 2.908-1.407 3.903-.932 1.001-2.26 1.56-3.828 1.56H7.733c-1.567 0-2.895-.559-3.827-1.56-.926-.995-1.406-2.367-1.406-3.903V7.83c0-1.536.482-2.908 1.41-3.903M5.006 4.95C4.38 5.62 4 6.604 4 7.83v8.338c0 1.226.38 2.21 1.004 2.88.618.665 1.532 1.082 2.729 1.082h9.032c1.197 0 2.112-.417 2.73-1.082.625-.67 1.005-1.654 1.005-2.88V7.83c0-1.226-.38-2.21-1.004-2.88-.62-.665-1.533-1.082-2.73-1.082H7.733c-1.192 0-2.106.417-2.726 1.082"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.818 16.344a.75.75 0 0 1 .75.75v3.786a.75.75 0 1 1-1.5 0v-3.786a.75.75 0 0 1 .75-.75m8.906 0a.75.75 0 0 1 .75.75v3.786a.75.75 0 1 1-1.5 0v-3.786a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.617 17.09a.75.75 0 0 1 .75-.75h17.767a.75.75 0 0 1 0 1.5H3.367a.75.75 0 0 1-.75-.75M2.615 6.91a.75.75 0 0 1 .75-.75h17.767a.75.75 0 0 1 0 1.5H3.365a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.818 2.395a.75.75 0 0 1 .75.75v3.762a.75.75 0 1 1-1.5 0V3.145a.75.75 0 0 1 .75-.75m8.906 0a.75.75 0 0 1 .75.75v3.762a.75.75 0 0 1-1.5 0V3.145a.75.75 0 0 1 .75-.75M12.272 2.395a.75.75 0 0 1 .75.75v17.737a.75.75 0 0 1-1.5 0V3.145a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilm3Outline;

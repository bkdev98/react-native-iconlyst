import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube5Outline = ({
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
      d="M10.665 2.674a3.17 3.17 0 0 1 3.17 0l5.647 3.261a3.17 3.17 0 0 1 1.585 2.744v6.522a3.17 3.17 0 0 1-1.585 2.745l-5.647 3.26c-.98.567-2.19.567-3.17 0l-5.648-3.26A3.17 3.17 0 0 1 3.433 15.2V8.68a3.17 3.17 0 0 1 1.584-2.744zm2.42 1.3a1.67 1.67 0 0 0-1.67 0l-5.648 3.26a1.67 1.67 0 0 0-.834 1.445v6.522c0 .596.318 1.148.834 1.446l5.648 3.26a1.67 1.67 0 0 0 1.669 0l5.648-3.26a1.67 1.67 0 0 0 .835-1.446V8.68a1.67 1.67 0 0 0-.835-1.445z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.281 11.263a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-8.987a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.715 7.145a.75.75 0 0 1-.275 1.024l-7.784 4.493a.75.75 0 0 1-.75 0L4.123 8.17a.75.75 0 1 1 .75-1.299l7.408 4.277 7.41-4.277a.75.75 0 0 1 1.024.275"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.947 4.683a.75.75 0 0 1-.274 1.024l-7.657 4.421v8.841a.75.75 0 0 1-1.5 0V9.695a.75.75 0 0 1 .375-.65l8.032-4.637a.75.75 0 0 1 1.024.275"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.964 11.566a.75.75 0 0 1-.275 1.024l-8.032 4.637a.75.75 0 0 1-.745.003L3.88 12.665a.75.75 0 1 1 .74-1.304l7.66 4.353 7.659-4.423a.75.75 0 0 1 1.025.274"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.619 4.678a.75.75 0 0 1 1.026-.267l7.97 4.673c.23.135.37.38.37.647v9.238a.75.75 0 1 1-1.5 0v-8.808L7.887 5.705a.75.75 0 0 1-.267-1.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube5Outline;

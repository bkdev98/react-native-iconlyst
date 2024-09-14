import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.967 8.631.566-1.025a1.243 1.243 0 0 1 1.968-.277l4.134 4.134a1.243 1.243 0 0 1-.277 1.968l-1.025.567a1.454 1.454 0 0 1-1.732-.244l-3.39-3.39a1.45 1.45 0 0 1-.245-1.733"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.381 13.53-.977 5.91a.814.814 0 0 1-.813.681c-1.45-.044-4.867-.032-7.432.676a.8.8 0 0 1-.78-.209.8.8 0 0 1-.214-.785c.713-2.56.719-5.982.68-7.427a.806.806 0 0 1 .676-.818l5.91-.977"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.188 14.776a1.275 1.275 0 1 1-1.803 1.803 1.275 1.275 0 0 1 1.803-1.803M11.384 16.578 7.372 20.59M9.022 7.678l.087-.237a3.26 3.26 0 0 1 1.925-1.927l.237-.088-.237-.088A3.26 3.26 0 0 1 9.11 3.41l-.087-.237-.088.237a3.26 3.26 0 0 1-1.925 1.928l-.237.088.237.088A3.26 3.26 0 0 1 8.934 7.44zM4.02 8.755c.148-.49.53-.873 1.02-1.021a1.53 1.53 0 0 1-1.02-1.022c-.149.49-.531.873-1.02 1.022.489.148.871.531 1.02 1.02"
    />
  </Svg>
);
export default IconlystPaintAiLight;

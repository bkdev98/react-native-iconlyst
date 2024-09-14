import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCloseOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v4.056a.75.75 0 0 1-1.5 0V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.408 2.38 1.084 3.106.67.72 1.659 1.17 2.948 1.17h4.542a.75.75 0 0 1 0 1.5H8.032c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.486-2.501-1.486-4.128V8.026c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.67 8.07a.75.75 0 0 1 .75.75 2.83 2.83 0 1 0 5.66 0 .75.75 0 1 1 1.5 0 4.33 4.33 0 1 1-8.66 0 .75.75 0 0 1 .75-.75M16.526 16.274a.75.75 0 0 1 1.061 0l3.786 3.786a.75.75 0 0 1-1.06 1.06l-3.787-3.785a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.373 16.274a.75.75 0 0 1 0 1.061l-3.786 3.786a.75.75 0 0 1-1.06-1.06l3.785-3.787a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagCloseOutline;

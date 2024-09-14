import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocation2Bulksharp = ({
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
      d="M17.681 4.258c-1.48-1.528-3.41-2.37-5.432-2.37s-3.952.843-5.434 2.372C5.311 5.81 4.485 7.895 4.55 9.977c.104 3.344 2.366 5.785 4.362 7.938 1.523 1.642 2.837 3.06 2.837 4.474h1c0-1.458 1.317-2.858 2.841-4.48 1.994-2.121 4.255-4.525 4.36-7.932.063-2.083-.764-4.168-2.269-5.72"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.6 9.989a2.653 2.653 0 0 0 2.65 2.65 2.653 2.653 0 0 0 2.65-2.65 2.653 2.653 0 0 0-2.65-2.65 2.653 2.653 0 0 0-2.65 2.65"
    />
  </Svg>
);
export default IconlystLocation2Bulksharp;

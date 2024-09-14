import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinAddBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.46 10.435c0-1.56 1.27-2.83 2.83-2.83 1.55 0 2.82 1.27 2.82 2.83a2.83 2.83 0 0 1-2.82 2.82c-1.56 0-2.83-1.27-2.83-2.82m10.55.43c.16 0 .32.01.48.02.01-.13.01-.26.01-.39 0-4.53-3.68-8.22-8.21-8.22s-8.22 3.69-8.22 8.22c0 5.77 6.75 11.23 8.22 11.23.51 0 1.65-.66 2.93-1.76a5.808 5.808 0 0 1 4.79-9.1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.18 15.487h-1.536v-1.536a.75.75 0 0 0-1.5 0v1.536h-1.533a.75.75 0 0 0 0 1.5h1.533v1.533a.75.75 0 0 0 1.5 0v-1.533h1.535a.75.75 0 0 0 0-1.5M8.46 10.436c0-1.56 1.27-2.83 2.83-2.83 1.55 0 2.82 1.27 2.82 2.83a2.83 2.83 0 0 1-2.82 2.82c-1.56 0-2.83-1.27-2.83-2.82"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinAddBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateImageAltTwoTone = ({
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
      d="m3.006 15.573 3.949-2.867a3.86 3.86 0 0 1 4.816.225l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 15.475c-.839-.77-2.145-1.998-3.92-1.043a28 28 0 0 0-2.174 1.316"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.952v5.022c0 2.945-1.843 5.022-4.788 5.022H7.778C4.833 20.996 3 18.919 3 15.974V8.027c0-2.944 1.843-5.021 4.778-5.021h4.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.404 8.205.101-.274a3.76 3.76 0 0 1 2.222-2.224L21 5.605l-.273-.1a3.76 3.76 0 0 1-2.222-2.226l-.101-.273-.101.273a3.76 3.76 0 0 1-2.222 2.225l-.273.101.273.102a3.76 3.76 0 0 1 2.222 2.224zM13.093 9.447a1.77 1.77 0 0 1 1.177-1.179 1.77 1.77 0 0 1-1.177-1.178 1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.176 1.179"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGenerateImageAltTwoTone;

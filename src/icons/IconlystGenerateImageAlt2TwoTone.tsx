import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateImageAlt2TwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M21 10.952v5.022c0 2.945-1.843 5.022-4.788 5.022H7.778C4.833 20.996 3 18.919 3 15.974V8.027c0-2.944 1.843-5.021 4.778-5.021h4.534" />
      <Path d="m20.743 13.281-5.015 2.755a2 2 0 0 1-2.309-.274l-3.728-3.395a2 2 0 0 0-2.419-.21L3 14.87" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.404 8.205.101-.274a3.76 3.76 0 0 1 2.222-2.224L21 5.605l-.273-.1a3.76 3.76 0 0 1-2.222-2.226l-.101-.273-.101.273a3.76 3.76 0 0 1-2.222 2.225l-.273.101.273.102a3.76 3.76 0 0 1 2.222 2.224zM13.093 9.447a1.77 1.77 0 0 1 1.177-1.179 1.77 1.77 0 0 1-1.177-1.178 1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.176 1.179"
    />
  </Svg>
);
export default IconlystGenerateImageAlt2TwoTone;

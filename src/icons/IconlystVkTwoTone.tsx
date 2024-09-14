import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkTwoTone = ({
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
      <Path d="M21 6.223c-.593 1.208-1.326 2.351-2.222 3.355-.798.895-1.736 1.65-2.87 2.06-.766.27-1.542.346-2.33.367M21 17.78c-.592-1.209-1.326-2.352-2.222-3.356-.798-.884-1.736-1.65-2.87-2.06-.766-.27-1.542-.346-2.33-.356h-1.162" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.08 6.227h2.306v11.535C5.498 17.762 3 9.402 3 6.227"
    />
  </Svg>
);
export default IconlystVkTwoTone;

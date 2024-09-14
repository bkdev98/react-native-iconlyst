import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPepperOffTwoTone = ({
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
      d="M12.941 13.19c-2.165 3.546-7.766 3.085-9.941.838 1.05 6.327 9.519 6.878 13.999 3.108"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M14.206 10.182c.157-.362.347-.677.604-.935.567-.567 1.306-.596 2.11-.596 1.86 0 2.884 1.014 2.884 2.713a7.14 7.14 0 0 1-.851 3.43M17.418 8.651c0-2.018.825-4.648 3.582-3.984" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 3 18 18"
    />
  </Svg>
);
export default IconlystPepperOffTwoTone;

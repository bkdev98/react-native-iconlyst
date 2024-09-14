import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPersonTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.76 5.884a2.737 2.737 0 1 0 5.475 0 2.737 2.737 0 0 0-5.474 0M10.958 17.78l-1.422-3.412c-.512-1.228-.768-1.843-1.082-2.092a1.55 1.55 0 0 0-1.927-.002c-.314.249-.572.862-1.087 2.09l-1.43 3.41c-.346.823-.518 1.234-.51 1.567.016.596.371 1.13.915 1.375.304.137.75.137 1.641.137H8.91c.89 0 1.334 0 1.638-.136.543-.245.898-.778.915-1.373.009-.333-.162-.744-.505-1.565"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M14.798 5.884a2.737 2.737 0 1 0 5.474 0 2.737 2.737 0 0 0-5.474 0M20.996 15.014l-1.423 3.411c-.512 1.229-.768 1.843-1.082 2.092a1.55 1.55 0 0 1-1.927.002c-.314-.248-.572-.862-1.087-2.09l-1.43-3.41c-.346-.822-.518-1.233-.51-1.567.016-.596.371-1.13.915-1.375.304-.137.75-.137 1.641-.137h2.854c.89 0 1.334 0 1.638.137.543.244.898.777.915 1.373.01.332-.162.743-.505 1.564" />
    </G>
  </Svg>
);
export default IconlystPersonTwoTone;

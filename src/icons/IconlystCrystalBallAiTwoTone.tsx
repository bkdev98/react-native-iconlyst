import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrystalBallAiTwoTone = ({
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
      d="M12 2.75a7.839 7.839 0 0 1 3.645 14.78h-7.29A7.839 7.839 0 0 1 12 2.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.376 17.564-.794 1.238c-.505.79-.758 1.183-.738 1.51a1 1 0 0 0 .408.745c.264.193.732.193 1.669.193h6.164c.937 0 1.406 0 1.67-.193a1 1 0 0 0 .407-.745c.02-.327-.233-.72-.738-1.51l-.797-1.243M10.003 11.379l-.088-.239A3.28 3.28 0 0 0 7.98 9.201l-.238-.088.238-.088a3.28 3.28 0 0 0 1.936-1.939l.088-.238.088.238a3.28 3.28 0 0 0 1.936 1.94l.238.087-.238.088a3.28 3.28 0 0 0-1.936 1.94zM14.631 13.433a1.54 1.54 0 0 0-1.025-1.027c.491-.15.876-.535 1.025-1.027.15.492.534.877 1.025 1.027-.49.15-.875.534-1.025 1.026"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCrystalBallAiTwoTone;

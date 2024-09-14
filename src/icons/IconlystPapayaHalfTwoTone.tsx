import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPapayaHalfTwoTone = ({
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
      d="M14.194 13.005c.281 4.19-2.356 4.962-4.665 4.45-1.858-1.767-2.247-4.413 1.522-6.265 1.156-.568 2.453-1.407 2.898-1.39.238.377.16 1.92.245 3.205M11.669 12.774l-.013.003M10.2 15.114l-.012.003M12.222 14.772l-.012.003"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M18.235 9.394c1.957-2.965-.18-4.822-1.302-4.717-.47-1.024-3.147-1.947-4.735 1.231-.85 1.697-1.276 1.624-3.644 2.947-3.356 1.875-5.743 7.877-.609 11.39 5.609 2.69 9.614-2.379 9.56-6.223-.039-2.712-.316-3.045.73-4.628" />
      <Path d="M18.815 3c-.346.071-1.2.495-1.85 1.622" />
    </G>
  </Svg>
);
export default IconlystPapayaHalfTwoTone;

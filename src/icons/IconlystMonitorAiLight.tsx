import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAiLight = ({
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
      d="M16.97 3.284H7.029A4.03 4.03 0 0 0 3 7.313v5.456a4.03 4.03 0 0 0 4.028 4.03h9.943A4.03 4.03 0 0 0 21 12.768V7.313a4.03 4.03 0 0 0-4.03-4.03"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.055 20.716h9.888M9.883 16.8l-.637 3.917M14.115 16.8l.637 3.917M13.946 12.02l.1-.274a3.76 3.76 0 0 1 2.223-2.225l.273-.1-.273-.102a3.76 3.76 0 0 1-2.222-2.225l-.101-.273-.101.273a3.76 3.76 0 0 1-2.222 2.225l-.273.101.273.101a3.76 3.76 0 0 1 2.222 2.225zM8.54 13.023a1.77 1.77 0 0 1 1.176-1.179 1.77 1.77 0 0 1-1.176-1.178 1.77 1.77 0 0 1-1.177 1.178 1.77 1.77 0 0 1 1.177 1.179"
    />
  </Svg>
);
export default IconlystMonitorAiLight;

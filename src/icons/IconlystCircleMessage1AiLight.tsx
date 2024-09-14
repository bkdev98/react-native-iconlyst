import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleMessage1AiLight = ({
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
      d="M10.998 18.245v2.242c0 .312.287.546.59.467 4.2-1.09 7.899-4.815 8.373-9.246.055-.52.046-1.025.008-1.544-.42-4.009-3.828-7.134-7.97-7.134-4.14 0-7.547 3.125-7.968 7.134a8 8 0 0 0 .012 1.544c.416 3.559 3.133 6.348 6.955 6.537"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 12.677-.1-.274a3.76 3.76 0 0 0-2.223-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.222-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM15.365 13.919a1.77 1.77 0 0 0-1.177-1.179 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystCircleMessage1AiLight;

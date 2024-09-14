import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnnotationMessage1AiLight = ({
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
      d="M21 6.351a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8.784a3 3 0 0 0 3 3h2.162a1.5 1.5 0 0 1 1.06.439l1.717 1.717a1.5 1.5 0 0 0 2.122 0l1.716-1.717a1.5 1.5 0 0 1 1.061-.44H18a3 3 0 0 0 3-3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.46 9.383.1.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.221 2.225l-.101.273-.102-.273a3.76 3.76 0 0 0-2.221-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.221-2.225zM8.149 8.141A1.77 1.77 0 0 0 9.326 9.32a1.77 1.77 0 0 0-1.177 1.178A1.77 1.77 0 0 0 6.972 9.32 1.77 1.77 0 0 0 8.15 8.14"
    />
  </Svg>
);
export default IconlystAnnotationMessage1AiLight;

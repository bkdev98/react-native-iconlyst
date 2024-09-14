import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegenerateAiDotLight = ({
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
      d="m9.182 3.482-.006.01M5.366 6.081l-.006.01M3.32 10.228l-.006.01M3.563 14.796l-.006.01M6.052 18.59l-.006.009M12.182 3a9 9 0 0 1 8.987 9.013 9 9 0 0 1-12.233 8.389"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.946 10.022.1.273a3.76 3.76 0 0 0 2.223 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225l-.101.274-.101-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225zM8.635 8.78a1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.178 1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179"
    />
  </Svg>
);
export default IconlystRegenerateAiDotLight;

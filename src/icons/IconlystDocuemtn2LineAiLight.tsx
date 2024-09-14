import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemtn2LineAiLight = ({
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
      d="M9 8h6M9 12h3.66M12.635 21H8.452a4.12 4.12 0 0 1-4.12-4.12V7.12A4.12 4.12 0 0 1 8.452 3h7.096a4.12 4.12 0 0 1 4.12 4.12v5.904"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.205 20.586.102-.278a3.82 3.82 0 0 1 2.257-2.26l.277-.102-.277-.103a3.82 3.82 0 0 1-2.257-2.26l-.102-.278-.103.278a3.82 3.82 0 0 1-2.257 2.26l-.277.102.277.103a3.82 3.82 0 0 1 2.257 2.26z"
    />
  </Svg>
);
export default IconlystDocuemtn2LineAiLight;

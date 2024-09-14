import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKoreanCloudLight = ({
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
      d="M7.088 14.364c2.384 3.77 5.469-.256 8.147-.116 2.047-.023 4.716 1.67 5.82-.769-2.314.134-2.337-1.342-3.67-1.985"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.15 8.143c-.62 0-1.164.336-1.457.836-.3.513-.237 1.18.072 1.689.626 1.027 1.945 1.058 2.954.684 1.167-.431 1.955-1.454 1.955-2.968 0-1.874-1.649-3.653-3.524-3.653-1.27 0-2.665.465-3.793 1.732 0-1.875-1.52-3.451-3.394-3.451a3.394 3.394 0 0 0-2.76 5.372h-.012a3.136 3.136 0 0 0-3.136 3.136c0 1.732 1.321 3.084 3.053 3.084.834 0 1.852-.656 1.852-1.652s-.533-1.615-1.546-1.804M6.737 20.528c2.998.235 5.67-3.287 8.509-2.845.862.134 1.749.705 1.841 1.686.072.756-.322 1.324-.907 1.54-.773.286-1.627-.237-1.705-1.059M6.879 17.75c-1.217-.096-2.385.385-3.531.995"
    />
  </Svg>
);
export default IconlystKoreanCloudLight;

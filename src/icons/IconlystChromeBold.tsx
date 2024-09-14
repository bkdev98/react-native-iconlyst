import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChromeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.33 10.606c.088.15.318.127.386-.034.702-1.66 2.33-2.835 4.244-2.835h7.718c.232 0 .375-.25.247-.444-1.7-2.576-4.615-4.284-7.925-4.284a9.47 9.47 0 0 0-7.02 3.12.29.29 0 0 0-.036.345z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.83 12.369a3.134 3.134 0 0 0 3.13 3.13 3.134 3.134 0 0 0 3.131-3.13 3.135 3.135 0 0 0-3.13-3.132 3.135 3.135 0 0 0-3.132 3.132"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.225 21.642 2.517-4.366c.087-.151-.048-.337-.22-.315a4 4 0 0 1-.562.038c-1.69 0-3.156-.919-3.965-2.275-.011-.016-.03-.023-.04-.04l-3.83-6.627a.288.288 0 0 0-.504.001A9.4 9.4 0 0 0 2.5 12.51c0 4.542 3.204 8.347 7.47 9.278.109.024.2-.05.255-.145M15.807 9.237c-.175 0-.268.211-.163.35.59.774.947 1.735.947 2.782a4.6 4.6 0 0 1-.589 2.214c-.013.034-.015.069-.034.1l-4.092 7.099c-.056.097.012.227.124.227 5.238 0 9.5-4.261 9.5-9.5 0-1.08-.19-2.116-.526-3.084a.29.29 0 0 0-.278-.197c-.734.002-3.252.008-4.89.009"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChromeBold;

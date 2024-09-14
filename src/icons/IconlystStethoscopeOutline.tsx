import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStethoscopeOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.096 3.75a.214.214 0 1 0 0 .427.214.214 0 0 0 0-.427m-1.713.213a1.714 1.714 0 1 1 3.427 0 1.714 1.714 0 0 1-3.427 0M5.856 3.75a.214.214 0 1 0 0 .427.214.214 0 0 0 0-.427m-1.713.213a1.714 1.714 0 1 1 3.427 0 1.714 1.714 0 0 1-3.427 0M18.447 13.234a1.185 1.185 0 1 0 .001 2.37 1.185 1.185 0 0 0-.001-2.37m-2.684 1.186a2.685 2.685 0 1 1 5.37 0 2.685 2.685 0 0 1-5.37 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.548 14.965a.75.75 0 0 1 .75.75v.836a3.7 3.7 0 0 0 7.4 0v-.194a.75.75 0 0 1 1.5 0v.194a5.2 5.2 0 0 1-5.2 5.199 5.2 5.2 0 0 1-5.2-5.2v-.835a.75.75 0 0 1 .75-.75M5.744 4.15a.75.75 0 0 1 .122 1.054 4.675 4.675 0 0 0 .374 6.197 4.6 4.6 0 0 0 1.837 1.132c.917.3 1.913.311 2.844.032a1 1 0 0 1 .109-.044 4.5 4.5 0 0 0 1.828-1.12 4.68 4.68 0 0 0 .381-6.182.75.75 0 0 1 1.18-.926 6.18 6.18 0 0 1-.499 8.168 6 6 0 0 1-2.323 1.452 1 1 0 0 1-.11.046c-1.26.41-2.622.41-3.877 0a6.1 6.1 0 0 1-2.43-1.497c-2.236-2.236-2.408-5.767-.49-8.19a.75.75 0 0 1 1.054-.122"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.844 12.484a.75.75 0 0 1 .75.75v.774a.956.956 0 0 0 1.91 0v-.774a.75.75 0 1 1 1.5 0v.774a2.456 2.456 0 0 1-4.91 0v-.774a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStethoscopeOutline;

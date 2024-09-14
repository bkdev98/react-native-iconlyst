import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectOutline = ({
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
      d="M8.064 4.28c.853-1.128 2.22-2.03 4.186-2.03 1.967 0 3.334.902 4.187 2.03a6.03 6.03 0 0 1 1.124 2.64c.974.134 1.87.537 2.564 1.2.861.822 1.364 1.996 1.364 3.407a4.66 4.66 0 0 1-2.766 4.26 5.1 5.1 0 0 1-1.857.369H7.628a5 5 0 0 1-1.878-.387 4.65 4.65 0 0 1-2.74-4.242c0-1.41.504-2.585 1.365-3.407.695-.663 1.59-1.066 2.564-1.2a6.04 6.04 0 0 1 1.125-2.64m1.196.905c-.627.828-.879 1.823-.879 2.435a.75.75 0 0 1-.743.75c-.905.009-1.682.315-2.227.835-.539.514-.9 1.283-.9 2.322 0 1.273.754 2.371 1.843 2.87.473.189.939.259 1.274.259h9.238c.339 0 .807-.068 1.285-.256a3.16 3.16 0 0 0 1.838-2.873c0-1.039-.361-1.808-.9-2.322-.544-.52-1.321-.826-2.226-.835a.75.75 0 0 1-.743-.75c0-.612-.252-1.607-.879-2.435-.603-.797-1.546-1.435-2.99-1.435s-2.388.638-2.991 1.435M12.25 18.79a.73.73 0 1 0 0 1.46.73.73 0 0 0 0-1.46m-2.23.73a2.23 2.23 0 1 1 4.462 0 2.232 2.232 0 0 1-4.462 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.746 19.52a.75.75 0 0 1 .75-.75h4.287a.75.75 0 0 1 0 1.5H6.496a.75.75 0 0 1-.75-.75m7.214 0a.75.75 0 0 1 .75-.75h4.296a.75.75 0 1 1 0 1.5H13.71a.75.75 0 0 1-.75-.75M12.252 14.672a.75.75 0 0 1 .75.75v2.61a.75.75 0 0 1-1.5 0v-2.61a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudConnectOutline;

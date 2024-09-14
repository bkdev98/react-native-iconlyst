import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectOutline = ({
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
      d="M3.423 4.623c.593-.553 1.397-.825 2.266-.825h13.122c.87 0 1.674.274 2.267.827.599.558.922 1.345.922 2.244v2.555c0 .901-.323 1.688-.923 2.246-.593.553-1.397.825-2.266.825H5.689c-.869 0-1.673-.272-2.266-.825-.6-.558-.923-1.345-.923-2.246V6.87c0-.9.323-1.688.923-2.246m1.022 1.098C4.182 5.965 4 6.339 4 6.869v2.555c0 .53.182.904.445 1.148.268.25.684.423 1.244.423h13.122c.56 0 .976-.173 1.244-.423.263-.244.445-.617.445-1.148V6.87c0-.528-.182-.902-.445-1.147-.27-.251-.685-.424-1.244-.424H5.689c-.56 0-.975.172-1.244.423"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.191 8.147a.75.75 0 0 1 .75-.75h4.556a.75.75 0 0 1 0 1.5H6.94a.75.75 0 0 1-.75-.75M12.249 16.93a.885.885 0 1 0 0 1.771.885.885 0 0 0 0-1.77m-2.386.886a2.385 2.385 0 1 1 4.771 0 2.385 2.385 0 0 1-4.77 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 11.072a.75.75 0 0 1 .75.75v4.354a.75.75 0 0 1-1.5 0v-4.354a.75.75 0 0 1 .75-.75m-7.104 6.745a.75.75 0 0 1 .75-.75h4.733a.75.75 0 0 1 0 1.5H5.896a.75.75 0 0 1-.75-.75m7.964 0a.75.75 0 0 1 .75-.75h4.742a.75.75 0 0 1 0 1.5H13.86a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerConnectOutline;

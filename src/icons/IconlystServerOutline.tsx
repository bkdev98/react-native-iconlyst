import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerOutline = ({
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
      d="M3.423 14.142c.593-.552 1.397-.825 2.266-.825h13.122c.87 0 1.674.274 2.267.827.599.558.922 1.345.922 2.244v2.18c0 .9-.323 1.688-.923 2.246-.593.552-1.397.825-2.266.825H5.689c-.87 0-1.673-.273-2.266-.825-.6-.558-.923-1.345-.923-2.246v-2.18c0-.9.323-1.688.923-2.246m1.022 1.098c-.263.245-.445.618-.445 1.148v2.18c0 .53.182.903.445 1.148.268.25.684.423 1.244.423h13.122c.56 0 .976-.173 1.244-.423.263-.245.445-.618.445-1.148v-2.18c0-.528-.182-.901-.445-1.147-.27-.25-.685-.424-1.244-.424H5.689c-.56 0-.976.173-1.244.423M3.423 3.186c.593-.552 1.397-.825 2.266-.825h13.122c.87 0 1.674.274 2.267.827.599.558.922 1.345.922 2.244v2.18c0 .9-.323 1.688-.923 2.246-.593.552-1.397.825-2.266.825H5.689c-.87 0-1.673-.273-2.266-.825-.6-.558-.923-1.345-.923-2.246v-2.18c0-.9.323-1.688.923-2.246m1.022 1.098C4.182 4.53 4 4.902 4 5.432v2.18c0 .53.182.903.445 1.148.268.25.684.423 1.244.423h13.122c.56 0 .976-.173 1.244-.423.263-.245.445-.618.445-1.148v-2.18c0-.528-.182-.901-.445-1.147-.27-.25-.685-.424-1.244-.424H5.689c-.56 0-.976.173-1.244.423"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.191 6.522a.75.75 0 0 1 .75-.75h4.556a.75.75 0 0 1 0 1.5H6.94a.75.75 0 0 1-.75-.75M6.191 17.478a.75.75 0 0 1 .75-.75h4.556a.75.75 0 0 1 0 1.5H6.94a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerOutline;

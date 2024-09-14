import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBinanceOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.603 12.582a.75.75 0 0 1 .75.75v1.33a.75.75 0 0 1-.373.647l-1.155.673a.75.75 0 1 1-.755-1.296l.783-.456v-.898a.75.75 0 0 1 .75-.75M9.401 19.5a.75.75 0 0 1 1.025-.274l1.573.908 1.574-.908a.75.75 0 0 1 .75 1.299l-1.949 1.125a.75.75 0 0 1-.75 0l-1.948-1.125A.75.75 0 0 1 9.4 19.5M4.205 12.375a.75.75 0 0 1 .75.75v2.942l2.548 1.471a.75.75 0 1 1-.75 1.299L3.83 17.15a.75.75 0 0 1-.375-.65v-3.375a.75.75 0 0 1 .75-.75M19.794 12.375a.75.75 0 0 1 .75.75V16.5a.75.75 0 0 1-.375.65l-2.923 1.687a.75.75 0 0 1-.75-1.299l2.548-1.471v-2.942a.75.75 0 0 1 .75-.75M11.624 2.35a.75.75 0 0 1 .75 0l2.923 1.688a.75.75 0 0 1-.75 1.299l-2.548-1.471-2.548 1.471a.75.75 0 1 1-.75-1.299zM6.803 6a.75.75 0 0 1-.274 1.025l-1.574.908V9.75a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .375-.65L5.78 5.727A.75.75 0 0 1 6.803 6M17.196 6a.75.75 0 0 1 1.025-.274l1.948 1.125a.75.75 0 0 1 .375.65v2.25a.75.75 0 0 1-1.5 0V7.932l-1.573-.908A.75.75 0 0 1 17.196 6M17.253 8.967a.75.75 0 0 0-1.025-.275l-4.23 2.442L7.77 8.692a.75.75 0 0 0-.75 1.3l4.605 2.658a.75.75 0 0 0 .75 0l4.604-2.659a.75.75 0 0 0 .275-1.024"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.998 11.25a.75.75 0 0 0-.75.75v5.317a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-.75-.75M12.378 6.085a.75.75 0 0 0-.748-.001l-1.16.664a.75.75 0 0 0 .745 1.302l.787-.45.777.449a.75.75 0 1 0 .75-1.3zM7.395 12.582a.75.75 0 0 0-.75.75v1.33a.75.75 0 0 0 .373.647l1.155.673a.75.75 0 0 0 .755-1.296l-.783-.456v-.898a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBinanceOutline;

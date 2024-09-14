import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDropOutline = ({
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
      d="M4.948 10.598c-.38.409-.626 1.023-.626 1.814v5.358c0 .792.245 1.405.626 1.814.375.402.937.666 1.7.666h11.206c.762 0 1.323-.263 1.698-.666.38-.409.626-1.022.626-1.814v-5.358c0-.79-.246-1.404-.627-1.814-.376-.403-.938-.666-1.697-.666H6.647c-.762 0-1.324.264-1.7.666M3.85 9.576c.689-.74 1.664-1.144 2.797-1.144h11.207c1.13 0 2.105.405 2.794 1.144.683.733 1.03 1.734 1.03 2.836v5.358c0 1.101-.345 2.103-1.028 2.836-.688.74-1.664 1.144-2.796 1.144H6.648c-1.133 0-2.109-.404-2.798-1.144-.683-.733-1.028-1.735-1.028-2.836v-5.358c0-1.101.345-2.103 1.028-2.836"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.922 11.842a.75.75 0 0 1 .75-.75h1.352a.75.75 0 0 1 0 1.5H6.672a.75.75 0 0 1-.75-.75M15.725 18.342a.75.75 0 0 1 .75-.75h1.352a.75.75 0 1 1 0 1.5h-1.352a.75.75 0 0 1-.75-.75M12.249 13.637a1.456 1.456 0 1 0 0 2.912 1.456 1.456 0 0 0 0-2.912m-2.956 1.456a2.956 2.956 0 1 1 5.912 0 2.956 2.956 0 0 1-5.912 0M8.367 4.096a.75.75 0 0 1 .75.75v1.491a.75.75 0 0 1-1.5 0V4.846a.75.75 0 0 1 .75-.75M16.13 4.096a.75.75 0 0 1 .75.75v1.491a.75.75 0 0 1-1.5 0V4.846a.75.75 0 0 1 .75-.75M12.248 2.25a.75.75 0 0 1 .75.75v3.338a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperDropOutline;

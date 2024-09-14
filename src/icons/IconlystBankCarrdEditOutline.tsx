import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdEditOutline = ({
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
      d="M3.77 4.555c.843-.904 2.04-1.407 3.445-1.407h10.07c1.407 0 2.605.502 3.448 1.407.837.9 1.267 2.135 1.267 3.51v3.294a.75.75 0 0 1-1.5 0V8.066c0-1.067-.33-1.915-.865-2.489-.529-.568-1.313-.929-2.35-.929H7.215c-1.033 0-1.818.36-2.348.93C4.331 6.152 4 7 4 8.066v6.587c0 1.066.33 1.914.865 2.488.529.568 1.313.929 2.35.929h3.326a.75.75 0 1 1 0 1.5H7.215c-1.407 0-2.606-.502-3.448-1.407-.837-.899-1.267-2.134-1.267-3.51V8.066c0-1.377.432-2.613 1.27-3.511"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.191a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M18.64 14.695l-3.075 3.357a.94.94 0 0 0-.232.525l-.079.729m3.387-4.611a.22.22 0 0 1 .31-.012l.65.602a.22.22 0 0 1 .012.312l-.002.003-3.047 3.325-.006.006a.94.94 0 0 1-.547.303l-.709.118m4.669-5.768a1.72 1.72 0 0 0-2.432.093l-3.083 3.365-.005.006a2.44 2.44 0 0 0-.61 1.368l-.078.729a1.542 1.542 0 0 0 1.787 1.687l.707-.119a2.44 2.44 0 0 0 1.416-.778l3.042-3.32a1.72 1.72 0 0 0-.094-2.43z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdEditOutline;

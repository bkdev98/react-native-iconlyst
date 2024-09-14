import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasPartyBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M16.374 9.728c-.5 1.15-1.41 2.47-2.57 3.71-.18.19-.36.37-.53.54-.01.01-.01.02-.02.01-.05.07-.11.12-.16.16v.01c-1.75 1.67-3.26 2.42-4.01 2.55-.17.03-.31.04-.4.01a.2.2 0 0 1-.09-.05c-.11-.1-.18-.65.28-1.72.51-1.15 1.42-2.47 2.58-3.71.49-.52.96-.97 1.4-1.35.44-.37.85-.68 1.24-.93 1.06-.72 1.9-1.02 2.32-1.02.12 0 .21.03.25.07l.07.21c.01.03.01.07.01.12 0 .29-.09.74-.37 1.39m5.48 9.64s-3.77-11.95-3.91-12.14c-.07-.12-.16-.23-.25-.31-.97-.91-2.71-.38-4.5.84-.41.27-.82.59-1.23.92-.55.48-1.1.99-1.61 1.54-1.27 1.36-2.28 2.83-2.85 4.13-.86 1.97-.44 2.94.06 3.41.14.13.29.23.45.29.01.01 12.04 3.21 12.04 3.21.12.04.25.05.38.05.4 0 .79-.16 1.08-.46.37-.4.5-.96.34-1.48"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.004 11.738c-.29.48-.64.97-1.02 1.45.55 1.45 1.1 3.61.89 5.69l1.46.38c.37-2.91-.61-5.97-1.33-7.52M13.224 16.048c.11.66.17 1.3.17 1.91l1.49.39c.04-1.09-.08-2.26-.37-3.48-.42.42-.85.82-1.29 1.18M6.747 9.514a2.22 2.22 0 0 0-1.694.258l-.176.106a.94.94 0 0 1-1.293-.313l-.11-.187a.751.751 0 0 0-1.289.77l.115.191a2.445 2.445 0 0 0 3.353.823l.176-.106a.737.737 0 0 1 1.014.248.75.75 0 0 0 1.03.254.75.75 0 0 0 .253-1.029 2.22 2.22 0 0 0-1.379-1.015M8.147 4.466a.75.75 0 0 0-.11 1.055c.347.428.52 1.103.398 1.57a.751.751 0 0 0 1.454.375c.239-.928-.037-2.09-.687-2.89a.75.75 0 0 0-1.056-.11M3.723 6.156a.75.75 0 1 0 1.041-1.08l-.406-.392a.75.75 0 0 0-1.041 1.08zM4.232 13.86l-.56.065a.75.75 0 0 0 .175 1.491l.559-.066a.75.75 0 0 0 .658-.832.76.76 0 0 0-.832-.658M14.406 10.14a2.64 2.64 0 0 0-.822-1.857l-.16-.155a.94.94 0 0 1-.034-1.331l.143-.149a2.243 2.243 0 0 0-.08-3.165.75.75 0 1 0-1.033 1.088.74.74 0 0 1 .026 1.043l-.142.148a2.43 2.43 0 0 0-.672 1.746c.015.652.286 1.26.754 1.704l.161.155c.224.212.351.5.36.81.007.31-.106.603-.32.827a.75.75 0 1 0 1.086 1.035 2.64 2.64 0 0 0 .733-1.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasPartyBulk;

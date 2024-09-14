import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectionBulk = ({
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
      d="M16.744 9.651v1.273l-3.824 1.221V6.426h-1.5v7.573l-3.824-.841v-1.573h-1.5v2.177c0 .352.245.657.589.732l4.735 1.041v1.494h1.5V13.72l4.802-1.534a.75.75 0 0 0 .522-.715v-1.82z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.016 6.426h-3.695a.752.752 0 0 1-.599-1.202L11.57 2.77q.009-.01.02-.017.01-.006.019-.015a.7.7 0 0 1 .161-.135l.033-.023a.3.3 0 0 1 .054-.035.7.7 0 0 1 .303-.071l.003-.001.007-.002c.114 0 .219.03.315.075q.023.012.044.028.013.01.027.02a.7.7 0 0 1 .18.15q.007.007.015.012l.017.014 1.847 2.454a.752.752 0 0 1-.599 1.202m2.678-.685h1.599c.635 0 1.152.516 1.152 1.15v1.6c0 .64-.517 1.16-1.152 1.16h-1.599c-.635 0-1.152-.52-1.152-1.16v-1.6c0-.634.517-1.15 1.152-1.15M9.141 9.423a2.293 2.293 0 1 1-4.586 0 2.293 2.293 0 0 1 4.586 0M12.17 21.53a2.318 2.318 0 1 0 0-4.637 2.318 2.318 0 0 0 0 4.637"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectionBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDaiBulk = ({
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
      d="M12.5 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.645 12.301-.02.162h.259a.75.75 0 0 1 0 1.5h-.634c-.734 1.645-2.364 2.77-4.312 2.77H9.752a.75.75 0 0 1-.75-.75v-2.02H8.22a.75.75 0 0 1 0-1.5h.781v-.92H8.22a.75.75 0 0 1 0-1.5h.781v-2.02a.75.75 0 0 1 .75-.75h3.186c1.948 0 3.579 1.125 4.312 2.77h.634a.75.75 0 0 1 0 1.5h-.258q.008.082.02.163c.012.098.025.196.025.297 0 .102-.013.2-.026.298m-7.143-3.528h2.436c1.066 0 1.986.498 2.57 1.271h-5.006zm0 3.69h5.624l.007-.048c.019-.135.038-.27.038-.412 0-.14-.02-.276-.038-.411l-.007-.049h-5.624zm2.436 2.77h-2.436v-1.27h5.007a3.2 3.2 0 0 1-2.571 1.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDaiBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarTicketBold = ({
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
      d="m18.349 12.033-.57.547.133.762a1.06 1.06 0 0 1-1.041 1.233c-.17 0-.344-.042-.498-.125l-.899-.466a.75.75 0 1 1 .69-1.332l.116.06-.02-.11a1.05 1.05 0 0 1 .308-.94l.073-.07-.112-.016a1.06 1.06 0 0 1-.794-.568l-.456-.912a.75.75 0 0 1 1.342-.671l.35.7.79.114c.27.036.517.178.687.4.172.224.246.5.209.779a1.06 1.06 0 0 1-.308.615m-3.789.07-.714.688.169.966a.78.78 0 0 1-1.132.815L12 14.115l-.888.46a.76.76 0 0 1-.587.055.774.774 0 0 1-.541-.865l.171-.974-.715-.685a.774.774 0 0 1 .439-1.323l.984-.143.442-.883a.78.78 0 0 1 1.387-.008l.446.89.993.144a.77.77 0 0 1 .658.868.77.77 0 0 1-.229.453m-6.034 1.88-.909.472a1.04 1.04 0 0 1-.663.105 1.056 1.056 0 0 1-.869-1.206l.136-.774-.564-.541a1.06 1.06 0 0 1-.313-.62 1.04 1.04 0 0 1 .208-.78c.17-.222.417-.364.695-.401l.782-.113.35-.7a.75.75 0 0 1 1.342.671l-.455.909c-.157.31-.454.523-.796.572l-.111.016.073.07c.253.243.368.593.308.938l-.02.11.116-.06a.75.75 0 1 1 .69 1.333m10.867-6.666c-.079 0-.143-.064-.143-.18a2.205 2.205 0 0 0-2.203-2.203H6.953c-1.215 0-2.203.988-2.203 2.24a.143.143 0 0 1-.143.143A2.11 2.11 0 0 0 2.5 9.425v5.153a2.11 2.11 0 0 0 2.107 2.107c.079 0 .143.064.143.143v.038c0 1.215.988 2.203 2.203 2.203h10.094c1.215 0 2.203-.988 2.203-2.241 0-.08.064-.143.143-.143a2.11 2.11 0 0 0 2.107-2.107V9.425a2.11 2.11 0 0 0-2.107-2.108"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.349 12.033-.57.547.133.762a1.06 1.06 0 0 1-1.041 1.233c-.17 0-.344-.042-.498-.125l-.899-.466a.75.75 0 1 1 .69-1.332l.116.06-.02-.11a1.05 1.05 0 0 1 .308-.94l.073-.07-.112-.016a1.06 1.06 0 0 1-.794-.568l-.456-.912a.75.75 0 0 1 1.342-.671l.35.7.79.114c.27.036.517.178.687.4.172.224.246.5.209.779a1.06 1.06 0 0 1-.308.615m-3.789.07-.714.688.169.966a.78.78 0 0 1-1.132.815L12 14.115l-.888.46a.76.76 0 0 1-.587.055.774.774 0 0 1-.541-.865l.171-.974-.715-.685a.774.774 0 0 1 .439-1.323l.984-.143.442-.883a.78.78 0 0 1 1.387-.008l.446.89.993.144a.77.77 0 0 1 .658.868.77.77 0 0 1-.229.453m-6.034 1.88-.909.472a1.04 1.04 0 0 1-.663.105 1.056 1.056 0 0 1-.869-1.206l.136-.774-.564-.541a1.06 1.06 0 0 1-.313-.62 1.04 1.04 0 0 1 .208-.78c.17-.222.417-.364.695-.401l.782-.113.35-.7a.75.75 0 0 1 1.342.671l-.455.909c-.157.31-.454.523-.796.572l-.111.016.073.07c.253.243.368.593.308.938l-.02.11.116-.06a.75.75 0 1 1 .69 1.333m10.867-6.666c-.079 0-.143-.064-.143-.18a2.205 2.205 0 0 0-2.203-2.203H6.953c-1.215 0-2.203.988-2.203 2.24a.143.143 0 0 1-.143.143A2.11 2.11 0 0 0 2.5 9.425v5.153a2.11 2.11 0 0 0 2.107 2.107c.079 0 .143.064.143.143v.038c0 1.215.988 2.203 2.203 2.203h10.094c1.215 0 2.203-.988 2.203-2.241 0-.08.064-.143.143-.143a2.11 2.11 0 0 0 2.107-2.107V9.425a2.11 2.11 0 0 0-2.107-2.108"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarTicketBold;
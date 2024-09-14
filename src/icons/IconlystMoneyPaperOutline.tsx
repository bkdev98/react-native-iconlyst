import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperOutline = ({
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
      d="M3.425 4.922c.62-.667 1.498-1.03 2.508-1.03h9.786c1.012 0 1.89.363 2.512 1.03.615.66.922 1.56.922 2.541v6.228c0 .982-.307 1.88-.923 2.542-.62.667-1.499 1.03-2.512 1.03H5.933c-1.012 0-1.89-.363-2.51-1.03-.616-.661-.923-1.56-.923-2.542V7.463c0-.982.309-1.881.925-2.541m1.097 1.022C4.208 6.281 4 6.792 4 7.464v6.227c0 .672.207 1.184.52 1.52.308.33.772.552 1.413.552h9.785c.643 0 1.107-.222 1.415-.552.313-.336.52-.848.52-1.52V7.463c0-.671-.207-1.183-.52-1.519-.308-.33-.772-.551-1.414-.551H5.933c-.638 0-1.103.22-1.411.551"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.65 7.484a.75.75 0 0 1 .75-.75h.17c1.012 0 1.889.364 2.509 1.032.614.66.92 1.56.92 2.54v6.228c0 .98-.306 1.88-.922 2.542-.622.667-1.501 1.03-2.516 1.03H8.784c-1.015 0-1.895-.363-2.517-1.03-.616-.662-.923-1.561-.923-2.542a.75.75 0 0 1 1.5 0c0 .671.207 1.183.52 1.52.309.33.774.552 1.42.552h9.777c.645 0 1.11-.222 1.418-.553.314-.336.52-.848.52-1.519v-6.228c0-.67-.206-1.183-.52-1.52-.306-.33-.77-.552-1.409-.552h-.17a.75.75 0 0 1-.75-.75M5.207 13.566a.75.75 0 0 1 .75-.75h1.181a.75.75 0 0 1 0 1.5H5.957a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.152 10.578a2.676 2.676 0 1 1 5.352 0 2.676 2.676 0 0 1-5.352 0m2.677-1.176a1.176 1.176 0 1 0-.002 2.352 1.176 1.176 0 0 0 .002-2.352M13.768 7.59a.75.75 0 0 1 .75-.75h1.18a.75.75 0 0 1 0 1.5h-1.18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperOutline;

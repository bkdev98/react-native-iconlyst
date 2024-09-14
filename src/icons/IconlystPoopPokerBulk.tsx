import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopPokerBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.83 13.388v-.07c0-1.845-1.246-3.426-2.922-3.823l.004-.04c.218-1.874-.872-3.496-3.079-4.57l-.22-.104c-.4-.191-.854-.408-1.312-.486a.52.52 0 0 0-.456.173.52.52 0 0 0-.1.485c.132.448.294 1.588-1.089 2.525a3.68 3.68 0 0 0-1.359 1.964c-1.805.299-3.169 1.93-3.169 3.877l.001.074c-1.555.506-2.64 2.008-2.64 3.735 0 1.95 1.404 3.453 3.694 3.925 1.672.253 3.968.357 6.124.357 2.563 0 4.93-.147 5.818-.366 1.552-.383 3.363-1.637 3.363-3.916 0-1.741-1.095-3.246-2.659-3.74"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.45 14.888a.75.75 0 0 0 .75-.75v-.08c0-.414-.337-.71-.75-.71-.415 0-.75.376-.75.79s.335.75.75.75M12.088 17.818h1.801a.75.75 0 0 0 0-1.5h-1.8a.75.75 0 0 0 0 1.5M10.576 14.888a.75.75 0 0 0 .75-.75v-.08c0-.414-.336-.71-.75-.71s-.75.376-.75.79.336.75.75.75"
    />
  </Svg>
);
export default IconlystPoopPokerBulk;

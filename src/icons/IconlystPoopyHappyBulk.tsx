import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopyHappyBulk = ({
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
      d="M19.83 13.388v-.07c0-1.845-1.245-3.426-2.922-3.823l.005-.04c.218-1.874-.873-3.495-3.08-4.57l-.218-.102c-.4-.192-.855-.41-1.314-.488a.52.52 0 0 0-.456.173.52.52 0 0 0-.1.485c.133.448.297 1.587-1.089 2.525a3.67 3.67 0 0 0-1.358 1.964c-1.806.299-3.17 1.93-3.17 3.877l.001.074c-1.555.506-2.64 2.008-2.64 3.735 0 1.95 1.404 3.453 3.694 3.925 1.672.253 3.967.357 6.124.357 2.563 0 4.93-.147 5.82-.366 1.55-.383 3.361-1.637 3.361-3.916 0-1.741-1.094-3.246-2.659-3.74"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.45 13.888a.75.75 0 0 0 .75-.75v-.011a.745.745 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.335.75.75.75M12.972 18.088c.834 0 1.551-.338 2.191-1.032a.75.75 0 0 0-1.104-1.016c-.353.384-.678.548-1.075.548-.393-.006-.725-.178-1.047-.538a.749.749 0 1 0-1.121.996c.603.679 1.324 1.029 2.156 1.042M10.576 12.383a.755.755 0 0 0-.75.755.75.75 0 0 0 1.5 0v-.011a.745.745 0 0 0-.75-.744"
    />
  </Svg>
);
export default IconlystPoopyHappyBulk;

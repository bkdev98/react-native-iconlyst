import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopFunBulk = ({
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
      d="M19.83 13.388v-.07c0-1.845-1.245-3.426-2.922-3.823l.005-.04c.218-1.874-.873-3.495-3.08-4.57l-.218-.103c-.4-.191-.855-.408-1.314-.487a.52.52 0 0 0-.456.173.52.52 0 0 0-.1.485c.133.448.297 1.587-1.089 2.525a3.67 3.67 0 0 0-1.358 1.964c-1.806.298-3.17 1.93-3.17 3.877l.001.074c-1.555.506-2.64 2.008-2.64 3.735 0 1.95 1.404 3.453 3.694 3.925 1.672.253 3.967.356 6.124.356 2.563 0 4.93-.146 5.82-.365 1.55-.383 3.361-1.638 3.361-3.916 0-1.741-1.094-3.246-2.659-3.74"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.45 13.72a.75.75 0 0 0 .75-.75v-.011a.745.745 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.335.75.75.75M10.838 15.86c0 1.25.964 2.269 2.15 2.269 1.184 0 2.148-1.018 2.148-2.27a.5.5 0 0 0-.5-.5h-3.298c-.277 0-.5.224-.5.5M10.576 12.215a.755.755 0 0 0-.75.755.75.75 0 0 0 1.5 0v-.011a.745.745 0 0 0-.75-.744"
    />
  </Svg>
);
export default IconlystPoopFunBulk;

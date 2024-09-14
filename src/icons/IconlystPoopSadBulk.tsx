import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopSadBulk = ({
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
      d="M19.83 13.388v-.07c0-1.845-1.245-3.426-2.922-3.822l.005-.04c.218-1.874-.873-3.495-3.08-4.57l-.218-.103c-.4-.192-.855-.408-1.314-.488a.52.52 0 0 0-.456.173.52.52 0 0 0-.1.486c.133.447.297 1.587-1.089 2.524a3.67 3.67 0 0 0-1.358 1.964c-1.806.299-3.17 1.93-3.17 3.877l.001.074c-1.555.506-2.64 2.008-2.64 3.735 0 1.952 1.404 3.454 3.694 3.925 1.671.253 3.967.357 6.124.357 2.563 0 4.93-.147 5.82-.365 1.55-.383 3.361-1.638 3.361-3.917 0-1.741-1.094-3.246-2.659-3.74"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.45 13.898a.75.75 0 0 0 .75-.75v-.01a.746.746 0 0 0-.75-.745.755.755 0 0 0-.75.755c0 .414.335.75.75.75M14.085 17.846a.749.749 0 1 0 1.103-1.015c-.639-.695-1.356-1.033-2.2-1.033-.81.012-1.554.372-2.147 1.043a.75.75 0 1 0 1.123.994c.315-.355.657-.531 1.034-.537.408 0 .733.164 1.087.548M10.576 12.393a.755.755 0 0 0-.75.755.75.75 0 0 0 1.5 0v-.01a.746.746 0 0 0-.75-.745"
    />
  </Svg>
);
export default IconlystPoopSadBulk;

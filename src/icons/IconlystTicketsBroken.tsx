import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketsBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.11 12.482h4.706M9.941 8.22h1.875M12.25 3.16h3.529c1.894 0 2.841 0 3.57.357a3.5 3.5 0 0 1 1.603 1.603c.357.729.357 1.676.357 3.57v3.172c0 1.894 0 2.841-.357 3.57a3.5 3.5 0 0 1-1.603 1.603c-.729.357-1.676.357-3.57.357H8.72c-1.894 0-2.841 0-3.57-.357a3.5 3.5 0 0 1-1.603-1.603c-.357-.729-.357-1.676-.357-3.57V8.69c0-1.894 0-2.841.357-3.57A3.5 3.5 0 0 1 5.15 3.517c.576-.282 1.289-.341 2.498-.354"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.642 17.225 12.82 19.4c1.828.494 2.743.742 3.54.587a3.5 3.5 0 0 0 1.965-1.129c.328-.374.548-.863.784-1.608M15.84 8.662v3.183M15.84 3.16v2.714M15.84 14.633v2.714"
    />
  </Svg>
);
export default IconlystTicketsBroken;

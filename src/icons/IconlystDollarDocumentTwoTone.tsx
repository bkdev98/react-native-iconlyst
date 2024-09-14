import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDocumentTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.286 3.063c.558 0 1.092.227 1.478.63l3.792 3.95c.366.38.571.89.571 1.419v8.165a3.81 3.81 0 0 1-3.657 3.835H8.544a3.753 3.753 0 0 1-3.67-3.835V6.72a3.747 3.747 0 0 1 3.76-3.657z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.769 3.123v2.893a2.56 2.56 0 0 0 2.554 2.56h2.738"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.212 10.89h-2.397a1.291 1.291 0 1 0 0 2.583h1.475a1.29 1.29 0 1 1 0 2.582H9.892M11.553 16.056v1.084m0-7.34v1.094"
    />
  </Svg>
);
export default IconlystDollarDocumentTwoTone;

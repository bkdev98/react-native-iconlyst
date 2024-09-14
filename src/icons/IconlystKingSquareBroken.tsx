import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingSquareBroken = ({
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
      d="M16.716 21c2.949 0 4.784-2.081 4.784-5.026V8.026C21.5 5.081 19.665 3 16.717 3H8.282C5.342 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.334 21 8.282 21H13.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.756 14.884c-.19-1.08-.588-3.936-.78-5.024a.234.234 0 0 1 .379-.222l1.904 1.54a.23.23 0 0 0 .321-.023l1.746-1.963a.232.232 0 0 1 .348 0l1.746 1.963a.23.23 0 0 0 .322.024l1.903-1.541a.233.233 0 0 1 .378.22c-.19 1.09-.587 3.34-.776 4.422a.73.73 0 0 1-.723.604H12.5"
    />
  </Svg>
);
export default IconlystKingSquareBroken;

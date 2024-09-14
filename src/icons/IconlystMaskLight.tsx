import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaskLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.568 9.336c-.06-1.352-.75-3.719-6.56-3.646-5.81-.097-6.506 2.268-6.572 3.62-.067 1.35.447 3.57.542 3.933.227.873 1.389 5.065 6.009 5.07 4.62.014 5.795-4.173 6.026-5.045.096-.364.617-2.58.555-3.932"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.686 13.547q1.32-.172 2.624 0M9.389 10.308a16 16 0 0 1 5.218 0M5.547 8.555l-.353.113c-1.44.564-2.239 1.334-2.192 3.632.037 2.309 1.867 3.232 3.242 3.253l.735.03M18.453 8.555l.353.113c1.44.564 2.239 1.334 2.192 3.632-.037 2.309-1.867 3.232-3.242 3.253l-.735.03"
    />
  </Svg>
);
export default IconlystMaskLight;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleSurveyLight = ({
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
      d="M3.314 12.883a2.344 2.344 0 0 1 3.203-.858l4.614 2.664 5.494-9.516a2.344 2.344 0 1 1 4.06 2.344l-6.643 11.508-.022.039a2.344 2.344 0 0 1-3.203.858l-6.644-3.837a2.344 2.344 0 0 1-.859-3.202"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.516 12.023a2.344 2.344 0 0 1-2.344 4.061"
    />
  </Svg>
);
export default IconlystGoogleSurveyLight;

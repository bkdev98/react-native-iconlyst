import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleSurveyOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.976 4.798a3.094 3.094 0 1 1 5.36 3.094l-6.641 11.502-.026.045a3.094 3.094 0 0 1-4.227 1.132l-6.644-3.836a3.094 3.094 0 1 1 3.094-5.36l3.965 2.29zm3.476.166a1.594 1.594 0 0 0-2.177.584l-5.494 9.516a.75.75 0 0 1-1.025.274l-4.614-2.664a1.594 1.594 0 1 0-1.594 2.762l6.644 3.836c.763.44 1.738.179 2.178-.583l.015-.027.007-.012 6.644-11.508a1.594 1.594 0 0 0-.584-2.178"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.867 11.648a.75.75 0 0 1 1.024-.274 3.094 3.094 0 0 1-3.094 5.36.75.75 0 1 1 .75-1.3 1.594 1.594 0 1 0 1.594-2.761.75.75 0 0 1-.274-1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleSurveyOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleRightOutline = ({
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
      d="M10.351 11.351a.75.75 0 0 0 0 1.06L12.939 15l-2.588 2.588a.75.75 0 0 0 1.06 1.061l3.12-3.119a.75.75 0 0 0 0-1.06l-3.12-3.119a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.748 6.052c1.786-.6 3.9-.872 6.005-.787s4.117.523 5.71 1.268c1.572.735 2.77 1.788 3.158 3.09.409 1.374-.172 2.686-1.336 3.694a.75.75 0 1 1-.982-1.134c.87-.753 1.07-1.493.88-2.131-.21-.709-.955-1.506-2.354-2.16-1.377-.643-3.186-1.05-5.136-1.128-1.948-.079-3.878.176-5.468.71-1.61.54-2.68 1.3-3.167 2.062-.236.37-.323.72-.306 1.045.018.328.146.686.431 1.062.586.772 1.758 1.508 3.429 2.005 1.652.492 3.61.694 5.545.563a.75.75 0 0 1 .101 1.497c-2.094.141-4.232-.074-6.074-.622-1.824-.543-3.34-1.407-4.196-2.536-.436-.574-.697-1.214-.734-1.888-.036-.676.156-1.332.539-1.932.748-1.174 2.188-2.086 3.955-2.678"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleRightOutline;

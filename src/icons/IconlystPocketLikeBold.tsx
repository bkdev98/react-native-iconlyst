import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketLikeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.83 12.256c-.337-.128-.659-.06-.937.162a.75.75 0 0 1-.999-.057c-.265-.267-.669-.171-.83-.118-.338.102-.5.36-.58.559a1.58 1.58 0 0 0-.046.99c.344.889 1.303 1.718 1.915 2.157.692-.431 1.784-1.265 2.057-2.14.122-.408.095-.857-.073-1.16a.79.79 0 0 0-.508-.393"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.845 14.249c-.58 1.851-2.908 3.11-3.172 3.248a.757.757 0 0 1-.732-.021c-.091-.054-2.233-1.357-2.916-3.18q-.01-.022-.016-.047a3.08 3.08 0 0 1 .085-2.01c.288-.713.827-1.219 1.517-1.426.646-.213 1.303-.168 1.843.117.596-.291 1.259-.33 1.85-.094.542.143 1.035.527 1.345 1.085.368.665.44 1.514.196 2.328m2.161-7.224a.3.3 0 0 0-.086-.01L7.153 7.47l-.028.001a.651.651 0 0 1-.027-1.3l10.54-.443a.3.3 0 0 0 .288-.3v-.795c0-.69-.307-1.32-.842-1.729a2.15 2.15 0 0 0-1.885-.354L6.468 4.857c-.876.293-1.441 1.03-1.441 1.875v12.2c0 1.434 1.166 2.6 2.599 2.6h9.7c1.434 0 2.6-1.166 2.6-2.6v-9.4a2.605 2.605 0 0 0-1.92-2.507"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPocketLikeBold;

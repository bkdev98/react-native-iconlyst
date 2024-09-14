import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBatteryBulk = ({
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
      d="M9.667 4.925c0-.634.094-1.05 1.35-1.05h1.7c1.247 0 1.35.496 1.35 1.05v.221c-.15-.007-.294-.027-.45-.021h-3.3c-.228 0-.436.03-.65.052zm-.658 11.21-.018-.134c-.245-2.2.112-4.262.312-4.864a2.5 2.5 0 0 1 1.585-1.585c1.088-.359 3.45-.14 5.378.501a8 8 0 0 1 1.538.7c.137.08.313-.016.313-.174v-.854c0-1.477-.45-2.69-1.301-3.508a3.8 3.8 0 0 0-1.25-.775v-.517c0-.767-.277-2.55-2.85-2.55h-1.7c-2.354 0-2.85 1.387-2.85 2.55v.635c-1.541.682-2.45 2.143-2.45 4.165v7.301c0 2.837 1.725 4.599 4.5 4.599h1.734c.212 0 .289-.31.11-.425a5 5 0 0 1-.386-.275c-1.752-1.266-2.416-3.299-2.665-4.79"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.161 19.782a5.6 5.6 0 0 1-1.113-.89c1.657-1.625 1.217-3.417.766-4.406-.624-1.145-1.784-2.068-3.18-2.536-1.844-.612-3.659-.648-4.116-.5a.5.5 0 0 0-.317.318c-.111.332-.435 2.108-.219 4.038.155.928.607 2.62 1.881 3.51.514.41 1.335.896 2.347.896q.17 0 .347-.023c.15-.02.211-.2.116-.318a8.8 8.8 0 0 1-1.117-1.776.75.75 0 0 1 .385-.986c.098-.044.192.052.223.154q.007.024.017.046c.041.1 1.02 2.447 3.209 3.76a.747.747 0 0 0 1.028-.258.75.75 0 0 0-.257-1.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSafeBatteryBulk;

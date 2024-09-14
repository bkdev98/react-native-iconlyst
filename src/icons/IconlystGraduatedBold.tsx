import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraduatedBold = ({
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
      d="M10.581 15.023c.53.251 1.103.394 1.691.393.578 0 1.155-.131 1.692-.393q1.091-.532 2.184-1.06c1.362-.66 2.724-1.32 4.08-1.992a.2.2 0 0 1 .288.18l-.016 2.643a.75.75 0 0 0 .745.755h.005a.75.75 0 0 0 .75-.745l.033-5.41a1 1 0 0 0-.014-.153 2.7 2.7 0 0 0-1.514-2.276l-6.542-3.198a3.8 3.8 0 0 0-3.377-.001L4.053 6.964a2.68 2.68 0 0 0-1.52 2.43c0 1.045.583 1.975 1.518 2.428l2.288 1.12a1 1 0 0 0 .087.05z"
    />
    <Path
      fill={props.color}
      d="M14.512 16.146a5.08 5.08 0 0 1-4.48 0L6.545 14.44a.2.2 0 0 0-.288.18v2.668a2.63 2.63 0 0 0 1.609 2.443c1.456.597 2.914.897 4.362.897 1.449 0 2.89-.3 4.312-.899a2.61 2.61 0 0 0 1.595-2.421V14.7a.2.2 0 0 0-.288-.18z"
    />
  </Svg>
);
export default IconlystGraduatedBold;

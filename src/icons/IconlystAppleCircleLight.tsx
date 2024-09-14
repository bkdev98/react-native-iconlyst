import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleCircleLight = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.33 10.425a3.07 3.07 0 0 0-.48 1.863c.003.65.127 1.296.365 1.902a5.8 5.8 0 0 0 1.245 2.022 1.176 1.176 0 0 0 1.54.293 2.04 2.04 0 0 1 1.804-.034 1.29 1.29 0 0 0 1.742-.36c.46-.521.82-1.123 1.06-1.776.08-.23.08-.226-.127-.35a2.05 2.05 0 0 1-1.035-1.413 2.1 2.1 0 0 1 .833-2.175c.125-.096.152-.162.043-.284a2.2 2.2 0 0 0-2.083-.758c-.299.052-.59.142-.865.268-.354.172-.77.165-1.119-.017a2.213 2.213 0 0 0-2.923.82M12.923 6.68l-.554.735"
    />
  </Svg>
);
export default IconlystAppleCircleLight;

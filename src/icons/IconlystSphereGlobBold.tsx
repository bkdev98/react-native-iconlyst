import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSphereGlobBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 15.721c-5.11 0-8.25-1.66-8.25-2.85s3.14-2.85 8.25-2.85 8.25 1.66 8.25 2.85-3.14 2.85-8.25 2.85m0-11.1c3.61 0 6.69 2.34 7.8 5.57-1.9-1.1-4.9-1.67-7.8-1.67s-5.9.57-7.8 1.67c1.11-3.23 4.19-5.57 7.8-5.57m9.74 7.99c-.13-5.25-4.45-9.49-9.74-9.49s-9.61 4.24-9.74 9.49c-.01.09-.01.17-.01.26s0 .17.01.26c.13 5.26 4.45 9.49 9.74 9.49s9.61-4.23 9.74-9.49c.01-.09.01-.17.01-.26s0-.17-.01-.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSphereGlobBold;

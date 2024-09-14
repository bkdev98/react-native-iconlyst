import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10C6.47 22 2 17.52 2 12S6.47 2 12 2m4.48 8.8c-.67 0-1.2.54-1.2 1.2s.53 1.2 1.2 1.2c.66 0 1.19-.54 1.19-1.2s-.53-1.2-1.19-1.2m-4.48 0c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2 1.19-.54 1.19-1.2-.53-1.2-1.19-1.2m-4.48 0c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2 1.19-.54 1.19-1.2-.53-1.2-1.19-1.2"
    />
  </Svg>
);
export default IconlystMoreCircleBold;

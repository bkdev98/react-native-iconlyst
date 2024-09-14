import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale6Bold = ({
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
      d="m17.746 8.99-2.122 3.406a.752.752 0 0 1-1.135.164 3.7 3.7 0 0 0-1.237-.725l.952-2.213a.75.75 0 0 0-.393-.986.75.75 0 0 0-.985.393l-1.123 2.612c-.788.063-1.56.36-2.189.919a.746.746 0 0 1-1.135-.164L6.257 8.99a.75.75 0 0 1 .138-.957 8.44 8.44 0 0 1 11.212 0 .75.75 0 0 1 .139.957m-1.609 8.784H7.868a.75.75 0 0 1 0-1.5h8.269a.75.75 0 0 1 0 1.5m.08-15.274H7.783C4.623 2.5 2.5 4.72 2.5 8.026v7.947c0 3.306 2.123 5.527 5.283 5.527h8.433c3.161 0 5.284-2.221 5.284-5.527V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale6Bold;

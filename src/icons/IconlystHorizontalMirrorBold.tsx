import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalMirrorBold = ({
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
      d="M10.291 18.953a.92.92 0 0 1-.838-.528.923.923 0 0 1 .112-.985l1.708-2.131a.93.93 0 0 1 .727-.35c.284 0 .549.128.727.35l1.709 2.13a.93.93 0 0 1 .113.986.93.93 0 0 1-.84.528zm3.376-5.692a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm-5.334 0a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm2.941-3.546L9.565 7.584a.932.932 0 0 1 .726-1.514h3.418c.361 0 .683.202.839.527a.93.93 0 0 1-.112.986l-1.708 2.13-.001.002a.93.93 0 0 1-.727.347.93.93 0 0 1-.726-.347m10.226 7.01v-3.164a.3.3 0 0 0-.3-.3h-2.201a.75.75 0 0 1 0-1.5H21.2a.3.3 0 0 0 .3-.3V8.29c0-3.16-2.221-5.282-5.526-5.282H8.026C4.721 3.009 2.5 5.132 2.5 8.29v3.17a.3.3 0 0 0 .3.3h2.201a.75.75 0 0 1 0 1.5H2.8a.3.3 0 0 0-.3.3v3.164c0 3.16 2.221 5.284 5.526 5.284h7.948c3.305 0 5.526-2.123 5.526-5.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHorizontalMirrorBold;

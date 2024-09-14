import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLTESqaureBold = ({
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
      d="M17.544 11.25a.75.75 0 0 1 0 1.5H16.52v.78h1.466a.75.75 0 0 1 0 1.5H15.77a.75.75 0 0 1-.75-.75V9.73a.75.75 0 0 1 .75-.75h2.216a.75.75 0 0 1 0 1.5H16.52v.77zm-4.046-.77h-.768v3.79a.75.75 0 0 1-1.5 0v-3.79h-.765a.75.75 0 1 1 0-1.5h1.462c.018-.001.034-.01.053-.01.02 0 .035.009.053.01h1.465a.75.75 0 0 1 0 1.5m-4.266 4.55H7.396a.75.75 0 0 1-.75-.75V9.73a.75.75 0 0 1 1.5 0v3.8h1.086a.75.75 0 0 1 0 1.5m7.48-12.53H8.275c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLTESqaureBold;

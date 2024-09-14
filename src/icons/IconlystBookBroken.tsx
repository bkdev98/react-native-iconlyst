import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 8.716V20.48M18.011 6.163v3.176l-.547-.363a1.53 1.53 0 0 0-1.694 0l-.547.363V4.398"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 10.925V5.754c0-1.372 1.2-2.424 2.564-2.275 2.211.242 4.122 1.146 5.274 1.814.721.418 1.603.418 2.324 0 1.152-.668 3.063-1.572 5.274-1.814 1.364-.149 2.564.903 2.564 2.275v10.341c0 1.219-.96 2.192-2.175 2.28-2.376.17-4.444 1.142-5.663 1.849a2.31 2.31 0 0 1-2.324 0c-1.219-.707-3.287-1.679-5.663-1.85-1.216-.087-2.175-1.06-2.175-2.279v-.885"
    />
  </Svg>
);
export default IconlystBookBroken;

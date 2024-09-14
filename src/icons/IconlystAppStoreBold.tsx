import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppStoreBold = ({
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
      d="M16.736 15.12h-.643l.767 1.336a.75.75 0 1 1-1.301.746l-3.102-5.41a.75.75 0 0 1 1.3-.746l1.476 2.573h1.503a.75.75 0 0 1 0 1.5m-4.151 0H7.261a.75.75 0 0 1 0-1.5h1.505l2.37-4.129-.742-1.288a.75.75 0 0 1 1.301-.748l.305.53.304-.529a.75.75 0 0 1 1.301.746l-3.11 5.417h2.09a.75.75 0 0 1 0 1.5m-3.842 1.552-.304.53a.75.75 0 1 1-1.301-.746l.304-.53a.75.75 0 1 1 1.301.746M12 2.83c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAppStoreBold;

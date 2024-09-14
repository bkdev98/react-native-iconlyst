import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppStoreBulk = ({
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
      d="M12 2.32c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.093 14.61h.643a.75.75 0 0 0 0-1.5h-1.503l-1.476-2.573a.75.75 0 0 0-1.3.746l3.102 5.41a.75.75 0 1 0 1.301-.746z"
    />
    <Path
      fill={props.color}
      d="M7.261 14.61h5.324a.75.75 0 0 0 0-1.5h-2.09l3.11-5.417a.75.75 0 1 0-1.301-.746l-.304.53-.305-.53a.75.75 0 0 0-1.301.747l.742 1.288-2.37 4.128H7.261a.75.75 0 0 0 0 1.5M8.439 16.693l.304-.53a.75.75 0 1 0-1.301-.746l-.304.53a.749.749 0 1 0 1.301.746"
    />
  </Svg>
);
export default IconlystAppStoreBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEosOutline = ({
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
      d="M12.25 2.25a.75.75 0 0 1 .606.308l3.855 5.285q.075.105.113.228l2.63 8.844a.75.75 0 0 1-.335.858l-6.485 3.871a.75.75 0 0 1-.769 0L5.38 17.773a.75.75 0 0 1-.334-.858l2.63-8.844a.8.8 0 0 1 .114-.228l3.855-5.285a.75.75 0 0 1 .606-.308M9.077 8.623l-2.428 8.16 5.6 3.344 5.6-3.343-2.426-8.161-3.173-4.35z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.18 7.568a.75.75 0 0 1 .934.5l3.138 10.347 3.137-10.347a.75.75 0 0 1 1.435.435L12.97 21.218a.75.75 0 0 1-1.435 0L7.679 8.503a.75.75 0 0 1 .5-.935"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEosOutline;

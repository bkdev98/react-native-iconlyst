import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkTwoTone = ({
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
      d="M8.283 3h8.435C19.666 3 21.5 5.081 21.5 8.027v7.947c0 2.945-1.834 5.026-4.783 5.026H8.283C5.335 21 3.5 18.919 3.5 15.974V8.027C3.5 5.081 5.344 3 8.283 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.412 3v11.392c0 .402.434.654.783.456l3.32-1.884 3.289 1.88c.35.2.785-.053.785-.455l-.002-11.292"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBookmarkTwoTone;

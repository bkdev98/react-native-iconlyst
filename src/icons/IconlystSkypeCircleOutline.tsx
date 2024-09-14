import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkypeCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.399 9.182a.98.98 0 0 0-.399.806c0 .563.368.964.763 1.037l2.742.499c1.179.213 1.972 1.285 1.994 2.46l.001.028v.052A2.48 2.48 0 0 1 14.523 16c-.628.49-1.495.737-2.524.737-1.498 0-2.982-.756-3.394-2.064a.75.75 0 1 1 1.431-.45c.143.452.841 1.014 1.963 1.014.804 0 1.312-.194 1.601-.42.27-.21.396-.48.399-.793-.005-.558-.371-.954-.762-1.024l-2.744-.5C9.3 12.283 8.5 11.184 8.5 9.988c0-.774.333-1.487.976-1.989.627-.49 1.495-.737 2.524-.737 1.499 0 2.981.757 3.393 2.063a.75.75 0 0 1-1.43.452C13.82 9.324 13.12 8.762 12 8.762c-.804 0-1.312.194-1.601.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSkypeCircleOutline;

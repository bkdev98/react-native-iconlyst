import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPantShortBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.987 17.5a1.8 1.8 0 0 0 1.793 1.637h2.267a1.8 1.8 0 0 0 1.722-1.274l1.751-5.72a.501.501 0 0 1 .96 0l1.75 5.72a1.8 1.8 0 0 0 1.722 1.274h2.267a1.8 1.8 0 0 0 1.793-1.636l.18-1.964"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.502 12.167.49-5.333A1.8 1.8 0 0 0 19.2 4.87H4.801a1.8 1.8 0 0 0-1.793 1.965l.688 7.494"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.565 4.863v.107a6.1 6.1 0 0 1-2.039 4.567 6.1 6.1 0 0 1-3.128 1.485M15.434 4.863v.107a6.12 6.12 0 0 0 5.176 6.052"
    />
  </Svg>
);
export default IconlystPantShortBroken;

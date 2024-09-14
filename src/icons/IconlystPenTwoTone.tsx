import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenTwoTone = ({
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
      d="M21.5 12a9 9 0 0 0-9-9 9 9 0 1 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.638 16.18-.99.166a1.11 1.11 0 0 1-1.286-1.213l.11-1.022c.054-.493.26-.956.59-1.327l4.316-4.71c.51-.55 1.37-.584 1.92-.073l.911.842c.55.51.584 1.37.074 1.921l-4.267 4.658a2.38 2.38 0 0 1-1.378.759"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPenTwoTone;

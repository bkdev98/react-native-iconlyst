import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdsTwoTone = ({
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
      strokeWidth={1.5}
      d="M9.492 5.445 3.387 16.02a2.887 2.887 0 0 0 5.001 2.887l3.53-6.113"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.506 8.331a2.887 2.887 0 1 1 5.001-2.887l6.105 10.574a2.887 2.887 0 0 1-5 2.888zM8.388 18.906a2.887 2.887 0 1 1-5-2.888 2.887 2.887 0 0 1 5 2.887Z"
    />
  </Svg>
);
export default IconlystGoogleAdsTwoTone;

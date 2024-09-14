import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike4Broken = ({
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
      d="M15.05 20.402h1.35c1.05 0 1.575 0 2.015-.18a2.43 2.43 0 0 0 1.021-.783c.288-.378.424-.884.698-1.898l.482-1.786c.515-1.913.774-2.87.558-3.626a2.84 2.84 0 0 0-1.267-1.654c-.675-.405-1.666-.405-3.648-.405h-1.82c-.34 0-.405-.132-.309-.43 1.315-4.086.64-5.713-.664-5.981-.497-.103-.704-.098-1.098.286-1.276 1.504-3.43 3.858-4.605 5.132-.303.329-.455.494-.563.68q-.15.258-.215.55c-.047.21-.047.432-.047.878v5.454c0 1.303 0 1.954.25 2.454.23.459.6.83 1.06 1.058.498.25 1.15.25 2.453.25M3.25 20.006v-9.049"
    />
  </Svg>
);
export default IconlystThumbLike4Broken;

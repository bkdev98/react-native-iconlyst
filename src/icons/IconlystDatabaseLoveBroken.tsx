import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseLoveBroken = ({
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
      d="M11.03 3.01c-4.046 0-7.327 1.323-7.327 2.956 0 1.632 3.28 2.955 7.327 2.955s7.328-1.323 7.328-2.955c0-1.143-1.607-2.134-3.959-2.626"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.703 15.606v2.052s0 2.609 6.204 2.901M18.357 10.826V5.941M9.907 14.702C3.703 14.409 3.703 11.8 3.703 11.8V5.939M16.978 20.914s-2.553-1.39-3.149-3.244c-.37-1.157.062-2.478 1.276-2.869a2.07 2.07 0 0 1 1.873.316 2.09 2.09 0 0 1 1.871-.316c1.213.39 1.65 1.712 1.28 2.87-.195.617-.616 1.187-1.09 1.671"
    />
  </Svg>
);
export default IconlystDatabaseLoveBroken;

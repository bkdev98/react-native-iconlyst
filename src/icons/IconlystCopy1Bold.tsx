import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy1Bold = ({
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
      d="M15.21 6.1c.166 0 .3-.134.29-.3-.123-1.984-1.478-3.3-3.44-3.3H6.87c-2.07 0-3.45 1.45-3.45 3.6v6.69c0 2.009 1.327 3.455 3.27 3.59.165.011.3-.124.3-.29v-4.88c0-2.95 2.08-5.1 4.95-5.1z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.135 7.613H11.94c-2.061 0-3.446 1.445-3.446 3.596v6.695c0 2.15 1.385 3.596 3.446 3.596h5.194c2.062 0 3.447-1.446 3.447-3.596V11.21c0-2.15-1.385-3.596-3.446-3.596"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopy1Bold;

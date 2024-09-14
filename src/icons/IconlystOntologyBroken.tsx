import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOntologyBroken = ({
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
      d="M11.69 20.993c2.088.087 4.089-.696 5.568-2L3.775 5.335v7.22c0 3.153 1.691 5.969 4.22 7.414M14.483 11.835l6.741 6.829.002-7.22c0-4.523-3.48-8.35-7.916-8.437-2.088-.088-4.089.695-5.568 2l3.37 3.414"
    />
  </Svg>
);
export default IconlystOntologyBroken;

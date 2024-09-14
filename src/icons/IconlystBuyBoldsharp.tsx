import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.854 19.279a1.275 1.275 0 0 0 0 2.549 1.275 1.275 0 0 0 0-2.55M18.721 19.279a1.275 1.275 0 1 0 .002 2.55 1.275 1.275 0 0 0-.002-2.55M13.825 11.712h4.17v-1.5h-4.17zm-7.43-5.41-.3-3.06h-3.9v1.5h2.54l1.28 12.7h14.82l1.47-11.14z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuyBoldsharp;

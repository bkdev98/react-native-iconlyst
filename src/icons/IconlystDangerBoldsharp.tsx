import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerBoldsharp = ({
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
      d="M13.016 18.088h-1.5l-.01-1.5h1.51zm-1.502-2.787h1.5v-4.3h-1.5zm1.1-11.557h-.73l-9.478 16.63.656.951h18.319l.712-.938z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDangerBoldsharp;

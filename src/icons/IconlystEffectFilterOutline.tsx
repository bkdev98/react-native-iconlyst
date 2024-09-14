import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEffectFilterOutline = ({
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
      d="M12.299 4.695a5.113 5.113 0 1 0 0 10.227 5.113 5.113 0 0 0 0-10.227M5.686 9.81a6.613 6.613 0 1 1 13.226 0 6.613 6.613 0 0 1-13.226 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.299 10.695a5.113 5.113 0 1 0 0 10.227 5.113 5.113 0 0 0 0-10.227M2.686 15.81a6.613 6.613 0 1 1 13.226 0 6.613 6.613 0 0 1-13.226 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.299 10.695a5.113 5.113 0 1 0 0 10.227 5.113 5.113 0 0 0 0-10.227M8.686 15.81a6.613 6.613 0 1 1 13.226 0 6.613 6.613 0 0 1-13.226 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEffectFilterOutline;

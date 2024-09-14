import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatCircleLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.3a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.072 15.912c-.42-.298-.877-.51-1.347-.698-.55-.22-1-.703-1-1.295v-.81c0-2.679-1.687-4.65-3.954-5.588v1.774c-1.09 0-2.016.285-2.475 1.4-.264.643-.7.985-1.335.985-.173.7.38 2.17 1.603 2.17.921 0 1.714.774 1.522 1.863q-.13.734-.216 1.368M10.97 11.592v.007"
    />
  </Svg>
);
export default IconlystCatCircleLight;

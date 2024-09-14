import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordEditOutline = ({
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
      d="M3.99 4.345c.985-1.056 2.387-1.648 4.042-1.648h8.435c1.66 0 3.062.591 4.046 1.648C21.49 5.396 22 6.847 22 8.475v2.237a.75.75 0 0 1-1.5 0V8.474c0-1.317-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.944 1.17C4.41 6.095 4 7.158 4 8.475v4.055c0 1.318.409 2.38 1.084 3.107.67.72 1.66 1.17 2.948 1.17h3.892a.75.75 0 0 1 0 1.5H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.051-1.487-2.501-1.487-4.129V8.474c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.424 14.024 15.9 17.871a1.2 1.2 0 0 0-.294.665m0 0-.091.835a.157.157 0 0 0 .183.172l.81-.135a1.2 1.2 0 0 0 .692-.381l.006-.007 3.491-3.811.003-.003a.36.36 0 0 0-.019-.51l-.745-.691a.36.36 0 0 0-.512.02m1.53-1.12a1.86 1.86 0 0 0-2.63.1l-3.534 3.857-.006.007c-.376.42-.609.946-.67 1.504l-.09.836a1.657 1.657 0 0 0 1.921 1.813l.81-.135a2.7 2.7 0 0 0 1.56-.857l3.487-3.806a1.86 1.86 0 0 0-.102-2.63z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.495 13.897a.75.75 0 0 1 1.06 0l2.292 2.292a.75.75 0 1 1-1.061 1.06l-2.291-2.291a.75.75 0 0 1 0-1.06M11.24 10.443a1.01 1.01 0 1 1 2.021-.002 1.01 1.01 0 0 1-2.02.002M15.145 10.443a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.023 0M7.334 10.443a1.011 1.011 0 1 1 2.022 0 1.011 1.011 0 0 1-2.022 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordEditOutline;

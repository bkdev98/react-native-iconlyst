import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallMissedBulksharp = ({
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
      d="M16.885 14.455 13.94 16.15A9.3 9.3 0 0 1 10.558 14a8.2 8.2 0 0 1-1.976-3.195l1.7-2.95-3.699-5.081-.39.23c-1.582.928-2.743 2.089-3.652 3.652l-.058.16C1.97 9.558 3.54 13.602 6.39 16.88c3.09 3.552 7.101 5.554 11.084 5.554q.27 0 .54-.012l.12-.005.102-.058c1.602-.898 2.766-2.062 3.663-3.664l.215-.385z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.036 11.171 2.426-2.426 2.427 2.426 1.06-1.06-2.426-2.426L21.95 5.26 20.89 4.2l-2.427 2.425-2.426-2.426-1.06 1.061 2.426 2.426-2.427 2.425z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallMissedBulksharp;

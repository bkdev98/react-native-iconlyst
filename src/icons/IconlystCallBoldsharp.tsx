import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallBoldsharp = ({
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
      d="M16.885 14.455 13.94 16.15A9.3 9.3 0 0 1 10.558 14a8.2 8.2 0 0 1-1.976-3.195l1.7-2.951-3.698-5.08-.39.23c-1.582.928-2.744 2.088-3.653 3.652l-.058.159c-.514 2.743 1.055 6.787 3.904 10.063 3.091 3.554 7.102 5.556 11.086 5.556q.27 0 .54-.012l.12-.005.102-.058c1.602-.898 2.766-2.062 3.663-3.664l.215-.385z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallBoldsharp;

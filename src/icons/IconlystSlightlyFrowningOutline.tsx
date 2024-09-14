import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlightlyFrowningOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 14.594c-.886 0-1.708.438-2.285 1.189a.75.75 0 1 1-1.19-.915c.826-1.074 2.069-1.774 3.475-1.774s2.649.7 3.475 1.774a.75.75 0 0 1-1.19.915c-.576-.751-1.399-1.19-2.285-1.19M7.91 9.651a.75.75 0 0 1 1.051.138c.14.182.32.267.493.267a.63.63 0 0 0 .493-.267.75.75 0 1 1 1.19.914c-.39.507-.99.853-1.683.853s-1.293-.346-1.682-.853a.75.75 0 0 1 .137-1.052M13.379 9.651a.75.75 0 0 1 1.052.138c.14.182.32.267.493.267a.63.63 0 0 0 .493-.267.75.75 0 0 1 1.19.914c-.39.507-.99.853-1.683.853s-1.293-.346-1.683-.853a.75.75 0 0 1 .138-1.052"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlightlyFrowningOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRemoveBulk = ({
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
      d="M4.595 4.24A.75.75 0 1 0 3.534 5.3l4.488 4.487c-.794.373-1.588.746-2.37 1.133-.874.426-1.361.997-1.49 1.746-.074.43-.088.873-.101 1.301q-.008.287-.023.584c-.008.136.076.271.17.371s.26.157.398.158c1.793.01 3.529.018 5.286.035l.214 2.327-1.661 1.372a.5.5 0 0 0-.182.385V21a.5.5 0 0 0 .62.485l3.484-.87 3.48.87A.499.499 0 0 0 16.47 21v-1.8a.5.5 0 0 0-.184-.388l-1.684-1.37.095-.982 4.37 4.37a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.663 13.98c-.014-.432-.027-.879-.102-1.314-.128-.749-.615-1.32-1.486-1.744A144 144 0 0 0 14.96 8.96c-.146-.062-.15-.064-.147-.252.017-1.021.028-2.108-.028-3.193-.075-1.498-.93-3.015-2.417-3.015-1.494 0-2.352 1.517-2.429 3.015a44 44 0 0 0-.045 1.537.5.5 0 0 0 .154.368l7.832 7.53c.093.09.217.14.346.14.824 0 1.345 0 1.97-.01a.503.503 0 0 0 .49-.529q-.014-.29-.022-.571"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneRemoveBulk;

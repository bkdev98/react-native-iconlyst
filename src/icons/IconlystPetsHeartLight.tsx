import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsHeartLight = ({
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
      d="M20.645 12.215c1.021-3.186-.166-6.841-3.503-7.916a5.7 5.7 0 0 0-2.674-.189c-.893.152-1.738.769-2.464 1.314-.73-.54-1.574-1.154-2.466-1.305a5.74 5.74 0 0 0-2.672.18c-3.337 1.085-4.534 4.73-3.512 7.916 1.576 5.053 8.65 8.356 8.65 8.356s6.967-3.245 8.64-8.356"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 8.5v-.05m-.006-.145a.215.215 0 1 0 .003.428.215.215 0 0 0-.003-.428M15.109 10.08v-.05m-.006-.145a.215.215 0 1 0 .003.428.215.215 0 0 0-.003-.428M8.901 10.08v-.05m-.006-.145a.215.215 0 1 0 .003.428.215.215 0 0 0-.003-.428"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.029 14.848c1.303 0 2.957 1.13 2.933-.609-.01-1.304-1.368-2.528-2.933-2.529-1.575 0-3.139 1.33-2.922 2.685.24 1.572 1.767.453 2.922.453Z"
    />
  </Svg>
);
export default IconlystPetsHeartLight;

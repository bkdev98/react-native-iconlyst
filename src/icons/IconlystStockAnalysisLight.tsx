import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStockAnalysisLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 3.119v2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.515 5.119H4.984c-.82 0-1.484.662-1.484 1.479V9.64a1.48 1.48 0 0 0 1.484 1.478h1.531A1.48 1.48 0 0 0 8 9.64V6.598c0-.817-.665-1.48-1.485-1.48"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 11.119v2M12.5 6.119v2.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.265 8.619h-1.531c-.82 0-1.484.662-1.484 1.479v7.042a1.48 1.48 0 0 0 1.484 1.479h1.531a1.48 1.48 0 0 0 1.485-1.479v-7.042c0-.817-.665-1.48-1.485-1.48"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 18.619v2.5M19.25 5.119v2.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.015 7.619h-1.531c-.82 0-1.484.662-1.484 1.479v.043a1.48 1.48 0 0 0 1.484 1.478h1.531A1.48 1.48 0 0 0 21.5 9.14v-.043c0-.817-.665-1.48-1.485-1.48"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 10.619v2.5"
    />
  </Svg>
);
export default IconlystStockAnalysisLight;

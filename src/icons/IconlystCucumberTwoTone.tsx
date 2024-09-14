import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCucumberTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.998 10.996c-.002 5.522-4.478 9.998-10 10v-2.25a8.002 8.002 0 1 1 10-7.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.654 8.111 10.2 7.14M13.345 13.881l.453.973M9.113 12.34l-.972.453M10.91 13.984l-.367 1.011M13.087 8.007l.368-1.01M15.999 12.454l-1.01-.368M9.01 9.907l-1.011-.368"
    />
  </Svg>
);
export default IconlystCucumberTwoTone;

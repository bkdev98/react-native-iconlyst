import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVergeBold = ({
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
      d="M12.813 8.595h-1.625L12 9.82z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.053 9.722-4.422 6.85a.75.75 0 0 1-1.26 0l-4.422-6.85a.749.749 0 1 1 1.259-.814L12 14.782l3.792-5.874a.75.75 0 0 1 1.26.814M9.128 7.49a.75.75 0 0 1 .66-.396h4.423a.75.75 0 0 1 .625 1.165l-2.21 3.33a.75.75 0 0 1-1.25 0L9.166 8.26a.75.75 0 0 1-.037-.77m7.089-4.986H7.782c-3.16 0-5.282 2.223-5.282 5.53v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVergeBold;

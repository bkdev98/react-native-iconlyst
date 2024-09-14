import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionMarkDashBulk = ({
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
      d="M11.736 17.58a1 1 0 0 1-1-1c0-.552.448-1.021 1-1.021s1 .425 1 .978v.044a1 1 0 0 1-1 1M11.734 14.894a1 1 0 0 1-1-.987c-.019-1.488 1.17-2.15 1.878-2.547l.146-.08c.83-.459.83-1.046.83-1.24 0-.875-.713-1.587-1.588-1.587a1.57 1.57 0 0 0-1.588 1.587 1 1 0 1 1-2 0A3.59 3.59 0 0 1 12 6.453a3.59 3.59 0 0 1 3.587 3.587c0 1.265-.658 2.324-1.852 2.983l-.147.083c-.633.353-.857.523-.854.775a1 1 0 0 1-.986 1.013z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M13.981 22h-3.963a1 1 0 1 1 0-2h3.963a1 1 0 1 1 0 2M13.98 4h-3.963a1 1 0 1 1 0-2h3.964a1 1 0 1 1 0 2M3 14.981a1 1 0 0 1-1-1v-3.96a1 1 0 1 1 2 0v3.96a1 1 0 0 1-1 1M21 14.981a1 1 0 0 1-1-1v-3.96a1 1 0 1 1 2 0v3.96a1 1 0 0 1-1 1M7.076 21.98a1 1 0 0 1-.117-.006c-2.654-.31-4.54-2.195-4.922-4.922a1 1 0 0 1 1.98-.276c.258 1.835 1.414 3.006 3.173 3.212a1 1 0 0 1-.114 1.992M16.89 21.98a1 1 0 0 1-.116-1.992c1.754-.206 2.907-1.376 3.163-3.212a.996.996 0 0 1 1.13-.852 1 1 0 0 1 .851 1.128c-.382 2.727-2.263 4.613-4.91 4.922a1 1 0 0 1-.119.006M3.029 8.096a1 1 0 0 1-.992-1.139c.382-2.731 2.268-4.62 4.922-4.93a1 1 0 0 1 .23 1.987c-1.757.205-2.913 1.379-3.171 3.22a1 1 0 0 1-.99.862M20.926 8.096a1 1 0 0 1-.989-.861c-.258-1.843-1.41-3.017-3.162-3.221a1 1 0 0 1 .231-1.986c2.648.308 4.53 2.197 4.912 4.929a1 1 0 0 1-.992 1.139" />
    </G>
  </Svg>
);
export default IconlystQuestionMarkDashBulk;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadPlayVideoBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.84 18.279a1.967 1.967 0 1 0 3.934 0 1.967 1.967 0 0 0-3.933 0M16.48 5.638a1.967 1.967 0 1 0 3.933 0 1.967 1.967 0 0 0-3.933 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.089 3c1.777 0 3.435.518 4.825 1.407M3.084 11.987a8.99 8.99 0 0 1 4.73-7.913M21.084 11.996a8.99 8.99 0 0 1-3.06 6.768M7.263 19.594A8.93 8.93 0 0 0 12.089 21c1.203 0 2.35-.236 3.399-.665"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.752 13.058a9.4 9.4 0 0 1-2.742 1.72c-.885.348-1.626-.087-1.734-.958a17 17 0 0 1 0-3.666c.118-.907.935-1.292 1.734-.956a9.1 9.1 0 0 1 2.742 1.721c.682.618.699 1.497 0 2.139"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadPlayVideoBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggBreakOutline = ({
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
      d="m19.968 13.824.496-.013v.01c.035 4.01-3.355 7.62-7.659 7.91-4.3.29-8.165-2.84-8.698-7.1-.261-2.07.22-4 .95-5.81.791-1.95 1.888-3.79 3.64-5.19 1.121-.9 2.331-1.39 3.586-1.38s2.46.51 3.572 1.43c1.986 1.63 3.135 3.78 3.921 6.06.417 1.21.661 2.45.688 4.07l-.74.014zm-1.004.017c-.024-1.47-.241-2.56-.606-3.61-.737-2.14-1.763-4.01-3.454-5.39v-.01c-.91-.74-1.793-1.07-2.63-1.08-.637-.008-1.304.182-1.991.595l2.142 3.855c.15.27.118.6-.08.84l-2 2.397 2.034 2.843c.241.34.163.81-.174 1.05a.756.756 0 0 1-1.046-.17L8.79 11.84a.76.76 0 0 1 .034-.92l2.038-2.444-1.775-3.202c-1.18 1.118-1.998 2.53-2.64 4.116-.68 1.67-1.068 3.34-.852 5.06.432 3.45 3.585 6.02 7.11 5.78 3.553-.24 6.281-3.224 6.26-6.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEggBreakOutline;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBoxBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.137 2.953a.288.288 0 0 0-.33-.29C4.2 3.08 2.5 5.144 2.5 8.094v7.95c0 2.945 1.7 5.005 4.307 5.419a.288.288 0 0 0 .33-.29z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.563h-7.28a.3.3 0 0 0-.3.3v18.4a.3.3 0 0 0 .3.3h7.279c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.242 15.643h.058a2.165 2.165 0 0 0 2.164-2.16c0-1.192-.971-2.16-2.164-2.16h-1.615a.67.67 0 0 1-.664-.67c0-.364.298-.66.664-.66h2.625a.75.75 0 0 0 0-1.5h-1.068v-.44a.75.75 0 0 0-1.5 0v.44h-.057a2.164 2.164 0 1 0 0 4.33H15.3c.366 0 .664.296.664.66s-.298.66-.664.66h-2.625a.75.75 0 0 0 0 1.5h1.067v.44a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystDollarBoxBulk;

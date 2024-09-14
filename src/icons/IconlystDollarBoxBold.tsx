import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBoxBold = ({
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
      d="M7.137 2.953a.288.288 0 0 0-.33-.29C4.2 3.08 2.5 5.144 2.5 8.094v7.95c0 2.945 1.7 5.005 4.307 5.418a.288.288 0 0 0 .33-.289zM15.3 15.643h-.058v.44a.75.75 0 0 1-1.5 0v-.44h-1.067a.75.75 0 0 1 0-1.5H15.3a.663.663 0 0 0 .664-.66.663.663 0 0 0-.664-.66h-1.615a2.164 2.164 0 1 1 0-4.33h.057v-.44a.75.75 0 0 1 1.5 0v.44h1.068a.75.75 0 0 1 0 1.5h-2.625a.663.663 0 0 0-.664.66c0 .368.298.67.664.67H15.3c1.193 0 2.164.967 2.164 2.16 0 1.19-.971 2.16-2.164 2.16m.917-13.08h-7.28a.3.3 0 0 0-.3.3v18.4a.3.3 0 0 0 .3.3h7.279c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarBoxBold;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTranslateLanguageBold = ({
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
      d="m21.89 19.934-4.76-9.329a1 1 0 0 0-1.781 0l-2.766 5.418a13 13 0 0 1-2.378-1.915 14 14 0 0 0 3.07-4.414c.498-1.13.862-2.416 1.004-3.406h2.228a1 1 0 1 0 0-2h-6.103V3.61a1 1 0 1 0-2 0v.68H3a1 1 0 0 0 0 2h9.24a12.06 12.06 0 0 1-3.337 6.277c-.598-.85-1.042-1.74-1.244-2.598a1 1 0 0 0-1.947.461c.264 1.114.86 2.295 1.666 3.418-1.103.782-2.442 1.471-4.088 1.976a1 1 0 1 0 .586 1.912c1.93-.592 3.499-1.412 4.783-2.34.894.942 1.92 1.784 3.002 2.433l-1.074 2.105a1 1 0 0 0 1.78.91l1.093-2.139c.808.297 1.62.464 2.406.464q.181 0 .362-.01a1 1 0 0 0 .93-1.067c-.037-.55-.502-.944-1.065-.93-.525.034-1.106-.068-1.708-.269l1.854-3.633 3.87 7.583a.998.998 0 1 0 1.782-.908"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTranslateLanguageBold;

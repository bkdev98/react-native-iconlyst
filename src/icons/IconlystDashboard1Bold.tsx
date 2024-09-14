import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard1Bold = ({
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
      d="M12.978 11.876a1.222 1.222 0 0 0 0 2.442 1.222 1.222 0 0 0 0-2.442"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.233 20.406h-10.5c-.551 0-1.08-.21-1.446-.574a9.42 9.42 0 0 1-2.806-6.733 9.43 9.43 0 0 1 2.887-6.825 9.43 9.43 0 0 1 6.905-2.675c5.107.157 9.323 4.608 9.205 9.723a9.44 9.44 0 0 1-2.805 6.513 2.02 2.02 0 0 1-1.44.57m-2.534-7.31c0-.473-.122-.918-.335-1.307l1.988-1.988a.749.749 0 1 0-1.06-1.06l-1.983 1.983a2.7 2.7 0 0 0-1.33-.348c-1.5 0-2.72 1.22-2.72 2.72s1.22 2.722 2.72 2.722 2.72-1.221 2.72-2.721"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard1Bold;

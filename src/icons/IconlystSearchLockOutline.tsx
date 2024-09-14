import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLockOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.888 4.033A7.673 7.673 0 1 0 17.02 17.41a.8.8 0 0 1 .178-.166 7.673 7.673 0 0 0-5.31-13.21m-9.173 7.673a9.173 9.173 0 1 1 15.963 6.166l2.887 2.88a.75.75 0 0 1-1.06 1.062l-2.923-2.917a9.13 9.13 0 0 1-5.694 1.981 9.173 9.173 0 0 1-9.173-9.172"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.293 11.213a.795.795 0 0 0-.795.795v1.747c0 .439.356.795.795.795h3.113a.795.795 0 0 0 .795-.795v-1.747a.795.795 0 0 0-.795-.795zm-2.295.795a2.295 2.295 0 0 1 2.295-2.295h3.113a2.295 2.295 0 0 1 2.295 2.295v1.747a2.295 2.295 0 0 1-2.295 2.295h-3.113a2.295 2.295 0 0 1-2.295-2.295z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.817 6.756a2.61 2.61 0 0 1 2.64 2.574v1.16a.75.75 0 0 1-1.5 0V9.345a1.109 1.109 0 0 0-2.215-.005v1.15a.75.75 0 0 1-1.5 0V9.32a2.61 2.61 0 0 1 2.575-2.564"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLockOutline;

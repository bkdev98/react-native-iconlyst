import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenMouthOutline = ({
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
      d="M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.719 15.03a2.524 2.524 0 0 1 2.522-2.522 2.524 2.524 0 0 1 2.521 2.522 2.524 2.524 0 0 1-2.521 2.521 2.524 2.524 0 0 1-2.522-2.521m2.522-1.022c-.564 0-1.022.46-1.022 1.022 0 .561.458 1.021 1.022 1.021.563 0 1.021-.46 1.021-1.021 0-.562-.458-1.022-1.021-1.022"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.163 11a.976.976 0 0 1-.002-1.95.975.975 0 1 1 0 1.95zM15.663 11a.976.976 0 0 1-.002-1.95.975.975 0 0 1 0 1.95z"
    />
  </Svg>
);
export default IconlystOpenMouthOutline;

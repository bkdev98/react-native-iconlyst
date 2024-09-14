import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasPartyBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.98 10.802c2.513-2.693 5.323-4.156 6.275-3.267.952.89-.314 3.792-2.827 6.484s-5.323 4.156-6.275 3.266c-.592-.552-.327-1.884.563-3.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.509 17.501 11.809 3.107a.743.743 0 0 0 .896-.942l-.948-2.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.572 19.84c.292-1.459.181-2.992-.092-4.354M13.766 14.677c.328 1.274.544 2.767.411 4.237M2.905 9.835l.112.186a1.693 1.693 0 0 0 2.325.571l.175-.106a1.49 1.49 0 0 1 2.044.502M13.206 11.594a1.91 1.91 0 0 0-.066-2.7l-.158-.15a1.693 1.693 0 0 1-.058-2.393l.14-.148a1.49 1.49 0 0 0-.051-2.104M9.238 7.35c.181-.699-.048-1.621-.543-2.23M4.32 5.687l-.407-.39M4.396 14.677l-.56.065M17.42 7.749l1.897 5.958"
    />
  </Svg>
);
export default IconlystChristmasPartyBroken;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUSDCOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.25 10.5a2.25 2.25 0 0 1 2.25-2.25H13c.6 0 1.129.289 1.447.501a4.3 4.3 0 0 1 .566.452l.01.01.005.004.001.001.001.001-.51.511.51-.51a.75.75 0 0 1-1.06 1.06l.53-.53-.53.53v.001l.002.001-.002-.002-.015-.014-.072-.064a3 3 0 0 0-.268-.203c-.244-.163-.465-.249-.615-.249h-1.5a.75.75 0 0 0 0 1.5H13a2.25 2.25 0 0 1 0 4.5h-1.5c-.6 0-1.129-.289-1.447-.501a4.3 4.3 0 0 1-.566-.452l-.01-.01-.005-.004-.001-.002H9.47l.53-.531-.53.53a.75.75 0 0 1 1.058-1.062l.002.001.015.015.072.064c.065.056.158.13.268.203.244.163.465.249.615.249H13a.75.75 0 0 0 0-1.5h-1.5a2.25 2.25 0 0 1-2.25-2.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 6.75a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .75-.75m0 7.5A.75.75 0 0 1 13 15v1.5a.75.75 0 0 1-1.5 0V15a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.477 6.002a.75.75 0 0 1-.54.912C8.643 7.501 6.987 9.634 6.987 12s1.656 4.5 3.948 5.086a.75.75 0 0 1-.372 1.453C7.609 17.782 5.488 15.051 5.488 12s2.12-5.782 5.076-6.539a.75.75 0 0 1 .913.54M13.024 6.002a.75.75 0 0 1 .912-.54c2.956.756 5.076 3.487 5.076 6.538s-2.12 5.782-5.076 6.54a.75.75 0 1 1-.372-1.454c2.292-.587 3.948-2.72 3.948-5.086s-1.656-4.499-3.948-5.086a.75.75 0 0 1-.54-.912"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUSDCOutline;

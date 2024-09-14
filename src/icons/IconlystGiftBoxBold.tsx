import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftBoxBold = ({
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
      d="M14.772 9.568c-1.047 0-1.91.984-2.01 2.24 1.372-.209 2.453-.959 2.453-1.797a.444.444 0 0 0-.443-.443M8.055 11.866c-.486-.528-.77-1.163-.77-1.854 0-1.072.872-1.943 1.944-1.943.756 0 1.446.288 2.02.749V3.416a.3.3 0 0 0-.3-.3H7.782c-3.159 0-5.282 2.22-5.282 5.526v2.924a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 8.82c.574-.463 1.265-.752 2.022-.752 1.071 0 1.943.871 1.943 1.943 0 .691-.284 1.326-.77 1.854H21.2a.3.3 0 0 0 .3-.3V8.642c0-3.306-2.123-5.527-5.283-5.527H13.05a.3.3 0 0 0-.3.3zM12.762 13.423c.1 1.256.963 2.24 2.01 2.24a.443.443 0 0 0 .443-.442c0-.84-1.08-1.59-2.453-1.798M9.23 9.568a.444.444 0 0 0-.445.443c0 .838 1.081 1.588 2.454 1.797-.1-1.256-.963-2.24-2.01-2.24"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.946 13.366c.485.529.77 1.162.77 1.854a1.945 1.945 0 0 1-1.943 1.943c-.757 0-1.45-.29-2.023-.751v5.404a.3.3 0 0 0 .3.3h3.167c3.16 0 5.284-2.221 5.284-5.526v-2.924a.3.3 0 0 0-.3-.3zM11.25 16.414c-.575.461-1.265.75-2.02.75a1.946 1.946 0 0 1-1.945-1.944c0-.69.284-1.326.77-1.855H2.8a.3.3 0 0 0-.3.3v2.924c0 3.306 2.123 5.526 5.282 5.526h3.167a.3.3 0 0 0 .3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.785 15.22c0 .245.2.443.444.443 1.047 0 1.91-.984 2.01-2.24-1.373.209-2.454.96-2.454 1.798"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftBoxBold;

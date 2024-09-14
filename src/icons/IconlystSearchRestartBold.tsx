import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRestartBold = ({
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
      d="M14.264 11.719c-.41 0-.75-.34-.75-.75 0-1.38-1.26-2.46-2.61-2.27l.16.08c.36.19.51.64.32 1.01-.18.37-.64.51-1.01.33l-1.49-.76a.762.762 0 0 1-.15-1.24 3.786 3.786 0 0 1 6.28 2.85c0 .41-.33.75-.75.75m-.53 2.08c-.69.61-1.58.95-2.5.95-2.09 0-3.79-1.7-3.79-3.78 0-.42.34-.75.75-.75.42 0 .75.33.75.75 0 1.26 1.03 2.28 2.29 2.28q.165 0 .33-.03l-.16-.07a.746.746 0 0 1-.32-1.01c.18-.37.64-.52 1-.33l1.5.76c.22.11.37.33.4.57.03.25-.06.5-.25.66m-2.6-11.3a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.992 19.793l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchRestartBold;

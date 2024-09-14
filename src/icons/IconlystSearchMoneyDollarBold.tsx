import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMoneyDollarBold = ({
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
      d="M12.083 14.138v.3c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-.3h-.87a.749.749 0 1 1 0-1.5h2.33c.27 0 .51-.23.51-.51 0-.27-.23-.5-.51-.5h-1.43c-1.11 0-2.01-.9-2.01-2.01 0-1.09.88-1.98 1.98-2v-.31a.749.749 0 1 1 1.5 0v.31h.86a.749.749 0 1 1 0 1.5h-2.33a.51.51 0 0 0-.51.5c0 .29.23.51.51.51h1.43c1.11 0 2.01.9 2.01 2s-.88 1.99-1.97 2.01m-.95-11.64a8.42 8.42 0 1 0 .001 16.84 8.42 8.42 0 0 0 0-16.84M20.993 19.794l-1.984-1.979a1.001 1.001 0 0 0-1.412 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M11.333 12.628c-.02 0-.05 0-.07.01h.15c-.03-.01-.05-.01-.08-.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMoneyDollarBold;
